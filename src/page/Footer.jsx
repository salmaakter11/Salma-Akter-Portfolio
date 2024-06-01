import React from 'react'

const componentName = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-info">
            <div className="footer-avatar">
              <img src="assets/img/salma-logo.jpg" title="" alt="" />
            </div>
            <h6>Salma Akter</h6>
          </div>
          <ul className="nav social-link">
            <li>
              <a href="https://www.facebook.com/Salma.com.37">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </li>
          </ul>
          <p className="copyright">© 2024 copyright all right reserved designed & Developed by Salma</p>
        </div>
      </footer>
    </>
  )
}

export default componentName
