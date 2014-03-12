/**
 * Copyright 2014 Simon Edwards <simon@simonzone.com>
 */
main = (function() {
"use strict";

var SITE_URL = "http://localhost:8888/";

function getAppFrame() {
    return document.getElementById("site");
}

function loadFrame() {
    var frame = getAppFrame();
    frame.src = SITE_URL;
}

function main() {
    loadFrame();
}
return main;
})();
