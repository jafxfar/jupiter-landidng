import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { chromium } from "playwright";
import {
  POSTER_SIZES,
  buildPosterHtml,
  type PosterVariant,
} from "./layout";
import type { ProjectDetail } from "../../data/projects";

const VARIANTS: PosterVariant[] = ["cover", "banner", "hero"];

export async function renderPosters(options: {
  project: ProjectDetail;
  shotPath: string;
  outDir: string;
}): Promise<Record<PosterVariant, string>> {
  const { project, shotPath, outDir } = options;
  mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const outputs = {} as Record<PosterVariant, string>;

  try {
    for (const variant of VARIANTS) {
      const { width, height } = POSTER_SIZES[variant];
      const html = buildPosterHtml(variant, project, shotPath);
      const page = await browser.newPage({
        viewport: { width, height },
        deviceScaleFactor: 1,
      });

      await page.setContent(html, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
      });
      await new Promise((r) => setTimeout(r, 200));

      const buffer = await page.screenshot({
        type: "png",
        clip: { x: 0, y: 0, width, height },
      });
      await page.close();

      const filePath = join(outDir, `${variant}.png`);
      writeFileSync(filePath, buffer);
      outputs[variant] = filePath;
    }
  } finally {
    await browser.close();
  }

  return outputs;
}

export function publicAssetPath(absoluteOutFile: string, cwd: string): string {
  const normalized = absoluteOutFile.replaceAll("\\", "/");
  const publicRoot = join(cwd, "public").replaceAll("\\", "/");
  if (normalized.startsWith(publicRoot)) {
    return normalized.slice(publicRoot.length);
  }
  return `/${dirname(normalized).split("/").pop()}/${normalized.split("/").pop()}`;
}
