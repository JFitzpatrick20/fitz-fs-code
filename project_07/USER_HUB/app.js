const BASE_URL = 'https://jsonplace-univclone.herokuapp.com';

/*
[
    {
      id: 1, 
      name: "Leanne Graham", 
      username: "Bret", 
      email: "Sincere@april.biz", 
      address: {
        …
      }, 
      …
    },
    {
      id: 2, 
      name: "Ervin Howell", 
      username: "Antonette", 
      email: "Shanna@melissa.tv", 
      address: {
        …
      }, 
      …
    },
    …
  ]
  */
//  function fetchUsers() {
//     return fetchData(`${BASE_URL}/users`);
//   }

// function fetchUsers(){
//     return fetch(`${ BASE_URL }/users`).then(function(response){
//         return response.json()
//     })
//     .catch(function(error){
//         console.log("fetch err")
//     })
//}
function fetchUsers() {
    return fetchData(`${ BASE_URL }/users`);
  }

// fetchUsers().then(function (data) {
//     console.log(data);
//   });

function renderUser(user){
    return $(`<div class="user-card">
    <header>
      <h2>${user.name}</h2>
    </header>
    <section class="company-info">
      <p><b>Contact:</b> ${user.email}</p>
      <p><b>Works for:</b> ${user.company.name}</p>
      <p><b>Company creed:</b> ${user.company.catchPhrase} </p>
    </section>
    <footer>
      <button class="load-posts">POSTS BY ${user.username}</button>
      <button class="load-albums">ALBUMS BY ${user.username}</button>
    </footer>
  </div>`).data("user", user)
}

function renderUserList(userList){
    $('#user-list').empty()
    userList.forEach(function (user) {
        $('#user-list').append( renderUser(user));
    });
}

// function fetchUserAlbumList(userId) {
//     // return fetchData(`${ BASE_URL }/users/${ userId }/albums?_expand=user&_embed=photos`);
//     return fetch(`${ BASE_URL }/users/${userId}/albums`).then(function (response) {
//        return response.json()
//       }).catch(function (error) {
//         console.log(error)
//       })
// }
function fetchUserAlbumList(userId) {
    return fetchData(`${ BASE_URL }/users/${ userId }/albums?_expand=user&_embed=photos`);
  }
// function fetchUserAlbumList(userId) {
//     return fetchData(`${ BASE_URL }/users/${userId}/albums`);
//   }
// fetchUserAlbumList(1).then(function (albumList) {
//     console.log(albumList);
//   });

 
/* render a single album */
function renderAlbum(album) {
const albumElement = $(`<div class="album-card">
<header>
  <h3>${album.title}, by ${album.user.username} </h3>
</header>
<section class="photo-list">
  <div class="photo-card"></div>
  <div class="photo-card"></div>
  <div class="photo-card"></div>
  <!-- ... -->
</section>
</div>`)
const photoElement = albumElement.find('.photo-list')

album.photos.forEach(function(photo){
    photoElement.append(renderPhoto(photo))
})
return albumElement
}


/* render a single photo */
function renderPhoto(photo) {
    return $(`<div class="photo-card">
    <a href="${photo.url}" target="_blank">
      <img src="${photo.thumbnailUrl}">
      <figure>${photo.title}</figure>
    </a>
  </div>`)
  }


/* render an array of albums */
function renderAlbumList(albumList) {
    $('#app section.active').removeClass('active')
    $('#album-list').addClass('active')
    $('#album-list').empty()
    albumList.forEach(function(album){
        $('#album-list').append(renderAlbum(album))
    })
}

function fetchData(url){
    return fetch(url).then(function(response){
        return response.json()
    }).catch(function(error){
        console.log(error)
    })
}

function fetchUserPosts(userId) {
    return fetchData(`${ BASE_URL }/users/${ userId }/posts?_expand=user`);
  }
  
  function fetchPostComments(postId) {
    return fetchData(`${ BASE_URL }/posts/${ postId }/comments`);
  }

   function setCommentsOnPost(post) {
      if(post.comments){
          return Promise.reject(null)
      }
    return fetchPostComments(post.id).then(function(comments){
        post.comments = comments;
        return post;
    })
   }  

//   const successfulPromise = Promise.resolve(3);

// successfulPromise.then(function (value) {
//   return 5; 
// }).then(function (value) {
//   return value * value;
// }).then(console.log)

function renderPost(post) {
   return `<div class="post-card">
  <header>
    <h3>${post.title}</h3>
    <h3>--- ${post.user.username}'s post</h3>
  </header>
  <p>${post.body}</p>
  <footer>
    <div class="comment-list"></div>
    <a href="#" class="toggle-comments">(<span class="verb">show</span> comments)</a>
  </footer>
</div>`
}

function renderPostList(postList) {
    $('#app section.active').removeClass('active')
    $('#post-list').addClass('active')
    $('#post-list').empty()
    postList.forEach(function(post){
        $('#post-list').append(renderPost(post))
    })
}

function toggleComments(postCardElement) {
    const footerElement = postCardElement.find('footer');
  
    if (footerElement.hasClass('comments-open')) {
      footerElement.removeClass('comments-open');
      footerElement.find('.verb').text('show');
    } else {
      footerElement.addClass('comments-open');
      footerElement.find('.verb').text('hide');
    }
  }




// function fetchUserAlbumList(userId) {
//     return fetchData(`${ BASE_URL }/users/${ userId }/albums?_expand=user&_embed=photos`);
//   }

// function renderAlbum(album) {

// }

// function fetchUsers() {
//     return fetchData(`THE URL WE MADE`);
//   }
  
//   function fetchUserAlbumList(userId) {
//     return fetchData(`THE OTHER URL WE MADE`);
//   }


$('#user-list').on('click', '.user-card .load-posts', function () {
    const user = $(this).closest(".user-card").data("user")
    fetchUserPosts(user.id).then(renderPostList)
  });
  
  $('#user-list').on('click', '.user-card .load-albums', function () {
    // load albums for this user
    const user = $(this).closest(".user-card").data("user")
    fetchUserAlbumList(user.id).then(renderAlbumList)

})

$('#post-list').on('click', '.post-card .toggle-comments', function () {
    const postCardElement = $(this).closest('.post-card');
    const post = postCardElement.data('post');
    const commentList = postCardElement.find('.comment-list')
  
    setCommentsOnPost(post)
    .then(function (post) {
      console.log('building comments for the first time...', post);
      commentList.empty()
      post.comments.forEach(function(comment){
          commentList.prepend($(`<h3>${comment.body}---${comment.email}</h3>`))
      })
      toggleComments(postCardElement)
    })
      .catch(function () {
        console.log('comments previously existed, only toggling...', post);
      });
      toggleComments(postCardElement)
  });


function bootstrap() {
    fetchUsers().then(renderUserList)
}
  
  bootstrap();
//   fetchUserAlbumList(1).then(renderAlbumList);
// fetchUserPosts(1).then(console.log); // why does this work?  Wait, what?  

// fetchPostComments(1).then(console.log)