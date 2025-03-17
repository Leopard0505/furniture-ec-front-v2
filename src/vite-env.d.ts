/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // その他の環境変数...
  VITE_APP_API_BASE_URL: string;
  VITE_APP_EMAIL: string;
  VITE_APP_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
