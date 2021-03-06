// Stolley only wants one js file
// Also, avoid using "onclick" when you guys do html tags

$(document).ready(function () {
  // Frontpage submit
  $("#loginForm").on('submit', function (e) {});

  // Hides username label when on focus
  $("#usernameInput").on('focus', function () {
    $('#user label').addClass('gone');
  });

  // Hides password label when on focus
  $("#passwordInput").on('focus', function () {
    $('#pass label').addClass('gone');
  });

  // Restores labels if input length is zero
  $('html').focusout(function () {
    if ($('#usernameInput').val().length === 0) {
      $('#user label').removeClass('gone');
    }
    if ($('#passwordInput').val().length === 0) {
      $('#pass label').removeClass('gone');
    }
  });
  
  // Checks for successful login
  $('#loginForm').on('submit',function(e) {
    $('div').remove();
    //Checks for correct username
    if ($('#usernameInput').val()==='swolley') {
      //Checks to make sure a password was entered
      if ($('#passwordInput').val().length != 0) {
        window.location.replace('account/index.html');
      }else {
        console.log('Bad Username');
        $('#loginForm').prepend('<div class="error">Incorrect Password</div>');
      }
    }else {
      console.log('Bad Username');
      $('#loginForm').prepend('<div class="error">Incorrect Username</div>');
    }
    e.preventDefault();
  });

  //Shows and hides password
  var pwShown = 0;
  $('#eye').on('click',function(e) {
    if (pwShown === 0) {
      pwShown = 1;
      $('#passwordInput').attr('type', 'text');
    }else {
      pwShown = 0;
      $('#passwordInput').attr('type', 'password');
    }
  });
  
  //Changes amount due
  $('#submitpay').on('click',function(e){
    var ent = $('#pay').val();
    if(ent === ""){
      alert("There is no payment amount entered! Please try again.");
    }else{
      $('#submitpay').hide();
      $('#confirmpay').show();
    }
  });
  
  $('#confirmpay').on('click',function(e){
    var ent = $('#pay').val();
    $('#balance').text(balance.innerHTML - ent );
    $('#pay').val("");
      if(ent > 1000) {
      $('#min-balance').text("0");
    }
  alert("Amount Paid! Total Balance: $" + balance.innerHTML);
  });
    
  
});