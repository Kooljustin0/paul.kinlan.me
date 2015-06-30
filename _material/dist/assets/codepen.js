function CodeBlockCodePen(){"use strict";this.htmlCodeBlocks=document.getElementsByClassName("language-markup"),this.init()}CodeBlockCodePen.prototype.init=function(){"use strict";for(var e=["<!-- For testing. TODO: Remove before launch -->",'<link rel="stylesheet" href="https://storage.googleapis.com/materialdesignlite/material.css">','<script src="https://storage.googleapis.com/materialdesignlite/material.min.js"></script>',"<!-- Material Design Lite -->",'<script src="http://code.getmdl.io/1.0.0-rc.1/material.min.js"></script>','<link rel="stylesheet" href="http://code.getmdl.io/1.0.0-rc.1/material.indigo-pink.min.css">',"<!-- Material Design icon font -->",'<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">'],t=0,i=this.htmlCodeBlocks.length;i>t;t++){var n=this.htmlCodeBlocks[t];if("pre"!==n.tagName.toLowerCase()&&(n=n.parentNode),!(n.getElementsByTagName("form").length>0||"pre"!==n.tagName.toLowerCase())){for(var o=n.innerText,s=["body {","padding: 40px;","}"];-1!==o.indexOf("<style>");){var r=o.indexOf("<style>"),a=o.indexOf("</style>"),l=o.substring(r+7,a).trim(),c=l.split("\n").map(function(e){return e.trim()});s=s.concat(c),o=o.substr(a+8)}var d=document.createElement("form");d.classList.add("codepen-button"),d.setAttribute("action","http://codepen.io/pen/define"),d.setAttribute("method","POST"),d.addEventListener("click",this.clickHandler(d));var m=document.createElement("input");m.setAttribute("type","hidden"),m.setAttribute("name","data"),m.setAttribute("value",JSON.stringify({html:"<html>\n  <head>\n    "+e.join("\n    ")+"\n  </head>\n  <body>\n    "+o.split("\n").join("\n    ").trim()+"\n  </body>\n</html>",css:s.join("\n")})),d.appendChild(m),n.appendChild(d)}}},CodeBlockCodePen.prototype.clickHandler=function(e){"use strict";return function(){e.submit()}},window.addEventListener("load",function(){"use strict";new CodeBlockCodePen});