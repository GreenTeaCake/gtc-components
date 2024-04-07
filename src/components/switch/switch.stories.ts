type Args = {
  checked?: boolean;
  label: string;
};

type Example<T> = {
  args: T;
};

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: (args: Args) => {
    const { checked, label } = args;
    return `<gtc-switch checked="${checked}" label="${label}" />`;
  },
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Basic: Example<Args> = {
  args: {
    checked: true,
    label: 'Switch example',
  },
};
