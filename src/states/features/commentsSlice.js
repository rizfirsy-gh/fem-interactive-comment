import { createSlice } from "@reduxjs/toolkit";

const initialComments = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialComments,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    addReply: (state, action) => {
      console.log("payload", action.payload);
      const filtered = state.comments
        .filter((comment) => comment.id === action.payload.id)
        .map((filter) => {
          filter.reply.push(action.payload);
        });
    },
    upVotesComments: (state, action) => {
      const filtered = state.comments
        .filter((comment) => comment.id === action.payload)
        .map((filter) => {
          filter.votes += 1;
        });
    },
    downVotesComments: (state, action) => {
      const filtered = state.comments
        .filter((comment) => comment.id === action.payload)
        .map((filter) => {
          if (filter.votes >= 1) filter.votes -= 1;
        });
    },
  },
});

export const { addComment, addReply, upVotesComments, downVotesComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
