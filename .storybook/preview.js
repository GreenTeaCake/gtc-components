/* eslint-disable */
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

const preview = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
