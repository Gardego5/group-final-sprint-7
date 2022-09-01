/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AnnouncementCard from "../components/AnnouncementCard";
import CreateAnnouncement from "../components/Modals/CreateAnnouncement";
import NavBar from "../components/NavBar";
import { getCompanyAnnouncements } from "../utils/requests";
import { getCompany, getUser } from "../reducers/rootReducer";

const AnnouncementsStyle = styled.div`
  & h1 {
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #1ba098;
    margin: 1rem;
  }
  & div.announcements {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  & div.add-announcement {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin: 0 15%;
    padding-bottom: 1rem;
    border-bottom: 1px solid #deb992;
    margin-bottom: 2rem;
  }
`;

const Announcements = () => {
  /* ---------------------------------- State --------------------------------- */
  // get companyId from store
  const company = useSelector(getCompany);
  // get user info to verify who is posting from store
  const user = useSelector(getUser);

  // Holds the all the announcements made to the company
  const [posts, setPosts] = useState([]);

  // Holds the user details/info
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(user);

  /* ---------------------------- helper funcitions ------------------------------ */

  // useEffect hook to load all posts from datase
  useEffect(() => {
    function getPosts() {
      // call to server to get company's posts
      getCompanyAnnouncements(company.id)
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => console.log(err));
    }
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <AnnouncementsStyle>
        <h1>Announcements</h1>
        {user?.admin ? (
          <div className="add-announcement">
            <CreateAnnouncement
              username={currentUser.username}
              companyId={company.id}
            />
          </div>
        ) : (
          ""
        )}
        <div className="announcements">
          {posts?.map(({ author, title, timePosted, message }, idx) => (
            <AnnouncementCard
              key={idx}
              firstName={author.profile.firstName}
              lastName={author.profile.lastName}
              title={title}
              postDate={timePosted}
              message={message}
            />
          ))}
        </div>
      </AnnouncementsStyle>
    </>
  );
};

export default Announcements;
