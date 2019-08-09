var arr = [];
var i = 0;

function search(val) {
    var str = "";
    var ch = false;
    if (event.keyCode === 13) {
        if (val.value === "") {
            alert("Please Enter Something!")
        } else {
            var obj = {};
            obj[i++] = val.value;
            obj['check'] = ch;
            var ul = document.getElementsByClassName("append");
            var bt1 = document.createElement("button");
            bt1.setAttribute("class","btn1 fas fa-check");
            var lb = document.createElement("label");
            var btn2 = document.createElement("button");
            btn2.setAttribute("class","btn2 fas fa-times");
            var li = document.createElement("li");
            li.setAttribute("class", "design");
            var text = document.createTextNode(val.value);
            var lbt = lb.appendChild(text);
            li.appendChild(bt1);
            li.appendChild(lbt);
            li.appendChild(btn2);
            ul[0].appendChild(li);
            val.value = "";
            arr.push(obj);
        }
    }
}