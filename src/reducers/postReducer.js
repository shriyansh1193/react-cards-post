import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
};

// here we have passed type and data in the reducer which was sent through the action
// type will be usefull for checking which type of action we have received and payload will contain data
// here posts: payload is telling that the data which we have received from the action will be passed
// on to the posts array which we have declared above.
const postReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((postItem) =>
          postItem.id === payload.id ? payload : postItem
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id !== payload),
      };
    default:
      return state;
  }
};



export default postReducer;