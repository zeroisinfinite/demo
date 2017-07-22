define(function (require, exports, module) {
    var $ = jQuery

        , tplHeader = require("../tpl/header.tpl")
        , tplHeaderM = require("../tpl/header_m.tpl")
        , tplFooter = require("../tpl/footer.tpl")
        , tplFooterM = require("../tpl/footer_m.tpl")

    var View = {
        IS_MOBILE_DEVICE : YouHooUtils.isMobileDevice(),
        init : function() {
            var _self = this;
            // this should in page 
            // this.browserRedirect();
            console && console.log("This is index.js!",this.IS_MOBILE_DEVICE)
            this.renderHeader();
            this.renderFooter();
            
            if (this.IS_MOBILE_DEVICE) {
                setTimeout(function(e) {
                    // This code should use promise/deffer method!
                    _self.getData($(".J-product-center"),myConfig.queryProductList,_self.renderMobProductNav,"");
                },1000);  
            }else{
                _self.handlePcViewEvent();
            }
            
            //搜索按钮
            $("#searchSubmit").click(function(){
                var _url = "/youhoo/search?"
                    , param = {};
                param.keywords = $(".searchInput").val();

                _url = YouHooUtils.getContextPathDomain().concat(_url, YouHooUtils.buildUrlParam(param));
                location.href = _url ;
            }); 
        },
        initMobileNav : function() {
            var _self = this;
            //一级效果
            var menu=$('#yh-menu');//左上角按钮
            var lists=$('#menu-lists');//头部一级列表
            _self.showList(menu,lists);

            //二级效果
            var aboutBtn=$('.aboutBtn'),
                aboutList=aboutBtn.find('.second-list'),
                productBtn=$('.productBtn'),
                productList=productBtn.find('.second-list');
            _self.showList(aboutBtn,aboutList);
            _self.showList(productBtn,productList);

            // 三级效果
            var thirdBtn=$('.thirdBtn');
            thirdBtn.each(function(){
                var thirsList=$(this).find('.third-list');
                _self.showList($(this),thirsList);    
                $(this).toggle(function(){
                    $(this).addClass('hasmore');
                },function(){
                    $(this).removeClass('hasmore');
                });
            });
            
            //显示分享
            var showBtn=$('.showBtn');
            showBtn.click(function(){
                var shareList=$(this).next('.share');
                shareList.toggle(100);
            });
            
            //底部更多语言
            // var language=$('.yh-languages');//其他语言 按钮
            // var langList=$('.more-lang');//语言列表
            // var close=$('.more-lang .close');//关闭按钮
            // _self.showList(language,langList,close);

        },

        //收缩展开程序
        showList : function (btn,lis,clo){
            var flag=0;
            btn.click(function(event){
                event.stopPropagation();
                var curHeight=lis.height(),
                    autoHeight=lis.css('height','auto').height();

                if(flag===0){
                    lis.css('height',curHeight).animate({
                        height:autoHeight
                    },300,function(){
                        lis.css('height','auto');
                    });
                    flag=1;

                }else{
                    lis.animate({height:0});
                    flag=0;
                }
            });

            $(document).click(function(){
                lis.animate({height:0});
                flag=0;
            })
            lis.click(function(event){
                event.stopPropagation();
            });
            if(!!clo){
                clo.parent().click(function(event){
                    event.stopPropagation();
                });
                clo.click(function(){
                    lis.animate({height:0});
                    flag=0;
                });
            }
        },
        browserRedirect : function() { 

            var _headMetaStyle = "";

            if (this.IS_MOBILE_DEVICE) { 

                _headMetaStyle = '<title>YouHoo - 站点</title> <link rel="stylesheet" type="text/css" href="/style/mob_base.css"><link rel="stylesheet" type="text/css" href="/style/mobile.css"> ';

                window.location.href= '/youhoo#device=mobile'; 
            }else{
                // delete 2016-03-13  <link href="/style/projlist.css" media="screen, projection" rel="stylesheet" type="text/css"/>
                _headMetaStyle = '<title>YouHoo - 站点</title>  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>  <meta charset="UTF-8"/> <link href="/style/base.css" media="screen, projection" rel="stylesheet" type="text/css"/> <link href="/style/header.css" media="screen, projection" rel="stylesheet" type="text/css"/> <link href="/style/footer.css" media="screen, projection" rel="stylesheet" type="text/css"/>  ';
            }
            // add the newly created element and its content into the DOM 
            $(_headMetaStyle).insertBefore($("#body"));
        },
        renderHeader : function() {
            if (this.IS_MOBILE_DEVICE) {
                $(tplHeaderM).insertBefore($("#content"));
            }else{
                $(tplHeader).insertBefore($("#content"));
            }
        },
        renderFooter : function() {
            if (this.IS_MOBILE_DEVICE) {
                $("#footer").html(tplFooterM);
            }else{
                $("#footer").html(tplFooter);
            }
        },
        handlePcViewEvent : function() {
            var _self = this
                , dialog = $(".mega-menu-container")
            // The following should in header Or base JS!
            $(".J-dialog-view").on('click',function(e){
                var _url = ""
                    , conTarg = dialog.find(".level2")
                    , sign = $(e.target).data("sign")
                    , bigTile = dialog.find(".J-big-title");
                if (sign === "PRODUCT") {
                    _url = myConfig.queryProductList;
                    bigTile.html("产品中心");
                }else if (sign === "ABOUT_US") {
                    _url = myConfig.queryAboutUs;
                    bigTile.html("关于我们");
                }else{
                    console && console.log("Something is wrong!")
                }

                _self.getData(conTarg,_url,_self.renderPCNav,sign);
            });

            dialog.delegate(".mega-menu-item","click", function(e){
                var targ = $(e.target);
                targ.closest('ul').find('li').removeClass("mega-menu-content-on");
                targ.closest('li').addClass("mega-menu-content-on");
                //TODO changes right view content!
            })

            $(".mega-menu-close").on("click",function(e){
                var targ = $(e.target);
                dialog.hide();
            })
            $("#search-button").click(function(){
                $(this).find(".yhSearchForm").animate({
                    opacity:'1',
                    height:'40px'
                });
            })

        },
        /**
         *
         *
         */
        renderMobProductNav : function(conTarg,data,_self,sign) {
            console.log(conTarg," ====renderMobProductNav==== ",data);
            var _html = '<li class="imagesShow"><a href="javascript:;"><img src="../images/bs320.jpg" alt=""></a></li>';

            for (var i = 0; i < data.length; i++) {
                var _thirdHtml = ""
                    , obj = data[i];

                for (var ij = 0; ij < obj.data.length; ij++) {
                    var _param = obj.data[ij];
                    _thirdHtml += '<li><a href="/youhoo/product?tid='+_param.id+'">'+_param.title+'</a></li>';
                }
                _html += '<li class="thirdBtn"><a href="javascript:;">'+obj.name+'</a> <ul class="third-list">'+_thirdHtml+'</ul> </li>';
            }
            conTarg.html(_html);
            _self.initMobileNav();    
        },
        // 获取浮层显示的数据源
        renderPCNav : function(conTarg,data,_self,sign) {
            console.log(" ====renderPCNav==== ",data)
            var _html = ""
                , dialog = $(".mega-menu-container")

            for (var i = 0; i < data.length; i++) {
                var obj = data[i]
                    , _str = ""
                    , _midHtml = ''
                    , _endHtml = ''
                    , flag_on = !i ? "mega-menu-content-on" : ""
                    , _picSrc = obj.pic ? obj.pic : ""

                if (sign === "ABOUT_US") {
                    _midHtml = ' <a class="mm-main-visual onlyML clearfx" href="/youhoo/aboutus?tid='+obj.id+'">'+obj.name+'<br/><i class="en-name">'+obj.enName+'</i> </a>';
                    _endHtml = '</ul></div></div></li> '
                    _str = '<div class="" data-uid="'+obj.id+'">'+obj.desc+'</div>';
                }else{
                    for (var ij = 0; ij < obj.data.length; ij++) {
                        var _param = obj.data[ij];
                        _str += '<li class="" data-uid="'+_param.id+'"><a class="" href="/youhoo/product?tid='+_param.id+'" style="">'+_param.title+'</a></li>';
                    };

                    _endHtml = '</ul></div></div></li> ';
                }

                _html += '<li class="mega-menu-item '+flag_on+'"> <div id="mm-subMenu_wolv-0" class="mega-menu-title navigation tagClick" data-id="LA MAISON" data-megamenu="wolv"> ' +
                '<span class="onlyML">'+obj.name+'</span> </div> ' +
                '<div class="mega-menu-content"> <div class="relative sub-tile-preview">'+
                _midHtml +
                '<img alt="" align="right" src="'+_picSrc+'" width="310" height="430" /><ul class="fl"> ' +
                _str + _endHtml;
                        
            };
            // console.log("===000=== ", _html);
            conTarg.html(_html);

            dialog.show().css({'left':($(document.body).width()-dialog.width())/2});

        },
        // 获取浮层显示的数据源
        getData : function(conTarg,_url,callback,sign) {
            var _self = this;
            //异步请求，需加loading中的显示
            $.ajax({
                url: _url
                ,type: "get"
                ,dataType: "json"
            })
            .done(function (data) {
                    
                if (!data || data.length == 0) {
                    return;
                }else{
                    callback(conTarg,data,_self,sign);
                }
            })
            .error(function (d) {
            })
            .always(function () {
                // tar.attr('disabled', false)
                // location.reload();
            });
        },
        renderView : function() {
            //
        }
    };


    module.exports = View;
});