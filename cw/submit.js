const BASE_URL = "https://jsonplaceholder.typicode.com"

const postBlog = async (requestBody) => {
  try{
    const response = await fetch (`${BASE_URL}/posts`, {
    method: "POST",
    header: {
      "content-type":"application/json; charset=utf-8",
    },
    body: JSON.stringify(requestBody)
  })
  const data = await response.json()
  console.log(data)
}catch(e){
  console.error(e)
}}

$("form").on("submit", (e) => {
    e.preventDefault();
    const blogTitle = $('#blog-title').val()
    const blogDescription = $('#blog-description').val()
    // const blogAuthor = $('#blog-author').val()
    
    const requestBody={
      userId: 1,
      title: blogTitle,
      body: blogDescription,
      // author: blogAuthor,
    }
    try{
      postBlog(requestBody)
    } catch (error){
      console.error("nope")
    }
  }
);





















// const BASE_URL = "http://clever-neumann-583.herokuapp.com"

// async function fetchPosts() {
// 	try {
//         const response = await fetch(`${BASE_URL}/posts`, {
//             method: "GET",
//             // headers:{
//             //     "auth-token":
//             //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkMWZiMDJlZTU3MzAwMDRlZWZiODQiLCJpYXQiOjE2MTY3MTY1MzR9.a6P64RdHUofG10bwixi0_TvruwxZhiuv7GHdrHZ04pw"
//             // }
//         })

// 		const data = await response.json();
// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 	}
// }

// const createPostHTML = (post) => {
// 	return `
//   <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${post.title}</h5>
//       <p class="card-text">${post.description}</p>
//       <p class="card-text">${post.description}</p>
//       <footer class="blockquote-footer">${post.author || ""}</footer>
//     </div>
//   </div>
//   `;
// };

// (async () => {
// 	const posts = await fetchPosts();
// 	posts.forEach((post) => {
// 		// Loop through the posts
// 		const postHTML = createPostHTML(post); // For each post, create some HTML
// 		$("#posts").append(postHTML); // Append the HTML to the body
// 	});
// })();
