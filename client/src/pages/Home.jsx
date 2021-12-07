import "../app.css";
import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  console.log(posts);
  return (
    <div className="home">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
