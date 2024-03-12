
let basic_shape = [], klafim = [], arr_now = [], color_now = [], arr_result = [], shape_now = [], basic_color = [];
let monim = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], timer = "",miliSecond=0,second=0,minutes=0,hour=0,t;
let stage = 0, index_klaf_shape = 0, arr_tr = [], arrOfTable = [], place = 0, tidy_arrOfTable = [],  indexer = 0, obj2 = 0, p = "", win1 = 9, win2 = 16;
let arr_s = [], arr_c = [], index_klaf_color = 0, i = 0, flag = false, flag2 = false, x = 0, y = 0, current_clicked_klaf = 0, current_clicked_place = 0;
let sound1 = document.getElementById("drops");
sound1.style.display = "none";
let modal = document.getElementById("myModal");
document.querySelector("#stage1").addEventListener("click", function () {
    localStorage.setItem('stage', 1);
});
document.querySelector("#stage2").addEventListener("click", function () {
    localStorage.setItem('stage', 2);
});
document.getElementById("start_game").addEventListener("click", function () {
    modal.style.display = "none";
    start_game();
})
document.querySelector("#stage3").addEventListener("click", function () {
    if (stage == 1){
        localStorage.setItem("stage", 2);
        start_game();
    }
    else{
        localStorage.setItem("stage", 1);
        start_game();
    }
});
document.querySelector("#stage4").addEventListener("click", ()=> {start_game();});
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function Basic_Shape(shape, src) {
    this.shape = shape;
    this.src = src;
}
function Basic_Color(color, src) {
    this.color = color;
    this.src = src;
}
function klaf(id, color, shape, src) {
    this.id = id;
    this.color = color;
    this.shape = shape;
    this.src = src;
}
const milui_klafim = () => {
    klafim[3] = new klaf(4, "pink", "home", "קלפי המשחק/home/pink home.jpg");
    klafim[5] = new klaf(6, "yellow", "home", "קלפי המשחק/home/yellow home.jpg");
   
    klafim[0] = new klaf(1, "green", "home", "קלפי המשחק/home/green home.jpg");
    klafim[4] = new klaf(5, "red", "home", "קלפי המשחק/home/red home.jpg");
    klafim[2] = new klaf(3, "orange", "home", "קלפי המשחק/home/orange home.jpg");
    //==========home
    klafim[11] = new klaf(12, "yellow", "ambrela", "קלפי המשחק/ambrela/yellow ambrela.jpg");
    klafim[6] = new klaf(7, "green", "ambrela", "קלפי המשחק/ambrela/green ambrela.jpg");
    klafim[1] = new klaf(2, "light blue", "home", "קלפי המשחק/home/light blue home.jpg");
    klafim[8] = new klaf(9, "orange", "ambrela", "קלפי המשחק/ambrela/orange ambrela.jpg");
    klafim[10] = new klaf(11, "red", "ambrela", "קלפי המשחק/ambrela/red ambrela.jpg");
    klafim[9] = new klaf(10, "pink", "ambrela", "קלפי המשחק/ambrela/pink ambrela.jpg");
    klafim[7] = new klaf(8, "light blue", "ambrela", "קלפי המשחק/ambrela/light blue ambrela.jpg");
    //============ambrela
    klafim[13] = new klaf(14, "light blue", "clock", "קלפי המשחק/clock/light blue clock.jpg");
    klafim[16] = new klaf(17, "red", "clock", "קלפי המשחק/clock/red clock.jpg");
    klafim[14] = new klaf(15, "orange", "clock", "קלפי המשחק/clock/orange clock.jpg");
    klafim[15] = new klaf(16, "pink", "clock", "קלפי המשחק/clock/pink clock.jpg");
    klafim[39] = new klaf(40, "pink", "tut", "קלפי המשחק/tut/pink tut.jpg");
    klafim[12] = new klaf(13, "green", "clock", "קלפי המשחק/clock/green clock.jpg");
    klafim[17] = new klaf(18, "yellow", "clock", "קלפי המשחק/clock/yellow clock.jpg");
    //============clock\
    klafim[18] = new klaf(19, "green", "baloon", "קלפי המשחק/baloon/green baloon.jpg");
    klafim[23] = new klaf(24, "yellow", "baloon", "קלפי המשחק/baloon/yellow baloon.jpg");
    klafim[20] = new klaf(21, "orange", "baloon", "קלפי המשחק/baloon/orange baloon.jpg");
    klafim[21] = new klaf(22, "pink", "baloon", "קלפי המשחק/baloon/pink baloon.jpg");
    klafim[19] = new klaf(20, "light blue", "baloon", "קלפי המשחק/baloon/light blue baloon.jpg");
    klafim[22] = new klaf(23, "red", "baloon", "קלפי המשחק/baloon/red baloon.jpg");
    //============baloon\
    klafim[28] = new klaf(29, "red", "sweet", "קלפי המשחק/sweet/red sweet.jpg");
    klafim[24] = new klaf(25, "green", "sweet", "קלפי המשחק/sweet/green sweet.jpg");
    klafim[27] = new klaf(28, "pink", "sweet", "קלפי המשחק/sweet/pink sweet.jpg");
    klafim[25] = new klaf(26, "light blue", "sweet", "קלפי המשחק/sweet/light blue sweet.jpg");
    klafim[29] = new klaf(30, "yellow", "sweet", "קלפי המשחק/sweet/yellow sweet.jpg");
    klafim[38] = new klaf(39, "orange", "tut", "קלפי המשחק/tut/orange tut.jpg");
    klafim[26] = new klaf(27, "orange", "sweet", "קלפי המשחק/sweet/orange sweet.jpg");
    //============sweet\
    klafim[31] = new klaf(32, "light blue", "tuci", "קלפי המשחק/tuci/light blue tuci.jpg");
    klafim[30] = new klaf(31, "green", "tuci", "קלפי המשחק/tuci/green tuci.jpg");
    klafim[34] = new klaf(35, "red", "tuci", "קלפי המשחק/tuci/red tuci.jpg");
    klafim[32] = new klaf(33, "orange", "tuci", "קלפי המשחק/tuci/orange tuci.jpg");
    klafim[35] = new klaf(36, "yellow", "tuci", "קלפי המשחק/tuci/yellow tuci.jpg");
    klafim[33] = new klaf(34, "pink", "tuci", "קלפי המשחק/tuci/pink tuci.jpg");

    //============tuci\
    klafim[40] = new klaf(41, "red", "tut", "קלפי המשחק/tut/red tut.jpg");
    klafim[37] = new klaf(38, "light blue", "tut", "קלפי המשחק/tut/light blue tut.jpg");
    klafim[36] = new klaf(37, "green", "tut", "קלפי המשחק/tut/green tut.jpg");
    klafim[41] = new klaf(42, "yellow", "tut", "קלפי המשחק/tut/yellow tut.jpg");

    //============tut\
}
const milui_basic_shape = () => {

    basic_shape[3] = new Basic_Shape("clock", "תמונות בסיסיות/clock.jpg");
    basic_shape[5] = new Basic_Shape("tuci", "תמונות בסיסיות/tuci.jpg");
    basic_shape[1] = new Basic_Shape("tut", "תמונות בסיסיות/tut.jpg");
    basic_shape[6] = new Basic_Shape("sweet", "תמונות בסיסיות/sweet.jpg");
    basic_shape[2] = new Basic_Shape("ambrela", "תמונות בסיסיות/ambrela.jpg");
    basic_shape[4] = new Basic_Shape("baloon", "תמונות בסיסיות/baloon.jpg");
    basic_shape[0] = new Basic_Shape("home", "תמונות בסיסיות/home.jpg");
}
const milui_basic_color = () => {

    basic_color[0] = new Basic_Color("green", "תמונות צבעים/green.jpg");
    basic_color[1] = new Basic_Color("light blue", "תמונות צבעים/light blue.jpg");
    basic_color[2] = new Basic_Color("orange", "תמונות צבעים/orange.jpg");
    basic_color[3] = new Basic_Color("pink", "תמונות צבעים/pink.jpg");
    basic_color[4] = new Basic_Color("red", "תמונות צבעים/red.jpg");
    basic_color[5] = new Basic_Color("yellow", "תמונות צבעים/yellow.jpg");


}
const randAndCheck = len => {
    for (let index = 0, temp = len + 4; index < len; index++, temp += len + 1) {
        index_klaf_color = random1(5);
        while (arr_c.findIndex(p => p == index_klaf_color) != -1) {
            index_klaf_color = random1(5);
        }
        arr_c[index] = index_klaf_color;
        color_now[index] = basic_color[index_klaf_color]
        // ==============
        index_klaf_shape = random1(6);
        while (arr_s.findIndex(p => p == index_klaf_shape) != -1) {
            index_klaf_shape = random1(6);
        }
        arr_s[index] = index_klaf_shape;
        shape_now[index] = basic_shape[index_klaf_shape];
        //  if(stage==2 && index==len-1){
        // document.querySelector("#b0" ).innerHTML += `<div><img src="${basic_shape[index_klaf_shape].src}"></div> `;

        // }
        // else{
        document.querySelector("#a" + index).innerHTML += `<img src="${basic_shape[index_klaf_shape].src}"> `;
        // }
        if (stage == 2) {
            if (index == len - 1)
                y = 4;
            document.querySelector("#b" + (index + 1 + y)).innerHTML += `<img src="${basic_color[index_klaf_color].src}" > `;
        }
        else {
            document.querySelector("#a" + temp).innerHTML += `<img src="${basic_color[index_klaf_color].src}" > `;

        }

    }

}
const milui_arr_now = () => {
   let count = 0;
    for (let index3 = 0; index3 < klafim.length; index3++) {

        for (let index = 0; index < shape_now.length; index++) {

            if (klafim[index3].shape == shape_now[index].shape) {
                flag = true;
                break;
            }
        }
        for (let index2 = 0; index2 < color_now.length; index2++) {

            if (klafim[index3].color == color_now[index2].color) {
                flag2 = true;
                break;
            }
        }
        if (flag && flag2) {
            arr_now[count++] = klafim[index3];
        }
        flag2 = false;
        flag = false;
    }
}
const addImgsToDivandCreateArrReult = () => {
    for (const k of arr_now) {
        document.querySelector("#cards").innerHTML += `<div id="aa${k.id}"><img src="${k.src}" id="${k.id}"  ></div> `;
    }
    for (let index = shape_now.length - 1,index5=0; index >= 0; index--) {
        for (let index4 = 0; index4 < color_now.length; index4++) {

            let obj = arr_now.find(p => p.shape == shape_now[index].shape && p.color == color_now[index4].color);
            arr_result[index5++] = obj.id;
        }
    }
}
const addImgTo_oneCard = () => {
   let v = random1(16);
    while (monim[v] > 0) {
        v = random1(16);
    }
    monim[v]++;
    document.querySelector("#one_card").innerHTML = `<div id="aa${arr_now[v].id}"><img src="${arr_now[v].src}" id="${arr_now[v].id}"  ></div> `;
    
    for (let index = shape_now.length - 1,index5 = 0; index >= 0; index--) {
        for (let index4 = 0; index4 < color_now.length; index4++) {

            let obj = arr_now.find(p => p.shape == shape_now[index].shape && p.color == color_now[index4].color);
            arr_result[index5++] = obj.id;
        }
    }
    current_clicked_klaf = arr_now[v].id;
    obj2 = arr_now[v];
}
const bigger_table = () => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tr1");
    tr.setAttribute("id", "special");
    arr_tr = document.querySelectorAll("tr");
    for (const tr1 of arr_tr) {
        let td = document.createElement("td");
        td.setAttribute("id", "b" + x);
        td.setAttribute("class", "forArray");
        tr1.appendChild(td);
        x++;
    }
    document.querySelector("tbody").appendChild(tr);
    for (let index = 0; index < 4; index++) {
        document.querySelector("#special").innerHTML += `<td id="b${x}" class="forArray2" ></td>`;
        x++;
    }
    document.querySelector("#special").innerHTML += `<td id="b${x}"  ></td>`;

}
milui_klafim();
milui_basic_color();
milui_basic_shape();
function isValid_klaf() {
    current_clicked_klaf = event.target.id;
    obj2 = arr_now.find(k => k.id == this.id);
}
function isValid_place() {
    current_clicked_place = event.target.id;
    if (stage == 1)
        isValid();
    else
        isValid2();
}
function isValid() {
    place = arr_result.findIndex(p => p == current_clicked_klaf);
    if (tidy_arrOfTable[place] == current_clicked_place) {
        document.getElementById(tidy_arrOfTable[place]).innerHTML += `<img src="${obj2.src}" > `;
        document.getElementById("aa" + current_clicked_klaf).style.display = "none";
        sound1.play();
        if (win1 == 1) {
            new Audio('sound/win.mp3').play();
            modal.style.display = "block";
        document.getElementById("cards").style.display = "none";
        }
        win1--;
    }
}
function isValid2() {
    place = arr_result.findIndex(p => p == current_clicked_klaf);
    if (tidy_arrOfTable[place] == current_clicked_place) {
        document.getElementById(tidy_arrOfTable[place]).innerHTML += `<img src="${obj2.src}"> `;
        sound1.play();
        if (win2 == 1) {
            clearInterval(t);
            document.querySelector("#winner").innerHTML="משך הזמן ששיחקת הוא: "+timer;
            new Audio('sound/win.mp3').play();
            modal.style.display = "block";
        }
        else {
            addImgTo_oneCard();
            win2--;
        }
    }
}
const start_game = () => {
    stage = localStorage.getItem("stage");
    if (stage == 1) {
        randAndCheck(3);
        document.getElementById("cards").style.display = "flex";
        document.getElementById("one_card").style.display = "none";
        milui_arr_now();
        addImgsToDivandCreateArrReult();
        arrOfTable = document.querySelectorAll(".forArray");
        for (let index = 0; index < arr_now.length; index++) {
            document.getElementById(arr_now[index].id).addEventListener("click", isValid_klaf);
            document.getElementById(arrOfTable[index].id).addEventListener("click", isValid_place);
        }
        indexer = 0;
        for (let index = 0; index < 3; index++) {
            for (let index2 = 2 - index; index2 < arrOfTable.length - index; index2 += 3) {
                tidy_arrOfTable[indexer++] =  arrOfTable[index2].id;
            }
        }
    }
    else {
        Timer();
        bigger_table();
        randAndCheck(4);
        document.getElementById("cards").style.display = "none";
        document.getElementById("one_card").style.display = "block";
        milui_arr_now();
        addImgTo_oneCard();
        arrOfTable = document.querySelectorAll(".forArray2");
        indexer = 0;
        for (let index = 0; index < 4; index++) {
            for (let index2 = 3 - index; index2 < arrOfTable.length - index; index2 += 4) {
                let id2 = arrOfTable[index2].id;
                tidy_arrOfTable[indexer++] = id2;
            }
        }
        for (let index = 0; index < arr_now.length; index++) {
            document.getElementById(arrOfTable[index].id).addEventListener("click", isValid_place);
        }
    }
}
function random1(range) {
    let x = Math.floor(Math.random() * range);
    return x;
}
function Timer() {
    t = setInterval(function () {
        timer = miliSecond + " " + second + " : " + minutes + " " + hour;
        document.getElementById("clock").innerHTML = timer;
        miliSecond++;
        if (miliSecond > 9) {
            second++;
            miliSecond = 0;
        }
        if (second > 5) {
            minutes++;
            second = 0;
        }
    }, 1000);
}
start_game();
















