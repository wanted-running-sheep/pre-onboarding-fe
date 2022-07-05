import React, { useRef, useState } from "react";

import styled from "styled-components";

const Feed = (props) => {
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState(props.comments);
  const inputRef = useRef(null);

  const commentInputChangeHandler = () => {
    setCommentText(inputRef.current.value);
  };

  const findLastItem = () => {
    const lastItem = commentList[commentList.length - 1];
    if (lastItem !== undefined) {
      return lastItem.id + 1;
    } else {
      return 1;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setCommentList([
      ...commentList,
      { id: findLastItem(), userName: "superUser", comment: commentText },
    ]);
    setCommentText("");
  };

  return (
    <Container>
      <FeedHead>
        <ProfileWrap>
          <ProfileCircle></ProfileCircle>
          <span>{props.userName}</span>
        </ProfileWrap>
        <div>
          <button></button>
        </div>
      </FeedHead>
      <FeedImage>
        <img alt="이미지" src={props.img} />
      </FeedImage>
      <FeedComment>
        <CommentList>
          <CommentUl>
            {commentList.map((item) => (
              <CommentLi key={item.id}>
                <UserName>{item.userName}</UserName>
                <UserComment>{item.comment}</UserComment>
              </CommentLi>
            ))}
          </CommentUl>
        </CommentList>
        <form onSubmit={submitHandler}>
          <AddComment>
            <CommentInput
              ref={inputRef}
              onChange={commentInputChangeHandler}
              value={commentText}
            />
            <CommentButton>게시</CommentButton>
          </AddComment>
        </form>
      </FeedComment>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FeedHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: aqua;
  margin-right: 10px;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const FeedComment = styled.div``;

const CommentList = styled.div``;

const CommentUl = styled.ul``;
const CommentLi = styled.li`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 20px;
  font-weight: bold;
`;

const UserComment = styled.span``;

const AddComment = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentInput = styled.input`
  border: 1px solid grey;
  width: 100%;
`;

const CommentButton = styled.button`
  flex-shrink: 0;
`;

export default Feed;
