function hello(){
    alert("劫持")
}

function zhua(){
    var nameList = document.querySelectorAll("#J_DetailMeta > div.tm-clear > div.tb-property > div > div.tb-key > div > div > dl.tb-prop.tm-sale-prop.tm-clear.tm-img-prop > dd > ul >li");
    for (var i = 0; i < nameList.length; i++) {

        var name_value = nameList[i].getAttribute("data-value");
        var name = nameList[i].getAttribute("title");
        console.log(name);
        console.log(name_value);

    }

    var k = document.querySelector("#J_DetailMeta > div.tm-clear > script:nth-child(6)").text;

    console.log("+++++++++++++++++++", k)

    var color = k.match(/"skuList.*?}]/)[0];
    var price = k.match(/"skuMap".*?}}/)[0];

    console.log("__________________", color);
    console.log("__________________", price);
}


// hello();
// zhua();