(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[104],{7059:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(110),r=n(32),o=n(2206),s=n(2214),c=n(188),d=n(87),l=n(33),u=n(118),f=n(2351),p=n(2688),m=n(808),_=n(178),h=n(64),b=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this;return a.name="PrintPdf",a._platform=a.resources.consume(c.e),a._navigation=a.resources.consume(d.e),a._itemCommandHelper=a.resources.consume(f.t),a._itemSelectionHelper=new(a.child(s.e))({allowMultiSelect:!1,canFallback:!1,overrideItem:t.item}),a}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._itemSelectionHelper.firstItem();return!!e&&!(".pdf"!==e.extension&&(!e.officeBundle||"ms-powerpoint"!==e.appMap&&"ms-word"!==e.appMap||!e.urls[m.t.viewInBrowser]||this._platform.isEdge||this._platform.isIE))&&!this._platform.isMobile&&Object(l.isFeatureEnabled)(l.UseWebPdfViewer)&&this._itemCommandHelper.isCommandSupported(e,p.u)&&e.itemStatus!==_.t.ConditionalAccessViewOnly&&e.itemStatus!==_.t.ConditionalAccessBlocked&&h.e.hasItemPermission(e,h.e.openItems)},t.prototype.onExecute=function(e,t){return Object(a.__awaiter)(this,void 0,i.n,function(){var e,t,n;return Object(a.__generator)(this,function(a){switch(a.label){case 0:return[4,this._itemSelectionHelper.resolveFirst()];case 1:return(e=a.sent())?this._platform.isIE?(this._navigation.navigateTo({url:e.openUrl,frameId:"_blank"}),[2,i.n.resolve({resultType:r.t.Success})]):(t="printPdf_".concat(Math.random()),n=window.open("",t),[2,(e.officeBundle&&("ms-powerpoint"===e.appMap||"ms-word"===e.appMap)&&e.urls&&e.urls[m.t.viewInBrowser]?i.n.resolve(e.urls[m.t.viewInBrowser]):"pdf"===e.iconName&&e.openUrl?i.n.resolve(e.openUrl):this.resources.consumeAsync(u.c).then(function(t){return t.getDownloadUrl(e,{downloadType:1})})).then(function(e){return null==n||n.location.assign(e),{resultType:r.t.Success}},function(){return n&&n.close(),{resultType:r.t.Failure}})]):[2,i.n.resolve({resultCode:"EmptySelection",resultType:r.t.Failure})]}})})},t}(o.e);t.default=b}}]);