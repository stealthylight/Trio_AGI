function show(display){
    if(document.getElementById(display).style.height == "0px"){
    document.getElementById(display).style.height='190px';
    document.getElementById(display).style.border="1px solid rgba(50,50,50,0.75)";
    }
    else{
        document.getElementById(display).style.height = "0px";
        document.getElementById(display).style.border="none";
    }
}