var Amount = $("#billAmount");
var customTip;
var peopleCount = $("#people-count");
var tip = $("#tip-amount");
var totalAmount = $("#total-amount");
var flag = 0;

//look for changes in custom btn
$("#cus-tip").change(function (){
    customTip = $(this).val();
    flag = 1;    
});

$(".tip-btn").click(function (){
    
    var percent;
    if(flag === 0){
    percent = $(this).attr("value");
    }
    else{
        percent = customTip;
    }
    
    var total = Math.round( tipCal(Amount.val() , percent));
    
    tip.text("$"+total);
    
    totalAmount.text("$" + total*peopleCount.val());
});

// IF PEOPLE COUNT IS ZERO
peopleCount.change(function (){
if(peopleCount.val() > "0"){
    $("#if-zero").css("display" , "none");
    $('.count-of-people').removeClass("box-er");
    }
    else{
        $('#if-zero').css("display" , "inline-block");
        $('.count-of-people').addClass("box-er");
    }

});

//function to calculate the tip
function tipCal(bill , percent){
    var total;
    total = (bill*percent)/100;
    return total/peopleCount.val();
}

//reset function here
$("#reset-button").click(function () {
    Amount.val(0);
    totalAmount.val(0);
    peopleCount.val(0);
    $("#cus-tip").val(0);
    tip.text(0);
    totalAmount.text(0);
});