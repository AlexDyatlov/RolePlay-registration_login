$(function(){

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });

  var checker = document.getElementById('checkbox');
  var sendbtn = document.getElementById('send-sms');

    checker.onchange = function(){

    if(this.checked){
      sendbtn.disabled = false;
    } 

    else{
      sendbtn.disabled = true;
    }
  };
  
  $("#passsecond").keyup(validate);
  
  function validate() {
    var password1 = $("#passfirst").val();
    var password2 = $("#passsecond").val();
   
      if(password1 == password2) {
         $("#validate-status").html('<img src="images/icons/validation.png" alt="">');
      }
      else {
          $("#validate-status").html('');
      }
      
  } 

});

