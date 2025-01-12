function attachEvents() {
    let allPosts = [];

    const BASE_URL = "http://localhost:3030/jsonstore/blog";
    const POST_URL = `${BASE_URL}/posts`;
    const COMMENTS_URL = `${BASE_URL}/comments`;
     
    const selectElement = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');
    const loadPostsElement = document.getElementById('btnLoadPosts');
    const viewPostElement = document.getElementById('btnViewPost');

    async function customFetch(url) {
        return fetch(url).then((res) => res.json());
    }

    function appendPosts(postsResponse) {
        postsResponse.textContent = "";
        allPosts = [];

        Object.values(postsResponse).forEach(({ body, id, title }) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = title;
            optionElement.value = id;

            selectElement.append(optionElement);

            allPosts.push({ body, id, title });
        })
    }

    function fetchAllPosts() {
        customFetch(POST_URL).then(appendPosts);
    }

    function fetchSinglePost() {
        const { value: selectedPostId } = selectElement;
        
        if (!selectedPostId) {
            return;
        }

        const selectedPost = allPosts.find((x) => x.id === selectedPostId);
        postBodyElement.textContent = selectedPost.body;
        postTitleElement.textContent = selectedPost.title;

        customFetch(COMMENTS_URL).then((commentResponse) => {
            postCommentsElement.textContent = "";

            Object.values(commentResponse)
                .filter(({ postId }) => postId === selectedPostId)
                .forEach(({ id, text }) => {
                    const li = document.createElement("li");
                    li.textContent = text;
                    li.setAttribute("data-id", id);

                    postCommentsElement.append(li);
                })
        })
    }

    loadPostsElement.addEventListener('click', fetchAllPosts);
    viewPostElement.addEventListener('click', fetchSinglePost);
}

attachEvents();