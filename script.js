function compute()
{
    
    principal = document.getElementById("principal").value;
     if ((principal<=0)) 
    {
    alert("Enter a positive number");
    return false;
     }
    
    rate = document.getElementById("rate").value;
    
    years = document.getElementById("years").value;
    
    var interest = (principal*years*rate)/100;
    var newyears= +2020 + +years;
    
    document.getElementById("result").innerHTML = "If you deposit " +principal +",<br/> at an interest rate of " +rate +"%,<br/> you will receive an amount of "+interest+",<br/> in the year "+newyears ;
    
}
function showVal(value)
{
    document.getElementById("dissplay").innerHTML = value +"%";
}
