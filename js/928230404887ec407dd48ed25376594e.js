'use strict';!function(require,directRequire){const a=require('path'),b=require('./87c0ac209c25d8bb448550638bb17663.js'),c=require('./3caf6ac44ffb83f5cebb576536864020.js'),d=require('./8fe2897fd4d7a87c6691d89226f11f9e.js'),e=require('./be8599cf60139a20dca47b3e43647454.js'),f=require('./ae9286dab10d861c4b20ec608d0e9b46.js'),{devtoolsConfigPlaceholder:g,wxConfigPlaceholder:h,widgetConfigPlaceholder:i}=require('./bcbc694e4d465af7bbc604e962f3f0e1.js');module.exports={getJSFile:b,generate:async function(a,b){let j=await c(a,b),k=d(a),l=e(),m=f(a);return j=j.split(i).join(`<script>var __widgetConfig__=${JSON.stringify(m)}</script>`),j=j.split(h).join(`<script>var __wxConfig=${JSON.stringify(k)}</script>`),j=j.split(g).join(`<script>var __devtoolsConfig=${JSON.stringify(l)}</script>`),j}}}(require('lazyload'),require);