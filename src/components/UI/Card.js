import { useNavigate } from "react-router";
import UserCardHeader from "./UserCardHeader";
import UserCardMain from "./UserCardMain";

export default function Card({ info }) {
  const navigate = useNavigate();

  const ViewCardHandler = (e) => {
    e.preventDefault();
    navigate(`/${info.id}`);
  }

  return (
    <div className="userCard" onClick={ViewCardHandler}>
      <UserCardHeader props={info.created} />
      <UserCardMain props={info.content} />
    </div>
  );
}
