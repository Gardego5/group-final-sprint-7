// imports
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import NewAButton from "../../components/AnnouncementCard/NewAButton";
import {
  StyledTitle,
  ButtonDiv,
  AnnCardDiv,
  AnnsDiv,
} from "./Announcements.module";
import { useState } from "react";
import NavBar from './../../components/NavBar';

const defaultPost = [
  {
    postId: 1,
    username: "Senor Garret",
    title: "CEO",
    postDate: "August 29, 2022",
    userPost: "How do you go back a file?",
  },
  {
    postId: 2,
    username: "Senor Garret",
    title: "CEO",
    postDate: "August 29, 2022",
    userPost: "I need coffee",
  },
];

const Announcements = () => {
  const [posts, setPost] = useState(defaultPost);

  return (
    <>
    <NavBar />
    <AnnsDiv>
      <StyledTitle>Announcements</StyledTitle>
      <ButtonDiv>
        <NewAButton />
      </ButtonDiv>
      <AnnCardDiv>
        {posts.map(({ postId, username, title, postDate, userPost }) => (
          <AnnouncementCard
            key={postId}
            username={username}
            title={title}
            postDate={postDate}
            userPost={userPost}
          />
        ))}
      </AnnCardDiv>
    </AnnsDiv>
    </>
  );
};

export default Announcements;
