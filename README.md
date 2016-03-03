# jquery-rwdselimg.js 1.0.0
jQuery plug-in for responsive web design.

##How to use

###HTML (options)
    <script src="//ajax.googleapis.com/ajax/libs/jquery/xxxx/jquery.min.js"></script>
    <script src="jquery-rwdselimg.js"></script>    
    <script>
      $('.js-rwdImg').rwdSelImg({
        imgName1 : '_p', //image path
        imgName2 : '_s', //image path
        targetWidth: 640 //window size
      });
    </script>
### Defalut options
      $.fn.rwdSelectImg.default = {
        imgName1 : '_pc',
        imgName2 : '_sp',
        targetWidth: 640
      };

### Function
- Window resize
- Imgage change (optimization)

### License
MIT-style
