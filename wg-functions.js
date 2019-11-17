// Functions.js file by Wade Grimm, needed for Registration.html

var message = "";
var myReg = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ -]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/i;
function fnFormValidate()	
{
    //document.getElementById("message").innerHTML = "";
    message = "";
    var myform = document.forms.namedItem("regForm");
    //console.log(myform.id);
    //console.log(myform.elements.length);
    var focusSet = "False";
    for (i=0; i < myform.elements.length; i++)
    {
        //console.log(myform.elements[i].type)
        if (myform.elements[i].type == "text" || myform.elements[i].type == "email" || myform.elements[i].type == "password" || myform.elements[i].type == "select-one" )
        {
            if (myform.elements[i].value == "")
            {
                
                if (focusSet == "False")
                {
                    myform.elements[i].focus();
                    focusSet = "True";
                }
                message += myform.elements[i].labels[0].textContent + " must have a value";
                myform.elements[i].style.backgroundColor = "#f0cccc";
            }
        }
    }
    
    if (message)
    {
        //document.getElementById("message").innerHTML = message;
        focusSet = "False";
        return false;
    }
    else
    {
        return confirm("Continue submitting?");
    }
}

function fnValidatePostal(postal)
{
    if (myReg.test(postal))

    {

        //alert("matched")
        return true;

    }

    else

    {

        //alert("no match")
        return false;

    }


}

function fnClearForm()
{ 
    var myform = document.forms.namedItem("regForm");
    for (i=0; i < myform.elements.length; i++)
    { 
        //console.log(myform.elements[i].name)
        //console.log( myform.elements[i].style.backgroundColor)
        //console.log(myform.elements[i].value)
        
        myform.elements[i].style.backgroundColor = ""; 
        myform.elements[i].value = "";
    }
}