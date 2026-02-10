export async function register() {
  // Only run in Node.js runtime (not Edge)
  if (process.env.NEXT_RUNTIME === "nodejs" || !process.env.NEXT_RUNTIME) {
    try {
      const { readFileSync, existsSync } = await import("node:fs")
      const { resolve } = await import("node:path")

      // Try loading .env from persistent directory (survives Hostinger deploys)
      const persistentEnvPath = resolve(process.cwd(), "..", "persistent-data", ".env")
      if (existsSync(persistentEnvPath)) {
        const content = readFileSync(persistentEnvPath, "utf-8")
        for (const line of content.split("\n")) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith("#")) continue
          const eqIndex = trimmed.indexOf("=")
          if (eqIndex === -1) continue
          const key = trimmed.slice(0, eqIndex).trim()
          const value = trimmed.slice(eqIndex + 1).trim()
          if (key && !process.env[key]) {
            process.env[key] = value
          }
        }
      }
    } catch {
      // Persistent env not available — rely on platform env vars
    }
  }
}
