function App() {
  // empty tag is called fragment tag

  const title = "First blog";
  const body = "this is my first blog iam so excited";
  const showComments = true;
  const comments = [
    { id: 1, text: "HEy good" },
    { id: 2, text: "You are too good" },
    { id: 3, text: "where clever" },
  ];
  const commentBlock = (
    <div className="comments">
      <h3>Comments {comments.length}</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text} </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  );
}

export default App;
