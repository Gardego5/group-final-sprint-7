// imports
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import {
  StyledTitle,
  ButtonDiv,
  AnnCardDiv,
  AnnsDiv,
} from "./Announcements.module";
import { useState } from "react";
import NavBar from './../../components/NavBar';
import CreateAnnouncement from './../../components/Modals/CreateAnnouncement';

const defaultPost = [
  {
    postId: 1,
    username: "Homie Tamblin",
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
  // hook for posts
  const [posts, setPosts] = useState(defaultPost);
  const [currentUser, setCurrentUser] = useState(getUser())

  //---------- helper functions ----------------//

  // useEffect hook to load all posts from datase
  // API call get all posts inside

  function getUser() {
    // API call to get currentUser
    // mock response
    const currentUser = {
      userId: 1,
      firstName: "Jesus",
      lastName: "Milan",
      title: "Worker",
    }
    // set current user to response
    return currentUser;
  }

  return (
    <>
    <NavBar />
    <AnnsDiv>
      <StyledTitle>Announcements</StyledTitle>
      <ButtonDiv>
        <CreateAnnouncement firstName={currentUser.firstName} lastName={currentUser.lastName} title={currentUser.title}/>
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
