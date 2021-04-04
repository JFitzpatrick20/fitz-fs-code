const BASE_URL = `https://strangers-things.herokuapp.com/api/2101-lsu-rm-web-pt`;
const token = localStorage.getItem("Authorization");

async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data.data.posts;
  } catch (err) {
    console.error(err);
  }
}

async function renderPosts() {
  const posts = await fetchPosts();
  return posts.reverse();
}

const createPostHTML = (post) => {
  const postUser = localStorage.getItem("username");
  const cardHTML = $(`
  <div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">Location: ${post.location}</p>
      <p class="card-text">Description: ${post.description}</p>
      <p class="card-text">Price:$${post.price}</p>
      <p class="card-text">Will Deliver:$${post.willDeliver}</p>
      <p class="card-text">Post by: ${post.author.username}</p>
      ${
        post.author.username === postUser
          ? `<button id="deleteButton" class="btn btn-primary">Delete</button> <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editPostModal"
        >
          Edit Post
        </button>`
          : `<button
          type="button"
          id="messageButton"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newMessageModal"
        >
          Message
        </button>`
      }
    </div>
  </div>
  `).data("post", post);
  return cardHTML;
};

const createUserPostHTML = (post) => {
  const cardHTML = $(`
  <div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">Location: ${post.location}</p>
      <p class="card-text">Description: ${post.description}</p>
      <p class="card-text">Price:$${post.price}</p>
      <p class="card-text">Will Deliver:$${post.willDeliver}</p>
      <p class="card-text">Post by: ${post.author.username}</p>
  
           <button id="deleteButton" class="btn btn-primary">Delete</button> <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editPostModal"
        >
          Edit Post
        </button>
         
      
    </div>
  </div>
  `).data("post", post);
  return cardHTML;
};

const appendPosts = async () => {
  $("#featured").empty();
  const posts = await renderPosts();
  posts.forEach((post) => {
    const postHTML = createPostHTML(post);
    const posts = $("#featured").append(postHTML);
    return posts;
  });
};
appendPosts();

async function randomPost() {
  const posts = await renderPosts();
  const number = Math.floor(Math.random() * posts.length + 1);
  const result = $(posts).get(number);
  $(".hp-box").append(createPostHTML(result));
}
randomPost();

$("#postSubmit").click(function () {
  if (token !== null) {
    const newTitle = $("#new-title").val();
    const newDescription = $("#new-description").val();
    const newPrice = $("#new-price").val();
    const requestBody = {
      title: newTitle,
      description: newDescription,
      price: newPrice,
      willDeliver: true,
    };
    try {
      postBlog(requestBody);
      appendPosts();
    } catch (err) {
      console.error(err);
    }
  } else {
    window.location.replace("./login.html");
  }
});

const postBlog = async (requestBody) => {
  if (token !== null) {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: requestBody,
        }),
      });
      const post = await response.json();
      const newPostHTML = createPostHTML(post.data.post);
      $("#featured").append(newPostHTML);
    } catch (err) {
      console.error(err);
    }
  } else {
    window.location.replace("./login.html");
  }
};

let myCurrentPost;

$("#featured").on("click", "button", function () {
  const cardData = $(this).closest(".card").data("post");
  myCurrentPost = cardData._id;
});

$("#editSubmit").click(function () {
  const editTitle = $("#edit-title").val();
  const editDescription = $("#edit-description").val();
  const editPrice = $("#edit-price").val();
  const requestBody = {
    title: editTitle,
    description: editDescription,
    price: editPrice,
    willDeliver: true,
  };
  try {
    editPost(requestBody);
    appendPosts();
  } catch (err) {
    console.error(err);
  }
});

async function editPost(requestBody) {
  try {
    const response = await fetch(`${BASE_URL}/post/${myCurrentPost}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

$("#newMessageModal").on("click", "#postSubmit", async function (event) {
  event.preventDefault();
  const message = $("#newMessageDescription").val();
  try {
    if (myCurrentPost) {
      await fetch(`${BASE_URL}/posts/${myCurrentPost}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: message,
          },
        }),
      });
      $("newMessageModal").hide();
      appendPosts();
      myCurrentPost = null;
    } else {
      throw "PostID null";
    }
  } catch (err) {
    console.error(err);
  }
});

$("#featured").on("click", "#deleteButton", async function () {
  const cardData = $(this).closest(".card").data("post");
  const postID = cardData._id;
  await fetch(`${BASE_URL}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      appendPosts();
    })

    .catch(console.error);
});

$(".search-submit").on("click", async function () {
  const postArray = await fetchPosts();
  const searchText = $(".search-box").val();
  try {
    postArray.filter(function (post) {
      return post.title === searchText;
    }, appendPosts());
  } catch (err) {
    console.error(err);
  }
});

async function getUsersPosts() {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    const data = await response.json();
    return data.data.posts;
  } catch (err) {
    console.error(err);
  }
}

$("#your-posts").click(async function () {
  if (token !== null) {
    $("#featured").empty();
    const userPosts = await getUsersPosts();
    userPosts.forEach((post) => {
      const postHTML = createUserPostHTML(post);
      const posts = $("#featured").append(postHTML);
      return posts;
    });
  } else {
    window.location.replace("./login.html");
  }
});

$(".search-submit").on("click", async function () {
  const data = await fetchPosts();
  const searchText = $(".search-box").val();
  $("#featured").empty();
  try {
    data.filter(function (post) {
      const filtered = post.title == searchText;
      filtered.forEach((post) => {
        const postHTML = createPostHTML(post);
        const posts = $("#featured").append(postHTML);
        return posts;
      });
    });
  } catch (err) {
    console.error(err);
  }
});

async function getUsersMessages() {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    const data = await response.json();
    return data.data.messages;
  } catch (err) {
    console.error(err);
  }
}
getUsersMessages();

$("#messageButton, #allMail").click(function () {
  const data = getUsersMessages();
  const messageNewHTML = $(`<p class="message-user">Username: ${data.fromUser.username}</p>
  <p class="message-text">Message: ${data.content}</p>`);
  data.forEach((message) => {
    const messageHTML = messageNewHTML(message);
    const messageResult = $(".messageBodyMail").append(messageHTML);
    return messageResult;
  });
});

$("#login-logout").click(function () {
  window.location.replace("./login.html");
});
