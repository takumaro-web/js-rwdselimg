/* ----------------------------------------------------------------------------------
 *  jquery-rwdselimg.js 1.0.0　MIT-style license.
 *  2016 @paradox_tm takumaro-web　https://github.com/takumaro-web/jquery-rwdselimg.js
  ---------------------------------------------------------------------------------- */

(function($) {
  $.fn.rwdSelImg = function(options){
    var set = $.extend({}, $.fn.rwdSelImg.default, options);
    
    /*Get width*/
    var getScreenWidth = function() {
        if (window.innerWidth) {
            return window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth !== 0) {
            return document.documentElement.clientWidth;
        } else if (document.body) {
            return document.body.clientWidth;
        }
        return 0;
    };
    var windowSize = getScreenWidth();

    /*Iamge Select*/
    var rwdImgFuc = function(ws,$image){

      if( ws < set.targetWidth){   
        $image.attr('src', $image.attr('src').replace(new RegExp('(.*)' + set.imgName1), function(){
           return arguments[1] + set.imgName2;
        }));
      }else{
        $image.attr('src', $image.attr('src').replace(new RegExp('(.*)' + set.imgName2), function(){
          return arguments[1] + set.imgName1;
        }));
      }
      //preload
      $("<img>").attr('src',$image.attr('src').replace(new RegExp('(.*)' + set.imgName1), function(){
        return arguments[1] + set.imgName2;
      }));

    };
    rwdImgFuc(windowSize,$(this));

    var timer = false;
    var reSizePath = $(this);

    $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
      var windowSize = getScreenWidth();
      rwdImgFuc(windowSize,reSizePath);
      }, 60);
    });

  };
  /*Defalut set*/
  $.fn.rwdSelImg.default = {
    imgName1 : '_pc',
    imgName2 : '_sp',
    targetWidth: 640
  };

})(jQuery);