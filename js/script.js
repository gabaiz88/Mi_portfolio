let menuVisible = false;

function show_hidden_menu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function select(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}
