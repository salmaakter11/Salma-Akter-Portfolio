import React from 'react'

const Thesis = () => {
  return (
    <>
       <section
          id="portfolio"
          data-scroll-index={3}
          className="section portfolio-section gray-bg-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-sm-12">
              <div className="section-heading">
              <h3>
                <span>Thesis : </span>
              </h3>
            </div>
                <p>A CNN model for diagnosing brain tumors from MRI images based on an ablation study (Published ) . <a href="https://thesai.org/Publications/ViewPaper?Volume=13&Issue=12&Code=IJACSA&SerialNo=70">paper link</a> </p>
                <p>paddy leaf disease detection using machine learning with image processing (submitted )</p>
                <p>Lung and Colon Cancer Classification Using Medical Imaging: With Best Image Pre-processing (Continue).</p>
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
                      <div className="col-sm-6 col-lg-4 grid-item">
                        <div className="portfolio-box">
                          <div className="portfolio-img">
                            <img src="assets/img/Achievement1.jpg" title="" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4 grid-item">
                        <div className="portfolio-box">
                          <div className="portfolio-img">
                            <img src="assets/img/Achievement2.JPG" title="" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4 grid-item">
                        <div className="portfolio-box">
                          <div className="portfolio-img">
                            <img src="assets/img/Achievement3.jpg" title="" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4 grid-item">
                        <div className="portfolio-box">
                          <div className="portfolio-img">
                            <img src="assets/img/Achievement5.jpg" title="" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4 grid-item">
                        <div className="portfolio-box">
                          <div className="portfolio-img">
                            <img src="assets/img/Achievement4.JPG" title="" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Thesis
