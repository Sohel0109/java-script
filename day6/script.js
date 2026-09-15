function changetext(){

var text = document.getElementById('paragraph');

text.innerHTML = '<p>we have changed the text as our first task,<br> as given in day 6</p>';
}
document
    .querySelector('#button1')
    .addEventListener('click', changetext);



function addtext() {
    const para = document.createElement("p");
    const paratext = document.createTextNode("we have added this line in div");

    para.appendChild(paratext);

    const div = document.querySelector(".div");
    div.appendChild(para);

    div.style.background = "red";
}
document
    .querySelector('#button2')
    .addEventListener('click', addtext);

