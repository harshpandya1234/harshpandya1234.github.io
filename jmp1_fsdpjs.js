var a=0;
function linkdisplayfun()
{
    if(a==0)
    {
        document.getElementById("divtl").style.width = "450px";
        document.getElementById("divtl").style.opacity = "1";
        document.getElementById("divtl1").style.width = "450px";
        document.getElementById("divtl1").style.opacity = "1";
        document.querySelector(".fa-right").innerHTML = "<";
        a=1;
    }
    else
    {
        document.querySelector(".divlink3").style.width = "0px";
        document.getElementById("divtl1").style.width = "0px";
        document.getElementById("divtl1").style.height = "0px";
        document.getElementById("divtl1").style.opacity = "0";
        document.querySelector(".fa-right").innerHTML = ">";
        document.getElementById("divtl").style.opacity = "0";
        document.querySelector(".divlink").style.transition = "all 0.3s";
        a=0;
    }
}
b=0
function linkdisplayfunsmall()
{
    if(b==0)
    {
        document.getElementById("divtl1").style.width = "450px";
        document.getElementById("divtl1").style.opacity = "1";
        document.getElementById("dlink1").innerHTML = ">";
        document.getElementById("dlink1").style.width = "30px";
        document.getElementById("dlink1").style.height = "auto";
        document.getElementById("dlink1").style.webkitTextStroke = "3px black";
        document.getElementById("dlink1").style.textDecoration = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("login").style.display = "none";
        b=1;
    }
    else
    {
        document.querySelector(".divlink3").style.width = "0px";
        document.getElementById("divtl1").style.width = "0px";
        document.getElementById("divtl1").style.opacity = "0";
        document.getElementById("dlink1").style.width = "110px";
        document.getElementById("dlink1").style.height = "auto";
        document.getElementById("dlink1").style.webkitTextStroke = "0px black";
        document.getElementById("dlink1").innerHTML = "Languages";
        document.querySelector(".fa-right").innerHTML = ">";
        document.getElementById("home").style.display = "flex";
        document.querySelector(".divlink").style.transition = "all 0.3s"
        document.getElementById("divtl").style.opacity = "0";
        document.getElementById("login").style.display = "flex";
        b=0;
    }
}
c=0;
function menulinklistfun()
{
    if(c==0)
    {
        document.querySelector(".list-sm").style.width = "450px";
        document.querySelector(".list-sm").style.opacity = "1";
        c=1;
    }
    else
    {
        document.querySelector(".list-sm").style.width = "0px";
        document.querySelector(".list-sm").style.opacity = "0";
        c=0;
    }
}
function closemenu()
{
    
    document.querySelector(".list-sm").style.width = "0px";
    document.querySelector(".list-sm").style.opacity = "0";
    c=0;
}