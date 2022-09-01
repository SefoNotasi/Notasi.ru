var questionsOop = [];
var elementsOop = document.getElementsByClassName("question-oop");
for (var i = 0, len = elementsOop.length; i < len; i++) {
    if (elementsOop[i].id != '') {
        questionsOop.push(elementsOop[i].id);
    }
}
// console.log("OOP questions: " + questionsOop + "\nOOP questions count: " + questionsOop.length);

var questionsJava = [];
var elementsJava = document.getElementsByClassName("question-java");
for (var i = 0, len = elementsJava.length; i < len; i++) {
    if (elementsJava[i].id != '') {
        questionsJava.push(elementsJava[i].id);
    }
}
// console.log("Java questions: " + questionsJava + "\nJava questions count: " + questionsJava.length);

var questionsKotlin = [];
var elementsKotlin = document.getElementsByClassName("question-kotlin");
for (var i = 0, len = elementsKotlin.length; i < len; i++) {
    if (elementsKotlin[i].id != '') {
        questionsKotlin.push(elementsKotlin[i].id);
    }
}
// console.log("Kotlin questions: " + questionsKotlin + "\nKotlin questions count: " + questionsKotlin.length);

var questionsAndroid = [];
var elementsAndroid = document.getElementsByClassName("question-android");
for (var i = 0, len = elementsAndroid.length; i < len; i++) {
    if (elementsAndroid[i].id != '') {
        questionsAndroid.push(elementsAndroid[i].id);
    }
}
// console.log("Android questions: " + questionsAndroid + "\nAndroid questions count: " + questionsAndroid.length);

var questionsIt = [];
var elementsIt = document.getElementsByClassName("question-it");
for (var i = 0, len = elementsIt.length; i < len; i++) {
    if (elementsIt[i].id != '') {
        questionsIt.push(elementsIt[i].id);
    }
}
// console.log("IT questions: " + questionsIt + "\nIT questions count: " + questionsIt.length);

let questions = questionsOop.concat(questionsJava, questionsKotlin, questionsAndroid, questionsIt);
// console.log("All questions: " + questions + "\nTotal questions: " + questions.length);

function random() {
    let question = questions[Math.floor(Math.random() * questions.length)];
    window.location = `#${question}`;
}