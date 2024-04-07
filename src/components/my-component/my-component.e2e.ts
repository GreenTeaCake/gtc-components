import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> ul');
    expect(element.textContent).toEqual(``);

    component.setProperty('first', 'John');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`John`);

    component.setProperty('last', 'Doe');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`JohnDoe`);

    component.setProperty('middle', 'Samuel');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`JohnSamuelDoe`);
  });
});
