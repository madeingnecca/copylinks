copylinks
=========

Extracts links from user selection on a web page. Does not work in IE.

Grab the [bookmarklet](%28function%28%29%7Bvar%20b%2Cc%2Ca%3Dwindow.getSelection%28%29.getRangeAt%280%29%3Ba.endOffset%21%3Da.startOffset%3F%28b%3Da.cloneContents%28%29%2Cc%3Ddocument.createElement%28%22DIV%22%29%2Cc.appendChild%28b%29%29%3Ac%3Ddocument.documentElement%3Bvar%20e%2Cf%2Cd%3Dc.getElementsByTagName%28%22a%22%29%2Cg%3D%5B%5D%2Ch%3Ddocument.location.protocol%2B%22//%22%2Bdocument.location.hostname%3Bfor%28e%3D0%3Bd.length%3Ee%3Be%2B%2B%29f%3Dd%5Be%5D.getAttribute%28%22href%22%29%2Cf%26%26%22%23%22%21%3D%3Df%26%26%28-1%3D%3D%3Df.indexOf%28%22http%3A//%22%29%26%26-1%3D%3D%3Df.indexOf%28%22https%3A//%22%29%26%26%28f%3Dh%2B%28%22/%22%21%3Df.charAt%280%29%3F%22/%22%3A%22%22%29%2Bf%29%2Cg.push%28f%29%29%3Bvar%20i%3Dwindow.open%28%29%3Bi.document.write%28g.join%28%22%3Cbr%20/%3E%3Cbr%20/%3E%22%29%29%2Ci.document.close%28%29%7D%29%28%29%3B).
