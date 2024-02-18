import DateTimePretty from "../HOC/DateTimePrettier";
import DateTime from "./DateTime";

const HocDate = DateTimePretty(DateTime);

export default function UserCardHeader(props) {
  return (
    <div className="userCard_header">
      <div className="userCard__avatar">
        <img src="https://i.pravatar.cc/50" alt="avatar" className="avatar" />
      </div>
      <div className="userCard__info">
        <div className="userCard__name">John Doe</div>
        <div className="userCard__subInfo">
          <div className="userCard__position">Основатель группы</div>
          <div className="userCard__created"><HocDate date={props} /></div>
        </div>
      </div>
    </div>
  );
}
