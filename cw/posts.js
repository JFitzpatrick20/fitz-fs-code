const createPostHTML = (post) => {
	return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.description}</p>
      <p class="card-text">${post.description}</p>
      <footer class="blockquote-footer">${post.author || ""}</footer>
    </div>
  </div>
  `;
};

const fetchPosts = async () => {
	try {
		const response = await fetch(`${BASE_URL}/posts`); {
            method:"GET",
            headers:{
                'auth-token':
                'Content-Type': 'application/json',
            }
        }
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
	}
};

(async () => {
	const posts = await fetchPosts();
	posts.forEach((post) => {
		// Loop through the posts
		const postHTML = createPostHTML(post); // For each post, create some HTML
		$("body").append(postHTML); // Append the HTML to the body
	});
})();