
let x = "20";
// let y = prompt("輸入值: ");
let radius = 10;
const PI = 3.1415926;
/*
 
console.log(x - y);
console.log(radius * radius * PI);
console.log(typeof (PI));
let s = "HI SIRI"
console.log(s * x)
document.write(typeof (x))
document.write("<h2>", s, "</h2>")
let email = "Austin@gmail.com";
console.log(email);
console.log(email.length);
console.log(email.toUpperCase());
console.log(email.toLowerCase())
console.log(email.indexOf("g"))
console.log(email.substring(0, 8))
console.log(email.replace("Austin", "Bevis"));
console.log(email.includes("@"));
for (let i = 0; i < email.length; i++) {
    document.write(email[i])
    console.log()
}
x = 10;
y = 20;
z = 30;
console.log(++x, y++);
console.log(x, y);
console.log(25 == "25");
console.log("25" == 25);
console.log(25 === "25");
console.log("25" === 25);
let result = "100";
console.log(Number(result), typeof (result));
console.log(Boolean(-200));
if (!(x > y) || x < z) {
    console.log("2");
}
console.log(Math);
console.log(PI);
x = -7.7;
console.log(x);
console.log(Math.abs(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));
// Math.random(): 取得 0~1 之間浮點數
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * (100 - 10 + 1)) + 10);

while (true) {
    let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    if (number == 100) {
        console.log("break");
        break;
    }
}
*/
const get_lotto = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function getLottoNumber(start, end, numbers, special = false) {
    let lotto = [];
    let count = 0;
    do {
        number = get_lotto(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            count++;
        }
    } while (count < numbers);
    lotto.sort((a, b) => {
        return a - b;
    });
    if (special) {
        lotto.push(get_lotto(start, end, 1));
    }
    return lotto;
}
// console.log(getLottoNumber(1, 49, 6));

// console.log(getLottoNumber(1, 49, 6))


const start = 1;
const end = 49;
let lotto = " "
lottolabel = `<ol>`;
for (let i = 0; i < 10; i++) {
    lotto = "";
    for (let j = 0; j < 6; j++) {
        // console.log(`第${i + 1}個號碼為:${(Math.floor(Math.random() * (end - start + 1)) + start)}`);
        lotto += getLottoNumber() + "&nbsp;&nbsp; ";
    }
    // console.log(lotto);
    // document.write(`<li style= "color: red;">${lotto}</li> `);

}
lottolabel += lotto + `</ol>`;







let students = [
    ['jerry', 78, 67, 89],
    ['mary', 100, 99, 88],
    ['kevin', 77, 99, 77],
];
// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i])
//     const scores = students[i].slice(1, students[i].length);
//     // const scores = students[i]
//     document.write(students[i] + `<br>`);
//     // document.write(students[i].join("-") + `<br>`)
//     // document.write(scores)
//     let total = 0;
//     for (let j = 0; j < scores.length; j++) {
//         total += scores[j];

//     }
//     let avg = total / scores.length;
//     document.write(total + ", " + avg.toFixed(2) + `<br>`);

//     // document.write(avg);
// }

const get_BMI = (height, weight, point = 2) => {
    return (weight / (height / 100) ** 2).toFixed(point);
}

// console.log(get_BMI(160, 60, 4));

const title = document.querySelector("h1");
// console.log(title);
title.innerText = "大樂透號碼";
title.style.backgroundColor = "blue";
title.style.color = "white";
title.style.textAlign = "center";

const subtitle = document.querySelector("h3");
subtitle.innerHTML = `<h3><i>${subtitle.innerText}即將開獎~
按鈕即可開始
</i></h3>`;

const startEl = document.querySelector("#start");
startEl.addEventListener("click", () => {
    console.log("start!");
    // const lottoEl= document.querySelector

})




