let html = document.querySelector("#html")
let style = document.querySelector("#style")

let string = `
/*你好，我叫Jarrett
我们来画一个太极图
首先我们需要个div，并把它变成一个圆*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*然后分成黑白两部分*/
#div1{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%,rgba(255,255,255,1) 50%);
}
/*加两个小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 27%, rgba(0,0,0,1) 27%);
}
    
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 27%, rgba(255,255,255,1) 27%);
}

`
let temp = "";
let n = 0;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            temp += "<br>"
        } else if (string[n] === " ") {
            temp += "&nbsp"
        } else {
            temp += string[n]
        }
        html.innerHTML = temp
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n += 1;
            step()
        }
    }, 0)
}
step()