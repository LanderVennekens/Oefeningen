(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[80],{7054:function(e,t,n){"use strict";n.r(t),n.d(t,"LaunchPdfMergeAction",function(){return c});var a=n(0),i=n(110),r=n(32),o=n(2206),s=n(2214),c=function(e){function t(t,n){void 0===n&&(n={});var a=e.call(this,t,n)||this;return a.name="LaunchPdfMergeAction",a._itemSelectionHelper=new(a.child(s.e))({overrideItem:t.item}),a._pdfViewerHelper=t.pdfViewerHelper,a.showHintStar=t.showHintStar,a}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._itemSelectionHelper.firstItem();return!!e&&this._pdfViewerHelper.isPdfExtractAvailable(e)&&this._pdfViewerHelper.isPdfEditable(e)},t.prototype.onExecute=function(){return this._pdfViewerHelper.state.filePickerMode("merge"),this.showHintStar.peek()&&this.showHintStar(!1),i.n.wrap({resultType:r.t.Success})},t}(o.e);t.default=c}}]);