const commentForm =document.querySelector(".comment_form");
const comment = commentForm.querySelector(".comment_text");
const commentName = commentForm.querySelector(".comment_name")
const commentList = document.querySelector(".comment_list")
const COMMENT_KEY = "comment"

let commentStorage = {};

function deleteListHandler(e) {
         const list = e.target.parentNode
     list.remove();
    }


function writeComment (e) {
    e.preventDefault();
    const newValue = comment.value;
    const newName = commentName.value;
    comment.value = "";
     commentName.value = "";
    commentStorage[newName] = newValue;
    savedComment()
    paintComment(newValue, newName);
}

function savedComment () {
    localStorage.setItem(COMMENT_KEY ,JSON.stringify(commentStorage))
}
function paintComment (newValue, newName) {
    const li  = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

   span.innerText = `${newValue} (일촌 ${newName})`;
   deleteBtn.innerText = 'x'
   deleteBtn.addEventListener("click",deleteListHandler);

  li.appendChild(span)
  li.appendChild(deleteBtn)
   commentList.appendChild(li)
}

commentForm.addEventListener("submit", writeComment)




const getComment = localStorage.getItem(COMMENT_KEY)

if(getComment) {
const parsedComment = JSON.parse(getComment)

for (const [key, value] of Object.entries(parsedComment)) {
 paintHandler(value,key)  }
 }