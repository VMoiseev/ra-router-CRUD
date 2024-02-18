import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserCardHeader from "./UI/UserCardHeader";
import UserCardMain from "./UI/UserCardMain";
import { Button } from "reactstrap";

export default function ViewPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:7777/posts')
      .then((res) => {
        const post = res.data.find((post) => post.id === Number(postId));
        setPost(post);
      });
  }, [postId, post]);

  const HandleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:7777/posts/${post.id}`)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  }

  const HandleEdit = (e) => {
    e.preventDefault();
    setEditedContent(post.content);
    setEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/posts', {
      "id": post.id,
      "content": editedContent,
    }).then(() => {
      setEdit(false);
    }).catch((err) => console.log(err));
  }

  const onChangeHandler = (e) => {
    setEditedContent(e.target.value);
  }

  const closeHandler = (e) => {
    e.preventDefault();
    setEdit(false);
  }

  if (edit) {
    return (
      <div className="wrapper">
        <form className="EditCard" onSubmit={handleSubmit}>
          <div className="EditCard_header">
            <label htmlFor="content">Редактировать публикацию</label>
            <Button
              close
              color="primary"
              onClick={closeHandler}
            ></Button>
          </div>
          <div className="EditCard_main">
            <div className="AddCard__avatar">
              <img src="https://i.pravatar.cc/50" alt="avatar" className="avatar" />
            </div>
            <div className="AddCard__content">
              <input
                name="content"
                id="content"
                required
                value={editedContent}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="EditCard_footer">
            <Button
              color="primary"
            >Сохранить</Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="ViewPost_card">
        <UserCardHeader props={post.created} />
        <UserCardMain props={post.content} />
        <div className="userCard_footer">
          <Button
            color="primary"
            size="sm"
            onClick={HandleEdit}
          >Изменить</Button>
          <Button
            color="danger"
            size="sm"
            onClick={HandleDelete}
          >Удалить</Button>
        </div>
      </div>
    </div>
  );
}
