/*document.body.addEventListener("click", event=>{
    if(event.target.nodeName == "BUTTON"){
        console.log("Clicked ",event.target.textContent)
    }
})*/

/*let button = document.querySelector("button");
button.addEventListener("click", event=>{
    if(event.button==1){ 
        console.log("button 1 Clicked")
    } else if(event.button= 2){
        console.log("button 2 Clicked")
    } else if(event.button= 3){
        console.log("button 3 Clicked")
    }
})*/

/*let para = document.querySelector("p");
let button = document.querySelector("button")
para.addEventListener("mousedown", ()=>{
    console.log("Paragraph's Handler Activated")
});
button.addEventListener("mousedown", event=>{
    console.log("Button's Handler Activated")
    if(event.button==2){
        event.stopPropagation();
    }
});*/

/*let link= document.querySelector("a");
link.addEventListener("click", event=>{
    console.log("Nope.")
    event.preventDefault();
})*/

/*window.addEventListener("keydown", event=>{
    if(event.key== "p"){
        document.body.style.background="pink";
    }
});
window.addEventListener("keyup", event=>{
        document.body.style.background="";
});*/
/*let canvas = document.querySelector("canvas");
let context= canvas.getContext("2d");
context.fillStyle="red";
context.fillRect(20,20,80,50);*/

/*let Sr=document.querySelector("canvas").getContext("2d");
Sr.strokeStyle="blue";
Sr.lineWidth="1";
Sr.strokeRect(0,0,50,50);
Sr.lineWidth="5";
Sr.strokeRect(70,0,50,50);*/

let canvas=document.getElementById("info");
let info = canvas.getContext("2d");
//info.fillStyle="red";
//info.fillRect(0,0,400,400);
info.beginPath();
info.moveTo(0,0);
info.lineTo(400,0);
info.lineTo(400,30);
info.lineTo(390,30);
info.lineTo(390,60);
info.lineTo(380,60);
info.lineTo(380,90);
info.lineTo(370,90);
info.lineTo(370,120);
info.lineTo(360,120);
info.lineTo(360,150);
info.lineTo(350,150);
info.lineTo(350,180);
info.lineTo(340,180);
info.lineTo(340,210);
info.lineTo(330,210);
info.lineTo(330,240);
info.lineTo(320,240);
info.lineTo(320,270);
info.lineTo(310,270);
info.lineTo(310,300);
info.lineTo(300,300);
info.lineTo(300,330);
info.lineTo(290,330);
info.lineTo(290,360);
info.lineTo(280,360);
info.lineTo(280,390);
info.lineTo(270,390);
info.lineTo(270,400);
info.lineTo(0,400);
info.lineTo(0,0);
info.fillStyle="red";
info.fill();

let me = document.getElementById("me");
let pic= me.getContext("2d");
let img = document.createElement("img");
img.src="webpic.png";
img.addEventListener("load", event=>{
    pic.drawImage(img,0,0,400,200);
    pic.font="30px Cooper Black";
    pic.fillStyle="red";
    pic.fillText("WEB",230,50);
    pic.font="24px Forte";
    pic.fillStyle="yellow";
    pic.fillText("DEVELOPEMENT",180,90);
    pic.font="30px Forte";
    pic.fillStyle="red";
    pic.fillText("EXPERT",220,130);
})

canvas.addEventListener("mouseenter", event=>{
    info.fillStyle="orange";
    info.fill();
})

canvas.addEventListener("mouseleave", event=>{
    info.fillStyle="red";
    info.fill();
})
let circle =document.querySelector("circle");
circle.addEventListener("mousedown", event=>{   
    circle.setAttribute("fill", "cyan")
})

circle.addEventListener("mouseup", event=>{
    circle.setAttribute("fill", "red");
})
let Button = ["survey","downloads","services","about","softwares"];

function btn1React(){
    let btn1 = document.getElementById(Button[0]);
    btn1.addEventListener("mouseenter", event=>{
        btn1.style.background = "gold";
        btn1.style.color="white";
    });

    btn1.addEventListener("mouseleave", event=>{
        btn1.style.background="";
        btn1.style.color="";
    });
}

function btn2React(){
    let btn2 = document.getElementById(Button[1]);
    btn2.addEventListener("mouseenter", event=>{
        btn2.style.background = "gold";
        btn2.style.color="white";
    });

    btn2.addEventListener("mouseleave", event=>{
        btn2.style.background="";
        btn2.style.color="";
    });
}

function btn3React(){
    let btn3 = document.getElementById(Button[2]);
    btn3.addEventListener("mouseenter", event=>{
        btn3.style.background = "gold";
        btn3.style.color="white";
    });

    btn3.addEventListener("mouseleave", event=>{
        btn3.style.background="";
        btn3.style.color="";
    });
}

function btn4React(){
    let btn4 = document.getElementById(Button[3]);
    btn4.addEventListener("mouseenter", event=>{
        btn4.style.background = "gold";
        btn4.style.color="white";
    });

    btn4.addEventListener("mouseleave", event=>{
        btn4.style.background="";
        btn4.style.color="";
    });
}

function btn5React(){
    let btn5 = document.getElementById(Button[4]);
    btn5.addEventListener("mouseenter", event=>{
        btn5.style.background = "gold";
        btn5.style.color="white";
    });

    btn5.addEventListener("mouseleave", event=>{
        btn5.style.background="";
        btn5.style.color="";
    });
}

//var el = document.getElementById("text");
//el.style.opacity = 1;
//el.style.color = "red";

btn1React();
btn2React();
btn3React();
btn4React();
btn5React();

