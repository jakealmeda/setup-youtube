!function(i){i("div.module-video").each(function(){var e=this.id,d="https://www.youtube.com/embed/"+e+"?autoplay=1";i("#video_image_"+e).on("click",function(){i("#"+e).html('<div class="video-youtube"><div class="module-wrap"><iframe width="420" height="315" id="video_iframe" src="'+d+'" frameborder="0" allowfullscreen></iframe></div></div>')})})}(jQuery);