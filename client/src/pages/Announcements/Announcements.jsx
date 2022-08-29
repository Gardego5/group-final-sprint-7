// imports
import AnnouncementCard from "../../components/AmmouncementCard/AnnouncementCard"
import NewAButton from "../../components/AmmouncementCard/NewAButton";

const Announcements = () => {
  return (
    <div className="announcements">
      <h2>Announcements</h2>
      <NewAButton />
      <AnnouncementCard />
    </div>
  );
};

export default Announcements;
