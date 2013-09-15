(function() {
  var selection = window.getSelection();
  var range;
  var selectedFragment;
  var container;

  // Non-empty selection.
  if (!selection.isCollapsed && selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
    selectedFragment = range.cloneContents();
    container = document.createElement('div');
    container.appendChild(selectedFragment);
  }
  else {
    // No selection, get all page.
    container = document.documentElement;
  }

  var as = container.getElementsByTagName('a');
  var i, link;
  var links = [];
  var baseUrl = document.location.protocol + '//' + document.location.hostname;
  var hasProtocol;

  for (i = 0; i < as.length; i++) {
    link = as[i].getAttribute('href');
    // Filter out not interesting hrefs.
    if (link && link !== '#') {
      // Prepend baseUrl to urls without protocol.
      hasProtocol = /^[^:]+:/.test(link);
      if (!hasProtocol) {
        link = baseUrl + (link.charAt(0) != '/' ? '/' : '') + link;
      }

      links.push(link);
    }
  }

  // Write data in a popup. Easy to implement, easy to copy from.
  var win = window.open();
  win.document.write(links.join('<br /><br />'));
  win.document.close();
}());
