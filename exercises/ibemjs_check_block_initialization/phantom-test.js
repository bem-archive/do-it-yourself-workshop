var page = require('webpage').create();
var testPassed = false;

page.onConsoleMessage = function(msg) {
    console.log(msg);
};
console.log('global: ', phantom);
page.open("http://localhost:8080/desktop.bundles/index/", function(status) {
    if ( status === "success" ) {
    console.log('Page loaded.');
console.log('if: ', phantom);
    page.evaluate(function() {
        modules.require(['jquery'], function($) {
            console.log($('.logo').text());
            window.setTimeout(function() {
                console.log("form inited? " + $('.form_js_inited').length);
console.log('modules: ', phantom);
            }, 200);
        });
    });

    } else {
        phantom.exit();
    }
});
