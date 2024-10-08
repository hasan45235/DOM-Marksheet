var name = prompt("Enter your Name");
var marks = [];
var papers = ["Maths", "English", "Science", "PST", "Computer"];

for (var i = 0; i < 5; i++) {
  marks.push(+prompt("Enter your " + papers[i] + " marks"))
}


var tabHeadArr = [
  "S No.",
  "Subject",
  "Max Marks",
  "Obtained Marks",
  "Total Marks",
  "Percentage",
  "Grade",
];

var sumOfMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
var totalMarks = 500;
var percent = (sumOfMarks / 500) * 100;
console.log(percent);

var studGrade;
function grade(percent) {
  if (percent >= 90 && percent <= 100) {
    studGrade = "A+";
  } else if (percent >= 80 && percent < 90) {
    studGrade = "A";
  } else if (percent >= 70 && percent < 80) {
    studGrade = "B";
  } else if (percent >= 60 && percent < 70) {
    studGrade = "C";
  } else if (percent >= 50 && percent < 60) {
    studGrade = "D";
  } else if (percent >= 40 && percent < 50) {
    studGrade = "E";
  } else {
    studGrade = "Fail";
  }
  return studGrade;
}

function getPercent(total, obtained) {
  return (obtained / total) * 100;
}

var mainDiv = document.getElementById("main");
var table = document.createElement("table");
table.setAttribute("class", "tab");

mainDiv.appendChild(table);
var cap = document.createElement("caption");
table.appendChild(cap)
cap.setAttribute("class","cap")
cap.innerText = "Marksheet With JavaScript"
var tabRowth = document.createElement("tr");
table.appendChild(tabRowth);

for (let j = 0; j < 7; j++) {
  var tabHead = document.createElement("th");
  tabHead.setAttribute("class", "p2");
  tabRowth.appendChild(tabHead);
  tabHead.innerText = tabHeadArr[j];
}
tabHead.setAttribute("text-align", "center");

for (var i = 0; i < 5; i++) {
  var tabRowtd = document.createElement("tr");
  table.appendChild(tabRowtd);

  for (let j = 0; j < 7; j++) {
    var tabData = document.createElement("td");
    tabData.setAttribute("class", "p2")
    tabRowtd.appendChild(tabData);
    if (j === 0) tabData.innerText = i + 1 + ".";
    if (j === 1) tabData.innerText = papers[i];
    if (j === 2) tabData.innerText = 100;
    if (j === 3) tabData.innerText = marks[i];
    if (j === 4) tabData.innerText = "-";
    if (j === 5) tabData.innerText = "-";
    if (j === 6) tabData.innerText = grade(marks[i]);
  }
}
var tabRowtdLast = document.createElement("tr")
table.appendChild(tabRowtdLast)
for (let a = 0; a < 7; a++) {
  var tabDataLast = document.createElement("td")
  tabDataLast.setAttribute("class","p2")
  tabRowtdLast.appendChild(tabDataLast)
  if(a === 0) tabDataLast.innerText = ""
  if(a === 1) tabDataLast.innerText = "-"
  if(a === 2) tabDataLast.innerText = "-"
  if(a === 3) tabDataLast.innerText = "-"
  if(a === 4) tabDataLast.innerText = sumOfMarks
  if(a === 5) tabDataLast.innerText = percent + "%"
  if(a === 6) tabDataLast.innerText = grade(percent)
}

console.log(mainDiv);
