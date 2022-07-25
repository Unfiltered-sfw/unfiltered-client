const data = [
    {
      id: 0,
      post: "",
      reaction: { heart: 0, like: 0, dislike: 0 },
    },
    {
      id: 1,
      post: "",
      reaction: { heart: 0, like: 0, dislike: 0 },
    },
  ];
  
  const comments = [
    {
      id: 0,
      comments: [
        {
          content: "string1",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
        {
          content: "string2",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
        {
          content: "string3",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
      ],
    },
    {
      id: 1,
      comments: [
        {
          content: "string1",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
        {
          content: "string2",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
        {
          content: "string3",
          reaction: { heart: 0, like: 0, dislike: 0 },
        },
      ],
    },
  ];
  module.exports = { data, comments };