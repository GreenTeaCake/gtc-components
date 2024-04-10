import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'gtc-components',
  plugins: [sass()],
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      // customElementsExportBehavior: 'auto-define-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
