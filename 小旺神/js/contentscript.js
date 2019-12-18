// 建立长连接
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "little_swan_god");
    port.onMessage.addListener(function(msg) {
        if (msg == "{}"){
            // port.postMessage({question: "Who's there?"});
            console.log("if", msg);
        }else if (msg.answer == "func_1"){
            // port.postMessage({question: "Madame who?"});
            console.log(msg);
            zhua();
        }else if (msg.answer == "func_2"){
            // port.postMessage({question: "I don't get it."});
            console.log(msg);
        }else if (msg.answer == "func_3"){
            console.log(msg);
        }else if (msg.answer == "func_4"){
            console.log(msg);
        }else if (msg.answer == "func_5"){
            console.log(msg);
        }else if (msg.answer == "func_6"){
            console.log(msg);
            if(confirm("是否重载浏览器")){
                window.location.reload();
            }
            
        }else if (msg.answer == "func_7"){
            console.clear();
        }else{
            console.log("else", msg);
        }
            
    });
    port.close(function(msg){
        console.log("close");
    })
});