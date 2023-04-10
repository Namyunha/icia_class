const writer = document.querySelector(".comments_comment_writer");
const com = document.querySelector(".comments_comment");

const comments = [
  {
    autor: "Aristotle",
    comment: "To love someone is to identify with them.",
  },
  {
    autor: "Diane Frolov",
    comment:
      "There's a lot to be said for self-delusionment when it comes to matters of the heart.",
  },
  {
    autor: "H. L. Mencken",
    comment: "Love is the triumph of imagination over intelligence.",
  },
  {
    autor: "William Shakespeare",
    comment:
      "Love is a gross exaggeration of the difference between one person and everyone else.",
  },
  {
    autor: "John Sheffield",
    comment: "Tis the most tender part of love, each other to forgive.",
  },
  {
    autor: "Jane Austen",
    comment:
      "The enthusiasm of a woman's love is even beyond the biographer's.",
  },
  {
    autor: "Henry David Thoreau",
    comment: "There is no remedy for love but to love more.",
  },
  {
    autor: "William Somerset Maugham",
    comment: "The important thing was to love rather than to be loved.",
  },
];

const c = comments[Math.floor(Math.random() * comments.length)];

writer.innerText = c.autor;
com.innerText = c.comment;
