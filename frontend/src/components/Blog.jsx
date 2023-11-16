import React from "react";
import Card from "./shared/Card";
import BlogCardData from "./temp_data/BlogCardData";
import "./css/blog.css";
const Blog = () => {
  return (
    <section className="blog_sec">
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-3 mb-3 ">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <h5 className="blog-header">BLOG</h5>
              <h2 className="blog-header-title">Latest Blog</h2>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <a href="/blogs">
                <button
                  type="button"
                  className="costum-btn right-heading-div float-xl-end float-sm-start float-md-end"
                >
                  See All Posts&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            {BlogCardData.slice(0, 3).map((data) => {
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

export default Blog;
