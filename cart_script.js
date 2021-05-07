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
  }
  else{
    document.getElementById("invalid_email").style.visibility = "visible";
    return 0;
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
    }
    else{
      document.getElementById("invalid_name").style.visibility = "visible";
      return 0;
    }
}

function check_submit(){
  if(check_name() == 0 && check_email() == 0 && check_phone_num() == 0){
    alert("Please Check Your Deatils");
    return false;
  }
  else{
    console.log("Here");
    return true;
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
      generate_bill()
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
      generate_bill();
    }
  }
}

function generate_bill(){
  var items = document.getElementsByClassName("preview_desc");
  var item_names = document.getElementsByClassName("preview_text");
  var billed = document.getElementsByClassName("bill_item");
  if(billed.length == 0){
  for(var i=0; i<items.length; i++){
      var table = document.getElementById("billing");
      var row = table.insertRow(0);
      row.setAttribute("class", "bill_item");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = item_names[i].innerHTML
      cell2.innerHTML = items[i].innerHTML;
    }
  }
  else{
    for(var j=0; j<billed.length; j++){
      for(var i=0; i<item_names.length; i++){
        if(billed[j].childNodes[1].innerHTML == item_names[i].innerHTML){
          billed[j].childNodes[3].innerHTML = items[i].innerHTML;
        }
      }
      }
    }
}
