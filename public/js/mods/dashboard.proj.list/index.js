define(function (require, exports, module) {
    var $ = require('$');
    var Widget = require('widget');
    var tpl = require('./index.tpl');
    var View = Widget.extend({
        events: {
            'click #J_UnFoldAll': 'unFoldAll',
            'click #J_FoldAll': 'foldAll',
            'click .projx-list-item':'doItemClick'
        },
//        initialize: function () {
//            this.container = this.$('#J_Container');
////            View.prototype.initialize.apply(this, arguments)
//        },
        unFoldAll: function () {
            this.element.find('.J_TrEven').show();
            $('#J_UnFoldAll').addClass('active');
            $('#J_FoldAll').removeClass('active');
        },
        foldAll: function () {
            this.element.find('.J_TrEven').hide();
            $('#J_UnFoldAll').removeClass('active');
            $('#J_FoldAll').addClass('active');
        },
        doItemClick: function(e) {
            var t= $(e.target);
            if(!t.hasClass("projx-list-item")) {
                t=t.parents(".projx-list-item");
            }
            var projxId= t.data("projid");
            window.location.href="/projx/edit/new?projxId="+projxId;
        },
        show: function () {
            //todo
        }
    });

    var view = new View({
        element: "#content"
    });

    view.show();

    module.exports = View;
});