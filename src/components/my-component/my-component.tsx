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
  @Prop() first: string = '';

  /**
   * The last name
   */
  @Prop() last: string  = '';

  /**
   * The metadata
   */
  @Prop() meta: Meta;

  private getText(): string {
    const name = `${this.first} ${this.last}`.trim();

    return this.meta
      ? name + ` and my favorite color is ${this.meta?.favoriteColor}`
      : name;
  }

  render() {
    return <div>
      <h1>This is the web component</h1>
      <span class="dynamic">My name is {this.getText()}</span>
    </div>;
  }
}
