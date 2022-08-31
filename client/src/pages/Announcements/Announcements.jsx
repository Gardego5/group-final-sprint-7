/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import { useState, useEffect } from "react";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import CreateAnnouncement from "./../../components/Modals/CreateAnnouncement";
import NavBar from "./../../components/NavBar";
import { getCompanyAnnouncements } from "../../utils/requests";
import { useSelector } from "react-redux";
import { getCompany, getUser } from "../../reducers/rootReducer";

// Styling Imports
import {
  StyledTitle,
  ButtonDiv,
  AnnCardDiv,
  AnnsDiv,
} from "./Announcements.module";

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
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
    }
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <AnnsDiv>
        <StyledTitle>Announcements</StyledTitle>
        <ButtonDiv>
          <CreateAnnouncement
            userId={currentUser.id}
            companyId={company.id}
          />
        </ButtonDiv>
        <AnnCardDiv>
          {posts.map(
            ({ id, firstName, lastName, title, timePosted, message }) => (
              <AnnouncementCard
                key={id}
                firstName={firstName}
                lastName={lastName}
                title={title}
                timePosted={timePosted}
                message={message}
              />
            )
          )}
        </AnnCardDiv>
      </AnnsDiv>
    </>
  );
};

export default Announcements;
