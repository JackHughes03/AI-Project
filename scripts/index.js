function menuclick() {
    var mainbuttonimage = document.getElementById('main-button-image');
    var menucontainer = document.getElementById('menu-container');
    
    if (mainbuttonimage.src.match("./images/nav/home.png")) {
        mainbuttonimage.src = "./images/nav/homeclose.png";
        mainbuttonimage.style.height = "20px";
        
        menucontainer.style.display = "block";
    }
    else {
        mainbuttonimage.src = "./images/nav/home.png";
        mainbuttonimage.style.height = "30px";
        
        menucontainer.style.display = "none";
    }
}

window.onload = function() {
    // slide in p tag from left to right
    var ptag = document.getElementsByTagName('p');
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
            // make the circle div visible
            div.style.transition = "all 0.1s ease";
            div.style.width = "20px";
            div.style.height = "20px";
            div.style.marginTop = "10px";
            
            // after 0.1 seconds remove transition
            setTimeout(function() {
                div.style.transition = "none";
            }, 100);
        }
        atag[i].onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
        }
    }
    
    // if .products is hovered 
    var products = document.getElementsByClassName('products');
    for (var i = 0; i < products.length; i++) {
        products[i].onmouseover = function() {
            // make the circle div visible
            if(this.style.height == "450px") {
                div.style.width = "40px";
                div.style.height = "40px";
            } else {
                div.style.transition = "all 0.1s ease";
                div.style.width = "20px";
                div.style.height = "20px";
            }
            // after 0.1 seconds remove transition
            setTimeout(function() {
                div.style.transition = "none";
            }, 100);
        }
        products[i].onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.border = "1px solid white";
        }
    }
    
    // if .form-class
    var formclass = document.getElementsByClassName('form-class');
    for (var i = 0; i < formclass.length; i++) {
        formclass[i].onmouseover = function() {
            // make the circle div visible
            div.style.transition = "all 0.1s ease";
            div.style.width = "20px";
            div.style.height = "20px";
            div.style.border = "1px solid black";
            
            // after 0.1 seconds remove transition
            setTimeout(function() {
                div.style.transition = "none";
            }, 100);
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
        // make the circle div visible
        div.style.transition = "all 0.1s ease";
        div.style.width = "20px";
        div.style.height = "20px";
        
        // after 0.1 seconds remove transition
        setTimeout(function() {
            div.style.transition = "none";
        }, 100);
        x.onmouseout = function() {
            div.style.width = "40px";
            div.style.height = "40px";
        }
    }
    
    // if mouse is down
    document.onmousedown = function() {
        div.style.transition = "all 0.1s ease";
        div.style.background = "white";
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

function showform() {
    // get access to form tag name
    var form = document.getElementsByTagName('form')[0];
    var maincontent = document.getElementById('main-content');
    
    form.style.display = "block";
    maincontent.style.filter = "blur(5px)";
    maincontent.style.pointerEvents = "none";
}

function closeform() {
    var form = document.getElementsByTagName('form')[0];
    var maincontent = document.getElementById('main-content');
    
    form.style.display = "none";
    maincontent.style.filter = "none";
    maincontent.style.pointerEvents = "auto";
}

function main() {
    // change main-image content
    var mainimage = document.getElementById('main-image');
    mainimage.src = "images/main.png";
}

function mainblue() {
    // change main-image content
    var mainimage = document.getElementById('main-image');
    mainimage.src = "images/mainblue.png";
}

function maindark() {
    // change main-image content
    var mainimage = document.getElementById('main-image');
    mainimage.src = "images/maindark.png";
}

function maingreen() {
    // change main-image content
    var mainimage = document.getElementById('main-image');
    mainimage.src = "images/maingreen.png";
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

var products = document.getElementsByClassName('products');

for (var i = 0; i < products.length; i++) {
    products[i].onclick = function() {
        this.style.transition = "all 0.5s ease";
        this.style.position = "fixed";
        this.style.height = "400px";
        this.style.width = "600px";
        this.style.left = "50%";
        this.style.top = "50%";
        this.style.transform = "translate(-50%, -50%)";
        this.style.backgroundColor = "rgb(20, 25, 30)";
        this.style.zIndex = "1";
        this.style.opacity = "1";
        this.style.border = "2px solid #FFFEEE";
        
        var productsimage = this.getElementsByClassName('products-image')[0];
        productsimage.style.justifyContent = "center";
        productsimage.style.position = "absolute";
        productsimage.style.top = "15px";
        productsimage.style.left = "5px";
        
        var h2 = this.getElementsByTagName('h2')[0];
        h2.style.position = "absolute";
        h2.style.top = "-5px";
        h2.style.left = "120px";
        h2.style.padding = "2px 8px";
        
        var seemorebutton = createButton("bottombuttons", "See more", "absolute", "20px");
        var closebutton = createButton("bottombuttons", "Close", "absolute", "none");
        // give id to closebutton
        closebutton.id = "closebutton";
        seemorebutton.id = "seemorebutton";
        closebutton.style.left = "20px";
        
        this.appendChild(seemorebutton);
        this.appendChild(closebutton);
        
        // create p and append to products
        var p = document.createElement('p');
        p.className = "products-description";
        p.style.position = "absolute";
        p.style.top = "40px";
        p.style.left = "138px";
        p.style.color= "white";
        p.style.width = "70%";
        
        // get access to product-1
        const product1 = document.getElementById('product-1');
        const product2 = document.getElementById('product-2');
        const product3 = document.getElementById('product-3');
        const product4 = document.getElementById('product-4');
        const product5 = document.getElementById('product-5');
        const product6 = document.getElementById('product-6');
        const product7 = document.getElementById('product-7');
        const product8 = document.getElementById('product-8');
        const product9 = document.getElementById('product-9');
        const product10 = document.getElementById('product-10');
        const product11 = document.getElementById('product-11');
        const product12 = document.getElementById('product-12');
        
        const products = {
            "product-1": "ChatGPT is a large language model developed by OpenAI, based on the GPT-3.5 architecture. It is trained on a massive amount of data and is capable of generating human-like responses to various prompts and questions. ChatGPT can understand natural language and can provide insightful and relevant answers on a wide range of topics, including science, technology, history, current events, and more. With its advanced natural language processing capabilities, ChatGPT can assist users in many different ways, such as providing information, answering questions, and generating creative writing prompts.",
            "product-2": "Midjourney AI is a technology company that specializes in developing and deploying artificial intelligence solutions for businesses. Their AI platform offers a range of capabilities, including natural language processing, computer vision, predictive analytics, and machine learning. With Midjourney AI, businesses can leverage the power of AI to automate processes, improve decision-making, and gain insights into their operations. Their solutions are designed to be user-friendly and scalable, making it easy for businesses of all sizes to integrate AI into their workflows. Overall, Midjourney AI is dedicated to helping businesses unlock the full potential of AI and drive growth and innovation.",
            "product-3": "MailMentor AI is an artificial intelligence tool designed to help professionals improve their email communication skills. It uses natural language processing (NLP) and machine learning algorithms to analyze the user's email writing patterns and provide personalized suggestions for improvement.",
            "product-4": "Otter.ai is an innovative transcription service that uses artificial intelligence and machine learning to automatically transcribe spoken conversations into written text. It was founded in 2016 by Sam Liang, a former Google executive, with the goal of making communication more accessible and efficient for everyone. Otter.ai's unique features include real-time transcription, keyword search, and the ability to differentiate between multiple speakers. It is widely used in various industries, including education, business, and media, to transcribe interviews, meetings, lectures, and other spoken content.",
            "product-5": "Copy.ai is an artificial intelligence tool that uses natural language processing (NLP) and deep learning algorithms to generate human-like content. It enables users to quickly generate high-quality written content for a variety of purposes such as marketing, social media, e-commerce, and more. Copy.ai can generate various types of content such as product descriptions, social media posts, blog articles, ad copy, and more. It also has a user-friendly interface and a variety of customization options to make the generated content more personalized and tailored to the user's needs. Copy.ai aims to make content creation easier, faster, and more efficient for businesses and individuals.",
            "product-6": "QuillBot is an online writing assistant tool that uses advanced artificial intelligence algorithms to help users improve their writing. It can be used to paraphrase and reword text, generate synonyms and alternate sentence structures, as well as to check for grammar and spelling errors. With its intuitive interface and easy-to-use features, QuillBot is a valuable tool for anyone looking to improve the quality and readability of their writing, whether for professional or personal use.",
            "product-7": "Kuki AI is a chatbot that uses natural language processing (NLP) and artificial intelligence (AI) technologies to simulate human-like conversations with users. It was developed by Pandorabots, a leading provider of chatbot technology. Kuki AI has a wide range of capabilities, including answering questions, providing information, and engaging in casual conversations. It can also learn from previous interactions with users, improving its responses over time. Kuki AI is accessible through various platforms, including social media, messaging apps, and websites, making it a versatile tool for businesses and individuals looking to enhance their online presence and customer service.",
            "product-8": "AirbrushAI is a software application that uses artificial intelligence algorithms to automatically retouch photos and enhance their visual appeal. It allows users to quickly and easily apply various airbrushing effects to their images, such as smoothing skin, whitening teeth, removing blemishes, and more. With its advanced machine learning capabilities, AirbrushAI can intelligently identify and correct imperfections in photos while preserving natural textures and features. Whether you're a professional photographer or a casual user looking to improve your selfies, AirbrushAI can help you achieve a polished and professional look in just a few clicks.",
            "product-9": "Pabbly AI is an advanced artificial intelligence tool that offers a range of features to help businesses automate their workflows and optimize their operations. This platform provides a variety of tools that businesses can use to automate tasks such as data entry, data extraction, data cleansing, and data analysis. Pabbly AI also offers features such as natural language processing, sentiment analysis, image recognition, and predictive analytics to help businesses gain insights from their data and make more informed decisions. With its user-friendly interface and powerful features, Pabbly AI is an excellent solution for businesses looking to streamline their operations and improve their overall efficiency.",
            "product-10": "TinyWow provides free online conversion, pdf, and other handy tools to help you solve problems of all types. All files both processed and unprocessed are deleted after 1 hour.",
            "product-11": "AlternativeTo AI is a platform that helps users discover alternatives to various software and tools using artificial intelligence. It uses machine learning algorithms to analyze user preferences, behavior, and feedback to recommend similar software solutions that match their needs and requirements. AlternativeTo AI aims to simplify the process of finding alternative software options by providing personalized recommendations based on individual user preferences and feedback. This platform can be helpful for individuals and businesses looking for new software solutions or alternatives to existing ones.",
            "product-12": "Jasper AI is a machine learning platform that uses natural language processing and other advanced technologies to provide businesses with intelligent automation solutions. The platform is designed to help organizations automate repetitive tasks and streamline their workflows, allowing them to operate more efficiently and effectively. Jasper AI can be used in a wide range of industries, including finance, healthcare, customer service, and more. With its powerful automation capabilities and intuitive user interface, Jasper AI is an excellent choice for companies looking to improve their productivity and reduce costs."
        };
        
        p.innerHTML = products[this.id];
        this.appendChild(p);
    }
}

// if closebutton is clicked
document.onclick = function(e) {
    if (e.target.id == "closebutton") {
        for (var i = 0; i < products.length; i++) {
            // (function(index) {
            // setTimeout(function() {
            products[i].style.position = "relative";
            products[i].style.backgroundColor = "transparent";
            products[i].style.zIndex = "0";
            products[i].style.opacity = "0.7";
            products[i].style.border = "none";
            // }, 500);
            // })(i);
            products[i].style.height = "165px";
            products[i].style.width = "310px";
        }
        // hide .bottombuttons
        var bottombuttons = document.getElementsByClassName('bottombuttons');
        for (var i = 0; i < bottombuttons.length; i++) {
            bottombuttons[i].style.display = "none";
        }
        
        // hide h2
        var h2 = document.getElementsByTagName('h2');
        for (var i = 0; i < h2.length; i++) {
            h2[i].style.top = "30px";
        }
        
        var productsimage = this.getElementsByClassName('products-image')[0];
        productsimage.style.justifyContent = "center";
        productsimage.style.position = "relative";
        productsimage.style.top = "unset";
        productsimage.style.left = "unset";
        
        // hide the descriptions
        var descriptions = document.getElementsByClassName('products-description');
        for (var i = 0; i < descriptions.length; i++) {
            descriptions[i].style.display = "none";
        }
    } 
    
    else if (e.target.id == "seemorebutton") {
        var productslink = {
            "product-1": "https://openai.com/blog/chatgpt",
            "product-2": "https://www.midjourney.com/",
            "product-3": "https://www.mailmentor.ai/",
            "product-4": "https://otter.ai/",
            "product-5": "https://www.copy.ai/",
            "product-6": "https://quillbot.com/",
            "product-7": "https://www.kuki.ai/",
            "product-8": "https://www.airbrushai.com/",
            "product-9": "https://www.pabbly.com/ai/",
            "product-10": "https://tinywow.com/",
            "product-11": "https://alternativeto.ai/",
            "product-12": "https://www.jasper.ai/",
        };
        window.open(productslink[e.target.parentNode.id], '_blank');
    }
}