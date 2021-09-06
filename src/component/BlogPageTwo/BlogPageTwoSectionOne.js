import React from 'react';
import blogImageOne from '../../Assest/Rectangle 973.svg'
import './BlogPageTwoSectionOne.css'

const BlogPageTwoSectionOne = ({BlogHeading, BlogContent}) => {
    
    return (
        <>
           <section className='container '>
           <div className="imageSection">
                <div className="image">
                    <img className='img-fluid' width='100%' height='auto' src={blogImageOne} alt="" />
                    <div className="imageCaption">
                    <p className='imageCaptionFont'>By <span className='fw-bold'>Aryan Bhardwaj </span>I 01 August 2021</p>
                    </div>
                </div>
            </div>
            <div className="section_one_content">
                <div className="headingOne mb2">
                    <h2 className='blog_First_Heading'>{BlogHeading.blogHeadingOne}</h2>
                    <p>{BlogContent.paragraphOne}</p>
                    <p>{BlogContent.paragraphTwo}</p>
                </div>
                <div className="headingTwo mb2">
                    <h2 className='blog_Second_Heading fw-bold pt-3'>{BlogHeading.blogHeadingTwo}</h2>
                    <h5 className='py-4 fw-bold'>{BlogHeading.blogSubHeadingOne}</h5>
                    <p>{BlogContent.paragraphThree}</p>
                    <p>{BlogContent.paragraphFour}</p>
                    <h5 className='fw-bold'>{BlogHeading.blogSubHeadingTwo}</h5>
                    <p>{BlogContent.paragraphFive}</p>
                </div>
            </div>
           </section>
        </>
    );
};

export default BlogPageTwoSectionOne;