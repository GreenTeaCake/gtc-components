type TemplateParams = {
  first?: string;
  middle?: string;
  last?: string;
};

export default {
  title: 'Components/my-component',
  tags: ['autodocs'],
  render: (args: TemplateParams) => {
    return `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;
  },
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
};

export const Basic = {
  args: {
    first: 'John',
    middle: 'Samuel',
    last: 'Doe',
  },
};
