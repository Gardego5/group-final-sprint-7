// imports
import AnnouncementCard from "../../components/AmmouncementCard/AnnouncementCard";
import NewAButton from "../../components/AmmouncementCard/NewAButton";
import { StyledTitle, ButtonDiv, AnnCardDiv, AnnsDiv } from "./Announcements.module";

const Announcements = () => {
  return (
    <AnnsDiv>
      <StyledTitle>Announcements</StyledTitle>
      <ButtonDiv>
        <NewAButton />
      </ButtonDiv>
      <AnnCardDiv>
        <AnnouncementCard />
      </AnnCardDiv>
    </AnnsDiv>
  );
};

export default Announcements;
