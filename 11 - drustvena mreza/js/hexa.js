let session = new Session();
session_id = session.getSession();

if (session_id !== "") {

    async function populateUserData() {
        let user = new User();
        user = await user.get(session_id); // uzimamo usera, onog koji je ulogovan

        document.querySelector('#username').innerText = user.username;
        document.querySelector('#email').innerText = user.email;

        document.querySelector('#korisnicko_ime').value = user['username'];
        document.querySelector('#edit_email').value = user['email'];
    }

    populateUserData();

} else {
    window.location.href = "/";
}

// Odloguj se
document.querySelector('#logout').addEventListener('click', e => {
    e.preventDefault();

    session.destroySession();

    window.location.href = "/";
});

// Otvaranje edit account modala
document.querySelector('#editAccount').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
});

// zatvaranje edit account modala
document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none';
});

// Saving changes on edit account
document.querySelector('#editForm').addEventListener('submit', e => {
    e.preventDefault();

    let user = new User();
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#edit_email').value;

    user.edit();
});

// Brisanje profila
document.querySelector('#deleteProfile').addEventListener('click', e => {
    e.preventDefault();

    let text = 'Da li ste sigurni da želite da obrišete svoj profil?';

    if (confirm(text) === true) {
        let user = new User();
        
        user.delete();
    }
});

// Logika za kreiranje posta
document.querySelector('#postForm').addEventListener('submit', e => {
    e.preventDefault();

    async function createPost() {
        let content = document.querySelector('#postContent').value;
        document.querySelector('#postContent').value = '';

        let post = new Post();
        post.post_content = content;
        post = await post.create();

        let current_user = new User();
        current_user = await current_user.get(session_id);

        let html = document.querySelector('#allPostsWrapper').innerHTML;

        let delete_post_html = '';

        // Ako je korisnikov post, onda prikazi remove dugme za post
        if (session_id === post.user_id) {
            delete_post_html = '<button class="remove-btn" onclick="removeMyPost(this)">Remove</button>'
        }

        document.querySelector('#allPostsWrapper').innerHTML = `
            <div class="single-post" data-post-id="${post.id}">
                <div class="post-content">${post.content}</div>

                <div class="post-actions">
                    <p><b>Author: </b> ${current_user.username}</p>

                    <div>
                        <button class="likePostJS like-btn" onclick="likePost(this)"><span>${post.likes}</span>Likes</button>
                        <button class="comment-btn" onclick="commentPost(this)">Comments</button>
                        ${delete_post_html}
                    </div>
                </div>


                <div class="post-comments">
                    <form>
                        <input placeholder="Napiši komentar...">
                        <button onclick="commentPostSubmit(event)">Comment</button>
                    </form>
                </div>
            </div>
        ` + html;
    }

    createPost();
});


async function getAllPosts() {
    let all_posts = new Post();
    all_posts = await all_posts.getAllPosts();
    console.log(`all posts: ${all_posts}`);

    all_posts.forEach(post => {
        async function getPostUser() {
            let user = new User();
            user = await user.get(post.user_id);

            let comments = new Comment();
            comments = await comments.get(post.id);

            // Domaci: dodavanje 'ko je napisao komentar':
            let users = new User();
            users = await users.getAllUsers();

            let comments_html = '';
            if (comments.length > 0) {
                comments.forEach(comment => {
                    
                    users.forEach(single_user => {
                        let matching_value = '';

                        if (comment.user_id === single_user.id) {
                            comments_html += `<div class="single-comment">
                                <div class="single-comment-author">FROM: ${single_user.username} </div>
                                <div class="single-comment-content">${comment.content}</div>
                            </div>`;
                        }
                    });


                });
            }

            let html = document.querySelector('#allPostsWrapper').innerHTML;

            let delete_post_html = '';

            if (session_id === post.user_id) {
                delete_post_html = '<button class="remove-btn" onclick="removeMyPost(this)">Remove</button>'
            }

            document.querySelector('#allPostsWrapper').innerHTML = `
            <div class="single-post" data-post-id="${post.id}">
                <div class="post-content">${post.content}</div>

                <div class="post-actions">
                    <p><b>Author: </b> ${user.username}</p>

                    <div>
                        <button class="likePostJS like-btn" onclick="likePost(this)"><span>${post.likes}</span>Likes</button>
                        <button class="comment-btn" onclick="commentPost(this)">Comments</button>
                        ${delete_post_html}
                    </div>
                </div>


                <div class="post-comments">
                    <form>
                        <input placeholder="Napiši komentar...">
                        <button onclick="commentPostSubmit(event)">Comment</button>
                    </form>
                    ${comments_html} 
                </div>
            </div>
        ` + html; 
        }

        getPostUser();
    });
}

getAllPosts();

async function commentPostSubmit(e) {
    e.preventDefault();

    let btn = e.target;
    btn.setAttribute('disabled', 'true');

    let main_post_el = btn.closest('.single-post');

    let post_id = main_post_el.getAttribute('data-post-id');

    let comment_value = main_post_el.querySelector('input').value;

    main_post_el.querySelector('input').value = ''; 

    
    let comment = new Comment();
    comment.content = comment_value;
    comment.user_id = session_id;
    comment.post_id = post_id;
    comment.create();

    let user = new User();
    user = await user.get(session_id);

    main_post_el.querySelector('.post-comments').innerHTML += `<div class="single-comment">
                                                                    <div class="single-comment-author">FROM: ${user.username}</div>
                                                                    <div class="single-comment-content">${comment_value}</div>
                                                                </div>`;
}

const removeMyPost = btn => {
    let post_id = btn.closest('.single-post').getAttribute('data-post-id');

    btn.closest('.single-post').remove();

    let post = new Post();
    post.delete(post_id);
}

const likePost = btn => {
    let main_post_el = btn.closest('.single_post');
    let post_id = btn.closest('.single-post').getAttribute('data-post-id');
    let number_of_likes = parseInt(btn.querySelector('span').innerText);

    btn.querySelector('span').innerText = number_of_likes + 1;
    btn.setAttribute('disabled', 'true');

    let post = new Post();
    post.like(post_id, number_of_likes + 1);

}

const commentPost = btn => {
    let main_post_el = btn.closest('.single-post');
    let post_id = main_post_el.getAttribute('data-post_id');

    main_post_el.querySelector('.post-comments').style.display = 'block';
}

// Domaci, drugi deo
async function topPosts() {
    let all_posts = new Post();
    all_posts = await all_posts.getAllPosts();

    let postsWrapper = document.querySelector('.random-posts-wrapper');
    console.log(postsWrapper);
    if (all_posts.length >= 3) {
        for (let i = 0; i < 3; i++) {
            let single_post_html = `
            <div class="single-random-post">
                <p>post ID: ${all_posts[i].id} </p>
                <p>Likes: ${all_posts[i].likes} </p>
            </div>
            `;

            postsWrapper.innerHTML += single_post_html;
        }
    } else {
        all_posts.forEach(single_post => {
            let single_post_html = `
            <div class="single-random-post">
                <p>post ID: ${single_post.id} </p>
                <p>Likes: ${single_post.likes} </p>
            </div>
            `;

            postsWrapper.innerHTML += single_post_html;
        });
    }

    console.log(postsWrapper);
}

topPosts();