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
            <h1>This is the web component</h1>
            <span class="dynamic">My name is</span>
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
            <h1>This is the web component</h1>
            <span class="dynamic">My name is Adam Gartee</span>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
