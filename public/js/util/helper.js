define(function (require, exports, module) {
    module.exports = {
        /**
         * handlebars compare
         * @param lvalue
         * @param operator
         * @param rvalue
         * @param options
         * @returns {*}
         */
        compare    : function (lvalue, operator, rvalue, options) {
            var operators, result;
            if (arguments.length < 3) {
                throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
            }
            if (options === undefined) {
                options = rvalue;
                rvalue = operator;
                operator = "===";
            }
            operators = {
                '=='    : function (l, r) {
                    return l == r;
                },
                '==='   : function (l, r) {
                    return l === r;
                },
                '!='    : function (l, r) {
                    return l != r;
                },
                '!=='   : function (l, r) {
                    return l !== r;
                },
                '<'     : function (l, r) {
                    return l < r;
                },
                '>'     : function (l, r) {
                    return l > r;
                },
                '<='    : function (l, r) {
                    return l <= r;
                },
                '>='    : function (l, r) {
                    return l >= r;
                },
                'typeof': function (l, r) {
                    return typeof l == r;
                }
            };
            if (!operators[operator]) {
                throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
            }
            result = operators[operator](lvalue, rvalue);
            if (result) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        },
        /**
         * i18n replace
         * @param msg
         * @returns {*}
         */
        langReplace: function (msg) {
            var arg = arguments;
            if (msg && arg.length >= 2) {
                return msg.replace(/\{\{(\d+?)\}\}/g, function ($0, $1) {
                    return typeof arg[arguments[1]] != "undefined"
                        ? arg[arguments[1]]
                        : arguments[0];
                });
            }
            return msg
        }
    };
});