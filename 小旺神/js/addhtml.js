var html = `<div id="demo">
                <div id="func_1">采集sku数据</div>
                <div id="func_2">功能二</div>
                <div id="func_3">功能三</div>
                <div id="func_4">功能四</div>
                <div id="func_5">功能五</div>
                <div id="func_6">功能六</div>
                <div id="func_7">清空控制台</div>
            </div>`


$("#detail").after(html);


$("#func_1").click(function(){
    zhua();
});

$("#func_7").click(function(){
    console.clear();
});