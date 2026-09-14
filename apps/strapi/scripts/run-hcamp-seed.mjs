#!/usr/bin/env node

import { createRequire } from "node:module"
import path from "node:path"
import { fileURLToPath } from "node:url"

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const { compileStrapi, createStrapi } = require("@strapi/strapi")
const { seedHcampContent } = require(path.join(appDir, "dist/src/seed/hcamp.js"))

const appContext = await compileStrapi({
  appDir,
  distDir: path.join(appDir, "dist"),
  autoReload: false,
  serveAdminPanel: false,
})
const strapi = createStrapi(appContext)

try {
  await strapi.load()
  await seedHcampContent(strapi)
  console.log("HCAMP content seeded.")
} finally {
  await strapi.destroy()
}