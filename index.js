const myForm =document.getElementById('my-form');
const nameInput = document.querySelector('#CompanyName');
const emailInput = document.querySelector('#Email');
const userList = document.querySelector('#useres');
const msg = document.querySelector('.msg');

console.log(document.querySelector('.container'));
const items = document.querySelectorAll('.list-group-item');
items.forEach(item => console.log(item));
const ul = document.querySelector(".list-group");
const btn = document.querySelector(".btn");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "I did much";
// ul.children[1].innerText ="nonono";
// ul.children[2].innerHTML = "<h1>Important</h1>";

// btn.style.background = "red";

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc"
    document.querySelector("body").classList.add("bg-dark");
    ul.lastElementChild.innerHTML="<h1>hello</h1>"
});


myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if( nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => msg.remove(), 3000
          );
    }

    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`)) 
        userList.appendChild(li);
        // Clear Fields

        nameInput.value = "";   
        emailInput.value="";
    }
}

