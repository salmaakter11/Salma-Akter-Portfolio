import React from 'react'

const Contact = () => {
  return (
    <>
       {/* contactus */}
       <section
          id="contactus"
          data-scroll-index={4}
          className="section contactus-section gray-bg-1"
        >
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5 d-flex">
                <div className="d-flex flex-column w-100">
                  <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="bi-chat-left-dots-fill" />
                        </div>
                        <div className="text">
                          <label>Mail</label>
                          <p>
                            <span>
                              <a
                                className="text-reset"
                                href="mailto:salmajahanerin@gmail.com"
                              >
                                salmajahanerin@gmail.com
                              </a>
                            </span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="bi-compass" />
                        </div>
                        <div className="text">
                          <label>Visit us</label>
                          <p>
                            <span>
                              West Agargaon <br /> Dhaka-1216, Bangladesh
                            </span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="bi-phone" />
                        </div>
                        <div className="text">
                          <label>Call us</label>
                          <p>
                            <span>+01 820042842</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="google-map mt-5">
                      <div className="ratio ratio-21x9">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.064337497934!2d90.36679287605887!3d23.7807231876101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b6aca8ea77%3A0x5f47e686aa8dff67!2zVyBBZ2FyZ2Fvbiwg4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1717237919462!5m2!1sbn!2sbd"
                          allowFullScreen=""
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ps-xl-5">
                <div className="contact-form">
                  <div className="contact-head">
                    <h4>Contact Us</h4>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row gx-3 gy-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">First name</label>
                          <input
                            name="Name"
                            id="name"
                            placeholder="Name *"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Your Email</label>
                          <input
                            name="Email"
                            id="email"
                            placeholder="Email *"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Subject</label>
                          <input
                            name="Subject"
                            id="subject"
                            placeholder="Subject *"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label">Your message</label>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your message *"
                            rows={4}
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="send">
                          <button
                            className="px-btn w-100"
                            type="button"
                            value="Send"
                          >
                            {" "}
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End contactus */}
    </>
  )
}

export default Contact
