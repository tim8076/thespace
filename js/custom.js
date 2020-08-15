$(document).ready(function(){
        //禮品店側邊選單收合
   $(".list-toggle").click(function(){
    $(".slide").slideToggle(200);
   })

      //側邊選單收合

    $(".info-item").click(function(){

      return false;
    })
   
      //首頁頁籤
    $("#contents div[id != 'content1']").hide();

    $(".service-list-item").click(function(){
      $("#contents .content-item").hide();
      $($(this).attr("href")).show();

      $(".current").removeClass("current");
      $(this).addClass("current");

      return false;
    })

    //聯絡我們-平滑捲動
    $("a[href='#contactus']").click(function(){

      var target = $($(this).attr("href")).offset().top;

      $("html,body").animate({scrollTop:target},500);


      return false;
    })   
  
});



   

