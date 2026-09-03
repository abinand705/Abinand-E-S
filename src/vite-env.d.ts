/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMCONNECT_API_URL?: string;
  readonly VITE_FORMCONNECT_API_KEY?: string;
  readonly FORMCONNECT_API_URL?: string;
  readonly FORMCONNECT_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
