import Author from './Author.js';
import Comment from './Comment.js';

const author = new Author('Luís');

const post1 = author.newPost(
  'Introduçaõ ao Javascript',
  'Este é um conteúdo sobre fundamentos do Javascript'
);

const post2 = author.newPost(
  'Dicas de CSS',
  'Aqui estão algumas dicas úteis de estilização'
);

const comment1 = new Comment('Ana', 'Javascript é incrível mesmo!');
const comment2 = new Comment('José', 'Uau adorei o conteúdo!');

post1.addComment(comment1);
post1.addComment(comment2);

// console.log(post1);
console.log(author.posts);

// Exibir os posts do autor
console.log(`Post de ${author.name}: `, author.showPosts());

//Exibir os comentários do primeiro post1
console.log(`Comentários do post de ${post1.showComments()}`);
