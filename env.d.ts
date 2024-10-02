/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: string // Add your custom environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
