var page = require('webpage').create();
var testPassed = false;

page.onCallback = function(data) {
    if (data.testing == 'done')  {
        console.log('passed');
        phantom.exit();
    }
};

page.open("http://localhost:8080/desktop.bundles/index/", function(status) {
    if ( status === "success" ) {
    page.evaluate(function() {
        modules.require(['jquery'], function($) {
            window.setTimeout(function() {
                window.callPhantom({ testing: 'done'});
            }, 200);
        });
    });

    } else {
        phantom.exit();
    }
});
