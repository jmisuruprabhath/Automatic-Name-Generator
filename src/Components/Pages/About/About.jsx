import React from 'react';
import avatar from './avatar.jpg';

function About() {
  return (
    <div className="container mt-5">
      <h2 style={{ marginBottom: '20px' }}>About Me</h2>
      <li
        className="list-group-item shadow-md"
        style={{ backgroundColor: '#f7f7f7', borderColor: '#3e4fff' }}
      >
        <div className="row align-items-center">
          <div className="col-2">
            <img
              src={avatar}
              height="150px"
              width="150px;"
              alt="Isuru"
              className="border border-dark rounded-circle shadow-md"
            />
          </div>
          <div className="col-10">
            <h4>Isuru Prabhath</h4>
            <p>Kurunegala | jmisuruprabhath@gmail.com</p>
            <small>Undergraduate at SLIIT | Data Science</small>
          </div>
        </div>
      </li>

      <p style={{ marginTop: '25px', fontSize: '20px', textAlign: 'justify' }}>
        I'm a second year undergraduate at Sri Lanka Institute of Information
        Technology. For the second-year second semester, we have to create a
        fully functional Web Application including CRUD operations, form
        validations, search operation, and reports generation. We have selected
        MERN Stack as the technology to develop the web application. The main
        purpose of creating this project is to learn fundamentals of React in
        deep & to learn usage of API in web applications. This simple project
        may be one of the huge turning point in my life since this is a
        completely new and challengable one. I hope to develop more advanced web
        applications in the future with the help of experience gained through
        this web application.
      </p>
    </div>
  );
}

export default About;
