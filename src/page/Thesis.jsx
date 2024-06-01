import React from 'react';

const thesisData = [
  {
    title: "A CNN model for diagnosing brain tumors from MRI images based on an ablation study",
    status: "Published",
    link: "https://thesai.org/Publications/ViewPaper?Volume=13&Issue=12&Code=IJACSA&SerialNo=70"
  },
  {
    title: "Paddy leaf disease detection using machine learning with image processing",
    status: "Submitted"
  },
  {
    title: "Lung and Colon Cancer Classification Using Medical Imaging: With Best Image Pre-processing",
    status: "Continue"
  }
];

const achievementsData = [
  "assets/img/Achievement1.jpg",
  "assets/img/Achievement2.JPG",
  "assets/img/Achievement3.jpg",
  "assets/img/Achievement5.jpg",
  "assets/img/Achievement4.JPG"
];

const Thesis = () => {
  return (
    <section
      id="portfolio"
      data-scroll-index={3}
      className="section portfolio-section gray-bg-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-12">
            <div className="section-heading">
              <h3>
                <span>Thesis : </span>
              </h3>
            </div>
            {thesisData.map((thesis, index) => (
              <p key={index}>
                {thesis.title} ({thesis.status}) {thesis.link && <a href={thesis.link}>paper link</a>}
              </p>
            ))}
          </div>
          <div className="col-xl-6 col-sm-12">
            <div className="section-heading">
              <h3>
                <span> Achievement: </span>
              </h3>
            </div>
            <div className="project">
              <div className="lightbox-gallery">
                <div className="row g-3 g-lg-4 portfolio-content">
                  {achievementsData.map((imgSrc, index) => (
                    <div key={index} className="col-sm-6 col-lg-4 grid-item">
                      <div className="portfolio-box">
                        <div className="portfolio-img">
                          <img src={imgSrc} title="" alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
