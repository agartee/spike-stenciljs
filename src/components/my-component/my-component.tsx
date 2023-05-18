import { Component, Prop, h } from '@stencil/core';
import { Meta } from './meta';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The metadata
   */
  @Prop() meta: Meta;

  private getText(): string {
    return this.first + ' ' + this.last;
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()} and my favorite color is {this.meta?.favoriteColor}
    </div>;
  }
}
