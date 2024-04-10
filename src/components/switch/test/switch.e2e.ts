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

  describe('emits event and triggers callback if clicked', () => {
    it('when checked', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="true"></gtc-switch>');

      const gtcChange = await page.spyOnEvent('gtcChange');

      const element = await page.find('gtc-switch >>> div.gtc-switch');
      await element.click();
      await page.waitForChanges();

      expect(gtcChange).toHaveReceivedEventTimes(1);
      expect(gtcChange).toHaveReceivedEventDetail(false);
    });

    it('when unchecked', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="false"></gtc-switch>');

      const gtcChange = await page.spyOnEvent('gtcChange');

      const element = await page.find('gtc-switch >>> div.gtc-switch');
      await element.click();
      await page.waitForChanges();

      expect(gtcChange).toHaveReceivedEventTimes(1);
      expect(gtcChange).toHaveReceivedEventDetail(true);
    });
  });

  describe('emits no event if disabled', () => {
    it('when checked', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="true" disabled="true"></gtc-switch>');

      const gtcChange = await page.spyOnEvent('gtcChange');

      const element = await page.find('gtc-switch >>> div.gtc-switch');
      await element.click();
      await page.waitForChanges();

      expect(gtcChange).toHaveReceivedEventTimes(0);
    });

    it('when unchecked', async () => {
      const page = await newE2EPage();

      await page.setContent('<gtc-switch checked="false" disabled="true"></gtc-switch>');

      const gtcChange = await page.spyOnEvent('gtcChange');

      const element = await page.find('gtc-switch >>> div.gtc-switch');
      await element.click();
      await page.waitForChanges();

      expect(gtcChange).toHaveReceivedEventTimes(0);
    });
  });
});
