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

    const div = document.querySelector(".divs");
    div.appendChild(para);

    div.style.background = "red";
}
document
    .querySelector('#button2')
    .addEventListener('click', addtext);

const addt = document.querySelector(' .addtask ul')

addt.addEventListener('click', function(e){
    if(e.target.className = "Delete"){
        const li = e.target.parentElement;
        addt.removeChild(li);
    }
})

const addForm = document.forms['addTask'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('textarea').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletename = document.createElement('button');
    deletename.className = 'Delete';
    // add content
    deletename.textContent = 'Delete';
    bookName.textContent = value;


    // append to document
    li.appendChild(bookName);
    li.appendChild(deletename);
    addt.appendChild(li);
})