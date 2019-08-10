var arr = [];
var i = 0;
let temp = 0;
function remove(x){
    var elem = document.getElementById(x.target.id);
    var liobj = elem.parentElement;
    var ulObj = liobj.parentElement;
    ulObj.removeChild(liobj);
    // console.log(elem);
   }  
function changeText(y){
  var elem = document.getElementById(y.target.id);
  var liObj = elem.parentElement;
  liObj.style.textDecoration = "line-through";
}  
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
            bt1.setAttribute("id","fid"+temp++);
            bt1.addEventListener("click",changeText,false);
            var lb = document.createElement("label");

            var btn2 = document.createElement("button");
            btn2.setAttribute("class","btn2 fas fa-times");
            // btn2.setAttribute("onclick",'deleteIt(id)');
            btn2.setAttribute("id",'cid'+temp++);
            btn2.addEventListener("click",remove,false);


            var li = document.createElement("li");
            li.setAttribute("class", "design");
            li.setAttribute("id","pid"+temp++);

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

// //deleteIt function
// function deleteIt(val){
//    var el = document.getElementsByClassName("btn2");
//    btn2[2].style.display = 'none';
//    console.log(el[0]);
// // console.log(val)
// }


// var ap = document.getElementsByClassName("append");
// ap.addEventListener("click",function (a) {
//     console.log(a.target);
// },false);

