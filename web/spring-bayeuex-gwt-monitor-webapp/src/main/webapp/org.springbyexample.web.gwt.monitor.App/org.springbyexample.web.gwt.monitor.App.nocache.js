function org_springbyexample_web_gwt_monitor_App(){
  var $intern_0 = '', $intern_27 = '" for "gwt:onLoadErrorFn"', $intern_25 = '" for "gwt:onPropertyErrorFn"', $intern_10 = '"><\/script>', $intern_12 = '#', $intern_33 = '&', $intern_14 = '/', $intern_58 = '10D8F253B0F0521611BC4610E57B02CC.cache.html', $intern_55 = '2D2FCE30CD7D29CE891F48AC29D12F96.cache.html', $intern_56 = '4D6AB53A3A481B83A648A34BC12DEAE9.cache.html', $intern_50 = '4DAFD7ADBC06E8723BA16438A3F61E13.cache.html', $intern_57 = '51A3A7C90A245D184AA3FBF4A9D79A23.cache.html', $intern_53 = '52BA19D6C10E390A0176F11A6D0D5120.cache.html', $intern_54 = '595356AB4CF6712B3DB41821CA16B241.cache.html', $intern_49 = '84855E998F69C05DA9520ADA2C3C6810.cache.html', $intern_61 = '<script defer="defer">org_springbyexample_web_gwt_monitor_App.onInjectionDone(\'org.springbyexample.web.gwt.monitor.App\')<\/script>', $intern_9 = '<script id="', $intern_22 = '=', $intern_13 = '?', $intern_59 = 'A12037C7F7969FAC6683930B8BB79D30.cache.html', $intern_24 = 'Bad handler "', $intern_52 = 'C832F6CFD9272B311E78C273E93FBDB2.cache.html', $intern_60 = 'DOMContentLoaded', $intern_11 = 'SCRIPT', $intern_36 = 'Unexpected exception in locale detection, using default: ', $intern_35 = '_', $intern_8 = '__gwt_marker_org.springbyexample.web.gwt.monitor.App', $intern_15 = 'base', $intern_4 = 'begin', $intern_3 = 'bootstrap', $intern_17 = 'clear.cache.gif', $intern_21 = 'content', $intern_34 = 'default', $intern_51 = 'en_US', $intern_7 = 'end', $intern_43 = 'gecko', $intern_44 = 'gecko1_8', $intern_5 = 'gwt.hybrid', $intern_26 = 'gwt:onLoadErrorFn', $intern_23 = 'gwt:onPropertyErrorFn', $intern_20 = 'gwt:property', $intern_48 = 'hosted.html?org_springbyexample_web_gwt_monitor_App', $intern_42 = 'ie6', $intern_28 = 'iframe', $intern_16 = 'img', $intern_29 = "javascript:''", $intern_46 = 'loadExternalRefs', $intern_32 = 'locale', $intern_18 = 'meta', $intern_31 = 'moduleRequested', $intern_6 = 'moduleStartup', $intern_41 = 'msie', $intern_19 = 'name', $intern_38 = 'opera', $intern_1 = 'org.springbyexample.web.gwt.monitor.App', $intern_30 = 'position:absolute;width:0;height:0;border:none', $intern_40 = 'safari', $intern_47 = 'selectingPermutation', $intern_2 = 'startup', $intern_45 = 'unknown', $intern_37 = 'user.agent', $intern_39 = 'webkit';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    try {
      return $wnd.external && ($wnd.external.gwtOnLoad && $wnd.location.search.indexOf($intern_5) == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      frameWnd.__gwt_initHandlers = org_springbyexample_web_gwt_monitor_App.__gwt_initHandlers;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      org_springbyexample_web_gwt_monitor_App = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_7});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = $intern_8, markerScript;
    $doc.write($intern_9 + markerId + $intern_10);
    markerScript = $doc.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != $intern_11) {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_12);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_13);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_14, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == $intern_0) {
      var baseElements = $doc.getElementsByTagName($intern_15);
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc.createElement($intern_16);
      img.src = base + $intern_17;
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_18);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_19), content;
      if (name) {
        if (name == $intern_20) {
          content = meta.getAttribute($intern_21);
          if (content) {
            var value, eq = content.indexOf($intern_22);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_23) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_25);
            }
          }
        }
         else if (name == $intern_26) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_27);
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name){
    var value = metaProps[name];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_28);
      iframe.src = $intern_29;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_30;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_31});
      iframe.contentWindow.location.replace(base + strongName);
    }
  }

  providers[$intern_32] = function(){
    try {
      var locale;
      if (locale == null) {
        var args = location.search;
        var startLang = args.indexOf($intern_32);
        if (startLang >= 0) {
          var language = args.substring(startLang);
          var begin = language.indexOf($intern_22) + 1;
          var end = language.indexOf($intern_33);
          if (end == -1) {
            end = language.length;
          }
          locale = language.substring(begin, end);
        }
      }
      if (locale == null) {
        locale = __gwt_getMetaProperty($intern_32);
      }
      if (locale == null) {
        return $intern_34;
      }
      while (!__gwt_isKnownPropertyValue($intern_32, locale)) {
        var lastIndex = locale.lastIndexOf($intern_35);
        if (lastIndex == -1) {
          locale = $intern_34;
          break;
        }
         else {
          locale = locale.substring(0, lastIndex);
        }
      }
      return locale;
    }
     catch (e) {
      alert($intern_36 + e);
      return $intern_34;
    }
  }
  ;
  values[$intern_32] = {'default':0, en_US:1};
  providers[$intern_37] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf($intern_38) != -1) {
      return $intern_38;
    }
     else if (ua.indexOf($intern_39) != -1) {
      return $intern_40;
    }
     else if (ua.indexOf($intern_41) != -1) {
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 6000) {
          return $intern_42;
        }
      }
    }
     else if (ua.indexOf($intern_43) != -1) {
      var result = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 1008)
          return $intern_44;
      }
      return $intern_43;
    }
    return $intern_45;
  }
  ;
  values[$intern_37] = {gecko:0, gecko1_8:1, ie6:2, opera:3, safari:4};
  org_springbyexample_web_gwt_monitor_App.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  org_springbyexample_web_gwt_monitor_App.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_46, millis:(new Date()).getTime(), type:$intern_7});
    maybeStartModule();
  }
  ;
  computeScriptBase();
  processMetas();
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_47});
  var strongName;
  if (isHostedMode()) {
    strongName = $intern_48;
  }
   else {
    try {
      unflattenKeylistIntoAnswers([$intern_34, $intern_38], $intern_49);
      unflattenKeylistIntoAnswers([$intern_34, $intern_40], $intern_50);
      unflattenKeylistIntoAnswers([$intern_51, $intern_38], $intern_52);
      unflattenKeylistIntoAnswers([$intern_51, $intern_40], $intern_53);
      unflattenKeylistIntoAnswers([$intern_34, $intern_44], $intern_54);
      unflattenKeylistIntoAnswers([$intern_34, $intern_43], $intern_55);
      unflattenKeylistIntoAnswers([$intern_51, $intern_44], $intern_56);
      unflattenKeylistIntoAnswers([$intern_51, $intern_43], $intern_57);
      unflattenKeylistIntoAnswers([$intern_34, $intern_42], $intern_58);
      unflattenKeylistIntoAnswers([$intern_51, $intern_42], $intern_59);
      strongName = answers[computePropValue($intern_32)][computePropValue($intern_37)];
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_60, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_60, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_7});
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_46, millis:(new Date()).getTime(), type:$intern_4});
  $doc.write($intern_61);
}

org_springbyexample_web_gwt_monitor_App.__gwt_initHandlers = function(resize, beforeunload, unload){
  var $wnd = window, oldOnResize = $wnd.onresize, oldOnBeforeUnload = $wnd.onbeforeunload, oldOnUnload = $wnd.onunload;
  $wnd.onresize = function(evt){
    try {
      resize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  ;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = beforeunload();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = function(evt){
    try {
      unload();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  ;
}
;
org_springbyexample_web_gwt_monitor_App();
