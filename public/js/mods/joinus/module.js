define(function (require, exports, module) {
    var $ = jQuery
        , tpl = require("/tpl/contactus.tpl")
        , tplM = require("/tpl/contactus_m.tpl")
        // TODO the following [SearchInfoWindow_min] depends on baiduMap core
        , BMapLib = require("/lib/map.baidu/SearchInfoWindow_min")

    //标注点数组
    var markerArr = [{ title: "杭州涉吉光学有限公司", content: "杭州市余杭区仓前街道良睦路1288号6楼北106室", point: "120.009612,30.297936", isOpen: 1, icon: { w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12 } }];
    var Index = {

        init : function() {
            this.renderView();
        },
        renderView : function() {
            var _self = this;
            if (YouHooUtils.isMobileDevice()) {
                $("#content").html(tplM);
                setTimeout(function(e){
                    _self.initMap();//创建和初始化地图
                },1000)
            }else{
                $("#content").html(tpl);
                setTimeout(function(e){
                    // _self.initMap();//创建和初始化地图
                    _self.initPcMap();//创建和初始化地图
                },1000)
            }
        },

        initPcMap : function(){

            var map = new BMap.Map('map');
            var poi = new BMap.Point(120.009612,30.297936);
            //108.905487,34.255826
            map.centerAndZoom(poi, 14);
            map.enableScrollWheelZoom();
            //杭州市解放东路37号财富金融中心2栋905室0571-89779000'120.217129, 30.247818<img src="/images/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' + 
            var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                            '地址：杭州市余杭区仓前街道良睦路1288号6楼北106室<br/>电话：400-8070605' + '</div>';

            //创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title: "杭州涉吉光学有限公司",      //标题
                width: 100,             //宽度
                height: 60,              //高度
                panel: "panel",         //检索结果面板
                enableAutoPan: true,     //自动平移
                searchTypes: [
                        // BMAPLIB_TAB_TO_HERE,  //到这里去
                        // BMAPLIB_TAB_SEARCH,   //周边检索
                        // BMAPLIB_TAB_FROM_HERE //从这里出发
                    ]
            });
            var marker = new BMap.Marker(poi); //创建marker对象
            marker.enableDragging(); //marker可拖拽
            marker.addEventListener("click", function (e) {
                searchInfoWindow.open(marker);
            })
            map.addOverlay(marker); //在地图中添加marker
            searchInfoWindow.open(marker); //在marker上打开检索信息串口
            $("#close").onclick = function () {
                searchInfoWindow.close();
            }
            $("#open").onclick = function () {
                var enableSendToPhone = false;
                if ($("#enableSendToPhone").checked) {
                    enableSendToPhone = true;
                }
                searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                    title: "杭州涉吉光学有限公司",      //标题
                    width: 100,             //宽度
                    height: 80,              //高度
                    panel: "panel",         //检索结果面板
                    enableAutoPan: true,     //自动平移
                    enableSendToPhone: enableSendToPhone, //是否启用发送到手机
                    searchTypes: [
                        // BMAPLIB_TAB_TO_HERE,  //到这里去
                        // BMAPLIB_TAB_SEARCH,   //周边检索
                        // BMAPLIB_TAB_FROM_HERE //从这里出发
                    ]
                });
                if ($("#enableAutoPan").checked) {
                    searchInfoWindow.enableAutoPan();
                } else {
                    searchInfoWindow.disableAutoPan();
                };
                searchInfoWindow.open(marker);
            }
            $("#show").onclick = function () {
                searchInfoWindow.show();
            }
            $("#hide").onclick = function () {
                searchInfoWindow.hide();
            }
            $("#getPosition").onclick = function () {
                var position = searchInfoWindow.getPosition();
                alert("经度：" + position.lng + "；纬度：" + position.lat);
            }
            $("#setValue").onclick = function () {
                searchInfoWindow.setPosition(new BMap.Point($("#lng").value, $("#lat").value));
                searchInfoWindow.setTitle($("#title").value);
                searchInfoWindow.setContent($("#content").value);
            }
            $("#getContent").onclick = function () {
                alert(searchInfoWindow.getContent());
            }
            $("#getTitle").onclick = function () {
                alert(searchInfoWindow.getTitle());
            }
        },

        //创建和初始化地图函数：
        initMap : function () {
            var _self = this;
            _self.createMap();//创建地图
            _self.setMapEvent();//设置地图事件
            _self.addMapControl();//向地图添加控件
            _self.addMarker();//向地图中添加marker
        },

        //创建地图函数：
        createMap : function () {
            var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
            var point = new BMap.Point(120.009612,30.297936);//定义一个中心点坐标
            map.centerAndZoom(point, 15);//设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map;//将map变量存储在全局
        },

        //地图事件设置函数：
        setMapEvent : function () {
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.disableDoubleClickZoom();//禁用鼠标双击放大
            map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
        },

        //地图控件添加函数：
        addMapControl : function () {
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
            map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, isOpen: 1 });
            map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
            var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
            map.addControl(ctrl_sca);
        },

        //创建marker
        addMarker : function () {
            var _self = this;
            for (var i = 0; i < markerArr.length; i++) {
                var json = markerArr[i];
                var p0 = json.point.split(",")[0];
                var p1 = json.point.split(",")[1];
                var point = new BMap.Point(p0, p1);
                var iconImg = this.createIcon(json.icon);
                var marker = new BMap.Marker(point, { icon: iconImg });
                var iw = _self.createInfoWindow(i);
                var label = new BMap.Label(json.title, { "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20) });
                marker.setLabel(label);
                map.addOverlay(marker);
                label.setStyle({
                    borderColor: "#808080",
                    color: "#333",
                    cursor: "pointer"
                });

                (function () {
                    var index = i;
                    var _iw = _self.createInfoWindow(i);
                    var _marker = marker;
                    _marker.addEventListener("click", function () {
                        this.openInfoWindow(_iw);
                    });
                    _iw.addEventListener("open", function () {
                        _marker.getLabel().hide();
                    })
                    _iw.addEventListener("close", function () {
                        _marker.getLabel().show();
                    })
                    label.addEventListener("click", function () {
                        _marker.openInfoWindow(_iw);
                    })
                    if (!!json.isOpen) {
                        label.hide();
                        _marker.openInfoWindow(_iw);
                    }
                })()
            }
        },
        //创建InfoWindow
        createInfoWindow : function (i) {
            var json = markerArr[i];
            var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
            return iw;
        },
        //创建一个Icon
        createIcon : function (json) {
            var icon = new BMap.Icon("../images/map.baidu/us_mk_icon.png", new BMap.Size(json.w, json.h), { imageOffset: new BMap.Size(-json.l, -json.t), infoWindowOffset: new BMap.Size(json.lb + 5, 1), offset: new BMap.Size(json.x, json.h) })
            return icon;
        }

        
    };


    module.exports = Index;
});