document.getElementById("hibiscus").addEventListener("click", moveit);
int = setInterval(moveit, 500)
function moveit(ele){
    //alert(ele.target.src)
    var use = document.getElementsByTagName("h1")[0];
    var foot = document.getElementsByTagName("footer")[0];
    var id = document.getElementsByTagName("footer")[0].id;
    var big = document.getElementsByTagName("body")[0];
    var pic = document.getElementsByTagName("a")[0];
    if(id == 0){
        use.style.position = "relative";
        use.style.top = "200px";
        use.style.left = "700px";
        foot.style.backgroundColor = "black";
        big.style.backgroundColor = "blue"
        document.getElementsByTagName("footer")[0].id = "1"
    }
    else if(id == 1){
        use.style.position = "";
        use.style.top = "";
        use.style.left = "";
        foot.style.backgroundColor = "";
        big.style.backgroundColor = ""
        pic.className = "show"
        document.getElementsByTagName("footer")[0].id = "2"
    }
    else{
        use.style.position = "relative";
        use.style.top = "500px";
        use.style.left = "300px";
        foot.style.backgroundColor = "blue";
        big.style.backgroundColor = "black"
        pic.className = "hide"
        document.getElementsByTagName("footer")[0].id = "0"
    }
}