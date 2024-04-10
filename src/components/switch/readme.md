# gtc-switch

<!-- Auto Generated Below -->

## Overview

A switch is an input widget that allows users to choose one of two values: on or off.
Switches are similar to checkboxes and toggle buttons. But switches can only be used for binary
input while checkboxes and toggle buttons allow implementations the option of supporting a third
middle state. Checkboxes can be checked or not checked and can optionally also allow for a
partially checked state. Toggle buttons can be pressed or not pressed and can optionally allow
for a partially pressed state.

Specifications:

- [`switch` role](https://w3c.github.io/aria/#switch)
- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Switch Example: A switch based on a div element](https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/)
- [ARIA: switch role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)

`gtc-switch` custom element implements the switch specification behaviour. It is a stateless controlled component.
Please use `checked` property to control the component's state and attach event listener for custom `gtcChange`
event to be notified about the state changes.

## Usage

### Basic-example

Here is the basic usage example for `gtc-switch`:

```html
<gtc-switch label="Accessible Label" checked="false" id="my-cool-switch" />
<script>
  let switch = document.getElementById('my-cool-switch');
  switch.addEventListener('gtcChange', (event) => {
    event.preventDefault();
    event.srcElement.checked = e.detail;
  });
</script>
```

## Properties

| Property             | Attribute  | Description                                                                                               | Type      | Default     |
| -------------------- | ---------- | --------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`            | `checked`  | The reflective property that allows to control the state of the switch. If `true`, the switch is checked. | `boolean` | `false`     |
| `disabled`           | `disabled` | If `true`, the switch is disabled.                                                                        | `boolean` | `false`     |
| `label` _(required)_ | `label`    | Text value used for `aria-label` property. The minimal length is 1.                                       | `string`  | `undefined` |

## Events

| Event       | Description                                                                                                   | Type                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `gtcChange` | Is called when the value has changed. Event name is prefixed not to be confused/conflict with the native one. | `CustomEvent<boolean>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
