import {
  Card,
  CardHeader,
  PostDate,
  UserTitle,
  CardBody,
  UserPost,
} from "./AnnouncementCard.module";

const AnnouncementCard = (props) => {
  return (
    <Card className="card">
      <CardHeader className="card-header">
        <UserTitle className="user">
          {props.username}, {props.title}
        </UserTitle>
        <PostDate className="date-posted">{props.postDate}</PostDate>
      </CardHeader>
      <CardBody className="card-body">
        <UserPost className="announcement">{props.userPost}</UserPost>
      </CardBody>
    </Card>
  );
};

export default AnnouncementCard;
