import React from "react";
import blogImageTwo from "../../Assest/Rectangle 974.svg";

const BlogPageTwoSectionTwo = ({
  BlogHeading,
  BlogContent,
  sectionTwoContent,
}) => {
  return (
    <>
      <section className="container">
        <div className="imageSection">
          <div className="image">
            <img
              className="img-fluid"
              width="100%"
              height="auto"
              src={blogImageTwo}
              alt=""
            />
          </div>
        </div>
        <div className="blog_section_two">
          <div className="blog_heading py-2">
            <h2>{BlogHeading.blogHeadingThree}</h2>
          </div>
          <div className="blog_content py-2">
            <h5 className='fw-bold'>Cutting down on calories</h5>
            <p>
              <span>{BlogContent.paragraphSix}</span>
            </p>
          </div>
          <div className="blog_content">
            <h5 className='fw-bold'>{BlogHeading.blogHeadingFour}</h5>
            <p>
              <span>
                Losing weight and cutting down on calories might seem a rather
                complex process but it’s actually fairly simple. All you need to
                do is change your fitness and eating habits and just do not give
                up! Some of these changes can literally have a massive impact on
                your body:
              </span>
              <ul>
                <li>
                  Giving up on high calorie oily foods and low nutritive items
                </li>
                <li>
                  Finding alternative options for high calorie food items and
                  using them effectively such that it becomes a habit.
                </li>
                <li>
                  One may recommend on slipping meals, but that doesn’t work
                  with everyone.
                </li>
              </ul>
            </p>
            {sectionTwoContent.map((item, index) => {
              return (
                <div className="blog_content" key={index}>
                  <p className='py-1'>
                    <span>{item.paragraph}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPageTwoSectionTwo;
