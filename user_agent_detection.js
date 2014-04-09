/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 19.05.13
 * Time: 21:05
 * To change this template use File | Settings | File Templates.
 */

//function user_agent_detection(){
        var client = function(){
            // detection of browser's engine
            var engine = {
                // rendering engines
                ie: 0,
                gecko: 0,
                webkit: 0,
                khtml: 0,
                opera: 0,

                // specific version
                ver: null
            };

            // detection of browsers
            var browser = {
                // browsers
                ie: 0,
                firefox: 0,
                safari: 0,
                konq: 0,
                opera: 0,
                chrome: 0,

                // specific version
                ver: null
            };

            // Platform detection
            var system = {
                win: false,
                mac: false,
                x11: false,
                // mobile device
                iphone: false,
                ipod: false,
                ipad: false,
                ios: false,
                android: false,
                nokiaN: false,
                winMobile: false,
                // game systems
                wii: false,
                ps: false
            };

            // detection of rendering engines/platforms/devices here

        var ua = navigator.userAgent;

        if(window.opera){
            engine.ver = browser.ver =  window.opera.version();
            engine.opera = browser.opera = parseFloat(engine.ver);
        } else if(/AppleWebKit\/(\S+)/.test(ua)){
            engine.ver = RegExp["$1"];
            engine.webkit = parseFloat(engine.ver);

            // figure out if it's Chrome or Safari
            if(/Chrome\/(\S+)/.test(ua)){
                browser.ver = RegExp["$1"];
                browser.chrome = parseFloat(browser.ver);
            } else if (/Version\/(\S+)/.test(ua)){
                browser.ver = RegExp["$1"];
                browser.safari = parseFloat(browser.ver);
            } else {
                // approximate version
                var safariVersion = 1;
                if(engine.webkit < 100){
                    safariVersion = 1;
                } else if (engine.webkit < 312){
                    safariVersion = 1.2;
                } else if (engine.webkit < 412){
                    safariVersion = 1.3;
                } else {
                    safariVersion = 2;
                }

                browser.safari = browser.ver = safariVersion;
            }
        } else if(/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
            engine.ver = browser.ver = RegExp["$1"];
            engine.khtml = browser.konq = parseFloat(engine.ver);
        } else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
            engine.ver = RegExp["$1"];
            engine.gecko = parseFloat(engine.ver);
            // determine if it's Firefox
            if(/Firefox\/(\S+)/.test(ua)){
                browser.ver = RegExp["$1"];
                browser.firefox = parseFloat(browser.ver);
            }
        } else if(/MSIE ([^;]+)/.test(ua)){
            engine.ver = browser.ver = RegExp["$1"];
            engine.ie = browser.ie = parseFloat(engine.ver);
        }
        // detect browser
        browser.ie = engine.ie;
        browser.opera = engine.ie;


        // detect platform
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0);

        // detect windows operating system
        if(system.win){
            if(/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
                if(RegExp["$1"] == "NT"){
                    switch(RegExp["$2"]){
                        case "5.0":
                            system.win = "2000";
                            break;
                        case "5.1":
                            system.win = "XP";
                            break;
                        case "6.0":
                            system.win = "Vista";
                            break;
                        case "6.1":
                            system.win = "7";
                            break;
                        default:
                            system.win = "NT";
                            break;
                    }
                } else if(RegExp["$1"] == "9x"){
                    system.win = "ME";
                } else {
                    system.win = RegExp["$1"];
                }
            }
        }

        // mobile device
        system.iphone = ua.indexOf("iPhone") > -1;
        system.ipod = ua.indexOf("ipod") > -1;
        system.ipad = ua.indexOf("ipad") > -1;
        system.nokiaN = ua.indexOf("NokiaN") > -1;

        // Windows mobile
        if(system.win == "CE"){
            system.winMobile = system.win;
        } else if(system.win == "Ph"){
            if(/Windows Phone OS (\d+.\d+)/.test(ua)){
                system.win = "Phone";
                system.winMobile = parseFloat(RegExp["$1"]);
            }
        }

        // Determine iOS version
        if(system.mac && ua.indexOf("Mobile") > -1){
            if(/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
                system.ios = parseFloat(RegExp.$1.replace("_","."));
            } else {
                system.ios = 2; // can't really detect - so guess
            }
        }

        // determine Android version
        if(/Android (\d+\.\d+)/.test(ua)){
            system.android = parseFloat(RegExp.$1);
        }

        // gaming systems
        system.wii = ua.indexOf("Wii") > -1;
        system.ps = /playstation/i.test(ua);

        // return it
        return {
            engine: engine,
            browser: browser,
            system: system
        };
    }();
//}

// Example 1
//if(ie.ver >= 6){
//    alert("IE ver >= 6");
//}

// Example 2
//if(client.engine.ie){
//    alert("IE");
//} else if(client.engine.gecko > 1.5){
//    if(client.engine.ver == "1.8.1"){
//        alert("Gecko ver 1.8.1");
//    }
//}

// Example 3
//if(client.engine.webkit){
//    if(client.browser.chrome){
//        alert("Chrome");
//    } else if(client.browser.safari){
//        alert("Safari");
//    }
//} else if(client.engine.gecko){
//    if(client.browser.firefox){
//        alert("Firefox");
//    } else {
//        alert("Other Gecko");
//    }
//}

// Example 4
//if(client.system.win){
//    if(client.system.win == "XP"){
//        alert("XP");
//    } else if(client.system.win == "Vista"){
//        alert("Vista");
//    }
//}

