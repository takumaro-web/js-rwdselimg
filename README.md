# jquery-rwdselimg.js 1.0.0
jQuery plug-in for responsive web design.

## sample
###windowsize: 641px over  
        img src="hogehoge_pc.jpg"  
  
###windowsize: 640px and under  
        img src="hogehoge_sp.jpg"

##How to use

###HTML (options)
    <script src="//ajax.googleapis.com/ajax/libs/jquery/xxxx/jquery.min.js"></script>
    <script src="jquery-rwdselimg.js"></script>    
    <script>
      $('.js-rwdImg').rwdSelImg({
        imgName1 : '_p', //image path sample: hogehoge_p.png
        imgName2 : '_s', //image path sample: fugafuga_s.png
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
