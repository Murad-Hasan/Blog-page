import React from 'react';
import BlogImageThree from '../../Assest/Rectangle 975.svg'

const BlogPageTwoSectionThree = ({BlogHeading,importanceCalorieScale, useCalorieScale, FeaturesOfCalorieScale, importanceCalorieScaleList}) => {
    return (
        <>
            <section className='container'>
            <div className="imageSection">
          <div className="image">
            <img
              className="img-fluid"
              width="100%"
              height="auto"
              src={BlogImageThree}
              alt=""
            />
          </div>
        </div>
        <div className="Blog_three_contentSection">
            <div className="heading">
                <h2 className='pt-3'>{BlogHeading.blogHeadingFive}</h2>
                <p className='fw-bold py-2'>Don't worry, KOWI got you all covered</p>
                <p className='fw-bold py-2'>{BlogHeading.blogHeadingSix}</p>
                <p><span>It is quite vital to know about your overall progress in the weight reduction process. To have a clear idea about your daily goals and targets, KOWI introduces its own product, called CALORIE SCALE. As the name suggests, our product will measure the calories in your meal and would update the meal log in our KOWI application.</span></p>
            </div>
            <div className="importantOfCalorieScale">
                <h4>{BlogHeading.blogHeadingSeven}</h4>
                {importanceCalorieScale.map((item) => {
                    if (item.id % 2 === 0) {
                    return <p key={item.id}>{item.paragraph}</p>;
                    } else {
                    return <div key={item.id}>
                        <ul><li>{item.paragraph}</li></ul>
                    </div>
                    }
                })}
            </div>
            <div className="HowToUseCalorieScale">
                <div className="heading">
                    <h3>{BlogHeading.blogHeadingEight}</h3>
                </div>
                <div>
                        {
                            useCalorieScale.map((item) => {
                                return <p className='py-2' key={item.id}>{item.paragraph}</p>
                            })
                        }
                </div>
            </div>
                <div className="featuresOfCalorieScale">
                        <div className="heading">
                            <h3>{BlogHeading.blogHeadingNine}</h3>
                        </div>
                        <div>
                        {
                            FeaturesOfCalorieScale.map((item) => {
                                return <p className='py-2' key={item.id}>{item.paragraph}</p>
                            }
                            )}
                        </div>
                        <div>
                            <p>Some other characteristic features of calorie scale are:</p>
                            <div>
                                <ul>
                                    {
                                        importanceCalorieScaleList.map((item) => {
                                            return <li key={item.id}>{item.paragraph}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="addedAdvantages">
                    <div className="heading">
                        <h3 className='py-3'>{BlogHeading.blogHeadingTen}</h3>
                        <p>Another important feature that calorie scale has over other calorie measurement products is its affordable cost that is certainly what most people look for! Our customers would have absolutely no regrets and no complaints regarding calorie scale and as a matter of fact using this product would become their used-to habit which again would help them in monitoring their day-to-day calorie intake. And if this wasn’t enough, calorie scale has no disadvantages whatsoever and its so easy and effective to use that our customers don’t even need any prior knowledge about operating calorie measuring devices.All in all, calorie scale is a must buy product for fitness enthusiasts and even for people trying to remain active and healthy, in general.</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default BlogPageTwoSectionThree;