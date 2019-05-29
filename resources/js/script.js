window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}   


document.getElementsByClassName("btn")[0].onclick = function(){

    
    form();

}

document.getElementById("hire").onclick = function(){
    
    form();
    
}


function form(){

    document.getElementsByClassName("btn")[0].style.display = 'none';
    
    
    document.getElementById("form").style.maxHeight = "1000px";
   
}
