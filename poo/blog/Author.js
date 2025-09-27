import Post from './Post.js';

export default class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  newPost(postName, postContent) {
    const authorPost = new Post(postName, postContent, this);
    this.posts.push(authorPost);
    return authorPost;
  }

  showPosts() {
    return this.posts.map((p) => p.title);
  }
}
