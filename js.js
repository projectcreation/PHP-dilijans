function ajax1(){var e=$("#form-1").serialize();$.ajax({type:"POST",url:"./js/send.php",data:e,success:function(e){$.closeModal(),$("#modal-success .modal-in").html(e),setTimeout(function(){$("body").addClass("bodyModal blur"),$("html").css({overflow:"hidden","padding-right":swidth}),$("#modal-success").addClass("active")},300),setTimeout(function(){$.closeModal(),$(".form_input").val("")},3700)},error:function(e,t){alert("Возникла ошибка!")}})}function ajax2(){var e=$("#form-2").serialize();$.ajax({type:"POST",url:"./js/send.php",data:e,success:function(e){$("#modal-success div").html(e),$("#modal-success").addClass("show1"),setTimeout(function(){$("#modal-success").addClass("show2")},1),$("#modal-bg").addClass("show1"),setTimeout(function(){$("#modal-bg").addClass("show2")},1),$("body").css({overflow:"hidden","padding-right":swidth}),$(".header").css({"margin-right":swidth}),setTimeout(function(){$("#modal-bg").removeClass("show2"),setTimeout(function(){$("#modal-bg").removeClass("show1")},300),$("#modal-success").removeClass("show2"),setTimeout(function(){$("#modal-success").removeClass("show1")},1),$(".form_input").val(""),setTimeout(function(){$("html,body").css({overflow:"auto","padding-right":0})},500)},3700)},error:function(e,t){alert("Возникла ошибка!")}})}function ajax3(){var e=$("#form-3").serialize();$.ajax({type:"POST",url:"./js/send.php",data:e,success:function(e){$("#modal-success div").html(e),$("#modal-success").addClass("show1"),setTimeout(function(){$("#modal-success").addClass("show2")},1),$("#modal-bg").addClass("show1"),setTimeout(function(){$("#modal-bg").addClass("show2")},1),$("body").css({overflow:"hidden","padding-right":swidth}),$(".header").css({"margin-right":swidth}),setTimeout(function(){$("#modal-bg").removeClass("show2"),setTimeout(function(){$("#modal-bg").removeClass("show1")},300),$("#modal-success").removeClass("show2"),setTimeout(function(){$("#modal-success").removeClass("show1")},1),$(".form_input").val(""),setTimeout(function(){$("html,body").css({overflow:"auto","padding-right":0})},500)},3700)},error:function(e,t){alert("Возникла ошибка!")}})}function ajax10(){var e=$("#form-10").serialize();$.ajax({type:"POST",url:"./js/send.php",data:e,success:function(e){$.closeModal(),$("#modal-success .modal-in").html(e),setTimeout(function(){$("body").addClass("bodyModal blur"),$("html").css({overflow:"hidden","padding-right":swidth}),$("#modal-success").addClass("active")},300),setTimeout(function(){$.closeModal(),$(".form_input").val("")},3700)},error:function(e,t){alert("Возникла ошибка!")}})}function ajax11(){var e=$("#form-11").serialize();$.ajax({type:"POST",url:"./js/send.php",data:e,success:function(e){$.closeModal(),$("#modal-success .modal-in").html(e),setTimeout(function(){$("body").addClass("bodyModal blur"),$("html").css({overflow:"hidden","padding-right":swidth}),$("#modal-success").addClass("active")},300),setTimeout(function(){$.closeModal(),$(".form_input").val("")},3700)},error:function(e,t){alert("Возникла ошибка!")}})}document.body.style.overflow="hidden";var swidth=document.body.clientWidth;document.body.style.overflow="scroll",swidth-=document.body.clientWidth,swidth||(swidth=document.body.offsetWidth-document.body.clientWidth),document.body.style.overflow="",jQuery.fn.notExists=function(){return 0==$(this).length},$(document).ready(function(){$("#send-1").validation($("#tel-1").validate({test:"blank",invalid:function(){$(".error").remove(),$(this).nextAll(".error").notExists()&&($(this).after('<div class="error">Введите телефон</div>'),$(this).nextAll(".error").delay(1500).fadeOut("slow"),setTimeout(function(){$("#tel-1").next(".error").remove()},2100))},valid:function(){$(this).nextAll(".error").remove()}})),$("#send-2").validation($("#tel-2").validate({test:"blank",invalid:function(){$(".error").remove(),$(this).nextAll(".error").notExists()&&($(this).after('<div class="error">Введите телефон</div>'),$(this).nextAll(".error").delay(1500).fadeOut("slow"),setTimeout(function(){$("#tel-2").next(".error").remove()},2100))},valid:function(){$(this).nextAll(".error").remove()}})),$("#send-3").validation($("#tel-3").validate({test:"blank",invalid:function(){$(".error").remove(),$(this).nextAll(".error").notExists()&&($(this).after('<div class="error">Введите телефон</div>'),$(this).nextAll(".error").delay(1500).fadeOut("slow"),setTimeout(function(){$("#tel-3").next(".error").remove()},2100))},valid:function(){$(this).nextAll(".error").remove()}})),$("#send-10").validation($("#tel-10").validate({test:"blank",invalid:function(){$(".error").remove(),$(this).nextAll(".error").notExists()&&($(this).after('<div class="error">Введите телефон</div>'),$(this).nextAll(".error").delay(1500).fadeOut("slow"),setTimeout(function(){$("#tel-10").next(".error").remove()},2100))},valid:function(){$(this).nextAll(".error").remove()}})),$("#send-11").validation($("#tel-11").validate({test:"blank",invalid:function(){$(".error").remove(),$(this).nextAll(".error").notExists()&&($(this).after('<div class="error">Введите телефон</div>'),$(this).nextAll(".error").delay(1500).fadeOut("slow"),setTimeout(function(){$("#tel-11").next(".error").remove()},2100))},valid:function(){$(this).nextAll(".error").remove()}}))}),function(e){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera),!function(e,t,o){function a(e,t){return typeof e===t}function s(){var e,t,o,s,i,n,c;for(var m in r)if(r.hasOwnProperty(m)){if(e=[],t=r[m],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(o=0;o<t.options.aliases.length;o++)e.push(t.options.aliases[o].toLowerCase());for(s=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)n=e[i],c=n.split("."),1===c.length?d[c[0]]=s:(!d[c[0]]||d[c[0]]instanceof Boolean||(d[c[0]]=new Boolean(d[c[0]])),d[c[0]][c[1]]=s),l.push((s?"":"no-")+c.join("-"))}}function i(e){var t=c.className,o=d._config.classPrefix||"";if(m&&(t=t.baseVal),d._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");t=t.replace(a,"$1"+o+"js$2")}d._config.enableClasses&&(t+=" "+o+e.join(" "+o),m?c.className.baseVal=t:c.className=t)}var l=[],r=[],n={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var o=this;setTimeout(function(){t(o[e])},0)},addTest:function(e,t,o){r.push({name:e,fn:t,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},d=function(){};d.prototype=n,d=new d;var c=t.documentElement,m="svg"===c.nodeName.toLowerCase();d.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),s(),i(l),delete n.addTest,delete n.addAsyncTest;for(var u=0;u<d._q.length;u++)d._q[u]();e.Modernizr=d}(window,document),$(document).ready(function(){if(!Modernizr.svg)for(var e=document.getElementsByTagName("img"),t=/.*\.svg$/,o=e.length,a=0;a<o;a++)e[a].src.match(t)&&(e[a].src=e[a].src.slice(0,-3)+"png",console.log(e[a].src));jQuery.browser.mobile?$("html").addClass("mobile"):$(function(){var e=$(window).scrollTop()/2;$(window).scroll(function(){var e=$(window).scrollTop()/2;$(".promo_videobg-w").css({top:e})})}),$(function(){$.modalSlider=function(e){var t=new Swiper(".modal-catalog_slider-"+e,{slidesPerView:1,spaceBetween:0,autoplay:3e3,speed:300,loop:!0,prevButton:".modal-catalog_slider-"+e+"_arrow-left",nextButton:".modal-catalog_slider-"+e+"_arrow-right"})};for(var e=$(".modal-catalog_slider").length-1;e>=0;e--)$.modalSlider(e);$(".modal-catalog_slider-wrapper").each(function(e,t){$(t).children().length<2&&$(t).parents(".modal-catalog_slider-w").addClass("noArrow")})}),$(function(){$.modalSlider=function(e){var t=new Swiper(".modal-tour_slider-"+e,{slidesPerView:1,spaceBetween:0,speed:300,loop:!0,prevButton:".modal-tour_slider-"+e+"_arrow-left",nextButton:".modal-tour_slider-"+e+"_arrow-right"})},$(".modal-tour_slider-wrapper").each(function(e,t){$(t).children().length<2&&$(t).parents(".modal-tour_slider").addClass("noArrow")})}),$(".schedule_nav_link").on("click",function(){$(this).parents(".schedule_nav").find(".schedule_nav_link").removeClass("active"),$(this).addClass("active"),$(this).parents(".schedule_section").find(".schedule_det_item").removeClass("active").height(0),$(this).parents(".schedule_section").find(".schedule_det_item-"+$(this).attr("data-number")).addClass("active").height($(this).parents(".schedule_section").find(".schedule_det_item-"+$(this).attr("data-number")+" .schedule_det_item-in").outerHeight()+"px");var e=$(this).parents(".schedule_section").offset().top+$(".modal-schedule").scrollTop()-50;return!1}),$(".schedule_det_table_item_p-title").each(function(e){var t=$(this).innerWidth(),o=$(this).index()+1;$(this).parents(".schedule_det_table").find(".schedule_det_table_item_p:nth-child("+o+")").innerWidth(t)}),$(".modal_bus_reserve_menu_item_link").on("click",function(){return $(".modal_bus_reserve_menu_item_link").removeClass("active"),$(this).addClass("active"),$(".modal_bus_reserve_big_item").removeClass("active"),$(".modal_bus_reserve_big_item-"+$(this).attr("data-item")).addClass("active"),!1}),$(function(){$(".form_input-tel").mask("+7(999) 999-99-99")}),$(".order").click(function(){return $.openModal(),$(".modal-1").addClass("active"),$(".modal-1_header").html($(this).attr("data-mHeader")),$("#send-10").val($(this).attr("data-mSend")),$("#formName").val($(this).attr("data-mFormName")),!1}),$(".order-tour").click(function(){return $(".modal-tour_title").html($(this).attr("data-mTitle")),$(".modal-tour_info_desc").html($(this).attr("data-mDesc")),$(".modal-tour_slider").removeClass("active"),$(".modal-tour_slider-"+$(this).attr("data-mImg")).addClass("active"),$.modalSlider($(this).attr("data-mImg")),$.openModal(),$(".modal-tour").addClass("active"),$(".modal-1_header").html($(this).attr("data-mHeader")),$("#send-10").val($(this).attr("data-mSend")),$("#formName").val($(this).attr("data-mFormName")),!1}),$(".order-tour-order").click(function(){return $.openModal(),$(".modal-1").addClass("active"),!1}),$(".order-2").click(function(){return $.openModal(),$(".modal-"+$(this).attr("data-modal")).addClass("active"),!1}),$(".catalog_item").click(function(){return $.openModal(),$(".modal-catalog-"+$(this).attr("data-modal")).addClass("active"),$(".modal-catalog_slider-"+$(this).attr("data-modal")+" .modal-catalog_slide_img").each(function(e,t){$(t).attr("src",$(t).attr("data-src"))}),!1}),$(".decor_gallery").click(function(){return $.openModal(),$(".modal-gallery").addClass("active"),$(".modal-gallery_item_img").each(function(e,t){$(t).attr("src",$(t).attr("data-src"))}),!1}),$(".modal").on("click",function(e){if($(e.target).hasClass("modal"))return $.closeModal(),!1}),$(".modal_close").on("click",function(){return $.closeModal(),!1}),$.openModal=function(){return $(".modal").removeClass("active"),$("body").addClass("bodyModal blur"),$("html").css({overflow:"hidden","padding-right":swidth}),!1},$.closeModal=function(){return $(".modal").removeClass("active"),$("body").removeClass("bodyModal blur"),setTimeout(function(){$("html").css({overflow:"auto","padding-right":0})},180),!1}});