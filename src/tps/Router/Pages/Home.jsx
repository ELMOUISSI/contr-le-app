import React from 'react';


const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className='col'>
          <h1>Welcome to Social Media Management</h1>
          <p>Manage your social media accounts with ease.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className='col'>
          <img
            src='/images/img.jpg'
            alt="Social Media Management"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
