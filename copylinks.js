(function() {
  var range = window.getSelection().getRangeAt(0);
  var selectedFragment;
  var container;

  // Selected content.
  if (range.endOffset != range.startOffset) {
    selectedFragment = range.cloneContents();
    container = document.createElement('DIV');
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
  for (i = 0; i < as.length; i++) {
    link = as[i].getAttribute('href');
    // Filter out not interesting hrefs.
    if (link && link !== '#') {
      // Prepend baseUrl to relative hrefs.
      if (link.indexOf('http://') === -1 && link.indexOf('https://')) {
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
