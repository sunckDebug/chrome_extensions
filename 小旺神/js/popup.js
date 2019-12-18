// 谷歌扩展消息传递
// https://www.cnblogs.com/champagne/p/4848520.html

// var port = null;

chrome.tabs.query(
    {active: true, currentWindow: true}, 
    function(tabs) {
        port = chrome.tabs.connect(//建立通道
            tabs[0].id, {name: "little_swan_god"}//通道名称
        );

        port.onMessage.addListener(function(msg) {//监听消息
            console.log(msg)
        });
    });

var a = document.getElementById('func_1');
var b = document.getElementById('func_2');
var c = document.getElementById('func_3');
var d = document.getElementById('func_4');
var e = document.getElementById('func_5');
var f = document.getElementById('func_6');
var g = document.getElementById('func_7');

a.onclick = function(){loginfun('func_1',this)};
b.onclick = function(){loginfun('func_2',this)};
c.onclick = function(){loginfun('func_3',this)};
d.onclick = function(){loginfun('func_4',this)};
e.onclick = function(){loginfun('func_5',this)};
f.onclick = function(){loginfun('func_6',this)};
g.onclick = function(){loginfun('func_7',this)};


function loginfun(msg,the){
    port.postMessage({answer: msg});
}



