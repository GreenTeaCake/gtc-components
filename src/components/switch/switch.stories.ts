import type { Meta, StoryObj } from '@storybook/web-components';
import { getComponentDoc } from '../../stories/getComponentDoc';

const DOCS = getComponentDoc('gtc-switch');

const meta: Meta = {
  title: 'Components/Switch',
  component: 'gtc-switch',
  tags: ['autodocs'],
  render: (args) => {
    const { checked, label } = args;
    return `<gtc-switch checked="${checked}" label="${label}" />`;
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
    checked: false,
    label: 'Switch',
  },
};
