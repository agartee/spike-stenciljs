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
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Adam" last="Gartee"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Adam" last="Gartee">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Adam Gartee
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
