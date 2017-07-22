define(function (require, exports, module) {
    var $ = jQuery
        , tpl = require("/tpl/index.tpl")
        , tplM = require("/tpl/index_m.tpl")

    var Index = {

        init : function() {
            console && console.log("This is index.js!")
            this.renderView();
        },
        renderView : function() {
            if (YouHooUtils.isMobileDevice()) {
                //
                window.location.href= '/youhoo#device=mobile'; 
                $("#content").html(tplM);
            }else{
                $("#content").html(tpl);
            }
        }
    };


    module.exports = Index;
});