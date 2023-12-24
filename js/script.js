let chatIcon = document.getElementById('chatIcon');
let chatPopup = document.getElementById('chatPopup');

chatIcon.addEventListener('click', function() {
    chatPopup.classList.toggle('show')

    chatIcon.classList.toggle('opened')
    chatIcon.classList.toggle('closed')
})

function closeChat() {
    chatPopup.classList.remove('show')

    chatIcon.classList.add('closed')
    chatIcon.classList.remove('opened')
}

document.addEventListener('DOMContentLoaded', function(){
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts) {
        const blogContainer = document.getElementById('blogContainer')
        blogPosts.forEach(function (post){
            const postElement = document.createElement('div')
            postElement.classList.add('post')

            const titlElement = document.createElement('h2')
            titlElement.textContent = post.title;

            const contentElement = document.createElement('p')
            contentElement.textContent = post.content

            if(post.image) {
                const imageElement = new Image();
                imageElement.src = post.image;
                imageElement.alt = post.title;
                imageElement.classList.add('post-image')

                imageElement.onload = function() {
                    if (imageElement.width > 500) {
                        imageElement.width = 500
                    }

                    postElement.appendChild(imageElement)
                    postElement.appendChild(titlElement)
                    postElement.appendChild(contentElement)
                    blogContainer.appendChild(postElement)
                }
            } else {
                postElement.appendChild(titlElement)
                postElement.appendChild(contentElement)
                blogContainer.appendChild(postElement)
            }
        });
    }
})