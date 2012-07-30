# Sticky Footer

---

A simple, lightweight sticky footer plugin for jQuery.

No parameters and no callbacks, it literally just sticks the footer to the bottom of the page.

---

## Usage  
	
```javascript
$('#footer').stickyFooter();
```

**Note**: it attaches an event to the $(window).resize() method, so if you ever need to position it manually, just trigger that event (with the namespace).
	
```javascript
$(window).trigger('resize.stickyFooter');
```