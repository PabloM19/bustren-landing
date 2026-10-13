import { chromium } from 'playwright'
import { createServer } from 'vite'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)))

async function ready(page) {
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? Promise.resolve() : new Promise((res) => {
          img.addEventListener('load', res, { once: true })
          img.addEventListener('error', res, { once: true })
        }),
      ),
    )
  })
  await page.waitForTimeout(400)
}

async function main() {
  await mkdir(path.join(root, 'screenshots'), { recursive: true })
  const server = await createServer({
    root,
    configFile: path.join(root, 'vite.config.ts'),
    server: { port: 4177, strictPort: true },
  })
  await server.listen()
  const url = server.resolvedUrls?.local[0] ?? 'http://127.0.0.1:4177/'

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })
  await context.addInitScript(() => {
    localStorage.setItem('bustren-consent', 'accepted')
    localStorage.setItem('bustren-lang', 'es')
  })
  const page = await context.newPage()

  await page.goto(url, { waitUntil: 'networkidle' })
  await ready(page)
  await page.screenshot({
    path: path.join(root, 'screenshots/bustren-home-desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.goto(`${url}proyectos`, { waitUntil: 'networkidle' })
  await ready(page)
  await page.click('[data-filter-menu="type"]')
  await page.click('[data-filter="metro"]')
  await ready(page)
  await page.screenshot({
    path: path.join(root, 'screenshots/bustren-portfolio-desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.goto(`${url}proyectos/metro-quito-linea-1`, { waitUntil: 'networkidle' })
  await ready(page)
  await page.screenshot({
    path: path.join(root, 'screenshots/bustren-quito-desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(url, { waitUntil: 'networkidle' })
  await ready(page)
  await page.screenshot({
    path: path.join(root, 'screenshots/bustren-mobile.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  })

  await browser.close()
  await server.close()
  console.log('Screenshots written to screenshots/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
