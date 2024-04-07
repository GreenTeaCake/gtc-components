import { Component, Event, type EventEmitter, Host, Prop, h } from '@stencil/core';

/**
 * Switch component documentation.
 *
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/switch/
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/
 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role
 */
@Component({
  tag: 'gtc-switch',
  shadow: true,
  styleUrl: 'switch.scss',
})
export class Switch {
  /**
   * The reflective property that allows to control the state of the switch.
   *
   * If `true`, the switch is checked.
   */
  @Prop({ reflect: true }) public checked = false;

  /**
   * Text value used for `aria-label` property.
   */
  @Prop() public label!: string;

  /**
   * Is called when the value has changed.
   */
  @Event() private change: EventEmitter<boolean>;

  render() {
    return (
      <Host>
        <div
          aria-checked={this.checked ? 'true' : 'false'}
          aria-label={this.label}
          class={{
            'gtc-switch': true,
            'gtc-switch__checked': this.checked,
          }}
          onClick={this.onClick}
          onKeyDown={this.onKeyDown}
          role="switch"
          tabIndex={0}
        >
          <div class="gtc-switch-marker" />
        </div>
      </Host>
    );
  }

  private toggleChecked(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    this.change.emit(!this.checked);
  }

  private onClick = (event: MouseEvent) => {
    this.toggleChecked(event);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ': {
        this.toggleChecked(event);
        break;
      }
      default: {
        // nothing to do
      }
    }
  };
}
