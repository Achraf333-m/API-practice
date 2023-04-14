const postsHtml = document.querySelector('.post-list')
const id = localStorage.getItem('id');

async function onSearchChange(event) {
    const id = event.target.value;
    getUser(id)
}

async function getUser(id) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const userData = await user.json();
    postsHtml.innerHTML = userData.map((userPost) => userPostHtml(userPost)).join("")

}

function userPostHtml(userPost) {
    return `<div class="post">
    <div class="post__title">
      ${userPost.title}
    </div>
    <p class="post__body">
      ${userPost.body}
    </p>
  </div>`
}
getUser(id)