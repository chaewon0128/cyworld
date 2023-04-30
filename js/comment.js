const form = document.querySelector(".comment");
const comment = form.querySelector(".text");
const commentName = form.querySelector('.name');
const commentBtn = form.querySelector('button');
const commentList = form.querySelector('ul');
const COMMENT_KEY = "comment"

let commentStorage = {};

function saveComment() {
    localStorage.setItem(COMMENT_KEY ,JSON.stringify(commentStorage))
}
function deleteListHandler(e) {
    const list = e.target.parentNode
    list.remove();
}

function paintHandler (newValue, newName) {
const li  = document.createElement("li");
const span = document.createElement("span");
const deleteBtn = document.createElement("button");

span.innerText = `${newValue}(일촌 ${newName})`;
deleteBtn.innerText = 'x'
deleteBtn.addEventListener("click",deleteListHandler);

li.appendChild(span)
li.appendChild(deleteBtn)
commentList.appendChild(li)

}
function btnClickHandler(e) {
    e.preventDefault();
    const newValue = comment.value;
    const newName = commentName.value;
    comment.value = "";
    commentName.value = "";
    commentStorage[newName] = newValue;

    saveComment()
    paintHandler(newValue, newName);
}
commentBtn.addEventListener('click',btnClickHandler)

const getComment = localStorage.getItem(COMMENT_KEY)

if(getComment) {
    const parsedComment = JSON.parse(getComment)

    for (const [key, value] of Object.entries(parsedComment)) {
       paintHandler(value,key)
      }
}