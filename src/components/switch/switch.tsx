import { Component, Event, type EventEmitter, Host, Prop, h, Watch } from '@stencil/core';

const MIN_LABEL_LENGTH = 1;

/**
 * A switch is an input widget that allows users to choose one of two values: on or off.
 * Switches are similar to checkboxes and toggle buttons. But switches can only be used for binary
 * input while checkboxes and toggle buttons allow implementations the option of supporting a third
 * middle state. Checkboxes can be checked or not checked and can optionally also allow for a
 * partially checked state. Toggle buttons can be pressed or not pressed and can optionally allow
 * for a partially pressed state.
 *
 * Specifications:
 * - [`switch` role](https://w3c.github.io/aria/#switch)
 * - [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
 * - [Switch Example: A switch based on a div element](https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/)
 * - [ARIA: switch role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
 *
 * `gtc-switch` custom element implements the switch specification behaviour. It is a stateless controlled component.
 * Please use `checked` property to control the component's state and attach event listener for custom `gtcChange`
 * event to be notified about the state changes.
 *
 * Please note that the field `label` is mandatory.
 */
@Component({
  tag: 'gtc-switch',
  shadow: true,
  styleUrl: 'switch.scss',
})
export class Switch {
  constructor() {
    this.validateLabel(this.label);
  }

  /**
   * Text value used for `aria-label` property.
   *
   * The minimal length is 1.
   */
  @Prop({ reflect: true }) public label!: string;

  /**
   * The reflective property that allows to control the state of the switch.
   *
   * If `true`, the switch is checked.
   */
  @Prop({ reflect: true }) public checked = false;

  /**
   * If `true`, the switch is disabled.
   */
  @Prop({ reflect: true }) public disabled = false;

  /**
   * Is called when the value has changed. Event name is prefixed not to be confused/conflict with the native one.
   */
  @Event() private gtcChange: EventEmitter<boolean>;

  render() {
    return (
      <Host>
        <div
          aria-checked={this.checked ? 'true' : 'false'}
          aria-disabled={this.disabled ? 'true' : 'false'}
          aria-label={this.label}
          class={{
            // order matters
            'gtc-switch': true,
            'gtc-switch__checked': this.checked,
            'gtc-switch__disabled': this.disabled,
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

  @Watch('label')
  protected validateLabelChange(newLabelValue: string) {
    this.validateLabel(newLabelValue);
  }

  private validateLabel(labelValue: string) {
    if (typeof labelValue !== 'string' || labelValue === '') {
      throw new Error('Switch has no label.');
    }
    if (labelValue.length < MIN_LABEL_LENGTH) {
      throw new Error('Switch label is too short.');
    }
  }

  private toggleChecked(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    if (!this.disabled) {
      this.gtcChange.emit(!this.checked);
    }
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
