import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import EllipsisText from "react-ellipsis-text";


const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit"
        >
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg></span>
        </Link>
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={"100"} />
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="card-link"> read more</span>
            <span className="material-icons">→</span>
          </Link>
        </div>
      </div>
    </div>

    // <tr>
    //     <td>{postItem.id}</td>
    //     <td>{postItem.title}</td>
    //     <td>{postItem.body}</td>
    // </tr>
  );
};

export default PostCard;



