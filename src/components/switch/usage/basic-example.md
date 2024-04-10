Here is the basic usage example for `gtc-switch`:

```html
<gtc-switch label="Accessible Label" checked="false" id="my-cool-switch" />
<script>
  let myCoolSwitch = document.getElementById('my-cool-switch');
  myCoolSwitch.addEventListener('gtcChange', (event) => {
    event.preventDefault();
    event.srcElement.checked = event.detail;
  });
</script>
```
