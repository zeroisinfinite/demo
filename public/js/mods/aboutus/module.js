define(function (require, exports, module) {
    var $ = jQuery
        , tpl = require("/tpl/aboutus.tpl")
        , tplM = require("/tpl/aboutus_m.tpl")
        , tplPro = require("/tpl/profile.tpl")//YOUHOO官网--公司简介
        , tplTech = require("/tpl/technology.tpl")//YOUHOO官网--制造工艺
        , tplIntro = require("/tpl/introduction.tpl")//YOUHOO官网--品牌介绍

    var Index = {

        init : function() {
            var params = YouHooUtils.parseAnchor();
            console.log(params);
            this.renderView(params);
        },
        doSearchData : function (curId) {
            //异步请求，需加loading中的显示
            $.ajax({
                url: myConfig.queryAboutUs
                ,type: "get"
                ,dataType: "json"
            })
            .done(function (data) {
              // TODO  modified by caowen 2016-02-27
              // 不同的id渲染不同的页面tpl，每个tpl都是一个独立的静态网页
              // 网页分别为：公司简介、品牌介绍、制造工艺
              // 即现有的 data/aboutus.js文件中json对象的pic、detail俩字段（修改为网页）
              for (var i = 0; i < data.length; i++) {
                var _obj = data[i];
                if (_obj.id == curId) {
                  // 移动端还按照原有的方式来render view！
                  if (!YouHooUtils.isMobileDevice()) {
                  // }else{
                    var _html = '';
                    switch(curId) {
                        case '101':
                            _html = tplPro;
                            break;
                        case '201':
                            _html = tplIntro;
                            break;
                        case '301':
                            _html = tplTech;
                            break;
                        default:
                            break;

                    }
                    // Web端改造直接render各个页面模版
                    $('.J-aboutus-detail').html(_html);
                  }else{
                      $('.J-big-tile').html(_obj.name);
                      $('.J-main-pic').attr("src",_obj.pic);
                      $('.J-detail-views').html(_obj.detail);
                  }
                  
                }
              };
                  
            })
            .error(function (d) {
            })
            .always(function () {
                // location.href = ;
            });
        },
        renderView : function(params) {
            if (YouHooUtils.isMobileDevice()) {
                $("#content").html(tplM);
            }else{
                $("#content").html(tpl);
            }
            
            params && params.tid && this.doSearchData(params.tid)
        }
    };


    module.exports = Index;
});