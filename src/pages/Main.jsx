import React from "react";
import NavigationBar from "../components/NavigationBar";
import Feed from "../components/Feed";
import styled from "styled-components";
import { useFeed } from "../hooks/useFeed";

const Main = () => {
  const { data } = useFeed();
  return (
    <Container>
      <NavigationBar />
      <FeedWrapper>
        {data?.map((item) => (
          <Feed
            key={item.id}
            feedId={item.id}
            img={item.img}
            userName={item.userName}
            comments={item.comments}
          />
        ))}
      </FeedWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background.lightGray};
`;

const FeedWrapper = styled.div`
  padding-top: 70px;
`;

export default Main;
