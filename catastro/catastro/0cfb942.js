/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{812:function(t,e,n){(function(e){var o;"undefined"!=typeof globalThis?globalThis:void 0!==this||("undefined"!=typeof window?window:"undefined"!=typeof self&&self),o=function(t){return function(){"use strict";var e={662:function(t,e){var n,o=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(t[p]=b[p])},n(t,b)},function(t,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)});Object.defineProperty(e,"__esModule",{value:!0}),e.CellHookData=e.HookData=void 0;var r=function(t,table,cursor){this.table=table,this.pageNumber=table.pageNumber,this.pageCount=this.pageNumber,this.settings=table.settings,this.cursor=cursor,this.doc=t.getDocument()};e.HookData=r;var l=function(t){function e(e,table,n,o,r,cursor){var l=t.call(this,e,table,cursor)||this;return l.cell=n,l.row=o,l.column=r,l.section=o.section,l}return o(e,t),e}(r);e.CellHookData=l},790:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(148),r=n(938),l=n(323),d=n(587),h=n(49),c=n(858);e.default=function(t){t.API.autoTable=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];1===e.length?t=e[0]:(console.error("Use of deprecated autoTable initiation"),(t=e[2]||{}).columns=e[0],t.body=e[1]);var input=(0,d.parseInput)(this,t),table=(0,c.createTable)(this,input);return(0,h.drawTable)(this,table),this},t.API.lastAutoTable=!1,t.API.previousAutoTable=!1,t.API.autoTable.previous=!1,t.API.autoTableText=function(text,t,e,n){(0,r.default)(text,t,e,n,this)},t.API.autoTableSetDefaults=function(t){return l.DocHandler.setDefaults(t,this),this},t.autoTableSetDefaults=function(t,e){l.DocHandler.setDefaults(t,e)},t.API.autoTableHtmlToJson=function(t,e){if(void 0===e&&(e=!1),"undefined"==typeof window)return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var n=new l.DocHandler(this),r=(0,o.parseHtml)(n,t,window,e,!1),head=r.head,body=r.body;return{columns:head[0].map((function(t){return t.content})),rows:body,data:body}},t.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var t=this.lastAutoTable;return t&&t.finalY?t.finalY:0},t.API.autoTableAddPageContent=function(e){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),t.API.autoTable.globalDefaults||(t.API.autoTable.globalDefaults={}),t.API.autoTable.globalDefaults.addPageContent=e,this},t.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},938:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(text,t,e,n,o){n=n||{};var r=o.internal.scaleFactor,l=o.internal.getFontSize()/r,d=l*(o.getLineHeightFactor?o.getLineHeightFactor():1.15),h="",c=1;if("middle"!==n.valign&&"bottom"!==n.valign&&"center"!==n.halign&&"right"!==n.halign||(c=(h="string"==typeof text?text.split(/\r\n|\r|\n/g):text).length||1),e+=l*(2-1.15),"middle"===n.valign?e-=c/2*d:"bottom"===n.valign&&(e-=c*d),"center"===n.halign||"right"===n.halign){var f=l;if("center"===n.halign&&(f*=.5),h&&c>=1){for(var y=0;y<h.length;y++)o.text(h[y],t-o.getStringUnitWidth(h[y])*f,e),e+=d;return o}t-=o.getStringUnitWidth(text)*f}return"justify"===n.halign?o.text(text,t,e,{maxWidth:n.maxWidth||100,align:"justify"}):o.text(text,t,e),o}},200:function(t,e){function n(t,e){var n=t>0,o=e||0===e;return n&&o?"DF":n?"S":o?"F":null}function o(t,e){var n,o,r,l;if(t=t||e,Array.isArray(t)){if(t.length>=4)return{top:t[0],right:t[1],bottom:t[2],left:t[3]};if(3===t.length)return{top:t[0],right:t[1],bottom:t[2],left:t[1]};if(2===t.length)return{top:t[0],right:t[1],bottom:t[0],left:t[1]};t=1===t.length?t[0]:e}return"object"==typeof t?("number"==typeof t.vertical&&(t.top=t.vertical,t.bottom=t.vertical),"number"==typeof t.horizontal&&(t.right=t.horizontal,t.left=t.horizontal),{left:null!==(n=t.left)&&void 0!==n?n:e,top:null!==(o=t.top)&&void 0!==o?o:e,right:null!==(r=t.right)&&void 0!==r?r:e,bottom:null!==(l=t.bottom)&&void 0!==l?l:e}):("number"!=typeof t&&(t=e),{top:t,right:t,bottom:t,left:t})}Object.defineProperty(e,"__esModule",{value:!0}),e.getPageAvailableWidth=e.parseSpacing=e.getFillStyle=e.addTableBorder=e.getStringWidth=void 0,e.getStringWidth=function(text,t,e){return e.applyStyles(t,!0),(Array.isArray(text)?text:[text]).map((function(text){return e.getTextWidth(text)})).reduce((function(a,b){return Math.max(a,b)}),0)},e.addTableBorder=function(t,table,e,cursor){var o=table.settings.tableLineWidth,r=table.settings.tableLineColor;t.applyStyles({lineWidth:o,lineColor:r});var l=n(o,!1);l&&t.rect(e.x,e.y,table.getWidth(t.pageSize().width),cursor.y-e.y,l)},e.getFillStyle=n,e.parseSpacing=o,e.getPageAvailableWidth=function(t,table){var e=o(table.settings.margin,0);return t.pageSize().width-(e.left+e.right)}},913:function(t,e){var n,o=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(t[p]=b[p])},n(t,b)},function(t,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)});Object.defineProperty(e,"__esModule",{value:!0}),e.getTheme=e.defaultStyles=e.HtmlRowInput=void 0;var r=function(t){function e(element){var e=t.call(this)||this;return e._element=element,e}return o(e,t),e}(Array);e.HtmlRowInput=r,e.defaultStyles=function(t){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/t,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},e.getTheme=function(t){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[t]}},259:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseCss=void 0;var o=n(200);function r(element,t){var e=l(element,t);if(!e)return null;var n=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!n||!Array.isArray(n))return null;var o=[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];return 0===parseInt(n[4])||isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function l(t,e){var n=e(t);return"rgba(0, 0, 0, 0)"===n||"transparent"===n||"initial"===n||"inherit"===n?null==t.parentElement?null:l(t.parentElement,e):n}e.parseCss=function(t,element,e,style,n){var l={},d=96/72,h=r(element,(function(t){return n.getComputedStyle(t).backgroundColor}));null!=h&&(l.fillColor=h);var c=r(element,(function(t){return n.getComputedStyle(t).color}));null!=c&&(l.textColor=c);var f=function(style,t){var e=[style.paddingTop,style.paddingRight,style.paddingBottom,style.paddingLeft],n=96/(72/t),r=(parseInt(style.lineHeight)-parseInt(style.fontSize))/t/2,l=e.map((function(t){return parseInt(t||"0")/n})),d=(0,o.parseSpacing)(l,0);return r>d.top&&(d.top=r),r>d.bottom&&(d.bottom=r),d}(style,e);f&&(l.cellPadding=f);var y="borderTopColor",v=d*e,m=style.borderTopWidth;if(style.borderBottomWidth===m&&style.borderRightWidth===m&&style.borderLeftWidth===m){var w=(parseFloat(m)||0)/v;w&&(l.lineWidth=w)}else l.lineWidth={top:(parseFloat(style.borderTopWidth)||0)/v,right:(parseFloat(style.borderRightWidth)||0)/v,bottom:(parseFloat(style.borderBottomWidth)||0)/v,left:(parseFloat(style.borderLeftWidth)||0)/v},l.lineWidth.top||(l.lineWidth.right?y="borderRightColor":l.lineWidth.bottom?y="borderBottomColor":l.lineWidth.left&&(y="borderLeftColor"));console.log(l.lineWidth);var P=r(element,(function(t){return n.getComputedStyle(t)[y]}));null!=P&&(l.lineColor=P);var S=["left","right","center","justify"];-1!==S.indexOf(style.textAlign)&&(l.halign=style.textAlign),-1!==(S=["middle","bottom","top"]).indexOf(style.verticalAlign)&&(l.valign=style.verticalAlign);var x=parseInt(style.fontSize||"");isNaN(x)||(l.fontSize=x/d);var C=function(style){var t="";return("bold"===style.fontWeight||"bolder"===style.fontWeight||parseInt(style.fontWeight)>=700)&&(t="bold"),"italic"!==style.fontStyle&&"oblique"!==style.fontStyle||(t+="italic"),t}(style);C&&(l.fontStyle=C);var W=(style.fontFamily||"").toLowerCase();return-1!==t.indexOf(W)&&(l.font=W),l}},323:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.DocHandler=void 0;var n={},o=function(){function t(t){this.jsPDFDocument=t,this.userStyles={textColor:t.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:t.internal.getFontSize(),fontStyle:t.internal.getFont().fontStyle,font:t.internal.getFont().fontName,lineWidth:t.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:t.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return t.setDefaults=function(t,e){void 0===e&&(e=null),e?e.__autoTableDocumentDefaults=t:n=t},t.unifyColor=function(t){return Array.isArray(t)?t:"number"==typeof t?[t,t,t]:"string"==typeof t?[t]:null},t.prototype.applyStyles=function(e,n){var o,r,l;void 0===n&&(n=!1),e.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e.fontStyle);var d=this.jsPDFDocument.internal.getFont(),h=d.fontStyle,c=d.fontName;if(e.font&&(c=e.font),e.fontStyle){h=e.fontStyle;var f=this.getFontList()[c];f&&-1===f.indexOf(h)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(f[0]),h=f[0])}if(this.jsPDFDocument.setFont(c,h),e.fontSize&&this.jsPDFDocument.setFontSize(e.fontSize),!n){var y=t.unifyColor(e.fillColor);y&&(o=this.jsPDFDocument).setFillColor.apply(o,y),(y=t.unifyColor(e.textColor))&&(r=this.jsPDFDocument).setTextColor.apply(r,y),(y=t.unifyColor(e.lineColor))&&(l=this.jsPDFDocument).setDrawColor.apply(l,y),"number"==typeof e.lineWidth&&this.jsPDFDocument.setLineWidth(e.lineWidth)}},t.prototype.splitTextToSize=function(text,t,e){return this.jsPDFDocument.splitTextToSize(text,t,e)},t.prototype.rect=function(t,e,n,o,r){return this.jsPDFDocument.rect(t,e,n,o,r)},t.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},t.prototype.getTextWidth=function(text){return this.jsPDFDocument.getTextWidth(text)},t.prototype.getDocument=function(){return this.jsPDFDocument},t.prototype.setPage=function(t){this.jsPDFDocument.setPage(t)},t.prototype.addPage=function(){return this.jsPDFDocument.addPage()},t.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},t.prototype.getGlobalOptions=function(){return n||{}},t.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},t.prototype.pageSize=function(){var t=this.jsPDFDocument.internal.pageSize;return null==t.width&&(t={width:t.getWidth(),height:t.getHeight()}),t},t.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},Object.defineProperty(t.prototype,"lineHeightFactor",{get:function(){var t=this.jsPDFDocument;return t.getLineHeightFactor?t.getLineHeightFactor():1.15},enumerable:!1,configurable:!0}),t.prototype.getLineHeight=function(t){return t/this.scaleFactor()*this.lineHeightFactor},t.prototype.pageNumber=function(){var t=this.jsPDFDocument.internal.getCurrentPageInfo();return t?t.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},t}();e.DocHandler=o},148:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseHtml=void 0;var o=n(259),r=n(913);function l(t,e,n,l,h,c){for(var f=new r.HtmlRowInput(l),i=0;i<l.cells.length;i++){var y=l.cells[i],v=n.getComputedStyle(y);if(h||"none"!==v.display){var m=void 0;c&&(m=(0,o.parseCss)(t,y,e,v,n)),f.push({rowSpan:y.rowSpan,colSpan:y.colSpan,styles:m,_element:y,content:d(y)})}}var style=n.getComputedStyle(l);if(f.length>0&&(h||"none"!==style.display))return f}function d(t){var e=t.cloneNode(!0);return e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/ +/g," "),e.innerHTML=e.innerHTML.split(/<br.*?>/).map((function(t){return t.trim()})).join("\n"),e.innerText||e.textContent||""}e.parseHtml=function(t,input,e,n,o){var r,d,h;void 0===n&&(n=!1),void 0===o&&(o=!1),h="string"==typeof input?e.document.querySelector(input):input;var c=Object.keys(t.getFontList()),f=t.scaleFactor(),head=[],body=[],y=[];if(!h)return console.error("Html table could not be found with input: ",input),{head:head,body:body,foot:y};for(var i=0;i<h.rows.length;i++){var element=h.rows[i],v=null===(d=null===(r=null==element?void 0:element.parentElement)||void 0===r?void 0:r.tagName)||void 0===d?void 0:d.toLowerCase(),m=l(c,f,e,element,n,o);m&&("thead"===v?head.push(m):"tfoot"===v?y.push(m):body.push(m))}return{head:head,body:body,foot:y}}},587:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseInput=void 0;var o=n(148),r=n(360),l=n(200),d=n(323),h=n(291);function c(head,body,t){var e=head[0]||body[0]||t[0]||[],n=[];return Object.keys(e).filter((function(t){return"_element"!==t})).forEach((function(t){var input,o=1;"object"!=typeof(input=Array.isArray(e)?e[parseInt(t)]:e[t])||Array.isArray(input)||(o=(null==input?void 0:input.colSpan)||1);for(var i=0;i<o;i++){var r={dataKey:Array.isArray(e)?n.length:t+(i>0?"_".concat(i):"")};n.push(r)}})),n}e.parseInput=function(t,e){var n=new d.DocHandler(t),f=n.getDocumentOptions(),y=n.getGlobalOptions();(0,h.default)(n,y,f,e);var v,m=(0,r.assign)({},y,f,e);"undefined"!=typeof window&&(v=window);var w=function(t,e,n){for(var o={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},l=function(l){if("columnStyles"===l){var d=t[l],h=e[l],c=n[l];o.columnStyles=(0,r.assign)({},d,h,c)}else{var f=[t,e,n].map((function(t){return t[l]||{}}));o[l]=(0,r.assign)({},f[0],f[1],f[2])}},d=0,h=Object.keys(o);d<h.length;d++)l(h[d]);return o}(y,f,e),P=function(t,e,n){for(var o={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},r=0,l=[t,e,n];r<l.length;r++){var d=l[r];d.didParseCell&&o.didParseCell.push(d.didParseCell),d.willDrawCell&&o.willDrawCell.push(d.willDrawCell),d.didDrawCell&&o.didDrawCell.push(d.didDrawCell),d.willDrawPage&&o.willDrawPage.push(d.willDrawPage),d.didDrawPage&&o.didDrawPage.push(d.didDrawPage)}return o}(y,f,e),S=function(t,e){var n,o,r,d,h,c,f,y,v,m,w,P,S,x=(0,l.parseSpacing)(e.margin,40/t.scaleFactor()),C=null!==(n=function(t,e){var n=t.getLastAutoTable(),o=t.scaleFactor(),r=t.pageNumber(),l=!1;return n&&n.startPageNumber&&(l=n.startPageNumber+n.pageNumber-1===r),"number"==typeof e?e:null!=e&&!1!==e||!l||null==(null==n?void 0:n.finalY)?null:n.finalY+20/o}(t,e.startY))&&void 0!==n?n:x.top;P=!0===e.showFoot?"everyPage":!1===e.showFoot?"never":null!==(o=e.showFoot)&&void 0!==o?o:"everyPage",S=!0===e.showHead?"everyPage":!1===e.showHead?"never":null!==(r=e.showHead)&&void 0!==r?r:"everyPage";var W=null!==(d=e.useCss)&&void 0!==d&&d,D=e.theme||(W?"plain":"striped"),H=!!e.horizontalPageBreak,F=null!==(h=e.horizontalPageBreakRepeat)&&void 0!==h?h:null;return{includeHiddenHtml:null!==(c=e.includeHiddenHtml)&&void 0!==c&&c,useCss:W,theme:D,startY:C,margin:x,pageBreak:null!==(f=e.pageBreak)&&void 0!==f?f:"auto",rowPageBreak:null!==(y=e.rowPageBreak)&&void 0!==y?y:"auto",tableWidth:null!==(v=e.tableWidth)&&void 0!==v?v:"auto",showHead:S,showFoot:P,tableLineWidth:null!==(m=e.tableLineWidth)&&void 0!==m?m:0,tableLineColor:null!==(w=e.tableLineColor)&&void 0!==w?w:200,horizontalPageBreak:H,horizontalPageBreakRepeat:F}}(n,m),content=function(t,e,n){var head=e.head||[],body=e.body||[],r=e.foot||[];if(e.html){var l=e.includeHiddenHtml;if(n){var d=(0,o.parseHtml)(t,e.html,n,l,e.useCss)||{};head=d.head||head,body=d.body||head,r=d.foot||head}else console.error("Cannot parse html in non browser environment")}return{columns:e.columns||c(head,body,r),head:head,body:body,foot:r}}(n,m,v);return{id:e.tableId,content:content,hooks:P,styles:w,settings:S}}},291:function(t,e){function n(t){t.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),t.minCellHeight||(t.minCellHeight=t.rowHeight)):t.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),t.cellWidth||(t.cellWidth=t.columnWidth))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o,r){for(var l=function(e){e&&"object"!=typeof e&&console.error("The options parameter should be of type object, is: "+typeof e),void 0!==e.extendWidth&&(e.tableWidth=e.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),void 0!==e.margins&&(void 0===e.margin&&(e.margin=e.margins),console.error("Use of deprecated option: margins, use margin instead.")),e.startY&&"number"!=typeof e.startY&&(console.error("Invalid value for startY option",e.startY),delete e.startY),!e.didDrawPage&&(e.afterPageContent||e.beforePageContent||e.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),e.didDrawPage=function(data){t.applyStyles(t.userStyles),e.beforePageContent&&e.beforePageContent(data),t.applyStyles(t.userStyles),e.afterPageContent&&e.afterPageContent(data),t.applyStyles(t.userStyles),e.afterPageAdd&&data.pageNumber>1&&data.afterPageAdd(data),t.applyStyles(t.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach((function(t){e[t]&&console.error('The "'.concat(t,'" hook has changed in version 3.0, check the changelog for how to migrate.'))})),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach((function(t){var n=t[0],o=t[1];e[o]&&(console.error("Use of deprecated option ".concat(o,". Use ").concat(n," instead")),e[n]=e[o])})),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach((function(t){var n="string"==typeof t?t:t[0],style="string"==typeof t?t:t[1];void 0!==e[n]&&(void 0===e.styles[style]&&(e.styles[style]=e[n]),console.error("Use of deprecated option: "+n+", use the style "+style+" instead."))}));for(var o=0,r=["styles","bodyStyles","headStyles","footStyles"];o<r.length;o++)n(e[r[o]]||{});for(var l=e.columnStyles||{},d=0,h=Object.keys(l);d<h.length;d++)n(l[h[d]]||{})},d=0,h=[e,o,r];d<h.length;d++)l(h[d])}},287:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Column=e.Cell=e.Row=e.Table=void 0;var o=n(913),r=n(662),l=n(200),d=function(){function t(input,content){this.pageNumber=1,this.pageCount=1,this.id=input.id,this.settings=input.settings,this.styles=input.styles,this.hooks=input.hooks,this.columns=content.columns,this.head=content.head,this.body=content.body,this.foot=content.foot}return t.prototype.getHeadHeight=function(t){return this.head.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.getFootHeight=function(t){return this.foot.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(t,e,n,o,l,cursor){for(var d=0,h=e;d<h.length;d++){var c=!1===(0,h[d])(new r.CellHookData(t,this,n,o,l,cursor));if(n.text=Array.isArray(n.text)?n.text:[n.text],c)return!1}return!0},t.prototype.callEndPageHooks=function(t,cursor){t.applyStyles(t.userStyles);for(var e=0,n=this.hooks.didDrawPage;e<n.length;e++)(0,n[e])(new r.HookData(t,this,cursor))},t.prototype.callWillDrawPageHooks=function(t,cursor){for(var e=0,n=this.hooks.willDrawPage;e<n.length;e++)(0,n[e])(new r.HookData(t,this,cursor))},t.prototype.getWidth=function(t){if("number"==typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth)return this.columns.reduce((function(t,col){return t+col.wrappedWidth}),0);var e=this.settings.margin;return t-e.left-e.right},t}();e.Table=d;var h=function(){function t(t,e,section,n,r){void 0===r&&(r=!1),this.height=0,this.raw=t,t instanceof o.HtmlRowInput&&(this.raw=t._element,this.element=t._element),this.index=e,this.section=section,this.cells=n,this.spansMultiplePages=r}return t.prototype.getMaxCellHeight=function(t){var e=this;return t.reduce((function(t,n){var o;return Math.max(t,(null===(o=e.cells[n.index])||void 0===o?void 0:o.height)||0)}),0)},t.prototype.hasRowSpan=function(t){var e=this;return t.filter((function(t){var n=e.cells[t.index];return!!n&&n.rowSpan>1})).length>0},t.prototype.canEntireRowFit=function(t,e){return this.getMaxCellHeight(e)<=t},t.prototype.getMinimumRowHeight=function(t,e){var n=this;return t.reduce((function(t,o){var r=n.cells[o.index];if(!r)return 0;var l=e.getLineHeight(r.styles.fontSize),d=r.padding("vertical")+l;return d>t?d:t}),0)},t}();e.Row=h;var c=function(){function t(t,e,section){var n,o;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=e,this.section=section,this.raw=t;var content=t;null==t||"object"!=typeof t||Array.isArray(t)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=t.rowSpan||1,this.colSpan=t.colSpan||1,content=null!==(o=null!==(n=t.content)&&void 0!==n?n:t.title)&&void 0!==o?o:t,t._element&&(this.raw=t._element));var text=null!=content?""+content:"";this.text=text.split(/\r\n|\r|\n/g)}return t.prototype.getTextPos=function(){var t,e;if("top"===this.styles.valign)t=this.y+this.padding("top");else if("bottom"===this.styles.valign)t=this.y+this.height-this.padding("bottom");else{var n=this.height-this.padding("vertical");t=this.y+n/2+this.padding("top")}if("right"===this.styles.halign)e=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var o=this.width-this.padding("horizontal");e=this.x+o/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:t}},t.prototype.getContentHeight=function(t,e){void 0===e&&(e=1.15);var n=(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/t*e)+this.padding("vertical");return Math.max(n,this.styles.minCellHeight)},t.prototype.padding=function(t){var e=(0,l.parseSpacing)(this.styles.cellPadding,0);return"vertical"===t?e.top+e.bottom:"horizontal"===t?e.left+e.right:e[t]},t}();e.Cell=c;var f=function(){function t(t,e,n){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=t,this.raw=e,this.index=n}return t.prototype.getMaxCustomCellWidth=function(table){for(var t=0,e=0,n=table.allRows();e<n.length;e++){var o=n[e].cells[this.index];o&&"number"==typeof o.styles.cellWidth&&(t=Math.max(t,o.styles.cellWidth))}return t},t}();e.Column=f},360:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.assign=void 0,e.assign=function(t,s,e,n,o){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(t),l=1;l<arguments.length;l++){var d=arguments[l];if(null!=d)for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r}},858:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=void 0;var o=n(323),r=n(287),l=n(189),d=n(913),h=n(360);function c(t,e,n,o,l,d){var h={};return e.map((function(e,c){for(var f=0,v={},m=0,w=0,P=0,S=n;P<S.length;P++){var x=S[P];if(null==h[x.index]||0===h[x.index].left)if(0===w){var C=void 0,W={};"object"!=typeof(C=Array.isArray(e)?e[x.index-m-f]:e[x.dataKey])||Array.isArray(C)||(W=(null==C?void 0:C.styles)||{});var D=y(t,x,c,l,o,d,W),H=new r.Cell(C,D,t);v[x.dataKey]=H,v[x.index]=H,w=H.colSpan-1,h[x.index]={left:H.rowSpan-1,times:w}}else w--,m++;else h[x.index].left--,w=h[x.index].times,f++}return new r.Row(e,c,t,v)}))}function f(t,section){var e={};return t.forEach((function(col){if(null!=col.raw){var title=function(section,t){if("head"===section){if("object"==typeof t)return t.header||t.title||null;if("string"==typeof t||"number"==typeof t)return t}else if("foot"===section&&"object"==typeof t)return t.footer;return null}(section,col.raw);null!=title&&(e[col.dataKey]=title)}})),Object.keys(e).length>0?e:null}function y(t,e,n,o,r,l,c){var f,y=(0,d.getTheme)(o);"head"===t?f=r.headStyles:"body"===t?f=r.bodyStyles:"foot"===t&&(f=r.footStyles);var v=(0,h.assign)({},y.table,y[t],r.styles,f),m=r.columnStyles[e.dataKey]||r.columnStyles[e.index]||{},w="body"===t?m:{},P="body"===t&&n%2==0?(0,h.assign)({},y.alternateRow,r.alternateRowStyles):{},S=(0,d.defaultStyles)(l),x=(0,h.assign)({},S,v,P,w);return(0,h.assign)(x,c)}e.createTable=function(t,input){var e=new o.DocHandler(t),content=function(input,t){var e,content=input.content,n=function(t){return t.map((function(input,t){var e,n,o;return o="object"==typeof input&&null!==(n=null!==(e=input.dataKey)&&void 0!==e?e:input.key)&&void 0!==n?n:t,new r.Column(o,input,t)}))}(content.columns);(0===content.head.length&&(e=f(n,"head"))&&content.head.push(e),0===content.foot.length)&&((e=f(n,"foot"))&&content.foot.push(e));var o=input.settings.theme,l=input.styles;return{columns:n,head:c("head",content.head,n,l,o,t),body:c("body",content.body,n,l,o,t),foot:c("foot",content.foot,n,l,o,t)}}(input,e.scaleFactor()),table=new r.Table(input,content);return(0,l.calculateWidths)(e,table),e.applyStyles(e.userStyles),table}},49:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.addPage=e.drawTable=void 0;var o=n(200),r=n(287),l=n(323),d=n(360),h=n(938),c=n(435);function f(t,e,n){var o=n.getLineHeight(t.styles.fontSize),r=t.padding("vertical"),l=Math.floor((e-r)/o);return Math.max(0,l)}function y(t,table,e,n,o,cursor,l){var h=function(t,table,e,cursor){var n=table.settings.margin.bottom,o=table.settings.showFoot;return("everyPage"===o||"lastPage"===o&&e)&&(n+=table.getFootHeight(table.columns)),t.pageSize().height-cursor.y-n}(t,table,n,cursor);if(e.canEntireRowFit(h,l))v(t,table,e,cursor,l);else if(function(t,e,n,table){var o=t.pageSize().height,r=table.settings.margin,l=o-(r.top+r.bottom);"body"===e.section&&(l-=table.getHeadHeight(table.columns)+table.getFootHeight(table.columns));var d=e.getMinimumRowHeight(table.columns,t),h=d<n;if(d>l)return console.error("Will not be able to print row ".concat(e.index," correctly since it's minimum height is larger than page height")),!0;if(!h)return!1;var c=e.hasRowSpan(table.columns);return e.getMaxCellHeight(table.columns)>l?(c&&console.error("The content of row ".concat(e.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!c&&"avoid"!==table.settings.rowPageBreak}(t,e,h,table)){var c=function(t,e,table,n){var o={};t.spansMultiplePages=!0,t.height=0;for(var l=0,h=0,c=table.columns;h<c.length;h++){var y=c[h];if(W=t.cells[y.index]){Array.isArray(W.text)||(W.text=[W.text]);var v=new r.Cell(W.raw,W.styles,W.section);(v=(0,d.assign)(v,W)).text=[];var m=f(W,e,n);W.text.length>m&&(v.text=W.text.splice(m,W.text.length));var w=n.scaleFactor(),P=n.lineHeightFactor;W.contentHeight=W.getContentHeight(w,P),W.contentHeight>=e&&(W.contentHeight=e,v.styles.minCellHeight-=e),W.contentHeight>t.height&&(t.height=W.contentHeight),v.contentHeight=v.getContentHeight(w,P),v.contentHeight>l&&(l=v.contentHeight),o[y.index]=v}}var S=new r.Row(t.raw,-1,t.section,o,!0);S.height=l;for(var x=0,C=table.columns;x<C.length;x++){var W;y=C[x],(v=S.cells[y.index])&&(v.height=S.height),(W=t.cells[y.index])&&(W.height=t.height)}return S}(e,h,table,t);v(t,table,e,cursor,l),w(t,table,o,cursor,l),y(t,table,c,n,o,cursor,l)}else w(t,table,o,cursor,l),y(t,table,e,n,o,cursor,l)}function v(t,table,e,cursor,n){cursor.x=table.settings.margin.left;for(var o=0,r=n;o<r.length;o++){var l=r[o],d=e.cells[l.index];if(d)if(t.applyStyles(d.styles),d.x=cursor.x,d.y=cursor.y,!1!==table.callCellHooks(t,table.hooks.willDrawCell,d,e,l,cursor)){m(t,d,cursor);var c=d.getTextPos();(0,h.default)(d.text,c.x,c.y,{halign:d.styles.halign,valign:d.styles.valign,maxWidth:Math.ceil(d.width-d.padding("left")-d.padding("right"))},t.getDocument()),table.callCellHooks(t,table.hooks.didDrawCell,d,e,l,cursor),cursor.x+=l.width}else cursor.x+=l.width;else cursor.x+=l.width}cursor.y+=e.height}function m(t,e,cursor){var n=e.styles;if(t.getDocument().setFillColor(t.getDocument().getFillColor()),"number"==typeof n.lineWidth){var r=(0,o.getFillStyle)(n.lineWidth,n.fillColor);r&&t.rect(e.x,cursor.y,e.width,e.height,r)}else"object"==typeof n.lineWidth&&(n.fillColor&&t.rect(e.x,cursor.y,e.width,e.height,"F"),function(t,e,cursor,n){var o,r,l,d;function h(e,n,o,r,l){t.getDocument().setLineWidth(e),t.getDocument().line(n,o,r,l,"S")}n.top&&(o=cursor.x,r=cursor.y,l=cursor.x+e.width,d=cursor.y,n.right&&(l+=.5*n.right),n.left&&(o-=.5*n.left),h(n.top,o,r,l,d)),n.bottom&&(o=cursor.x,r=cursor.y+e.height,l=cursor.x+e.width,d=cursor.y+e.height,n.right&&(l+=.5*n.right),n.left&&(o-=.5*n.left),h(n.bottom,o,r,l,d)),n.left&&(o=cursor.x,r=cursor.y,l=cursor.x,d=cursor.y+e.height,n.top&&(r-=.5*n.top),n.bottom&&(d+=.5*n.bottom),h(n.left,o,r,l,d)),n.right&&(o=cursor.x+e.width,r=cursor.y,l=cursor.x+e.width,d=cursor.y+e.height,n.top&&(r-=.5*n.top),n.bottom&&(d+=.5*n.bottom),h(n.right,o,r,l,d))}(t,e,cursor,n.lineWidth))}function w(t,table,e,cursor,n){void 0===n&&(n=[]),t.applyStyles(t.userStyles),"everyPage"===table.settings.showFoot&&table.foot.forEach((function(e){return v(t,table,e,cursor,n)})),table.callEndPageHooks(t,cursor);var r=table.settings.margin;(0,o.addTableBorder)(t,table,e,cursor),P(t),table.pageNumber++,table.pageCount++,cursor.x=r.left,cursor.y=r.top,e.y=r.top,table.callWillDrawPageHooks(t,cursor),"everyPage"===table.settings.showHead&&(table.head.forEach((function(e){return v(t,table,e,cursor,n)})),t.applyStyles(t.userStyles))}function P(t){var e=t.pageNumber();return t.setPage(e+1),t.pageNumber()===e&&(t.addPage(),!0)}e.drawTable=function(t,table){var e=table.settings,n=e.startY,r=e.margin,cursor={x:r.left,y:n},h=table.getHeadHeight(table.columns)+table.getFootHeight(table.columns),f=n+r.bottom+h;"avoid"===e.pageBreak&&(f+=table.body.reduce((function(t,e){return t+e.height}),0));var m=new l.DocHandler(t);("always"===e.pageBreak||null!=e.startY&&f>m.pageSize().height)&&(P(m),cursor.y=r.top),table.callWillDrawPageHooks(m,cursor);var S=(0,d.assign)({},cursor);table.startPageNumber=m.pageNumber(),e.horizontalPageBreak?function(t,table,e,cursor){(0,c.calculateAllColumnsCanFitInPage)(t,table).map((function(n,o){t.applyStyles(t.userStyles),o>0?w(t,table,e,cursor,n.columns):function(t,table,cursor,e){var n=table.settings;t.applyStyles(t.userStyles),("firstPage"===n.showHead||"everyPage"===n.showHead)&&table.head.forEach((function(n){return v(t,table,n,cursor,e)}))}(t,table,cursor,n.columns),function(t,table,e,cursor,n){t.applyStyles(t.userStyles),table.body.forEach((function(o,r){var l=r===table.body.length-1;y(t,table,o,l,e,cursor,n)}))}(t,table,e,cursor,n.columns),function(t,table,cursor,e){var n=table.settings;t.applyStyles(t.userStyles),("lastPage"===n.showFoot||"everyPage"===n.showFoot)&&table.foot.forEach((function(n){return v(t,table,n,cursor,e)}))}(t,table,cursor,n.columns)}))}(m,table,S,cursor):(m.applyStyles(m.userStyles),"firstPage"!==e.showHead&&"everyPage"!==e.showHead||table.head.forEach((function(t){return v(m,table,t,cursor,table.columns)})),m.applyStyles(m.userStyles),table.body.forEach((function(t,e){var n=e===table.body.length-1;y(m,table,t,n,S,cursor,table.columns)})),m.applyStyles(m.userStyles),"lastPage"!==e.showFoot&&"everyPage"!==e.showFoot||table.foot.forEach((function(t){return v(m,table,t,cursor,table.columns)}))),(0,o.addTableBorder)(m,table,S,cursor),table.callEndPageHooks(m,cursor),table.finalY=cursor.y,t.lastAutoTable=table,t.previousAutoTable=table,t.autoTable&&(t.autoTable.previous=table),m.applyStyles(m.userStyles)},e.addPage=w},435:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateAllColumnsCanFitInPage=void 0;var o=n(200);function r(t,table,e){var n;void 0===e&&(e={});var r=(0,o.getPageAvailableWidth)(t,table),l=new Map,d=[],h=[],c=[];table.settings.horizontalPageBreakRepeat,Array.isArray(table.settings.horizontalPageBreakRepeat)?c=table.settings.horizontalPageBreakRepeat:"string"!=typeof table.settings.horizontalPageBreakRepeat&&"number"!=typeof table.settings.horizontalPageBreakRepeat||(c=[table.settings.horizontalPageBreakRepeat]),c.forEach((function(t){var col=table.columns.find((function(e){return e.dataKey===t||e.index===t}));col&&!l.has(col.index)&&(l.set(col.index,!0),d.push(col.index),h.push(table.columns[col.index]),r-=col.wrappedWidth)}));for(var f=!0,i=null!==(n=null==e?void 0:e.start)&&void 0!==n?n:0;i<table.columns.length;)if(l.has(i))i++;else{var y=table.columns[i].wrappedWidth;if(!(f||r>=y))break;f=!1,d.push(i),h.push(table.columns[i]),r-=y,i++}return{colIndexes:d,columns:h,lastIndex:i-1}}e.calculateAllColumnsCanFitInPage=function(t,table){for(var e=[],i=0;i<table.columns.length;i++){var n=r(t,table,{start:i});n.columns.length&&(e.push(n),i=n.lastIndex)}return e}},189:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ellipsize=e.resizeColumns=e.calculateWidths=void 0;var o=n(200);function r(t,e,n){for(var o=e,l=t.reduce((function(t,e){return t+e.wrappedWidth}),0),i=0;i<t.length;i++){var d=t[i],h=o*(d.wrappedWidth/l),c=d.width+h,f=n(d),y=c<f?f:c;e-=y-d.width,d.width=y}if(e=Math.round(1e10*e)/1e10){var v=t.filter((function(t){return!(e<0)||t.width>n(t)}));v.length&&(e=r(v,e,n))}return e}function l(text,t,e,n,r){return text.map((function(l){return function(text,t,e,n,r){var l=1e4*n.scaleFactor();if((t=Math.ceil(t*l)/l)>=(0,o.getStringWidth)(text,e,n))return text;for(;t<(0,o.getStringWidth)(text+r,e,n)&&!(text.length<=1);)text=text.substring(0,text.length-1);return text.trim()+r}(l,t,e,n,r)}))}e.calculateWidths=function(t,table){!function(t,table){var e=t.scaleFactor(),n=table.settings.horizontalPageBreak,r=(0,o.getPageAvailableWidth)(t,table);table.allRows().forEach((function(l){for(var d=0,h=table.columns;d<h.length;d++){var c=h[d],f=l.cells[c.index];if(f){var y=table.hooks.didParseCell;table.callCellHooks(t,y,f,l,c,null);var v=f.padding("horizontal");f.contentWidth=(0,o.getStringWidth)(f.text,f.styles,t)+v;var m=(0,o.getStringWidth)(f.text.join(" ").split(/\s+/),f.styles,t);if(f.minReadableWidth=m+f.padding("horizontal"),"number"==typeof f.styles.cellWidth)f.minWidth=f.styles.cellWidth,f.wrappedWidth=f.styles.cellWidth;else if("wrap"===f.styles.cellWidth||!0===n)f.contentWidth>r?(f.minWidth=r,f.wrappedWidth=r):(f.minWidth=f.contentWidth,f.wrappedWidth=f.contentWidth);else{var w=10/e;f.minWidth=f.styles.minCellWidth||w,f.wrappedWidth=f.contentWidth,f.minWidth>f.wrappedWidth&&(f.wrappedWidth=f.minWidth)}}}})),table.allRows().forEach((function(t){for(var e=0,n=table.columns;e<n.length;e++){var o=n[e],r=t.cells[o.index];if(r&&1===r.colSpan)o.wrappedWidth=Math.max(o.wrappedWidth,r.wrappedWidth),o.minWidth=Math.max(o.minWidth,r.minWidth),o.minReadableWidth=Math.max(o.minReadableWidth,r.minReadableWidth);else{var l=table.styles.columnStyles[o.dataKey]||table.styles.columnStyles[o.index]||{},d=l.cellWidth||l.minCellWidth;d&&"number"==typeof d&&(o.minWidth=d,o.wrappedWidth=d)}r&&(r.colSpan>1&&!o.minWidth&&(o.minWidth=r.minWidth),r.colSpan>1&&!o.wrappedWidth&&(o.wrappedWidth=r.minWidth))}}))}(t,table);var e=[],n=0;table.columns.forEach((function(t){var o=t.getMaxCustomCellWidth(table);o?t.width=o:(t.width=t.wrappedWidth,e.push(t)),n+=t.width}));var d=table.getWidth(t.pageSize().width)-n;d&&(d=r(e,d,(function(t){return Math.max(t.minReadableWidth,t.minWidth)}))),d&&(d=r(e,d,(function(t){return t.minWidth}))),d=Math.abs(d),!table.settings.horizontalPageBreak&&d>.1/t.scaleFactor()&&(d=d<1?d:Math.round(d),console.warn("Of the table content, ".concat(d," units width could not fit page"))),function(table){for(var t=table.allRows(),e=0;e<t.length;e++)for(var n=t[e],o=null,r=0,l=0,d=0;d<table.columns.length;d++){var h=table.columns[d];if((l-=1)>1&&table.columns[d+1])r+=h.width,delete n.cells[h.index];else if(o){var c=o;delete n.cells[h.index],o=null,c.width=h.width+r}else{if(!(c=n.cells[h.index]))continue;if(l=c.colSpan,r=0,c.colSpan>1){o=c,r+=h.width;continue}c.width=h.width+r}}}(table),function(table,t){for(var e={count:0,height:0},n=0,o=table.allRows();n<o.length;n++){for(var r=o[n],d=0,h=table.columns;d<h.length;d++){var c=h[d],f=r.cells[c.index];if(f){t.applyStyles(f.styles,!0);var y=f.width-f.padding("horizontal");if("linebreak"===f.styles.overflow)f.text=t.splitTextToSize(f.text,y+1/t.scaleFactor(),{fontSize:f.styles.fontSize});else if("ellipsize"===f.styles.overflow)f.text=l(f.text,y,f.styles,t,"...");else if("hidden"===f.styles.overflow)f.text=l(f.text,y,f.styles,t,"");else if("function"==typeof f.styles.overflow){var v=f.styles.overflow(f.text,y);f.text="string"==typeof v?[v]:v}f.contentHeight=f.getContentHeight(t.scaleFactor(),t.lineHeightFactor);var m=f.contentHeight/f.rowSpan;f.rowSpan>1&&e.count*e.height<m*f.rowSpan?e={height:m,count:f.rowSpan}:e&&e.count>0&&e.height>m&&(m=e.height),m>r.height&&(r.height=m)}}e.count--}}(table,t),function(table){for(var t={},e=1,n=table.allRows(),o=0;o<n.length;o++)for(var r=n[o],l=0,d=table.columns;l<d.length;l++){var h=d[l],data=t[h.index];if(e>1)e--,delete r.cells[h.index];else if(data)data.cell.height+=r.height,e=data.cell.colSpan,delete r.cells[h.index],data.left--,data.left<=1&&delete t[h.index];else{var c=r.cells[h.index];if(!c)continue;if(c.height=r.height,c.rowSpan>1){var f=n.length-o,y=c.rowSpan>f?f:c.rowSpan;t[h.index]={cell:c,left:y,row:r}}}}}(table)},e.resizeColumns=r,e.ellipsize=l},84:function(e){if(void 0===t){var n=new Error("Cannot find module 'undefined'");throw n.code="MODULE_NOT_FOUND",n}e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var l=n[t]={exports:{}};return e[t].call(l.exports,l,l.exports,o),l.exports}var r={};return function(){var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=t.Column=t.Row=t.Table=t.CellHookData=t.__drawTable=t.__createTable=t.applyPlugin=void 0;var e=o(790),n=o(587),l=o(49),d=o(858),h=o(287);Object.defineProperty(t,"Table",{enumerable:!0,get:function(){return h.Table}});var c=o(662);Object.defineProperty(t,"CellHookData",{enumerable:!0,get:function(){return c.CellHookData}});var f=o(287);function y(t){(0,e.default)(t)}Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return f.Cell}}),Object.defineProperty(t,"Column",{enumerable:!0,get:function(){return f.Column}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return f.Row}}),t.applyPlugin=y,t.__createTable=function(t,e){var input=(0,n.parseInput)(t,e);return(0,d.createTable)(t,input)},t.__drawTable=function(t,table){(0,l.drawTable)(t,table)};try{var v=o(84);v.jsPDF&&(v=v.jsPDF),y(v)}catch(t){}t.default=function(t,e){var input=(0,n.parseInput)(t,e),table=(0,d.createTable)(t,input);(0,l.drawTable)(t,table)}}(),r}()},t.exports=o(function(){try{return n(674)}catch(t){}}())}).call(this,n(75))},815:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);