import { useState } from "react";
import "./Blog.css";

const BlogPost = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    photo: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [post, setPost] = useState([]);

  const handlePostAdd = (e) => {
    e.preventDefault();
    setPost((prevState) => {
      return [{ input }, ...prevState];
    });
  };
  return (
    <div>
      {/* header area start here  */}
      <div className="header">
        <div className="container">
          <div className="header-content-area">
            <div className="header-content d-flex justify-content-center">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 py-2">
                  <ul className="d-flex justify-content-center gap-4">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header area start end  */}

      {/* form section start */}
      <div className="post-create-area m-auto d-flex justify-content-center ">
        <form action="" className="">
          <input
            name="title"
            type="text"
            placeholder="Titile"
            onChange={handleInputChange}
            value={input.title}
          />
          <input
            name="description"
            type="text"
            placeholder="description"
            onChange={handleInputChange}
            value={input.description}
          />
          <input
            name="photo"
            type="text"
            placeholder="photo link"
            onChange={handleInputChange}
            value={input.photo}
          />
          <button onClick={handlePostAdd} className="btn  btn-primary">
            Create Post
          </button>
        </form>
      </div>
      {/* form section end */}

      {/* post section start  */}

      {post.length > 0 ? (
        post.map((item, index) => {
          return (
            <div key={index}>
              {
                <div className="post-area ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="post-contetn">
                          <div className="post-title">
                            <h2>{post.title}</h2>
                          </div>
                          <div className="post-photo">
                            <img src={input.photo} alt="post image" />
                          </div>
                          <div className="post-description">
                            <p>{input.description}</p>
                          </div>

                          {/* post section end  */}

                          <div />
                        </div>
                      </div>
                      <div className=" d-flex col-md-3 justify-content-center">
                        <div className="sidbar">
                          <h2> This is sitebar section</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          );
        })
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default BlogPost;
