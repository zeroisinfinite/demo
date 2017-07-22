<div id="yh-header">
      <div style="position:relative;z-index:50;background:#000">
        <div class="yh-menu fl" id="yh-menu"></div>
        <div class="yh-logo fl">
          <a href="/youhoo" style="display:block"><img src="../images/YOUHOO.png" alt="youhoo"></a>
        </div>
        <div class="yh-header-right fr">
          <span style="font-size:1em">+400-8070605</span>
        </div>
        <div class="clear"></div>
        <!-- 隐藏的列表 一级列表-->
        <ul id="menu-lists" style="height: 0;">
        <!-- 如果二级列表下有图片，↓↓↓↓↓加上pic-list类 -->
          <li class="aboutBtn pic-list">
            <a href="javascript:;">关于我们</a>
            <!--二级列表 begin-->
            <ul class="second-list">
              <!-- 第一个li为图片，如果有的话 -->
              <li class="imagesShow"><a href="javascript:;"><img src="../images/bs320.jpg" alt=""></a></li>
              <li><a href="/youhoo/aboutus?tid=101">公司简介</a></li>
              <li><a href="/youhoo/aboutus?tid=201">品牌介绍</a></li>
              <li><a href="/youhoo/aboutus?tid=301">制造工艺</a></li>
            </ul>
            <!-- 二级列表 end -->
          </li>
          <li><a href="/youhoo/news">新闻资讯</a></li>
          <li class="productBtn pic-list">
            <a href="javascript:;">产品中心</a>
            <ul class="second-list J-product-center">

            </ul>
          </li>
          <!-- <li><a href="/youhoo/join">加盟我们</a></li> -->
          <li><a href="/youhoo/joinus">联系我们</a></li>
          <li><a href="tel:4008070605">+400-8070605</a></li>
        </ul>
        <!-- 一级列表End -->
        </div>

      <!--新增-->
      <div class="head-more" id="head-more">
        <div class="head-more-h">
          <div class="search">
            <input type="text" placeholder="产品，专卖店..." class="searchInput">
            <input type="submit" value="搜索" id="searchSubmit" class="searchSubmit">
          </div>
          <!-- <div class="head-wish">
            <a href="javascript:;"></a>
          </div> -->
          <div class="head-help">
            <a href="/youhoo/help"></a>
          </div>
        </div>
        <div class="head-more-b" id="head-more-b">
          <div class="head-more-top"></div>
          <div class="head-more-bottom">更多</div>
        </div>
      </div>
      <script>
        var headMore=document.getElementById('head-more');
        var headB=document.getElementById('head-more-b');
        var flag=0;
        var startY=0,offY=0,endY=0;
        headB.addEventListener('click',function(){
          if(flag===0){
            headMore.style.top='60px';
            flag=1;
          }else{
            headMore.style.top='0px';
            flag=0;
          }
        });
        headB.addEventListener('touchstart',function(event){
          var touch=event.targetTouches[0];
          startY=touch.pageY;
        })
        headB.addEventListener('touchmove',function(event){
          event.preventDefault();
          var touch=event.targetTouches[0];
          //手指移动的范围限制
          offY=touch.pageY-startY>60?60:touch.pageY-startY;
          offY=offY<0?0:offY;
          headMore.style.top=offY+'px';
          if(offY==60){
            flag=1;
          }else if(offY==0){
            flag=0;
          }
          endY=touch.pageY;
        })
        headB.addEventListener('touchend',function(event){
          if(endY-startY<30 && endY-startY>0){
            headMore.style.top=0+'px';
            flag=0;
          }else if(endY-startY>30 && endY-startY<60){
            headMore.style.top=60+'px';
            flag=1;
          }
        })
        window.onscroll=function(){
          var srcTop=document.documentElement.scrollTop || document.body.scrollTop;
          if(srcTop>60){
            headMore.className="head-more fixedMar";
          }else{
            headMore.className="head-more";
          }
        }
      </script>
    </div>