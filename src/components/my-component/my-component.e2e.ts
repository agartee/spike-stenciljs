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
    const element = await page.find('my-component >>> .dynamic');

    expect(element.textContent).toEqual(`My name is `);

    component.setProperty('first', 'James');
    await page.waitForChanges();

    expect(element.textContent).toEqual(`My name is James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();

    expect(element.textContent).toEqual(`My name is James Quincy`);
  });
});
