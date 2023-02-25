import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  //styles
  const div = {
    background:"https://i.imgur.com/hxqET60.jpg",
    textAlign: "center",
    border: "3px solid yellow",
    width: "50%",
    margin: "20px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div>
        <h2>Update this Suit</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="subject"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="details"
            defaultValue={post.details}
          />
          <button>Update Suit</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete Suit</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;