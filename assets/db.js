const data = [
    {
      id: 0,
      title: "I Have Decided",
      post: `The day after my birthday I am going to go back to Weight watchers and do their program. The reasons I stop is not very good reasons and they really don’t hold any water so I just need to do this...`,
      reaction: { heart: 3, like: 2, dislike: 0 },
      
    },
    {
      id: 1,
      title: "July 24 2022",
      post: `up at 8.30 am.   8. 30 am to iTunes.       9.30 am to 10 22 am online  10 50am to 12.30 pm o get free Launch today was pasta. 100pm to 2. 40 pm reading. 2.40 pm to  4. 47 pm online.  600pm to  70...`,
      reaction: { heart: 5, like: 2, dislike: 0 },
    },
    {
      id: 2,
      title: "Dear Diary",
      post: `I have dreamed of becoming a photographer, but when I see someone elses photos i get more and more discouraged.`,
      reaction: { heart: 2, like: 7, dislike: 0 },
    },
    {
      id: 3,
      title: "Breakup",
      post: `My boyfriend and i of almost 2.5 years finally broke up. We weren’t even talking near the end. And it’s not even like it was in a bad way; we just lost interest I guess. Because we’re both away at college we never saw each other. I cried a lot, but I am relieved. It doesn’t feel that different because I rarely see him so it’s still the same. But now I just feel more alone than usual.`,
      reaction: { heart: 4, like: 6, dislike: 0 },
    },
  ];
  
  const comments = [
    {
      id: 0,
      name: "anonymous",
      email: "anonymous@gmail.com",
      comments: [
        {
          content: `You can do it!`,
          reaction: { heart: 3, like: 2, dislike: 0 },
        },
        {
          content: `Get that summer bod ready woop woop`,
          reaction: { heart: 5, like: 0, dislike: 0 },
        },
        {
          content: `I was looking to do the same`,
          reaction: { heart: 2, like: 1, dislike: 0 },
        },
      ],
    },
    {
      id: 1,
      name: "Donald Trump",
      email: "therealdtrump@hotmail.com",
      comments: [
        {
          content: `boo bland`,
          reaction: { heart: 0, like: 2, dislike: 5 },
        },
        {
          content: `how interesting, not 😒`,
          reaction: { heart: 0, like: 3, dislike: 6 },
        },
        {
          content: `Bet your life is fun`,
          reaction: { heart: 2, like: 5, dislike: 0 },
        },
      ],
    },
    {
      id: 2,
      name: "John Smith",
      email: "j.smith@hotmail.com",
      comments: [
        {
          content: `aw don't be discouraged`,
          reaction: { heart: 4, like: 2, dislike: 0 },
        },
        {
          content: `You got this!`,
          reaction: { heart: 4, like: 3, dislike: 0 },
        }
      ],
    },
    {
      id: 3,
      name: "Grimes",
      email: "grimes@gmail.com",
      comments: [
        {
          content: `F that guy, you can do better! Onwards and upwards`,
          reaction: { heart: 7, like: 5, dislike: 0 },
        },
        {
          content: `Forget about him, I'm here if you need someone to talk to 😏`,
          reaction: { heart: 2, like: 3, dislike: 6 },
        },
        {
          content: `Men suck anyway sis, you got this`,
          reaction: { heart: 8, like: 5, dislike: 3 },
        },
      ],
    }
]