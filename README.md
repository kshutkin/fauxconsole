fauxconsole - lightweight console implementation for IE
===============================================

More about original fauxconsole at [http://icant.co.uk/sandbox/fauxconsole/](http://icant.co.uk/sandbox/fauxconsole/)

This fork implements console in AMD format, so you should use AMD loader.

### Example

In .html file:

````html
<script type="text/javascript">
curl = {
    paths: {
        "console": "fauxconsole"
    }
};
</script>
<script src="curl.js" type="text/javascript"></script>
<script type="text/javascript">
        curl(['console', 'another_amd']);
</script>
````

In another_amd.js file:

````javascript
define(['console'], function() {
  console.log('Hello!!!');
}
````

If window.console exists in your environment fauxconsole does nothing (not even loads css file in my case).