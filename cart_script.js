generate_bill()


function check_phone_num(){
  var num = document.getElementById("phone_num").value;
  console.log("Num len" + num.length);
  if( num.length >= 10){
    for(var i=0; i<num.length; i++){
      if(num[i].charCodeAt(0) >= 48 && num[i].charCodeAt(0) <= 57){
        document.getElementById("invalid_num").style.visibility = "hidden";
        return 1;
      }
      else{
        document.getElementById("invalid_num").style.visibility = "visible";
        return 0;
      }
    }
  }
  else{
    console.log("Invalid phone_num");
    document.getElementById("invalid_num").style.visibility = "visible";
    return 0;
  }
}

function check_email(){
  var email = document.getElementById("email_id").value;
  var flag = 0;
  console.log("email len" + email.length);
  if(email.length == 0){
    return 0;
  }
  else{
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
      return 0;
    }
  }
}

function check_name(){
    var name = document.getElementById("full_name").value;
    var flag = 0;
    console.log("Nam len: " + name.length);
    if(name.length == 0){
      return 0;
    }
    else{
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
        return 0;
      }
    }
}

function check_submit(){
  console.log(check_name());
  console.log(check_phone_num());
  console.log(check_email());
  if((check_name() == 0) && (check_email() == 0) && (check_phone_num() == 0)){
    if(check_email() == 0){
      if(check_phone_num() == 0){
        alert("Please Check Your Deatils");
        return false;
      }
    }
  }
  else if((check_name() == 1) && (check_email() == 1) && (check_phone_num() == 1)){
    console.log("Here");
    return true;
  }
}

function calculate_sum(){
  var sum =0;
  var billed = document.getElementsByClassName("bill_item");
  for(var i=0; i<billed.length; i++){
    sum += parseInt(billed[i].childNodes[3].innerHTML);
  }
  total_price = document.getElementById('total_price');
  total_price.value = sum;
}

function generate_bill(){
  var items = document.getElementsByClassName("preview_desc");
  var item_names = document.getElementsByClassName("preview_text");
  var billed = document.getElementsByClassName("bill_item");
  console.log(billed);
  var sum = 0;
  if(billed.length == 0){
  for(var i=0; i<items.length; i++){
      var table = document.getElementById("billing");
      var row = table.insertRow(0);
      row.setAttribute("class", "bill_item");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3)
      cell1.innerHTML = item_names[i].innerHTML
      cell2.innerHTML = items[i].innerHTML;
      cell3.innerHTML = 100;
      cell4.innerHTML = items[i].innerHTML * 100;
    }
  }
  else{
    for(var j=0; j<billed.length; j++){
      for(var i=0; i<item_names.length; i++){
        if(billed[j].childNodes[0].innerHTML == item_names[i].innerHTML){
          billed[j].childNodes[1].innerHTML = items[i].innerHTML;
          billed[j].childNodes[3].innerHTML = items[i].innerHTML * 100;
        }
      }
      }
    }
    calculate_sum()   
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


