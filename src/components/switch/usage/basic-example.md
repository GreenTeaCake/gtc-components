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
