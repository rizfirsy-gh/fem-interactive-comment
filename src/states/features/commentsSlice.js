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
      const currentComment = state.comments.filter(
        comment.id !== action.payload.id
      );
      console.log("currentComment", currentComment);
    },
    upVotesComments: (state, action) => {
      console.log("payload", action.payload);
      // const currentComment = state.comments.filter(
      //   (comment) => comment.id !== action.payload.id
      // );

      // currentComment.votes += 1;
    },
    downVotesComments: (state) => {
      const currentComment = state.comments.filter(
        (comment) => comment.id !== action.payload.id
      );

      currentComment.votes -= 1;
    },
  },
});

export const { addComment, addReply, upVotesComments, downVotesComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
