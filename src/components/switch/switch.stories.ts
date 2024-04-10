import type { Meta, StoryObj } from '@storybook/web-components';
import { getComponentDoc } from '../../stories/getComponentDoc';

const DOCS = getComponentDoc('gtc-switch');

const meta: Meta = {
  title: 'Components/Switch',
  component: 'gtc-switch',
  tags: ['autodocs'],
  render: (args) => {
    const { label, checked, disabled } = args;
    return `
      <gtc-switch
        label="${label}"
        checked="${checked}"
        disabled="${disabled}"
      />
    `;
  },
  argTypes: DOCS.argTypes,
  parameters: {
    docs: {
      description: {
        component: DOCS.description,
      },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  name: 'Usage Example',
  args: {
    label: 'Switch',
    checked: false,
    disabled: false,
  },
};
