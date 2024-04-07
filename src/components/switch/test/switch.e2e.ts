import { newE2EPage } from '@stencil/core/testing';

describe('gtc-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gtc-switch></gtc-switch>');

    const element = await page.find('gtc-switch');
    expect(element).toHaveClass('hydrated');
  });

  describe('intially checked', () => {
    it('renders changes to the checked property', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="true"></gtc-switch>');
      const component = await page.find('gtc-switch');
      const element = await page.find('gtc-switch >>> div.gtc-switch');
      expect(element.getAttribute('aria-checked')).toEqual(`true`);

      component.setProperty('checked', 'false');
      await page.waitForChanges();
      expect(element.getAttribute('aria-checked')).toEqual(`false`);

      component.setProperty('checked', 'true');
      await page.waitForChanges();
      expect(element.getAttribute('aria-checked')).toEqual(`true`);
    });
  });

  describe('intially unchecked', () => {
    it('renders changes to the checked property', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="false"></gtc-switch>');
      const component = await page.find('gtc-switch');
      const element = await page.find('gtc-switch >>> div.gtc-switch');
      expect(element.getAttribute('aria-checked')).toEqual(`false`);

      component.setProperty('checked', 'true');
      await page.waitForChanges();
      expect(element.getAttribute('aria-checked')).toEqual(`true`);

      component.setProperty('checked', 'false');
      await page.waitForChanges();
      expect(element.getAttribute('aria-checked')).toEqual(`false`);
    });
  });
});
