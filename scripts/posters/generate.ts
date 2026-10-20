#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getProject } from "../../data/projects";
import { publicAssetPath, renderPosters } from "./render";

type Args = {
  slug: string;
  shot: string;
  out?: string;
  writeData: boolean;
};

function printUsage(): never {
  console.error(`Usage:
  npm run posters -- --slug <slug> --shot <path-to-screenshot> [--out <dir>] [--write-data]

Example:
  npm run posters -- --slug jupiter-hr --shot ./shots/hr.png --write-data
`);
  process.exit(1);
}

function parseArgs(argv: string[]): Args {
  const args: Partial<Args> = { writeData: false };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug") args.slug = argv[++i];
    else if (a === "--shot") args.shot = argv[++i];
    else if (a === "--out") args.out = argv[++i];
    else if (a === "--write-data") args.writeData = true;
    else if (a === "--help" || a === "-h") printUsage();
    else {
      console.error(`Unknown argument: ${a}`);
      printUsage();
    }
  }

  if (!args.slug || !args.shot) printUsage();
  return args as Args;
}

function updateProjectsData(
  cwd: string,
  slug: string,
  paths: { image: string; bannerImage: string; heroImage: string },
): void {
  const file = resolve(cwd, "data/projects.ts");
  let src = readFileSync(file, "utf8");

  const blockRe = new RegExp(
    `(slug:\\s*"${slug}"[\\s\\S]*?)(image:\\s*")[^"]*(")`,
  );
  if (!blockRe.test(src)) {
    throw new Error(`Could not find project block for slug "${slug}" in data/projects.ts`);
  }

  // Replace image / heroImage / bannerImage only within this project's object
  const start = src.indexOf(`slug: "${slug}"`);
  if (start < 0) throw new Error(`slug "${slug}" not found in data/projects.ts`);

  const nextSlug = src.indexOf("slug: \"", start + 1);
  const end = nextSlug < 0 ? src.indexOf("\n];", start) : nextSlug;
  const before = src.slice(0, start);
  let block = src.slice(start, end);
  const after = src.slice(end);

  block = block
    .replace(/image:\s*"[^"]*"/, `image: "${paths.image}"`)
    .replace(/heroImage:\s*"[^"]*"/, `heroImage: "${paths.heroImage}"`)
    .replace(/bannerImage:\s*"[^"]*"/, `bannerImage: "${paths.bannerImage}"`);

  src = before + block + after;
  writeFileSync(file, src);
}

function updateContentData(cwd: string, slug: string, image: string): void {
  const file = resolve(cwd, "data/content.ts");
  let src = readFileSync(file, "utf8");
  const start = src.indexOf(`slug: "${slug}"`);
  if (start < 0) {
    console.warn(`Warn: slug "${slug}" not found in data/content.ts — skipped`);
    return;
  }
  const nextSlug = src.indexOf("slug: \"", start + 1);
  const endMarker = src.indexOf("\n];", start);
  const end = nextSlug > 0 && nextSlug < endMarker ? nextSlug : endMarker;
  const before = src.slice(0, start);
  let block = src.slice(start, end);
  const after = src.slice(end);

  block = block.replace(/image:\s*"[^"]*"/, `image: "${image}"`);
  writeFileSync(file, before + block + after);
}

async function main() {
  const cwd = process.cwd();
  const args = parseArgs(process.argv.slice(2));
  const project = getProject(args.slug);
  if (!project) {
    console.error(`Unknown project slug: ${args.slug}`);
    process.exit(1);
  }

  const shotPath = resolve(cwd, args.shot);
  if (!existsSync(shotPath)) {
    console.error(`Screenshot not found: ${shotPath}`);
    process.exit(1);
  }

  const outDir = resolve(
    cwd,
    args.out ?? `public/assets/images/projects/${args.slug}`,
  );

  console.log(`Rendering posters for ${project.title}…`);
  const files = await renderPosters({ project, shotPath, outDir });

  const publicPaths = {
    image: publicAssetPath(files.cover, cwd),
    bannerImage: publicAssetPath(files.banner, cwd),
    heroImage: publicAssetPath(files.hero, cwd),
  };

  console.log("Wrote:");
  for (const [k, v] of Object.entries(files)) {
    console.log(`  ${k}: ${v}`);
  }

  if (args.writeData) {
    updateProjectsData(cwd, args.slug, publicPaths);
    updateContentData(cwd, args.slug, publicPaths.image);
    console.log("Updated data/projects.ts and data/content.ts image paths.");
  } else {
    console.log("\nWire into data manually or re-run with --write-data:");
    console.log(`  image: "${publicPaths.image}"`);
    console.log(`  bannerImage: "${publicPaths.bannerImage}"`);
    console.log(`  heroImage: "${publicPaths.heroImage}"`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
