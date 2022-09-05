const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not') //does this get everything with those two classes
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// show selected profile image on signup
// const avatarUploadLabel = document.querySelector('label[for="profilePic"]')
// const avatarInput = document.querySelector('#profilePic')

// avatarInput.addEventListener('change', (e)=>{
//     const fileName = e.files[0].name
//     console.log(`I ran, ${fileName}`)
//     avatarUploadLabel.childNodes[0].textContent = fileName
// })

// update user
const formUpdateUser = document.querySelector('#updateUser')
formUpdateUser.addEventListener('submit', e=> e.preventDefault())

const sendUpdateButton = document.querySelector('#send-update')
sendUpdateButton.addEventListener('click', sendPutUser)

async function sendPutUser(){
    // etc - how to get user id?
    
    //get user ID
    //send user ID along with form information:
    // userName
    //profileImg
    // email
    //change avatar
    // confirmPassword - which is atypical as usually you need to enter current PW, and new pw 2x

    //how to submit the above? use default button behavior?
}

