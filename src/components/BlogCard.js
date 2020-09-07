import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Moment from "react-moment";
import { blogActions } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Laugh from "../images/laugh.png"
import Angry from "../images/angry.png"
import Like from "../images/like.png"
import Love from "../images/love.png"
import Sad from "../images/sad.png"
import Run from "../images/run.gif"

const BlogCard = ({ blog, handleClick }) => {
  const dispatch = useDispatch()
  const [reactions, setReactions] = useState(blog.reactions)
  console.log("check blogs", blog);

  let name, avatar;



  if (blog.author) {
    name = blog.author.name;
    avatar = blog.author.avatar;
  }
  if (!avatar) {
    avatar = `https://booksinthemedia.thebookseller.com/sites/all/themes/custom/bitm/images/avatar.png`
  }
  if (!name) {
    name = "Anonymous";
  }

  const handleOnClickEmotion = (reaction) => {
    console.log('handleOnClickEmotion.reaction:', reaction)
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      let targetType = "Blog"
      let target = blog._id
      dispatch(blogActions.updateReaction(targetType, target, reaction, accessToken));
    }
  }


  return (
    <div>

      <div className="tien-card">
        <div className="thumbnail" onClick={() => handleClick(blog._id)} ><img class="left" src={Run} /></div>
        <div className="right">
          <h1 className="tien-title-card" onClick={() => handleClick(blog._id)} style={{ fontSize: "50px" }}>{blog.title.length <= 20
            ? blog.title
            : blog.title.slice(0, 20) + "..."}</h1>

          <div className="author"><img src={avatar} />
            <h2 className="tien-author-style"><span className="text-muted">
              @{name}
            </span></h2>
          </div>
          <div className="separator"></div>
          <p>{blog.content.length <= 99
            ? blog.content
            : blog.content.slice(0, 150) + "..."}
          </p>
          <div className="separator"></div>
          <Row className="tien-reaction-style" >
            <img src={Laugh} onClick={() => handleOnClickEmotion('laugh')} alt="icon" style={{ width: "70px" }} />
            {reactions.haha}
            <img src={Sad} onClick={() => handleOnClickEmotion('sad')} alt="icon" style={{ width: "70px" }} />
            {reactions.sad}
            <img src={Like} onClick={() => handleOnClickEmotion('like')} alt="icon" style={{ width: "70px" }} />
            {reactions.like}
            <img src={Love} onClick={() => handleOnClickEmotion('love')} alt="icon" style={{ width: "70px" }} />
            {reactions.love}
            <img src={Angry} onClick={() => handleOnClickEmotion('angry')} alt="icon" style={{ width: "70px" }} />
            {reactions.angry}
          </Row>
        </div>
        <div className="tien-card-bottom">
          <div >Wrote</div>
          <div><Moment fromNow>{blog.createdAt}</Moment></div>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
