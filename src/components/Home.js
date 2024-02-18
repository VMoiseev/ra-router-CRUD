import axios from "axios";
import { Children, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Card from "./UI/Card";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:7777/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, []);

  const addPostClickHandle = (e) => {
    e.preventDefault();
    navigate("/newPost");
  }

  return (
    <div className="wrapper">
      <div className="postsControl">
        <Button color="primary" onClick={addPostClickHandle}>Создать пост</Button>
      </div>
      <div className="postsList">
        {loading && (
          <Oval
            color="#222222"
            width={50}
            heigth={50}
          />
        )}
        {posts.map((post) => (
          <Card key={post.id} info={post}>
            {Children}
          </Card>
        ))}
      </div>
    </div>
  );
}
