import React from "react";
import NavigationBar from "../components/NavigationBar";
import Feed from "../components/Feed";
import styled from "styled-components";
import { useFeed } from "../hooks/useFeed";

const Main = () => {
  const { data } = useFeed();

  return (
    <div>
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
    </div>
  );
};

const FeedWrapper = styled.div`
  margin-top: 70px;
`;

export default Main;
