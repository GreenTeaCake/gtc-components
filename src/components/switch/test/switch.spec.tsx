import { newSpecPage } from '@stencil/core/testing';
import { Switch } from '../switch';

describe('switch', () => {
  it('renders without properties', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<gtc-switch label="Label"></gtc-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <gtc-switch label="Label">
        <mock:shadow-root>
          <div aria-checked="false" aria-disabled="false" aria-label="Label" class="gtc-switch" role="switch" tabindex="0">
            <div class="gtc-switch-marker"></div>
          </div>
        </mock:shadow-root>
      </gtc-switch>
    `);
  });

  describe('checked', () => {
    it('renders when true', async () => {
      const page = await newSpecPage({
        components: [Switch],
        html: `<gtc-switch label="Label" checked="true"></gtc-switch>`,
      });
      expect(page.root).toEqualHtml(`
        <gtc-switch label="Label" checked="">
          <mock:shadow-root>
            <div aria-checked="true" aria-disabled="false" aria-label="Label" class="gtc-switch gtc-switch__checked" role="switch" tabindex="0">
              <div class="gtc-switch-marker"></div>
            </div>
          </mock:shadow-root>
        </gtc-switch>
      `);
    });

    it('renders when false', async () => {
      const page = await newSpecPage({
        components: [Switch],
        html: `<gtc-switch label="Label" checked="false"></gtc-switch>`,
      });
      expect(page.root).toEqualHtml(`
        <gtc-switch label="Label" checked="false">
          <mock:shadow-root>
            <div aria-checked="false" aria-disabled="false" aria-label="Label" class="gtc-switch" role="switch" tabindex="0">
              <div class="gtc-switch-marker"></div>
            </div>
          </mock:shadow-root>
        </gtc-switch>
      `);
    });
  });

  describe('disabled', () => {
    it('renders when true', async () => {
      const page = await newSpecPage({
        components: [Switch],
        html: `<gtc-switch label="Label" disabled="true"></gtc-switch>`,
      });
      expect(page.root).toEqualHtml(`
        <gtc-switch label="Label" disabled="">
          <mock:shadow-root>
            <div aria-checked="false" aria-disabled="true" aria-label="Label" class="gtc-switch gtc-switch__disabled" role="switch" tabindex="0">
              <div class="gtc-switch-marker"></div>
            </div>
          </mock:shadow-root>
        </gtc-switch>
      `);
    });

    it('renders when false', async () => {
      const page = await newSpecPage({
        components: [Switch],
        html: `<gtc-switch label="Label" disabled="false"></gtc-switch>`,
      });
      expect(page.root).toEqualHtml(`
        <gtc-switch label="Label" disabled="false">
          <mock:shadow-root>
            <div aria-checked="false" aria-disabled="false" aria-label="Label" class="gtc-switch" role="switch" tabindex="0">
              <div class="gtc-switch-marker"></div>
            </div>
          </mock:shadow-root>
        </gtc-switch>
      `);
    });
  });
});
