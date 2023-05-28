import "./blogPost.scss";

const BlogPost = ({ post }) => {
  const { title, author, date, image, content } = post;
  return (
    <div className="blogPost">
      <div className="blogPost-header">
        <h2>{title}</h2>
        <div className="blogPost-by">
          <img
            className="blogPost-by__avatar"
            src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Avatar"
          />
          <span className="blogPost-by__name">{author}</span>
          <span className="blogPost-by__timestamp">{date}</span>
        </div>
      </div>
      <div className="blogimage">
        <img src={image} alt={title} />
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default BlogPost;
