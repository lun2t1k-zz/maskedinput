$(document).ready(function() {
  $('#phone').mask('+380 (99) 9999999');
});

$(document).ready(function(){   
  $('#email').inputmask('email');
});

$(document).ready(function() {
  $('#form').submit(function(e) {

    e.preventDefault();

    var phone = $('#phone').val();
    var email = $('#email').val();
 
    $('.error').remove();
 
    if (phone.length < 1) {
      $('#phone').after('<span class="error">This field is required</span>');
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
  });
});