copylinks
=========

Extracts links from user selection on a web page. Does not work in IE.

Grab the [bookmarklet]((function(){var b,c,a=window.getSelection().getRangeAt(0);a.endOffset!=a.startOffset?(b=a.cloneContents(),c=document.createElement("DIV"),c.appendChild(b)):c=document.documentElement;var e,f,d=c.getElementsByTagName("a"),g=[],h=document.location.protocol+"//"+document.location.hostname;for(e=0;d.length>e;e++)f=d[e].getAttribute("href"),f&&"#"!==f&&(-1===f.indexOf("http://")&&-1===f.indexOf("https://")&&(f=h+("/"!=f.charAt(0)?"/":"")+f),g.push(f));var i=window.open();i.document.write(g.join("<br /><br />")),i.document.close()})();).
