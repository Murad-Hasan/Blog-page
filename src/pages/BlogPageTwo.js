import React from "react";
import BlogPageTwoSectionOne from "../component/BlogPageTwo/BlogPageTwoSectionOne";
import BlogPageTwoSectionThree from "../component/BlogPageTwo/BlogPageTwoSectionThree";
import BlogPageTwoSectionTwo from "../component/BlogPageTwo/BlogPageTwoSectionTwo";
import {
  sectionTwoContent,
  BlogHeading,
  BlogContent,
  importanceCalorieScale,
  useCalorieScale,
  FeaturesOfCalorieScale,
  importanceCalorieScaleList
} from "./BlogPageTwoData";

const BlogPageTwo = () => {
  return (
    <>
      <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <BlogPageTwoSectionOne
          BlogHeading={BlogHeading}
          BlogContent={BlogContent}
        />
        <BlogPageTwoSectionTwo
          BlogHeading={BlogHeading}
          BlogContent={BlogContent}
          sectionTwoContent={sectionTwoContent}
        />
        <BlogPageTwoSectionThree
          importanceCalorieScale={importanceCalorieScale}
          useCalorieScale={useCalorieScale}
          BlogHeading={BlogHeading}
          FeaturesOfCalorieScale={FeaturesOfCalorieScale}
          importanceCalorieScaleList={importanceCalorieScaleList}
        />
      </section>
    </>
  );
};

export default BlogPageTwo;
