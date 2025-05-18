let users = [];
let usersPost = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((response) => {
    users = response;
  })
  .catch((error) => console.log(error));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((response) => {
    usersPost = response;
  })
  .catch((error) => console.log(error));

const searchForm = document.getElementById('search-form');
const userInfoDiv = document.getElementById('user-data');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = +event.target.search.value;

  const matchUser = users.find((user) => user.id === input);
  const matchPosts = usersPost.find((userPost) => userPost.userId === input);


  if (matchUser) {
    userInfoDiv.innerHTML = `
    <div class= "data-div">
    <h2>User Data Record</h2>
    <p><strong>Name:</strong> ${matchUser.name}</p>
        <p><strong>Email:</strong> ${matchUser.email}</p>
        <p><strong>Username:</strong> ${matchUser.username}</p>
        <p><strong>Phone:</strong> ${matchUser.phone}</p>
    </div>
    <div class="data-div">
    <h2>User Posts Record</h2>
    <p><strong>Post ID:</strong> ${matchPosts.userId}</p>
        <p><strong>Post Title:</strong> ${matchPosts.title}</p>
        <p><strong>Post Body:</strong> ${matchPosts.body}</p>
    </div>
        `;
  } else {
    userInfoDiv.innerHTML = `
    <h4>404 Not Found!</h4>`;
  }
  event.target.reset();
});
