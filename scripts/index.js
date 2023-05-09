function menuclick() {
    var mainbuttonimage = document.getElementById('main-button-image');
    var menucontainer = document.getElementById('menu-container');
    
    mainbuttonimage.src = mainbuttonimage.src.match("./images/nav/home.png") ? "./images/nav/homeclose.png" : "./images/nav/home.png";
    mainbuttonimage.style.height = mainbuttonimage.src.match("./images/nav/home.png") ? "30px" : "20px";
    
    menucontainer.style.display = mainbuttonimage.src.match("./images/nav/home.png") ? "none" : "block";
}

function HoverValues(widthvalue, heightvalue, margintopvalue, bordervalue) {
    var div = document.getElementById('circle');
    
    div.style.transition = "all 0.1s ease";
    div.style.width = widthvalue;
    div.style.height = heightvalue;
    div.style.marginTop = margintopvalue;
    div.style.border = bordervalue;
    
    // after 0.1 seconds remove transition
    setTimeout(function() {
        div.style.transition = "none";
    }, 100);
}

window.onload = function() {
    // slide in p tag from left to right
    const ptag = document.getElementsByTagName('p');
    for (var i = 0; i < ptag.length; i++) {
        ptag[i].style.animation = "slidein 1s ease";
    }
    
    // get element by tag 
    var atag = document.getElementsByTagName('a');
    // create a div element
    var div = document.createElement("div");
    
    div.id = "circle";
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.background = "transparent";
    div.style.border = "1px solid white";
    div.style.borderRadius = "50%";
    div.style.position = "absolute";
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.pointerEvents = "none"; // allow mouse events to pass through
    div.style.display = "none";
    div.style.zIndex = "1000";
    
    // append the div to body
    document.body.appendChild(div);
    // make the circle div to follow the mouse
    document.onmousemove = function(e) {
        var parentOffset = div.parentNode.getBoundingClientRect();
        var x = e.pageX - parentOffset.left;
        var y = e.pageY - parentOffset.top;
        div.style.left = x + 3 + 'px';
        div.style.top = y + 3 + 'px';
        div.style.display = "block";
    }
    
    // if buttoncollection is hovered
    for (var i = 0; i < atag.length; i++) {
        atag[i].onmouseover = function() {
            HoverValues("20px", "20px", "10px", "1px solid white", "1px solid white");
        }
        atag[i].onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
        }
    }
    
    // if .form-class is hovered
    var formclass = document.getElementsByClassName('form-class');
    for (var i = 0; i < formclass.length; i++) {
        formclass[i].onmouseover = function() {
            HoverValues("20px", "20px", "10px", "1px solid black");
        }
        formclass[i].onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.border = "1px solid white";
        }
    }
    
    // if id x is hovered
    var x = document.getElementById('x');
    x.onmouseover = function() {
        x.onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
        }
        HoverValues("20px", "20px", "10px", "1px solid white");
    }
    
    // if mouse is down
    document.onmousedown = function() {
        div.style.transition = "all 0.1s ease";
        div.style.background = "black";
        div.style.border = "none";
        div.style.width = "10px";
        div.style.height = "10px";
        
        setTimeout(function() {
            div.style.transition = "none";
        }, 100);
    }
    // if mouse is up
    document.onmouseup = function() {
        div.style.background = "transparent";
        div.style.border = "1px solid white";
        div.style.width = "40px";
        div.style.height = "40px";
    }
};

function FormAccess(displayvalue, filtervalue, pointervalue) {
    var form = document.getElementsByTagName('form')[0];
    var maincontent = document.getElementById('main-content');
    
    form.style.display = displayvalue;
    maincontent.style.filter = filtervalue;
    maincontent.style.pointerEvents = pointervalue;
}

function showform() {
    FormAccess("block", "blur(5px)", "none");
}

function closeform() {
    FormAccess("none", "none", "auto");
}

function changeimage(imagename) {
    var mainimage = document.getElementById('main-image');
    mainimage.src = "images/" + imagename + ".png";
}
function main() {
    changeimage("main");
}
function mainblue() {
    changeimage("mainblue");
}
function maindark() {
    changeimage("maindark");
}
function maingreen() {
    changeimage("maingreen");
}

function createButton(className, text, position, right) {
    var button = document.createElement('button');
    button.className = "bottombuttons";
    button.innerHTML = text;
    button.style.position = "absolute";
    button.style.bottom = "20px";
    button.style.right = right;
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "white";
    button.style.width = "120px";
    button.style.height = "40px";
    button.style.border = "none";
    button.style.cursor = "none";
    return button;
}

function Link(productNumber) {
    var productsLink = [
        "https://openai.com/blog/chatgpt",
        "https://www.midjourney.com/",
        "https://www.mailmentor.ai/",
        "https://otter.ai/",
        "https://www.copy.ai/",
        "https://quillbot.com/",
        "https://www.kuki.ai/",
        "https://www.airbrushai.com/",
        "https://www.pabbly.com/ai/",
        "https://tinywow.com/",
        "https://alternativeto.net/",
        "https://www.jasper.ai/",
    ];
    window.open(productsLink[productNumber-1], '_blank');
}

function Showbuttons() {
    var shownav = document.getElementById('shownav');
    
    shownav.src = shownav.src.match("./images/nav/home.png") ? "./images/nav/homeclose.png" : "./images/nav/home.png";
    shownav.style.height = shownav.src.match("./images/nav/home.png") ? "30px" : "20px";

    var topbuttoncollection = document.getElementById('topbutton-collection');

    topbuttoncollection.style.width = topbuttoncollection.style.width == "83px" ? "100%" : "83px";
    topbuttoncollection.style.backgroundColor = topbuttoncollection.style.backgroundColor == "black" ? "transparent" : "black";
    topbuttoncollection.style.borderRadius = topbuttoncollection.style.borderRadius == "5px" ? "0px" : "5px";
    topbuttoncollection.style.padding = topbuttoncollection.style.padding == "5px" ? "0px" : "5px";
    topbuttoncollection.style.left = topbuttoncollection.style.left == "30px" ? "50%" : "30px";

    topbuttoncollection.style.display = topbuttoncollection.style.display == "block" ? "none" : "block";
}