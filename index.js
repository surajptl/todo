var arr = [];
var i = 0;
let temp = 0;
let temp1 = 0;
let temp2 = 0;

function remove(x){
    var elem = document.getElementById(x.target.id);
    var liobj = elem.parentElement;
    var ulObj = liobj.parentElement;
    ulObj.removeChild(liobj);
    // console.log(elem);
   }  


function changeText(y){
  var elem = document.getElementById(y.target.id);
  var liObj = elem.nextSibling;
//   liObj.style.textDecoration = "line-through";
//   elem.style.opacity = 1;
  if(liObj.style.textDecoration == "line-through"){
      liObj.style.textDecoration = "none";
      elem.style.opacity = 0.1;
  }
  else{
    liObj.style.textDecoration = "line-through";
    elem.style.opacity = 1;
  }
}  
function search(val) {
    var str = "";
    var ch = false;
    if (event.keyCode === 13) {
        if (val.value === "") {
            alert("Please Enter Something!")
        }
        else {
            var obj = {};
            
            obj[i++] = val.value;
            obj['check'] = ch;
            var ul = document.getElementsByClassName("append");
              
            var bt1 = document.createElement("button");
            bt1.setAttribute("class","btn1 fas fa-check");
            bt1.setAttribute("id","fid"+temp1++);
            bt1.addEventListener("click",changeText,false);


            var span = document.createElement("span");
            span.setAttribute("class","line-through");
            span.textContent = val.value;


            var btn2 = document.createElement("button");
            btn2.setAttribute("class","btn2 fas fa-times");
            // btn2.setAttribute("onclick",'deleteIt(id)');
            btn2.setAttribute("id",'cid'+temp2++);
            btn2.addEventListener("click",remove,false);


            var li = document.createElement("li");
            li.setAttribute("class", "design");
            li.setAttribute("id","pid"+temp++);

            li.appendChild(bt1);
          
            li.appendChild(span);
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


// btn-top addEventListener
function highlightAll(a){
    let gid  = document.getElementById("btn1");
    if(arr.length>0){
     if(gid.style.opacity == 1){
        gid.style.opacity = 0.1;
        for(let j = 0; j<arr.length;j++){
            let fid = "fid"+j;
            let fidObj = document.getElementById(fid);
            var liObj = fidObj.nextSibling;
            liObj.style.textDecoration = "none";
            fidObj.style.opacity = 0.1;
            // console.log();
        }
      
     }
     else
     {
        gid.style.opacity = 1;
        for(let j = 0; j<arr.length;j++){
            let fid = "fid"+j;
            let fidObj = document.getElementById(fid);
            var liObj = fidObj.nextSibling;
            liObj.style.textDecoration = "line-through";
            fidObj.style.opacity = 1;
            // console.log();
        }
        
     }
    }
    //  console.log(gid);
    // console.log(a.target.parentElement.nextElementSibling);
}
var btnTop = document.getElementsByClassName("btn-top");
btnTop[0].addEventListener("click",highlightAll,false);