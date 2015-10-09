
(function(){
    //加盟频道
    var join = CZXS.join = {};
    join.banner = function(){
        function banner1(){
            var el = $(".banner1_wp");
            var li = el.find("li");
            el.on("mouseenter", function(){
                GLOBAL.Utils.bannerInit('.banner1_wp');
            });
            el.on("mouseleave", function(){
                li.removeClass("flipInY");
            });
        }
        function banner2(){
            var el = $(".banner2_wp");
            var li = el.find(".txt");
            el.on("mouseenter", function(){
                GLOBAL.Utils.bannerInit('.banner2_wp');
            });
            el.on("mouseleave", function(){
                li.removeClass("bounceIn");
            });
        }
        function banner3(){
            var el = $(".qa_wp");
            var li = el.find(".txt");

            var qa = new Swiper( ".qa_wp", {
                pagination: '.qa-swiper-pagination',
                paginationClickable: true,
                paginationBulletRender: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            });
        }
        return {
            init: function(){
                banner1();
                banner2();
                banner3();
            }
        }
    }();

    join.form = function(){
        function main(){

        }
        function _event(){
            $("#place_meun a").on("click", function(){
                var ths = $(this);
                ths.addClass("cur").siblings().removeClass("cur");
                $("#place").val( ths.attr("data-type") );
            });
        }
        return {
            init: function(){
                _event();
            }
        }
    }();

    join.ready = function(){
        $(function(){
            join.banner.init();
            join.form.init();
            GLOBAL.Utils.fixMeun();
        });
    }();

})();




