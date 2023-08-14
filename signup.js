$('form').click(function(){


$(function(){
 var $registerForm = $("#form");

 $registerForm.validate({
    rules:{
            name:
            {
                required:true,
                lattersonly:true
            },
            mail:
            {
                required:true,
                email:true
            },
            number:
            {
                required: true,
                numericonly:true,
                minlength:10,
                maxlength:10
            },
            password:
        {
            required:true,
            all:true
        },
        cpassword:
        {
            required:true,
            equalTo:'#password'
        }
    },
    messages:
    {
        name:
        {
            required: "please enter name",
            lattersonly:"please enter only alphabet"
        },
        mail:
        {
            required:"please enter email",
            email:"enter valid email"
        },
        number:
        {
            required:"please enter mobile number",
            numericonly:"envalid number",
            minlength:"please enter minimum 10 digit",
            maxlength:"please enter maximum 10 digit"
        },
        password:
        {
            required:"Please enter password",
            all:"atleast one numeric value, one uppercase and lowercase and minimum 8 digit"
        },
        cpassword:
        {
            required:"Please enter confirm password",
            equalTo:"password mismatch"
        }

    }
   
    })
    jQuery.validator.addMethod('lattersonly',function(value,element){
        return /^[^-\s][a-zA-z_\s-]+$/.test(value);
 });

 jQuery.validator.addMethod('numericonly',function(value,element){
    return /^[0-9]+$/.test(value);
});
 
jQuery.validator.addMethod('all',function(value,element){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);
});


});




});












/*$(document).ready(function()
{
$.validator.addMethod("passwordRule",function(value,element,args)
{
return /^(?:[0-9]{3}[0-9]{1,3}$/.test(value);
},'invalid IP Adress');

});*/


/*
$('#form').validate({
    rules:
    {
        name:"required",
        mail:"required",
        number:
        {
            required:true,
            minlength:10,
            maxlength:10

        },
         password:
        {
         required:true,
         minlength:6,
         passwordRule:true
          

        }
        
    },
    messages:
{
       name:"please enter your name",
       email:"please enter your email",
       number:
       {
           required:"please fill your mobile number",
           minlength:"please enter minimum 10 digit",
           maxlength:"please enter maximum 10 digit"
          
       },
       password:
       {
        required:"please enter password",
        minlength:"please enter atleast 6 digit passrod"
       }
       
}

});*/