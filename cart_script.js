function check_phone_num(){
  var num = document.getElementById("phone_num").value;
  if( num.length >= 10){
    for(var i=0; i<num.length; i++){
      if(num[i].charCodeAt(0) >= 48 && num[i].charCodeAt(0) <= 57){
        document.getElementById("invalid_num").style.visibility = "hidden";
      }
      else{
        document.getElementById("invalid_num").style.visibility = "visible";
        return 0;
      }
    }
  }
  else{
    console.log("Invalid");
    document.getElementById("invalid_num").style.visibility = "visible";
    return 0;
  }
}

function check_email(){
  var email = document.getElementById("email_id").value;
  var flag = 0;
  for(var i=0; i<email.length; i++){
    flag = 0;
    if(email[i] == "@"){
      flag = 1;
      var split_str = email.split("");
      split_str.reverse();
      if(split_str[0] == "m" && split_str[1] == "o" && split_str[2] == "c" && split_str[3] == "."){
        flag = 1;
      }
      else{
        flag = 0;
      }
      break;
    }
  }

  if(flag == 1){
    document.getElementById("invalid_email").style.visibility = "hidden";
    return 1;
  }
  else{
    document.getElementById("invalid_email").style.visibility = "visible";
  }
}

function check_name(){
    var name = document.getElementById("full_name").value;
    console.log(name);
    var flag = 0;
    for(var i=0; i<name.length; i++){
      if((name[i].charCodeAt(0) >= 65 && name[i].charCodeAt(0) <= 90) || (name[i].charCodeAt(0) >= 97 && name[i].charCodeAt(0) <= 122) || name[i].charCodeAt(0) == 32){
        flag = 1;
      }
      else{
        flag = 0;
        break;
      }
    }
    if(flag == 1){
    document.getElementById("invalid_name").style.visibility = "hidden";
    return 1;
    }
    else{
      document.getElementById("invalid_name").style.visibility = "visible";
    }
}

function check_submit(){
  if(check_name() && check_email() && check_phone_num()){
    return true;
  }
  else{
    alert("Please Check Your Deatils");
    return false;
  }
}

function decrement(event){
  var actual_clicked_class = (event.parentNode.className);

  var num_list = document.getElementsByClassName("preview_desc");
  for(var i=0; i<num_list.length; i++){
    if(num_list[i].parentNode.className == actual_clicked_class){
      var num = parseInt(num_list[i].innerHTML);
      if(num != 0){
        num -= 1;
      }
      document.getElementsByClassName("preview_desc")[i].innerHTML = num;
    }
  }
}

function increment(event){
  var actual_clicked_class = (event.parentNode.className);

  var num_list = document.getElementsByClassName("preview_desc");
  for(var i=0; i<num_list.length; i++){
    if(num_list[i].parentNode.className == actual_clicked_class){
      var num = parseInt(num_list[i].innerHTML);
      num += 1;
      document.getElementsByClassName("preview_desc")[i].innerHTML = num;
    }
  }
}
