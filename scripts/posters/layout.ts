import { readFileSync } from "node:fs";
import { extname } from "node:path";
import type { ProjectDetail } from "../../data/projects";

export type PosterVariant = "cover" | "banner" | "hero";

export const POSTER_SIZES: Record<
  PosterVariant,
  { width: number; height: number }
> = {
  cover: { width: 1440, height: 2560 },
  banner: { width: 1920, height: 1080 },
  hero: { width: 1600, height: 1200 },
};

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function loadStyles(): string {
  return readFileSync(new URL("./styles.css", import.meta.url), "utf8");
}

function shotToDataUrl(shotPath: string): string {
  const buf = readFileSync(shotPath);
  const ext = extname(shotPath).toLowerCase().replace(".", "");
  const mime =
    ext === "jpg" || ext === "jpeg"
      ? "image/jpeg"
      : ext === "webp"
        ? "image/webp"
        : ext === "gif"
          ? "image/gif"
          : "image/png";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function frameHtml(shotUrl: string): string {
  return `
    <div class="frame">
      <div class="frame-bar">
        <span class="frame-dot"></span>
        <span class="frame-dot"></span>
        <span class="frame-dot"></span>
      </div>
      <img class="frame-shot" src="${shotUrl}" alt="" />
    </div>
  `;
}

function tagsHtml(tags: string[]): string {
  return `
    <div class="tags">
      ${tags.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join("")}
    </div>
  `;
}

function statusesHtml(
  statuses: ProjectDetail["statuses"],
): string {
  return `
    <div class="statuses">
      ${statuses
        .map(
          (s, i) => `
        <div class="status">
          <div class="status-icon"><span class="status-dot"></span></div>
          <div>
            <p class="status-label">${escapeHtml(s.label)}</p>
            <p class="status-note">${escapeHtml(s.note)}</p>
          </div>
        </div>
        ${i < statuses.length - 1 ? '<div class="status-divider"></div>' : ""}
      `,
        )
        .join("")}
    </div>
  `;
}

function wrapDocument(bodyClass: string, body: string): string {
  const css = loadStyles();
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
  <style>${css}</style>
</head>
<body>
  <div class="poster ${bodyClass}">
    ${body}
  </div>
</body>
</html>`;
}

export function buildPosterHtml(
  variant: PosterVariant,
  project: ProjectDetail,
  shotPath: string,
): string {
  const shotUrl = shotToDataUrl(shotPath);
  const title = escapeHtml(project.title);
  const description = escapeHtml(project.description);
  const dek = escapeHtml(project.dek);

  if (variant === "cover") {
    return wrapDocument(
      "poster--cover",
      `
      <div class="poster-inner">
        <div class="top-row">
          ${tagsHtml(project.tags)}
          ${statusesHtml(project.statuses)}
        </div>
        <div class="stage">${frameHtml(shotUrl)}</div>
        <div class="bottom">
          <p class="desc">${description}</p>
          <h1 class="title">${title}</h1>
        </div>
      </div>
    `,
    );
  }

  if (variant === "banner") {
    return wrapDocument(
      "poster--banner",
      `
      <div class="poster-inner">
        <div class="stage">${frameHtml(shotUrl)}</div>
        <div class="copy">
          ${tagsHtml(project.tags)}
          <h1 class="title">${title}</h1>
          <p class="desc">${dek}</p>
        </div>
      </div>
    `,
    );
  }

  return wrapDocument(
    "poster--hero",
    `
    <div class="poster-inner">
      <div class="stage">${frameHtml(shotUrl)}</div>
      <p class="caption">${title}</p>
    </div>
  `,
  );
}
