import React from 'react'

const About = () => {
  return (
    <>
      {/* About */}
      <section id="about" data-scroll-index={1} className="section about-section gray-bg-1"
        >
          <div className="container">
            <div className="about-me">
              <div className="row align-items-start">
                <div className="col-lg-6 pb-4 pb-lg-0">
                  <div className="title-01">
                    <span>About Me</span>
                  </div>
                  <div className="about-me-text pb-5">
                    <h3>My Name Is Salma Akter</h3>
                    <h5>
                      <span>I Am Available</span> For Frontend Developer Projects
                    </h5>
                    <p> An enthusiastic and detail-oriented Junior Frontend Developer
                      with proficient knowledge in HTML ,CSS ,Bootstrap ,tailwind
                      and Javascript as well as libraries such as, React. I always
                      love to explore and learn new things. I want to establish my
                      capability and will try to inspire others to explore their
                      ability and creativity.
                    </p>
                    <div className="row pt-2">
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">60</span>
                          <div className="a-count-text">
                            Projects <br />
                            Completed.
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">35</span>
                          <div className="a-count-text">
                            Satisfied <br />
                            Clients.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="title-01 mt-5">
                    <span>Experience</span>
                  </div>
                  <div className="resume-box">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2023 - Present</span>
                        <h5>IT Sheba Limited - Software Comapny</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="about-content pt-5">
                    <ul>
                      <li>
                        <div className="a-icon">
                          <i className="fab fa-whatsapp" />
                        </div>
                        <div className="a-text">
                          <a
                            className="text-reset stretched-link"
                            href="https://wa.me/qr/2F3BVARXRCR7B1"
                          >
                            WhatsApp Me
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="a-icon">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="a-text">
                          <a
                            className="text-reset stretched-link"
                            href="mailto:salmajahanerin@gmail.com"
                          >
                            Mail Me
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="a-icon">
                          <i className="fab fa-facebook" />
                        </div>
                        <div className="a-text">
                          <a className="text-reset stretched-link" href="https://www.facebook.com/Salma.com.37">
                            Facebook
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="a-icon">
                          <i className="fab fa-linkedin" ></i>
                        </div>
                        <div className="a-text">
                          <a
                            className="text-reset stretched-link"
                            href="salmaakter"
                          >
                            Linkedin
                          </a>
                        </div>
                      </li>
                      {/* <li>
                            <div className="a-icon">
                              <i className="fa-solid fa-file-pdf" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="#">
                                Resume
                              </a>
                            </div>
                          </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 sticky-lg-top ps-xl-5">
                  <div className="row align-items-start">
                    <div className="col-xl-6 py-4">
                      <div className="title-01">
                        <span> SKILLS</span>
                      </div>
                      <h6 className="pb-4 skill-heading">Programming Languages:</h6>
                      <div className="skills">
                        <div className="skill-lt">
                          <h6 className="dark-color">HTML</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100} >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">CSS</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={95}
                              aria-valuemin={0}
                              aria-valuemax={100} >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">SASS</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={92}
                              aria-valuemin={0}
                              aria-valuemax={100} >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">Tailwind CSS</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100} >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">JAVASCRIPT </h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100} >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">PHP</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}>
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <h6 className="  skill-heading">Database :</h6>
                        <div className="skill-lt">
                          <h6 className="dark-color">SQL, MySQL.</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}>
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <h6 className="  skill-heading">Frontend Frameworks:</h6>
                        <div className="skill-lt">
                          <h6 className="dark-color">Bootstrap</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}>
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color"> React JS </h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={95}
                              aria-valuemin={0}
                              aria-valuemax={100}>
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <h6 className="  skill-heading">Backend Frameworks  :</h6>
                        <div className="skill-lt">
                          <h6 className="dark-color">Node js (Learning )</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 py-4">
                      <div className="title-01">
                        <span>EXTRA SKILS</span>
                      </div>
                      <h6 className="pb-4  skill-heading">Programming Languages:</h6>
                      <div className="skills">
                        <div className="skill-lt">
                          <h6 className="dark-color">C,C++</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt">
                          <h6 className="dark-color">JAVA.</h6>
                          <div className="skill-bar">
                            <div
                              className="skill-bar-in"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <h6 className=" skill-heading">Deep learning :</h6>
                        <div className="skills">
                          <div className="skill-lt">
                            <h6 className="dark-color">ConvNet</h6>
                          </div>
                          <h6 className="  skill-heading">Familiar With:</h6>
                          <div className="skills">
                            <div className="skill-lt">
                              <h6 className="dark-color">problem-solving in the OJ</h6>
                            </div>
                            <div className="skill-lt">
                              <h6 className="dark-color">Data structure and   algorithm4</h6>
                            </div>
                          </div>
                          <h6 className="  skill-heading">Framework: </h6>
                          <div className="skills">
                            <div className="skill-lt">
                              <h6 className="dark-color">Google Colaboratory</h6>
                            </div>
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
        {/* End About */}
    </>
  )
}

export default About
