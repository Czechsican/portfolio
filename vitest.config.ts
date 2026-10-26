import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// Kept apart from vite.config.ts: Vitest bundles its own copy of Vite, so its config helper
// can't type-check the build config's plugins directly.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: false,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/main.tsx', 'src/vite-env.d.ts', 'src/test/**', 'src/**/*.test.{ts,tsx}'],
      },
    },
  }),
)
