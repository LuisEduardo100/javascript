export default class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.post_date = new Date();
    this.author = author;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  showComments() {
    return this.comments.map(
      (comment) => `${comment.author}: ${comment.content}`
    );
  }
}
