﻿//Pager
$(document).ready(function(){var e=$(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);$(&quot;a.blog-pager-older-link&quot;).load(e+&quot; .post-title:first&quot;,function(){var e=$(&quot;a.blog-pager-older-link&quot;).text();$(&quot;a.blog-pager-older-link&quot;).text(e)});var r=$(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);$(&quot;a.blog-pager-newer-link&quot;).load(r+&quot; .post-title:first&quot;,function(){var e=$(&quot;a.blog-pager-newer-link:first&quot;).text();$(&quot;a.blog-pager-newer-link&quot;).text(e)})});
//Spoiler
$(document).ready(function(){$(&quot;#flippy&quot;).click(function(){$(&quot;#flippanel&quot;).slideToggle(&quot;normal&quot;)})});
//<![CDATA[
// Haber
function getauthor(t){for(var e=0;e<t.length;e++)var i=t[e].name.$t;return i}function getmeta(t){var e=[];e[1]="Ocak",e[2]="Şubat",e[3]="Mart",e[4]="Nisan",e[5]="Mayıs",e[6]="Haziran",e[7]="Temmuz",e[8]="Ağustos",e[9]="Eylül",e[10]="Ekim",e[11]="Kasım",e[12]="Aralık";var i=t.substring(0,4),a=t.substring(5,7),n=t.substring(8,10),r=e[parseInt(a,10)]+" "+n+" "+i;return r}function bloggereklentilerietiket(t){var e=document.querySelector("#etiket"),i=t.feed.entry,a="<ul id='ticket-wrapper-inner'>";if(i){for(var n=0;n<i.length;n++){for(var r=i[n],s=0;s<r.link.length;s++)if("alternate"==r.link[s].rel){var l=r.link[s].href;break}try{var o='<img src="'+r.media$thumbnail.url+'"/>'}catch(t){var o=""}var u=r.title.$t,c=getauthor(r.author),d=getmeta(r.published.$t);a+="<li>"+o+'<h3><a href="'+l+'">'+u+'</a></h3><div class="etiketmeta"><span>'+c+"</span> - <span>"+d+"</span></div></li>"}a+="</ul>",e.innerHTML=a}$("#etiket").vetiket()}!function(t){var e={speed:700,pause:4e3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1},i={moveUp:function(t,e){i.animate(t,e,"up")},moveDown:function(t,e){i.animate(t,e,"down")},animate:function(e,i,a){var n=e.itemHeight,r=e.options,s=e.element,l=s.children("ul"),o="up"===a?"li:first":"li:last";s.trigger("vetiket.beforeTick");var u=l.children(o).clone(!0);if(0<r.height&&(n=l.children("li:first").height()),n+=r.margin+2*r.padding,"down"===a&&l.css("top","-"+n+"px").prepend(u),i&&i.animate){if(e.animating)return;e.animating=!0,l.animate("up"===a?{top:"-="+n+"px"}:{top:0},r.speed,function(){t(l).children(o).remove(),t(l).css("top","0px"),e.animating=!1,s.trigger("vetiket.afterTick")})}else l.children(o).remove(),l.css("top","0px"),s.trigger("vetiket.afterTick");"up"===a&&u.appendTo(l)},nextUsePause:function(){var e=t(this).data("state"),i=e.options;e.isPaused||2>e.itemCount||a.next.call(this,{animate:i.animate})},startInterval:function(){var e=t(this).data("state"),a=this;e.intervalId=setInterval(function(){i.nextUsePause.call(a)},e.options.pause)},stopInterval:function(){var e=t(this).data("state");e&&(e.intervalId&&clearInterval(e.intervalId),e.intervalId=void 0)},restartInterval:function(){i.stopInterval.call(this),i.startInterval.call(this)}},a={init:function(n){a.stop.call(this);var r=jQuery.extend({},e);n=t.extend(r,n);var r=t(this),s={itemCount:r.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:r,animating:!1,options:n,isPaused:n.startPaused?!0:!1,pausedByCode:!1};t(this).data("state",s),r.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:n.margin,padding:n.padding}),isNaN(n.height)||0===n.height?(r.children("ul").children("li").each(function(){var e=t(this);e.height()>s.itemHeight&&(s.itemHeight=e.height())}),r.children("ul").children("li").each(function(){t(this).height(s.itemHeight)}),r.height((s.itemHeight+(n.margin+2*n.padding))*n.showItems+n.margin)):r.height(n.height);var l=this;n.startPaused||i.startInterval.call(l),n.mousePause&&r.bind("mouseenter",function(){!0!==s.isPaused&&(s.pausedByCode=!0,i.stopInterval.call(l),a.pause.call(l,!0))}).bind("mouseleave",function(){(!0!==s.isPaused||s.pausedByCode)&&(s.pausedByCode=!1,a.pause.call(l,!1),i.startInterval.call(l))})},pause:function(e){var i=t(this).data("state");if(i){if(2>i.itemCount)return!1;i.isPaused=e,i=i.element,e?(t(this).addClass("paused"),i.trigger("vetiket.pause")):(t(this).removeClass("paused"),i.trigger("vetiket.resume"))}},next:function(e){var a=t(this).data("state");if(a){if(a.animating||2>a.itemCount)return!1;i.restartInterval.call(this),i.moveUp(a,e)}},prev:function(e){var a=t(this).data("state");if(a){if(a.animating||2>a.itemCount)return!1;i.restartInterval.call(this),i.moveDown(a,e)}},stop:function(){t(this).data("state")&&i.stopInterval.call(this)},remove:function(){var e=t(this).data("state");e&&(i.stopInterval.call(this),e=e.element,e.unbind(),e.remove())}};t.fn.vetiket=function(e){return a[e]?a[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.vetiket"):a.init.apply(this,arguments)}}(jQuery),$(function(){var t=document.createElement("script");t.src="http://"+$(".etiket-wrap").data("domain")+"/feeds/posts/summary?alt=json&callback=bloggereklentilerietiket",t.type="text/javascript",document.getElementsByTagName("body")[0].appendChild(t)});
// Back to top button
(function(){$(document).ready(function(){return $(window).scroll(function(){return $(window).scrollTop()>600?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}),$("#back-to-top").click(function(){return $("html,body").animate({scrollTop:"0"})})})}).call(this);
// Search me
$(function(){$(".searchbutton").on("click",function(){$(".google-search").addClass("active").find(".search").focus()});$(".google-search").on("click",function(){$(this).find(".search").focus()});$("#close").on("click",function(){$(".google-search").removeClass("active")})});
// Menu Top
$(document).ready(function(){var str=location.href.toLowerCase();$('.top-menunavi ul li a').each(function(){if(str.indexOf(this.href.toLowerCase())>-1){$("li.highlight").removeClass("highlight");$(this).parent().addClass("highlight")}})})
$(function(){var pull=$('#pull');menu=$('.top-menunavi ul');menuHeight=menu.height();$(pull).on('click',function(e){e.preventDefault();menu.slideToggle()});$(window).resize(function(){var w=$(window).width();if(w>320&&menu.is(':hidden')){menu.removeAttr('style')}})});
// Main Menu
var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".menu-slide").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".menu-slide").css("display","inline-block");if(!$(".menu-slide").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".menu-slide").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}
// Simple Tab
!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.artabs=d.$element.children(),d.options=a.extend({},a.fn.martabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.artabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.artabs.wrapAll('<div class="'+c.artabs_container_class+'" />'),b.artabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.artabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.artabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.artabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$artabs_menu=a(g).prependTo(c.$wrapper),b=c.$artabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$artabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.artabs.hide().filter(":eq("+b+")").show(),c.$artabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onartabselect)&&b!==c.current_tab&&d.onartabselect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$artabs_menu.remove(),a.artabs.unwrap().unwrap(),a.artabs.removeAttr("style"),a.artabs.children(b+":first").removeAttr("style"),a.$element.removeData("martabs")}},a.fn.martabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("martabs");e="object"==typeof c&&c,g||f.data("martabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.martabs.defaults={container_class:"artabs",artabs_container_class:"artabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",artabsmenu_class:"artabs-menu",artabsmenu_el:"ul",tmpl:{artabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onartabselect:null}}(window.jQuery,window,document);
// EU Law Cookies
window.cookieconsent_options = {"message":"Web sitemizde en iyi deneyimi elde etmek amacıyla çerezler kullanır","Reddet":"Anladım !","Daha Fazlası":"Daha fazla bilgi","bağlantı":"Gizlilik Politikası URL","tema":"dark-float"};
(function(){var e=document.createElement("script");e.async=true;e.type="text/javascript";e.src="";(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)})();
// Search Result
function caribloggoogle(){var e=$(".search").val(),t=$(".search-item").length+1;if(e.length>=1){$(".search-content").slideDown(),$(".search-filter").attr("data-query",e),$(".search-result span").slideDown().html("Searching ...");var r="/feeds/posts/default?max-results=12&start-index="+t+"&alt=json&q="+e;$.ajax({type:"GET",url:r,async:!0,contentType:"application/json",dataType:"jsonp",success:function(t){$(".query-result").slideUp(),doSearch(t,e)}})}else $(".search-content").slideUp()}function doSearch(e,t){if(e.feed.entry){for(var r=0;r<e.feed.entry.length;r++){for(var n=0;n<e.feed.entry[r].link.length;n++)if("alternate"==e.feed.entry[r].link[n].rel){var a=e.feed.entry[r].link[n].href;break}try{var s=e.feed.entry[r].media$thumbnail.url}catch(i){var s="http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w100-h100-c/no-image.png"}var c=e.feed.entry[r].title.$t,h='<div class="search-item"><img src="'+s+'"/><a href="'+a+'" target="_blank">'+c+"</a></div>";$(".search-result").append(h)}$(".search-result span").slideUp(function(){$(".queryword").html("Show results for:<b>"+t+"</b>"),$(".query-result").slideDown()})}else $(".search-result span").slideDown().html("Bulunamadı!"),$(".query-result").slideUp()}$(".searchmein").submit(function(){return $(".search-item").remove(),caribloggoogle(),!1}),$(".close-search").click(function(){$(".search-content").slideUp()}),$(".query-result").click(function(){$(".query-result").slideUp(),caribloggoogle()});
// Adblock Detected
window.onload=function(){setTimeout(function(){var e=document.querySelector("ins.adsbygoogle");e&&0==e.innerHTML.replace(/\s/g,"").length&&(e.style.cssText="color:rgba(0,0,0,0.5);font-weight:700;font-size:110%;padding:20px;margin:auto;text-align:center;text-decoration:none;display:block!important;background:rgba(0,0,0,0.02);border:1px solid rgba(0,0,0,0.08)",e.innerHTML="Sizin tarayıcınızda Google AdSense reklamları engellendiği görünüyor")},2e3)};
//]]>