import { Component, Event, type EventEmitter, Host, Prop, h } from '@stencil/core';

/**
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
   * Emitted when the value has changed
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

  private onClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.change.emit(!this.checked);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ': {
        event.stopPropagation();
        this.change.emit(!this.checked);
        break;
      }
      default: {
        // nothing to do
      }
    }
  };
}
