(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["deferred.odsp-datasources"],{2463:function(e,t,n){"use strict";n.d(t,"e",function(){return r});var a=n(349),i=n(40),r=Object(a.e)({eventName:"SuiteNavError,",shortEventName:"SuiteNavError"},{message:i.e.String,stack:i.e.String,type:i.e.String})},2466:function(e,t,n){"use strict";n.d(t,"e",function(){return h});var a=n(2603),i=n(110),r=n(2657),o=n(104),s=n(2257),c=n(1185),d=function(){function e(e){this._pageContext=e.pageContext?e.pageContext:window._spPageContextInfo,this._getThemeDataSource=e.getThemeDataSource,this._themeProvider=new r.e(this._loadTheme.bind(this))}return e.prototype.loadThemeSlotsMap=function(e){var t=this._getThemeCacheToken();return t?this._themeProvider.loadThemeTokenMap(t,e):i.n.resolve()},e.prototype.loadFullFormattedThemeData=function(e){var t=this;return this.loadFullThemeData(e).then(function(e){if(e){var n={},a=e.palette;for(var i in a){var o=a[i];o&&(n[i]=s.e.toHtmlString(o))}e.backgroundImageUri&&(n.backgroundImageUri=r.e.getBackgroundUrl(e));var d={palette:n,isInverted:e.isInverted};return Object(c.e)(d,t._pageContext)}})},e.prototype.loadFullThemeData=function(e){var t=this._getThemeCacheToken();return t?this._themeProvider.loadThemeData(t,e):i.n.resolve(void 0)},e.prototype._getThemeCacheToken=function(){var e,t=this._pageContext;if(t){var n=Number(t.webTemplate),a=n===o.e.teamSite||n===o.e.group?t.groupColor:void 0,i=a?a+";web#"+t.webTemplate:null;e=t.themedCssFolderUrl||i||null}return e},e.prototype._loadTheme=function(e){return this._getThemeCacheToken()?(this._themeDataSource||(this._themeDataSource=this._getThemeDataSource()),this._themeDataSource.then(function(t){return t?t.loadTheme(e):i.n.resolve()})):i.n.resolve()},e}(),l=n(248),u=n(374),f=n(2470),p=n(2641),m=n(810).n?"#0078d4":"#03787c",_=function(){function e(e){this._pageContext=e,this._dataRequestor=new u.e({qosName:"WebThemeDataSource"},{pageContext:e})}return e.prototype.getCacheToken=function(){var e="",t=this._pageContext;if(t){var n=Number(t.webTemplate),a=n!==o.t.mySite&&n!==o.t.mySiteHost?t.groupColor:m;e=t.themedCssFolderUrl||a}return e},e.prototype.loadTheme=function(e){return!e&&this._dataPromise?this._dataPromise:this.getCacheToken()?(this._dataPromise=this._pageContext.themedCssFolderUrl?this.loadServerTheme():this.loadGeneratedTheme(),this._dataPromise):this._dataPromise=i.n.resolve()},e.prototype.needsRequestDigest=function(e){return!1},e.prototype.loadGeneratedTheme=function(){var e=this._pageContext.groupColor||m,t=s.e.fromHtmlColor(e);if(t){var n={backgroundImageUri:null,cacheToken:e,isDefault:!1,isInverted:!1,palette:f.e.generateFabricColors(t),version:"1"};return i.n.resolve(n)}return i.n.resolve()},e.prototype.loadServerTheme=function(){var e=this,t=Object(l.o)(this._pageContext),n=this._pageContext.currentUICultureName,a=this._pageContext.themedCssFolderUrl,i=this.getCacheToken()===a&&a||void 0,r=p.e.makeWebThemeRestUrl(t,n,i),o=this._dataRequestor.getData({url:r,parseResponse:function(t){return e._data=p.e.processWebThemeRestResponse(t),e._data},qosName:"WebThemeDataSource.LoadData",method:"GET"});return o.done(null,function(){e._dataPromise=null}),o},e}();function h(e){var t=e||window._spPageContextInfo,n={webThemeProvider:function(){return new d({pageContext:t,getThemeDataSource:function(){return i.n.resolve(new _(t))}})}};return Object(a.e)(n,t)}},2603:function(e,t,n){"use strict";var a,i;function r(e,t){return a&&i===e||(a=function(e,t){var n,a=t||window._spPageContextInfo;return a&&(n=e.webThemeProvider(a)),n}(e,t),i=e),a}n.d(t,"e",function(){return r})},2642:function(e,t,n){"use strict";n.d(t,"e",function(){return C});var a=n(0),i=n(19),r=n(258),o=n(131),s=n(72),c=n(3101),d=n(2463),l=n(104),u=n(1322),f=n(193),p=n(222),m=n(5),_=n(2466),h=n(810),b=n(110),g=n(1298),v=n(86),y=n(32),S=n(1348),D=n(214),I={ODB:556,ODC:null,Fallback:!1},x={ODB:1302,ODC:null,Fallback:!1},C=function(e){function t(t,n){var a=e.call(this,{engagementEvent:v.e,qosEvents:{"SuiteNavProvider.GetO365Shell":new y.e({name:"SuiteNavProvider.GetO365Shell"})}},n)||this;return a._dataSource=n.dataSource,a._cssLoaded=!1,a._isSuiteNavBootstrapperLoadingFlowEnabled=p.n.isFeatureEnabled(x),a._isAdditionalFeedbackKsActivated=m.t.isActivated("45e4c761-cac2-442c-b789-ed37039a99bd","06/27/2023","Additional feedback metadata"),a}return Object(a.__extends)(t,e),t.prototype.clearCachedPromise=function(){this._modelPromise=void 0},t.prototype.loadData=function(e){return this._loadModel(e).then(function(e){return e.data})},t.prototype.getO365Shell=function(){if(this._isSuiteNavBootstrapperLoadingFlowEnabled)return e.prototype.getO365Shell.call(this);if(!this._capabilities.supportsRealSuiteNav)throw new Error("getO365Shell is only supported if supportsRealSuiteNav capability is true.");var t=new r.e,n=new y.e({name:"SuiteNavProvider.GetO365Shell"});return this._getSuiteNavShell(t),t.getPromise().then(function(){n.end({resultType:y.t.Success})},function(e){n.end(Object(S.n)({error:e}))}),t.getPromise()},t.prototype.getMailUrl=function(){return this._loadModel().then(function(e){var t=e&&e.data&&e.data.WorkloadLinks;if(t)for(var n=0,a=t;n<a.length;n++){var i=a[n];if(i&&i.Id===u.e.MAIL)return i.Url}})},t.prototype.updateWorkloadSettingsLinks=function(e){var t,n=this;return this.getO365Shell().then(function(a){return(t=a)&&t.Settings?n.loadData(e):void 0}).then(function(e){e&&e.CurrentWorkloadSettingsSubLinks&&e.CurrentWorkloadSettingsSubLinks.length>0&&t.Settings.SetWorkloadSettingsLinks(e.CurrentWorkloadSettingsSubLinks)}).catch(function(e){v.e.logData({name:"SuiteNavProvider.UpdateWorkloadSettingsLinksError"})})},t.prototype.trySetDataAfterInitialRender=function(e,t){var n=this,i=this._dataSource.getSuiteNavContext();if(i&&i.isConsumer)return m.t.isActivated("0461c2e7-c91a-4038-b591-09477f3f84a6","09/27/2021","Extra SuiteNav configuration for Consumer")||e.NFD&&(i.helpNamespace&&e.NFD.UpdateHelpNamespace(i.helpNamespace),e.NFD.OnFeedbackMetadataRequested(function(e,t){return n._dataSource.setFeedbackMetadata(e,t)}),this._addFeedbackButton(e)),m.t.isActivated("F9F01D2F-A402-49F0-97B9-C03F77BEAD5B","01/24/2022","SuiteNav Settings Gear links configuration for Consumer")||i.actionsMap&&e.Navigation.OnLinkClick(function(e){var t=i.actionsMap[e.Id];t&&(e.Cancel=!t(Object(a.__assign)({},e)))}),b.n.wrap(!0);var r=t.actionContext,o=t.bundleLoader;return this.loadData().then(function(t){if(!t)return!1;if(!e)return!1;var i=n._isStreamAspx(),s=n._isVideoEditorAspx(),c=(i||s||n._isFeedbackButtonEnabled())&&!!e.NFD,d=c&&(i||s||n._shouldAddFeedbackButton(e));if(!m.t.isActivated("D53C7E57-43E3-43D2-BD92-0CE11407B405","08/10/2023","Do not add feedback for gov")&&n._pageContext){var l=n._pageContext,u=l.cloudType,f=l.env2;(Object(D.o)(f)||Object(D.n)(f)||"gcc"===u)&&(d=c=!1)}if(d){var p=JSON.parse(t.ClientData);n._isFeedbackButtonEnabled()&&(h.e||!n._isAdditionalFeedbackKsActivated&&h.a)&&(p.EnableVNextFeedback=!0,m.t.isActivated("8E4E0583-F606-4DF8-AA14-18ADDC96094D")||(p.OcpsOauthEnabled=!0),m.t.isActivated("1665EA13-D09A-4B48-B978-C7FB99D8AF4C")||(p.OcpsOauthEndpointUrl="https://clients.config.office.net/user/v1.0/web/policies")),p.OCVFeedbackMAXEnabled||!n._isAdditionalFeedbackKsActivated&&h.a?m.t.isActivated("7897BF84-323B-4580-95D2-A14836FE65F6","09/15/2021","Stop modifying OCVFeedbackMAXEnabled")||(p.OCVFeedbackMAXEnabled=!1,t.ClientData=JSON.stringify(p)):c=d=!1}try{e.SetData(t)}catch(e){return y.e.instrumentPromise({name:"SuiteNav.RefreshCacheAfterInvalidShellData"},function(){return n.loadData(!0)}),!1}return t.ActionsMap&&e.Navigation.OnLinkClick(function(e){var n=t.ActionsMap[e.Id];n&&(e.Cancel=!n(Object(a.__assign)(Object(a.__assign)({},e),r||{})))}),e.OnHasMember("OnDataChanged",function(){e.OnDataChanged(function(){return y.e.instrumentPromise({name:"SuiteNav.RefreshCacheForShellDataChanged"},function(){return n.loadData(!0)}).done()})}),c&&(e.NFD.OnFeedbackMetadataRequested(function(e,t){return n._dataSource.setFeedbackMetadata(e,t)}),d&&n._addFeedbackButton(e)),o&&o.pageRenderingIsComplete(),!0},function(e){return v.e.logData({name:"SuiteNavProvider.LoadDataError"}),!1})},t.prototype._getSuiteNavShell=function(e,t){var n=this;this._loadModel().then(function(a){!n._cssLoaded&&a.cssUrl&&(g.e.loadStylesheet(a.cssUrl),n._dataSource.onCssLoad&&n._dataSource.onCssLoad(a),n._cssLoaded=!0),n._requestShellCore(a.jsUrl,t,O).then(function(t){e.complete(t)},function(t){n._modelPromise=void 0,(t=Object(S.n)({error:t}))&&"LoadScriptError"===t.resultCode&&n._isDataFromCache?(v.e.logData({name:"SuiteNavProvider.O365ShellCacheFailed"}),n._clearCache(),n._getSuiteNavShell(e)):n._hasRetriedShell?e.error(t):(n._hasRetriedShell=!0,n._cssLoaded=!1,v.e.logData({name:"SuiteNavProvider.O365ShellRetry"}),n._getSuiteNavShell(e,!0))})})},t.prototype._loadModel=function(e){var t=this;if(!e&&this._modelPromise)return this._modelPromise;var n,a,i=new r.e,o=this._capabilities.supportsCaching,s=this._dataSource,c=y.t.Failure,d=y.e.instrumentPromise({name:"SuiteNavProvider.LoadData"},function(){return new b.n(function(a,i){var r;!e&&o&&t._isCacheValid()&&(r=t._cache.getValue(t._cacheDataKey)),r&&r.data?(s.updateDataForCurrentPage&&(r.data=s.updateDataForCurrentPage(r.data)),o&&t._isCacheOutdated()&&s.loadData().then(function(e){t._updateCache(e)}),t._isDataFromCache=!0,a(r)):(t._isDataFromCache=!1,s.loadData().done(function(e){e?e.data?(o&&!function(e){var t=e&&e.data&&e.data.WorkloadLinks;return!!t&&t.some(function(e){return e&&!e.Url})}(e)&&t._updateCache(e),a(e)):(n="NoModelData",i("Model with no data returned")):(n="NoModel",i("No model returned"))},function(e){b.n.isCanceled(i)?(n="Canceled",c=y.t.ExpectedFailure):n="ServerLoadFailure",i(e)}))})},null,function(e){return b.n.isCanceled(e)&&(c=y.t.ExpectedFailure,n="Canceled"),{resultType:c,resultCode:n||"Other",error:e}});return(a=Object(_.e)())?this._modelPromise=b.n.all({suiteNavModel:d,theme:a.loadThemeSlotsMap()}).then(function(e){var t=e.suiteNavModel,n=e.theme,a=t&&t.data,i=t&&t.hasCobranding,r=a&&a.UseSPOBehaviors,o=p.n.isFeatureEnabled(I),s=n&&n.suiteBarBackground;return!(s&&a&&r)||i&&o||(a.ThemeColors=[s,n.primaryText,s,n.suiteBarText,n.suiteBarDisabledText,n.topBarBackground,n.topBarText,n.topBarHoverText,n.primaryBackground,n.themeLighterAlt,n.dialogBorder]),t}):this._modelPromise=d,this._modelPromise.then(function(e){return i.complete(e)},function(e){return i.error(e)}),i.getPromise()},t.prototype._isFeedbackButtonEnabled=function(){return p.n.isFeatureEnabled({ODB:h.e?60887:1246,ODC:null,Fallback:!1})},t.prototype._shouldAddFeedbackButton=function(e){var t=!1;if(this._isFeedbackButtonEnabled()){var n=this._dataSource.getWebTemplateType?this._dataSource.getWebTemplateType():l.t.invalid;t=n!==l.t.mySiteHost&&!h.t&&n!==l.t.tenantAdmin||/\/_layouts\/15\/Lists.aspx$/i.test(window.location.pathname)}return m.t.isActivated("d6818945-a344-4420-a57d-b4d0a908f6d6","07/13/2023","Always add feedback button for stream.aspx")&&!t&&/\/_layouts\/15\/stream.aspx$/i.test(window.location.pathname)&&(t=p.n.isFeatureEnabled({ODB:1246,ODC:null,Fallback:!1})),m.t.isActivated("a1dc3b5f-8668-4cdf-afdf-57bdc0194b53","06/13/2023","Always add feedback button for videoeditor.aspx")||t||!/\/_layouts\/15\/videoeditor.aspx$/i.test(window.location.pathname)||h.t||(t=!0),t},t.prototype._isStreamAspx=function(){return!(m.t.isActivated("d6818945-a344-4420-a57d-b4d0a908f6d6","07/13/2023","Always add feedback button for stream.aspx")||!/\/_layouts\/15\/stream.aspx$/i.test(window.location.pathname))},t.prototype._isVideoEditorAspx=function(){return!(m.t.isActivated("a1dc3b5f-8668-4cdf-afdf-57bdc0194b53","06/13/2023","Always add feedback button for videoeditor.aspx")||!/\/_layouts\/15\/videoeditor.aspx$/i.test(window.location.pathname))},t.prototype._addFeedbackButton=function(e){var t,n="GiveFeedbackButton",a="Feedback",r=function(){var t;null===(t=e.FlexPane)||void 0===t||t.CloseFlexPaneForProvider(a),f.e.raise(document.body,"resize",void 0,!0)},o=function(){var t;e.FlexPane&&(e.FlexPane.OpenFlexPaneForProvider(a),f.e.raise(document.body,"resize",void 0,!0)),null===(t=e.Extensibility)||void 0===t||t.UpdateButtonState(n,!0)};m.t.isActivated("4dcd117e-f86f-4bbe-bef1-3afc60df78f7","03/02/2022","Load Feedback icon before using it")?null===(t=e.Extensibility)||void 0===t||t.AddOrUpdateCustomHeaderButton({affordanceMenuItemText:c.e,ariaLabel:c.e,iconFontFamily:"FabricMDL2Icons",iconFontName:"",id:n,onShow:o,onHide:r}):e.Extensibility&&(Object(i.w)("Feedback"),e.Extensibility.AddOrUpdateCustomHeaderButton({affordanceMenuItemText:c.e,ariaLabel:c.e,iconFontFamily:"FabricMDL2Icons",iconFontName:"",id:n,onShow:o,onHide:r}))},t.prototype._clearCache=function(){this._cache.remove(this._cacheDataKey),this._cache.remove(this._cacheThemeDataKey),this._cache.remove(this._cacheDateKey),this._cache.remove(this._cacheVersionKey),this._cache.remove(this._cacheSessionKey,s.e.session)},t.prototype._updateCache=function(e,t){this._cache.setValue(this._cacheDataKey,e),this._cache.setValue(this._cacheDateKey,new Date),this._cache.setValue(this._cacheVersionKey,this._cacheVersion),this._cache.setValue(this._cacheSessionKey,!0,s.e.session)},t.prototype._isCacheOutdated=function(){var e=this._cache.getValue(this._cacheSessionKey,s.e.session),t=Date.parse(this._cache.getValue(this._cacheDateKey));return o.e.hasStorageType(s.e.session)&&!e||Date.now()-t>=60*this._cacheRenew*60*1e3},t}(S.e);function O(){var e=window._o365su;if(e&&e.b)for(var t=0,n=["ThrowOnNull","ThrowOnUndefined","ThrowOnNullOrUndefined","ThrowOnNullOrEmpty","ThrowOnNullOrEmptyArray"];t<n.length;t++){var a=n[t];w(e.b,a)}}function w(e,t){var n=e[t];"function"==typeof n&&(e[t]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];try{return n.apply(this,e)}catch(e){var i=e;d.e.logData({message:i&&i.message||"",stack:i&&i.stack||"",type:t})}})}},3012:function(e,t,n){"use strict";n.d(t,"e",function(){return l});var a,i=n(0),r=n(248),o=n(1309),s=n(110),c=n(102);!function(e){e[e.lightBlue=0]="lightBlue",e[e.blue=1]="blue",e[e.darkBlue=2]="darkBlue",e[e.teal=3]="teal",e[e.lightGreen=4]="lightGreen",e[e.green=5]="green",e[e.darkGreen=6]="darkGreen",e[e.lightPink=7]="lightPink",e[e.pink=8]="pink",e[e.magenta=9]="magenta",e[e.purple=10]="purple",e[e.black=11]="black",e[e.orange=12]="orange",e[e.red=13]="red",e[e.darkRed=14]="darkRed"}(a||(a={}));var d=["#0078d7","#088272","#107c10","#881798","#b4009e","#e81123","#da3b01","#006f94","#005e50","#004e8c","#a80000","#4e257f"],l=function(e){function t(t){return e.call(this,{dataSourceName:"SiteHeaderLogoAcronym",id:"acronymAndColors"},{pageContext:t})||this}return Object(i.__extends)(t,e),t.decodeAcronymColor=function(e){return d.indexOf(e)+1},t.prototype.getAcronymData=function(e){return this.getAcronyms([e]).then(function(e){return e[0]},function(){return{acronym:void 0,color:void 0,text:void 0}})},t.prototype.getAcronyms=function(e,t){var n=this;if(void 0===t&&(t={}),this._pageContext.webServerRelativeUrl){var a=t.qosName,i=void 0===a?"GetSiteHeaderLogoAcronym":a;return this.getDataUtilizingPersistentCache({getUrl:function(){var t=e.map(function(e){return"{Text: ".concat(c.e.encodeURIComponent('"'+e+'"'),"}")}).join(",");return Object(r.o)(n._pageContext)+"/_api/sphome/GetAcronymsAndColors?labels=[".concat(t,"]")},parseResponse:function(e){return JSON.parse(e).d.GetAcronymsAndColors.results.map(function(e){return{acronym:e.Acronym,color:e.Color,text:e.Text}})},method:"GET",qosName:i})}return s.n.reject(new Error("No web URL specified for request."))},t}(o.e);t.t=l},4568:function(e,t,n){"use strict";n.d(t,"e",function(){return g});var a=n(0),i=n(248),r=n(64),o=n(5186),s=n(102),c=n(222),d=n(810),l=n(5),u=n(1586),f=n(1297),p=n(29),m=n(104),_=n(1561),h={ODB:60222,ODC:null,Fallback:!1},b="88d7a955-6ccc-4b35-b8ff-342a6bb08f3b",g=function(e){function t(n,a){var i=e.call(this,{dataSourceName:"SuiteNavDataSource"},a)||this;return i._suiteNavContext=n.suiteNavContext,i._suiteNavDataUpdater=n.suiteNavDataUpdater,i._suiteNavDataSourceBasic=n.suiteNavDataSourceBasic?n.suiteNavDataSourceBasic:new u.e(n,a),i._prefetchCache=a.prefetchCache,i.isAdditionalFeedbackKsActivated=l.t.isActivated("45e4c761-cac2-442c-b789-ed37039a99bd","06/27/2023","Additional feedback metadata"),i._useDeadTabDetection()&&(i._signInTimeAtPageLoad=t._getSignInTime(),window.addEventListener("focus",function(){if("undefined"!=typeof MastInteraction&&MastInteraction.ShowPrompt){var e=t._getSignInTime();e&&e>i._signInTimeAtPageLoad&&(MastInteraction.SignOutPage(),MastInteraction.ShowPrompt("SwitchAccount"))}})),i}return Object(a.__extends)(t,e),t.prototype.getCapabilities=function(){return this._suiteNavDataSourceBasic.getCapabilities()},t.prototype.getReactShellBootstrapperUrl=function(){return this._suiteNavDataSourceBasic.getReactShellBootstrapperUrl()},t.prototype.getInitialRenderNavBarData=function(){return this._suiteNavDataSourceBasic.getInitialRenderNavBarData()},t.prototype.getCacheToken=function(){return this._suiteNavDataSourceBasic.getCacheToken()},t.prototype.getUserIdentifier=function(){return this._suiteNavDataSourceBasic.getUserIdentifier()},t.prototype.getWebTemplateType=function(){var e;return Number((null===(e=this._pageContext)||void 0===e?void 0:e.webTemplate)||m.t.invalid)},t.prototype.setFeedbackMetadata=function(e,t){var i,r,o=this,s=this._suiteNavContext.feedbackOptions;if((d.e||d.a)&&(e.options=Object(a.__assign)(Object(a.__assign)({},e.options),s),e.baseThemebyWorkload={baseThemeDark:"M365Dark",baseThemeLight:"M365Light"},e.colorSchemebyWorkload={colorSchemeDark:"M365Dark",colorSchemeLight:"M365Light"}),d.a&&(this.isAdditionalFeedbackKsActivated||(e.options.isFeedbackForumEnabled=!0,e.options.isScreenRecordingEnabled=!0,e.options.isEmailCollectionEnabled=!0)),s&&s.appId){e=e||{contentLanguage:void 0,source:"OneShell",options:{telemetryGroup:{}}};var u=c.n.isFeatureEnabled({ODB:d.n?60887:1246,ODC:null,Fallback:!1});if(!l.t.isActivated(b,"9/27/2021","Add Lists Freemium feature area")&&this._pageContext.isSiteListsHost&&(u=!0),/\/_layouts\/15\/stream.aspx$/i.test(window.location.pathname)&&(l.t.isActivated("6758b12a-64ed-4d1e-86cd-bab1b01c14a8","10/22/2021","Enables screenshot UX for stream.aspx")||u||(u=!0),!l.t.isActivated("445049c8-5a35-42f6-83d3-d9aeffc41d42","07/21/2022","Set sourcePageName for Stream.aspx"))){var f=null===(i=null==e?void 0:e.options)||void 0===i?void 0:i.webGroup,p=new URLSearchParams(document.location.search).get("action");e.options.webGroup={browser:null==f?void 0:f.browser,browserVersion:null==f?void 0:f.browserVersion,sourcePageName:"action=".concat(p),sourcePageURI:null==f?void 0:f.sourcePageURI},l.t.isActivated("6699f4f1-57a3-4405-982d-c5f9d8afb44f","6/13/2023","Adding additional configs for OCV survey")||(e.options=Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},e.options),s),{isEmailCollectionEnabled:!0,isFeedbackForumEnabled:!0,isScreenRecordingEnabled:!0}))}/\/_layouts\/15\/videoeditor.aspx$/i.test(window.location.pathname)&&(u||(u=!0),l.t.isActivated("665b2b9f-a110-4b48-8a93-9b9d6602c44b","6/27/2023","Adding additional configs for clipchamp OCV")||(e.options=Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},e.options),s),{isEmailCollectionEnabled:!0,isFeedbackForumEnabled:!0,isScreenRecordingEnabled:!0})));var m=e.options;m.appId=s.appId,m.disableIncludeScreenshot=!u,m.userVoiceEnabled=s.userVoiceEnabled,m.userVoiceLink=s.userVoiceLink,m.applicationGroup||(m.applicationGroup={}),m.applicationGroup.appData||(m.applicationGroup.appData="{}");var _=m.telemetryGroup;_.audienceGroup=this._getAudienceGroup(),_.featureArea=this._getFeatureArea(null===(r=s.telemetryGroup)||void 0===r?void 0:r.featureArea),_.processSessionId=this._pageContext.CorrelationId,u&&t&&n.ee([788],5925,7).then(function(e){var n=e.default||e;if(!l.t.isActivated(b,"9/27/2021","Add Lists Freemium feature area")&&o._pageContext.isSiteListsHost){var a=document.body;try{window.frames.length>0&&(a=window.frames[0].document.body)}catch(e){}n(a).then(function(e){t(e.toDataURL("image/jpeg"))})}else n(document.body).then(function(e){t(e.toDataURL("image/jpeg"))})})}return e},t.prototype.loadData=function(e){var t=this;if(!e&&this._dataPromise)return this._dataPromise;var n,a=s.e.escapeUrlForCallback(this._pageContext.currentUICultureName),r=Object(i.o)(this._pageContext),o=r?s.e.escapeUrlForCallback(r):"",c=Object(_.e)({baseUrl:o,cultureName:a}),d="".concat(o,"/_api/Microsoft.SharePoint.Portal.SuiteNavData.GetSuiteNavData?v=2&Locale=").concat(a),l=function(e){var n={suiteNavData:e.NavBarData,suiteNavContext:t._suiteNavContext,pageContext:t._pageContext},a=t._suiteNavDataUpdater?t._suiteNavDataUpdater.updateSuiteNavData(n):e.NavBarData,i=!(!a.HasTenantBranding||!e.TenantPrimaryColorShades&&!a.TenantLogoUrl);return a.AppBrandTheme=Object(u.n)(t._suiteNavContext),{data:a,jsUrl:e.JsUrl,cssUrl:e.CssUrl,hasCobranding:i,userIdentifier:t.getUserIdentifier(),cacheToken:t.getCacheToken()}},f=function(e){return t.getData(function(){return e},function(e){return JSON.parse(e)},"LoadData",null,"POST",null,null,1).then(function(t){var n=e===c?t:JSON.parse(t.d.GetSuiteNavData);return l(n)})},p=function(){return f(c).catch(function(){return f(d)})};if(this._pageContext.isSPO){var m=!1;if(this._prefetchCache){var h=this._prefetchCache.getData({url:c,body:"",qosName:"SpoSuiteLinks"});h&&(n=h.then(l,p),m=!0)}m||(n=p())}else n=f(d);return this._dataPromise=n,n.catch(function(){t._dataPromise=null}),n},t.prototype.getSuiteNavContext=function(){return this._suiteNavContext},t.prototype.onCssLoad=function(e){if(e.data&&e.data.ClientData)try{var t=JSON.parse(e.data.ClientData);t&&t.IsFallbackShell&&Object(o.e)()}catch(e){}},t.prototype.updateDataForCurrentPage=function(e){if(!this._suiteNavDataUpdater)return e;var t={suiteNavData:e,suiteNavContext:this._suiteNavContext,pageContext:this._pageContext};return this._suiteNavDataUpdater.updateSuiteNavData(t)},t.prototype._isDogfood=function(){var e=this._pageContext;return l.t.isActivated("5a7b54f2-bebb-4997-93a5-bb8a00ecbf56")?"prodbubble"===e.env&&"MSIT_SPDF_1_Content"===e.farmLabel:"spdf"===e.cloudType},t.prototype._getAudienceGroup=function(){var e,t=this._pageContext;return this._isDogfood()?e="Dogfood":"prodbubble"===t.env?e="Microsoft":("prod"===t.env||"dprod"===t.env||!l.t.isActivated(b,"9/27/2021","Add Lists Freemium feature area")&&t.isSiteListsHost)&&(e="Production"),e},t.prototype._getFeatureArea=function(e){if(!l.t.isActivated("a00248de-2fc2-41a8-8671-f8fec416a811","10/22/2021","Allow apps to provide own feature area")&&e)return e;if(!l.t.isActivated("c41ebe97-8fa6-4fdc-8911-15ba2d8b163e","05/16/2023","Get feature area callback")&&this._suiteNavContext.getFeatureArea)return this._suiteNavContext.getFeatureArea();var t=this._pageContext;return!l.t.isActivated(b,"9/27/2021","Add Lists Freemium feature area")&&t.isSiteListsHost?"Lists Freemium":t.listBaseTemplate===p.t.genericList?"List":t.listBaseTemplate===p.t.documentLibrary?"Libraries":t.listBaseTemplate===p.t.webPageLibrary?"Modern Pages and News Authoring":c.n.isFeatureEnabled({ODB:1120,ODC:null,Fallback:!1})&&this.getWebTemplateType()===m.t.contentCenter?"Syntex In-product Feedback":"Site"},t.prototype._useDeadTabDetection=function(){return!l.t.isActivated("8FE233B6-3394-4918-A449-B5808E8B40BD","9/8/21","Dead tab detection")&&c.n.isFeatureEnabled(h)},t._getCookieValue=function(e){var t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return(null==t?void 0:t.pop())||""},t._getSignInTime=function(){var e=t._getCookieValue("SIMI");return e?Number(JSON.parse(atob(e)).st):0},t.siteSettingsPermissions=[r.e.enumeratePermissions,r.e.manageWeb,r.e.manageSubwebs,r.e.addAndCustomizePages,r.e.applyThemeAndBorder,r.e.manageAlerts,r.e.manageLists,r.e.viewUsageData],t}(f.e)},5208:function(e,t,n){"use strict";n.d(t,"e",function(){return a});var a=new(n(6).t)("metadataSearchDataSource")}}]);