
function billingFunction()
{  
    if (document.getElementById("same").checked)
    {  
        var shipName=document.getElementById("shippingName").value;
        document.getElementById("billingName").value=shipName;
        var shipzip=document.getElementById("shippingZip").value;
        document.getElementById("billingZip").value=shipzip;
    }
    else{
        document.getElementById("billingName").value=" ";
        document.getElementById("billingZip").value=" ";
    }
}