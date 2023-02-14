const initialComments = {
  comments: [
    {
      id: 1,
      text: "first comment",
      votes: 0,
      replies: [
        {
          id: 2,
          text: "first reply",
          votes: 0,
        },
      ],
    },
  ],
};

export default function commentReducer(state = initialComments, action) {
  switch (action.type) {
    case "comments/addComment": {
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: action.payload.id,
            text: action.payload.text,
            votes: action.payload.votes,
            replies: action.payload.replies,
          },
        ],
      };
    }
    default:
      return state;
  }
}
