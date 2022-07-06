import React, { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import { FaEllipsisH } from 'react-icons/fa';

const Feed = (props) => {
  const [commentText, setCommentText] = useState('');
  const [commentList, setCommentList] = useState(props.comments);
  const [isLoading, setisLoading] = useState(true);
  const [enabledButton, setEnabledButton] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    onLoadHandler();
    handleEnableButton();
  }, [enabledButton, commentText]);

  const onLoadHandler = () => {
    const loadImage = new Image();
    loadImage.src = props.img;
    loadImage.onload = () => {
      setisLoading(false);
    };
  };

  const commentInputChangeHandler = () => {
    setCommentText(inputRef.current.value);
  };

  const getNewId = () => {
    const lastItem = commentList[commentList.length - 1];
    if (lastItem === undefined) return 1;
    return lastItem.id + 1;
  };

  const handleEnableButton = () => {
    if (buttonRef.current !== null) {
      if (commentText !== '') {
        setEnabledButton(true);
        buttonRef.current.disabled = false;
      } else {
        setEnabledButton(false);
        buttonRef.current.disabled = true;
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (commentText !== '') {
      setCommentList([
        ...commentList,
        { id: getNewId(), userName: 'superUser', comment: commentText },
      ]);
      setCommentText('');
    }
  };

  if (isLoading) return <></>;

  return (
    <Container>
      <FeedHead>
        <ProfileWrap>
          <ProfileCircle></ProfileCircle>
          <ProfileUserName>{props.userName}</ProfileUserName>
        </ProfileWrap>
        <ProfileMenu>
          <FaEllipsisH />
        </ProfileMenu>
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
              placeholder="댓글달기"
            />
            <CommentButton ref={buttonRef} enable={enabledButton}>
              게시
            </CommentButton>
          </AddComment>
        </form>
      </FeedComment>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const FeedHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ProfileCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: aqua;
  margin-right: 10px;
`;

const ProfileUserName = styled.span`
  font-weight: bold;
`;

const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
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

const CommentList = styled.div`
  padding: 10px;
`;

const CommentUl = styled.ul``;
const CommentLi = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

const UserName = styled.span`
  margin-right: 20px;
  font-weight: bold;
`;

const UserComment = styled.span``;

const AddComment = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.border.primary};
  padding: 10px;
`;

const CommentInput = styled.input`
  background-color: ${({ theme }) => theme.color.background.lightGray};
  width: 100%;
  height: 30px;
  border: none;
`;

const CommentButton = styled.button`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.color.background.lightGray};
  color: ${({ enable, theme }) =>
    enable ? theme.color.button.primary : theme.color.button.disabled};
  cursor: ${({ enable }) => (enable ? 'pointer' : 'default')};
`;

export default Feed;
