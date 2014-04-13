/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 08.04.12
 * Time: 14:44
 * To change this template use File | Settings | File Templates.
 */



function inheritPrototype(subType, superType)
{
  var prototype = Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}


/**
 * Pattern custom events
 */
function EventTarget()
{
  this.handlers = {};
}

EventTarget.prototype =
{
  constructor: EventTarget,

  addHandler: function(type, handler)
  {
    if(typeof this.handlers[type] == "undefined")
    {
      this.handlers[type] = [];
    }

    this.handlers[type].push(handler);
  },


  fire: function(event)
  {
    if(!event.target)
    {
      event.target = this;
    }
    if(this.handlers[event.type] instanceof Array)
    {
      var handlers = this.handlers[event.type];
      for(var i=0, len=handlers.length; i < len; i++)
      {
        handlers[i](event);
      }
    }
  },

  removeHandler: function(type, handler)
  {
    if(this.handlers[type] instanceof Array)
    {
      var handlers = this.handlers[type];
      for(var i=0, len=handlers.length; i < len; i++)
      {
        if(handlers[i] === handler)
        {
          break;
        }
      }
      handlers.splice(i, 1);
    }
  }
};


/**
 * Drag and Drop
 */
var DragDrop = function()
{
  var dragging = null,
      diffX = 0,
      diffY = 0;

  function handleEvent(event)
  {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    switch(event.type)
    {
      case "mousedown":
        if(target.className.indexOf("draggable") > -1)
        {
          dragging = target;
          diffX = event.clientX - target.offsetLeft;
          diffY = event.clientY - target.offsetTop;
        }
      break;

      case "mousemove":
        if(dragging !== null)
        {
          dragging.style.left = event.clientX - diffX + "px";
          dragging.style.top = event.clientY - diffY + "px";
        }
      break;

      case "mouseup":
        dragging = null;
      break;
    }
  }

  //public interface


    return {
      enable: function()
      {
        EventUtil.addHandler(document, "mousedown", handleEvent);
        EventUtil.addHandler(document, "mousemove", handleEvent);
        EventUtil.addHandler(document, "mouseup", handleEvent);
      },


      disable: function()
      {
        EventUtil.removeHandler(document, "mousedown", handleEvent);
        EventUtil.removeHandler(document, "mousemove", handleEvent);
        EventUtil.removeHandler(document, "mouseup", handleEvent);
      }
    }
}();


/**
 * Drag and Drop with event handlers: start, drag, stop
 * @type {DragDrop}
 */
var DragDrop = function(){
    var dragdrop = new EventTarget(),
        dragging = null,
        diffX = 0,
        diffY = 0;

    function handleEvent(event){

        event = event ? event : window.event;
        var target = event.target ? event.target : event.srcElement;
        switch(event.type){
            case "mousedown":
                if(target.className.indexOf("draggable") > -1){
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dragdrop.fire({type:"dragstart", target: dragging,
                        x:event.clientX, y:event.clientY});
                }
                break;
            case "mousemove":
                if(dragging !== null){
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";
                    dragdrop.fire({type:"drag", target: dragging,
                        x:event.clientX, y:event.clientY});
                }
                break;
            case "mouseup":
                if(dragging !== null){
                    dragdrop.fire({type:"dragend",target:dragging,
                        x:event.clientX, y:event.clientY});
                    dragging = null;
                }
                break;
        }
    }


    dragdrop.enable = function(){
        EventUtil.addHandler(document, "mousedown", handleEvent);
        EventUtil.addHandler(document, "mousemove", handleEvent);
        EventUtil.addHandler(document, "mouseup", handleEvent);
    };
    dragdrop.disable = function(){
        EventUtil.removeHandler(document, "mousedown", handleEvent);
        EventUtil.removeHandler(document, "mousemove", handleEvent);
        EventUtil.removeHandler(document, "mouseup", handleEvent);
    };
    return dragdrop;
}();


DragDrop.addHandler("dragstart", function(event){
    var status = document.getElementById("status");
    status.innerHTML = "started dragging " + event.target.id;
});

DragDrop.addHandler("drag", function(event){
    var status = document.getElementById("status");
    status.innerHTML += "<br />Dragged " + event.target.id + " to ("
        + event.x + "," + event.y + ")";
});

DragDrop.addHandler("dragend",function(event){
    var status = document.getElementById("status");
    status.innerHTML += "<br />Dropped " + event.target.id + " at ("
        + event.x + "," + event.y + ")";
});

//DragDrop.enable();


/**
 * Cross-Browser XPath
 * Function selectSingleNode(context,expression,namespace);
 * @param context
 * @param expression
 * @param namespace
 * @returns {*}
 */
function selectSingleNode(context, expression, namespace){
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);

    if(typeof doc.evaluate != "undefined"){
        var nsresolver = null;
        if(namespace instanceof Object){
            nsresolver = function(prefix){
                return namespace[prefix];
            };
        }

        var result = doc.evaluate(expression, context, nsresolver,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return (result !== null ? result.singleNodeValue : null);
    } else if (typeof context.selectSingleNode != "undefined"){
        if(namespace instanceof Object){
            var ns = "";
            for(var prefix in namespace){
                if(namespace.hasOwnProperty(prefix)){
                    ns += "xmlns:" + prefix + "='" + namespace[prefix] + "' ";
                }
            }
            doc.setProperty("SelectionNamespaces", ns);
        }
        return context.selectSingleNode(expression);
    } else {
        throw new Error("No XPath engine found.");
    }
}


/**
 * Cross-Browser XPath
 * Function selectNodes(context,expression,namespace);
 * @param context
 * @param expression
 * @param namespaces
 * @returns {Array}
 */
function selectNodes(context, expression, namespaces){
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);

    if(typeof doc.evaluate != "undefined"){
        var nsresolver = null;
        if(namespaces instanceof Object){
            nsresolver = function(prefix){
                return namespaces[prefix];
            };
        }

        var result = doc.evaluate(expression, context, nsresolver,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null);
        var nodes = new Array();

        if(result !== null){
            for(var i= 0,len = result.snapshotLength; i<len; i++){
                nodes.push(result.snapshotItem(i));
            }
        }
        return nodes;
    } else if (typeof context.selectNode != "undefined"){
        if(namespaces instanceof Object){
            var ns = "";
            for(var prefix in namespaces){
                if(namespaces.hasOwnProperty(prefix)){
                    ns += "xmlns:"+prefix + "='" + namespaces[prefix] + "' ";
                }
            }
            doc.setProperty("SelectionNamespace", ns);
        }
        var result = context.selectNodes(expression);
        var nodes = new Array();

        for(var i= 0,len=result.length; i<len; i++){
            nodes.push(result[i]);
        }
        return nodes;
    }else {
        throw new Error("No XPath engine found.");

    }
}


/**
 * Load the XSLT style sheet into a thread-safe version of an XML document
 * @returns {ActiveXObject}
 */
function createThreadSafeDocument(){
    if(typeof arguments.callee.activeXString != "string"){
        var versions = ["MSXML2.FreeThreadDOMDocument.6.0",
                "MSXML2.FreeThreadDOMDocument.3.0",
                "MSXML2.FreeThreadDOMDocument"],
            i,
            len;

        for(i=0,len=versions.length;i<len;i++){
            try{
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                break;
            } catch (ex){
                alert(ex.message);
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}


/**
 * Free-threaded DOM document is created and loaded(createThreadSafeDocument()), and it must be assigned to an XSL
 template
 * @returns {ActiveXObject}
 */
function createXSLTemplate(){
    if(typeof arguments.callee.activeXString != "string"){
        var versions = ["MSXML2.XSLTemplate.6.0",
                "MSXML2.XSLTemplate.3.0",
                "MSXML2.XSLTemplate"],
            i,
            len;

        for(i=0,len=versions.length; i<len; i++){
            try{
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                break;
            } catch (ex) {
                alert(ex.message);
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}

/**
 * Cross-Browser XSLT
 * @param context
 * @param xslt
 * @returns {*}
 */
function transform(context, xslt){
    if(typeof XSLTProcessor != "undefined"){
        var processor = new XSLTProcessor();
        processor.importStylesheet(xslt);

        var result = processor.transformToDocument(context);
        return (new XMLSerializer()).serializeToString(result);
    } else if (typeof context.transformNode != "undefined"){
        return context.transformNode(xslt);
    } else {
        throw new Error("No XSLT processor available.");
    }
}












/**
 * CORS
 * @param method
 * @param url
 * return object XMLHttpRequestObject
 */
function createCORSRequest(method, url)
{
    var xhr = new XMLHttpRequest();
    if("withCredentials" in xhr)
    {
        xhr.open(method, url);
    }
    else if(typeof XDomainRequest != "undefined")
    {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    else
    {
        xhr = null;
    }
    return xhr;
}

/**
 * Lazy load function
 * Usual function XMLHttpRequest
 */
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if(typeof ActiveXObject != "undefined"){
        if(typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0",
                    "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"],
                i,len;
            for(i=0,len=versions.length; i<len; i++){
                try{
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex){
                    alert(ex.message);
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available");
    }
}

/**
 * Lazy load function
 * Invoke approach function XMLHttpRequest
 * @returns {*}
 */
function createXHRs(){
    if(typeof XMLHttpRequest != "undefined"){
        createXHRs = function(){
            return new XMLHttpRequest();
        };
    } else if(typeof ActiveXObject != "undefined"){
        createXHRs = function(){
            if(typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0",
                        "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"],
                    i,len;
                for(i=0, len=versions.length;i<len; i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex){
                        alert(ex.message);
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    }else{
        createXHRs = function(){
            throw new Error("No XHR object available");
        };
    }
    return createXHRs();
}


/**
 * Anonymous invoke XMLHttpRequest
 */
var createXHR = (function(){
    if(typeof XMLHttpRequest != "undefined"){
        return function(){
            return new XMLHttpRequest();
        };
    }
    else if(typeof ActiveXObject != "undefined"){
        return function(){
            if(typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0",
                        "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"],
                    i,
                    len;
                for(i = 0, len = versions.length; i < len; i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    }
                    catch(ex){
                        alert(ex.message);
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    }
    else{
        return function(){
            throw new Error("No XHR object available.");
        };
    }
})();









