
//open navigation bar
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//close navigation bar
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("wrapper").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

