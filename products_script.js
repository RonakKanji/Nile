function decrement(event){
  var actual_clicked_class = (event.parentNode.className);

  var num_list = document.getElementsByClassName("quantity");
  console.log(num_list);
  console.log(actual_clicked_class);
  for(var i=0; i<num_list.length; i++){
    console.log(num_list[i].parentNode.parentNode);
    if(num_list[i].parentNode.parentNode.className == actual_clicked_class){
      var num = parseInt(num_list[i].innerHTML);
      if(num != 0){
        num -= 1;
      }
      document.getElementsByClassName("quantity")[i].innerHTML = num;
    }
  }
}

function increment(event){
  var actual_clicked_class = (event.parentNode.className);

  var num_list = document.getElementsByClassName("quantity");
  console.log(num_list);
  console.log(actual_clicked_class);
  for(var i=0; i<num_list.length; i++){
    console.log(num_list[i].parentNode.parentNode);
    if(num_list[i].parentNode.parentNode.className == actual_clicked_class){
      var num = parseInt(num_list[i].innerHTML);
      num += 1;
      document.getElementsByClassName("quantity")[i].innerHTML = num;
    }
  }
}
  $(document).ready(function(){
    $(window).scroll(function(){
      console.log($(this).scrollTop());
      if($(this).scrollTop() > 150){
        $(".prod_1").css({"opacity": "0"});
      }
      else{
        $(".prod_1").css({"opacity": "1 "});
      }
      if($(this).scrollTop() > 900){
        $(".prod_2").css({"opacity": "0"});
      }
      else{
        $(".prod_2").css({"opacity": "1 "});
      }
    })

    $("button").click(function(event){
      var current_ele = (event.target);
      console.log(current_ele);
      $(current_ele).before("<button class='quantity_btn' onclick='decrement(this)'>-</button>");
      $(current_ele).after("<button class='quantity_btn' onclick='increment(this)'>+</button>");
      $(current_ele).after("<span><p class='quantity'>1</p></span>");
      current_ele.remove();
      document.getElementById("circle_dot").style.visibility="visible";

    });
  });
