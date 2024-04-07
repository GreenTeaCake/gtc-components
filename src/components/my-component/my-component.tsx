import { Component, type JSX, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first?: string;

  /**
   * The middle name
   */
  @Prop() middle?: string;

  /**
   * The last name
   */
  @Prop() last?: string;

  render(): JSX.Element {
    return (
      <ul class="list">
        {this.first && <li class="item">{this.first}</li>}
        {this.middle && <li class="item">{this.middle}</li>}
        {this.last && <li class="item">{this.last}</li>}
      </ul>
    );
  }
}
