document.addEventListener('DOMContentLoaded', function
    () {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const imageFile = document.getElementById('image').files[0];

        const reader = new FileReader();
        reader.onload = function (e) {
            const imageData = e.target.result;

            const blogPost = {
                title: title,
                content: content,
                image: imageData
            };

            let blogPosts = JSON.parse(localStorage.getItem('blogPost')) || []

            blogPosts.push(blogPost)
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

            alert('blog gönderi oluşturuldu')

            blogForm.reset();
        }
        reader.readAsDataURL(imageFile)
    })
})


// const onlineUsersLİst = document.getElementById('onlineUsers');
// const messageArea = document.getElementById('messageArea');
// const messageInput = document.getElementById('messageInput');
// const sendMessageBtn = document.getElementById('sendMessageBtn');


// const userMessageKeyPrefix = 'user_messages_';


// const users = [
//     { id: 1, name: 'ahmet' },
//     { id: 2, name: 'ayşe' },
//     { id: 3, name: 'mehmet' },
// ];


// function displayOnlineUsers() {
//     users.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.textContent = user.name;
//         onlineUsersLİst.appendChild(listItem)

//         listItem.addEventListener('click', () =>  showUserChat(user) );;
//     })
// }


// function showUserChat(user) {
//     const userId = user.id;
//     const userMessages = JSON.parse(localStorage.getItem(userMessageKeyPrefix + userId)) || [];

//     messageArea.innerHTML = '';

//     userMessages.forEach(msg => {
//         const newMessage = document.createElement('div')
//         newMessage.classlist.add('message');
//         newMessage.textContent = msg;
//         messageArea.appendChild(newMessage);
//     })
// }


// function sendMessage() {
//     const message = messageInput.value;
//     if(message.trim()!== ''){
//         const selectUser = document.querySelector('.user-list li.active')
//         if(selectUser) {
//             const userId = users.find(user => user.name === selectUser.textContent).id;

//             const userMessagesKey = userMessageKeyPrefix + userId;
//             const userMessages = JSON.parse(localStorage.getItem(userMessagesKey)) || [];
//             userMessages.push(message);
//             localStorage.setItem(userMessagesKey, JSON.stringify(userMessages));

//             const newMessage = document.createElement('div')
//             newMessage.classList.add('message')
//             newMessage.textContent = message;
//             messageArea.appendChild(newMessage)
//             messageArea.ScrollTop = messageArea.scrollHeight;
//         } else {
//             alert('lütfen bir kullanıcı seçin!')
//         }
//         messageInput.value = '';
//     }
//     sendMessageBtn.addEventListener('click', sendMessage);

//     onlineUsersLİst.addEventListener('click',(e) => {
//         const lis = document.querySelectorAll('user-list li');
//         lis.forEach(li => li.classList.remove('active'))
//         if(e.target.tagName === 'LI') {
//             e.target.classList.add('active')
//         }
//     })
// }

// document.addEventListener('DOMContentLoaded', displayOnlineUsers)