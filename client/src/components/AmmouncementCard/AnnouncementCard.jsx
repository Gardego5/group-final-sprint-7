import { Card, CardHeader, PostDate, UserTitle, CardBody, UserPost } from './AnnouncementCard.module';


const AnnouncementCard = () => {
  return (
    <Card className="card">
      <CardHeader className="card-header">
        <UserTitle className="user">Chris, CEO</UserTitle>
        <PostDate className="date-posted">November 17, 2022</PostDate>
      </CardHeader>
      <CardBody className="card-body">
        <UserPost className="announcement">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus
          dolore nemo, quo voluptates saepe, tempore in porro sed officia
          nostrum autem. Dolorem itaque pariatur autem in, ipsum excepturi
          harum?
        </UserPost>
      </CardBody>
    </Card>
  );
};

export default AnnouncementCard;
