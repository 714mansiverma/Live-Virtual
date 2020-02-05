var val1;
function fun1()
{
  
    if( document.forms["f1"]["num1"].value=="")
    {
        alert("please enter the valid marks here")
        return false;
    }
  
    else if(document.forms["f1"]["num2"].value=="")
    {
        alert("entert valid marks");
        return false;
    }
    else if(document.forms["f1"]["num3"].value=="" )
    {
        alert("enter valid marks here");
        return false;
    }
    else{
       
        cal();
        return true;
        
    }

}
function cal()
{
    
    
        var a=document.getElementById("num1").value;
        var b=document.getElementById("num2").value;
        var c=document.getElementById("num3").value;
        var d,e,h;
        
         d=parseInt(a,10)+parseInt(b,10)+parseInt(c,10);
        document.getElementById("t1").value=d;
         e=(d/3);
        document.getElementById("t2").value=e;
        if(a>b &&a>c)
        {
             h=a;
        }
        else if(b>a &&b>c)
        {
             h=b;
        }
        else{
             h=c;
        }
        document.getElementById("t3").value=h;
        

    
   
}
function fun1(){
    if(document.getElementById("t1").value=="")
    {
    alert("enter the name here");
    document.getElementById("t1").focus();
}
}
function fun2(){
    window.open("new.html");
}
function fun3()
{
    if(document.getElementById("t2").value=="")
    {
        alert("plaese select the gender");
        document.getElementById("t2").focus();
    }
    if(document.getElementById("t3").value=="")
    {
        alert("plaese select atleast one course");
        document.getElementById("t3").focus();
    }
    else{
        document.getElementById("t4").focus();
    }
}

function data(){
 val1=prompt("enter your name here");

}
function marks(){
   
    var a=document.getElementsByName("r1");
    var b=document.getElementsByName("r2");

    if(a[1].checked & b[1].checked)
    {
        alert(val1+" "+"total marks"+" "+"4");
    }
    else if(a[1].checked|b[1].checked)
    {
        alert(val1+" "+"total marks"+" "+"2");
    }
    else{
        alert(val1+" "+"total marks"+" "+"0")
    }
}
function checkfun(){
    var count=0;
    if(document.forms["form1"]["z1"][0].checked==false & document.forms["form1"]["z1"][1].checked==false & document.forms["form1"]["z1"][2].checked==false )
    {
        alert("atleast select one course please")
        return false;
    }
    else if(document.forms["form1"]["z1"][0].chekced==true&document.forms["form1"]["z1"][1].checked==false & document.forms["form1"]["z1"][2].checked==false)
    {
        count++;
        alert(count+"check box is selected");
    }
}
function searchfun(){
    
    var v=document.getElementById("y1").value;
    var s=document.getElementById("y2").value;
    window.location.assign("http://"+v+"/search?q="+s);
}
function keyfun()
{
    var c=document.getElementsByName("k1").value;
    
        if(c<='Z'&&c>='A'&&c<='z'&&c>='a')
    {
        document.getElementById("ne").innerHTML=" ";
    }
    else{
        document.getElementById("ne").innerHTML="inavlid name";
    }
}