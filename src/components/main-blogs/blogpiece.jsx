import React from 'react'; // Add this import statement
import './main-blogs.css' // This import statement is not necessary if you're not using the CSS file in this component

export default function BlogPiece(props) {
  // Add some basic prop validation and error handling
  if (!props || !props.Image || !props.title || !props.description || !props.category) {
    return <div>Error: Missing required props</div>;
  }

  return (
    <div className="blog">
      <div className="blog-image">
        <img src={props.Image} alt="" width="400px" height="350px" />
      </div>
      <div className="blog-about">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="blog-footer">
        <p>{props.category}</p>
      </div>
    </div>
  );
}