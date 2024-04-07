import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <ul class="list"></ul>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="John" last="Doe"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="John" last="Doe">
        <mock:shadow-root>
          <ul class="list">
            <li class="item">John</li>
            <li class="item">Doe</li>
          </ul>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
