import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-1">
            <a
              href="https://www.facebook.com/isuru.prabhath.7731"
              target="_blank"
              style={{ color: 'white' }}
            >
              <i className="fa fa-facebook-official fa-lg white-text mr-md-1 fa-2x mt-3 mb-3"></i>
            </a>
          </div>

          <div className="col-1">
            <a
              href="https://twitter.com/jmisuruprabhath"
              target="_blank"
              style={{ color: 'white' }}
            >
              <i className="fa fa-twitter fa-lg white-text mr-md-2  fa-2x btn-sm mt-3 mb-3"></i>
            </a>
          </div>

          <div className="col-1">
            <a
              href="https://www.linkedin.com/in/isuru-prabhath-28b4911b6/"
              target="_blank"
              style={{ color: 'white' }}
            >
              <i className="fa fa-linkedin fa-lg white-text fa-2x mt-3 mb-3"></i>
            </a>
          </div>

          <div className="col-1">
            <a
              href="https://github.com/jmisuruprabhath"
              target="_blank"
              style={{ color: 'white' }}
            >
              <i className="fa fa-github fa-lg white-text fa-2x"></i>
            </a>
          </div>

          <div className="col-8" style={{ fontSize: '15px' }}>
            © 2021 Copyright | Isuru Creations
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
