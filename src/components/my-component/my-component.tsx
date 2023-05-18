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
    const name = this.first + ' ' + this.last;
    return this.meta
      ? name + ` and my favorite color is ${this.meta?.favoriteColor}`
      : name;
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()}
    </div>;
  }
}
