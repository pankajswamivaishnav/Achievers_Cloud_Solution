import React from "react";
import "./css/blogmiddle.css";
import Card from "./shared/Card";
import BlogCardData from "./temp_data/BlogCardData";
const BlogMiddle = () => {
  return (
    <section className="blog-middle-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {BlogCardData.slice(0, 6).map((data) => {
              return (
                <Card
                  key={data.id}
                  author={data.author}
                  imgsrc={data.imgsrc}
                  title={data.title}
                  text={data.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMiddle;
