import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5" style={{ textAlign: 'center' }}>
      <h1>Welcome All!</h1>
      <h4 style={{ marginTop: '30px' }}>
        This is a simple Web Application designed to generate details of people
        automatically including their Profile Picture, Full name & Last name,
        City, Email and Birthday
      </h4>

      <h4 style={{ marginTop: '30px', color: 'red' }}>
        Don't Wait! Let's Generate Names
      </h4>
      <Link
        to="/namelist"
        class="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        style={{ marginTop: '20px' }}
      >
        TRY IT NOW
      </Link>
    </div>
  );
}

export default Home;
