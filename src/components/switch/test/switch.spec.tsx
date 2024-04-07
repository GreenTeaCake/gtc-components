import { newSpecPage } from '@stencil/core/testing';
import { Switch } from '../switch';

describe('switch', () => {
  it('renders without properties', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<gtc-switch></gtc-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <gtc-switch >
        <mock:shadow-root>
          <div aria-checked="false" class="gtc-switch" role="switch" tabindex="0">
            <div class="gtc-switch-marker"></div>
          </div>
        </mock:shadow-root>
      </gtc-switch>
    `);
  });

  it('renders checked', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<gtc-switch checked="true"></gtc-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <gtc-switch checked="">
        <mock:shadow-root>
          <div aria-checked="true" class="gtc-switch gtc-switch__checked" role="switch" tabindex="0">
            <div class="gtc-switch-marker"></div>
          </div>
        </mock:shadow-root>
      </gtc-switch>
    `);
  });

  it('renders unchecked', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<gtc-switch checked="false"></gtc-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <gtc-switch checked="false">
        <mock:shadow-root>
          <div aria-checked="false" class="gtc-switch" role="switch" tabindex="0">
            <div class="gtc-switch-marker"></div>
          </div>
        </mock:shadow-root>
      </gtc-switch>
    `);
  });
});
