define(function (require, exports, module) {
    var $ = require('$');
    var Widget = require('widget');
    var Select = require('select');
    var Dialog = require('dialog');
    require("calendarCss");

    var Calendar = require('calendar');
    var Validator = require('validator');

    var At = require('at');

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var View = Widget.extend({
        events: {
            'click #J_Submit': 'submit'
        },
        submit: function (ev) {

            ev.preventDefault();
            var tar = $(ev.currentTarget);
            if (tar.attr('disabled')) {
                return;
            }
            tar.attr('disabled', 'disabled').addClass('kuma-button-mdisable').removeClass('kuma-button-mblue');
            $.ajax({
                url: myConfig.createProject,
                type: "post",
                dataType: "json",
                data: {project: JSON.stringify($('#J_Form').serializeObject())}
            })
                .done(function (d) {
                    setTimeout(function () {
                        window.location.href = "/projx";
                    }, 0);
                })
                .error(function (d) {
                })
                .always(function () {
                    tar.attr('disabled', false).addClass('kuma-button-mblue').removeClass('kuma-button-mdisable');
                    location.reload();
                });
            return false;
        }
    });

    var view = new View({
        element: "#content"
    });

    view.before('submit', function () {
        var data = true;
        this.validator.execute(function (err) {
            if (err) {
                data = false;
            }
        });

        return data;
    });

    view.before('submit', function () {
        _offBeforeUnload();
    })

    view.after('render', function () {

        var c1 = new Calendar({trigger: '#J_StartCal'});
        var c2 = new Calendar({trigger: '#J_EndCal'});
        var c3 = new Calendar({trigger: '#J_ModifyCal'});

        c1.on('selectDate', function (date) {
            c2.range([date, null]);
        });

        c2.on('selectDate', function (date) {
            c1.range([null, date]);
        });


        c3.on('selectDate', function (date) {
            
        });

        var validator = this.validator = new Validator({
            element: '#J_Form',
            failSilently: true
        });

        validator.addItem({
            element: '[name=name]',
            required: true,
            errormessage: '亲，请填写项目名称'
        })

        validator.addItem({
            element: '[name=gmtBegin]',
            required: true,
            errormessage: '亲，请填写开始时间'
        })
        validator.addItem({
            element: '[name=gmtComplete]',
            required: true,
            errormessage: '亲，请填写发布时间'
        })
        validator.addItem({
            element: '[name=pm]',
            required: true,
            errormessage: '亲，请填写pm'
        })

        validator.addItem({
            element: '[name=gmtModified]',
            required: true,
            errormessage: '亲，请填写最近修改时间，一般就是今天'
        })

        _bindBeforeUnload();

        At.init({
            trigger: $('.J_AtTrigger'),
            duplicateFilter: true,
            source: 'https://work.alibaba-inc.com/work/xservice/sns/suggestion/suggestionAt.jsonp',
            onSelect: function (item) {
                //console.log(item);
            }
        });
    });

    view.render();

    module.exports = View;

    // tools

    function _bindBeforeUnload() {
        return;
        $(window).on('beforeunload', function () {
            return '你确定要离开当前页面吗?你做的修改将不会被保存!';
        });
    }

    function _offBeforeUnload() {
        //$(window).off('beforeunload');
    }
});
