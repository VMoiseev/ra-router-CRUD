import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

export default function AddPost() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  useEffect(() => {
    const content = JSON.parse(localStorage.getItem('content'));
    if (content) {
      setContent(content);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('content', JSON.stringify(content))
  }, [content]);

  const closeHandler = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/posts', {
      "id": 0,
      "content": content
    })
    .then(res => {
      console.log(res.data);
      localStorage.removeItem('content');
      navigate('/');
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="wrapper">
      <form className="AddCard" onSubmit={handleSubmit}>
        <div className="AddCard_header">
          <label htmlFor="content">Создание поста</label>
          <Button
            close
            color="primary"
            onClick={closeHandler}
          ></Button>
        </div>
        <div className="AddCard_main">
          <div className="AddCard__avatar">
            <img src="https://i.pravatar.cc/50" alt="avatar" className="avatar" />
          </div>
          <div className="AddCard__content">
            <input
              name="content"
              id="content"
              placeholder="Напишите о чём вы думаете"
              required
              value={content}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="AddCard_footer">
          <Button color="primary" type="submit">Опубликовать</Button>
        </div>
      </form>
    </div>
  );
}
