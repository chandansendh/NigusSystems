import React from 'react';

const About=()=>{
    return (
      <>
        <div className="about">
          <div className="about-container">
            <h1>About Us</h1>
            <p>
              At Nigus Systems, we are passionate about leveraging cutting-edge
              technologies to create innovative solutions that drive business
              success. With a focus on excellence and customer satisfaction, our
              team of experts is dedicated to delivering high-quality products
              and services tailored to meet your specific needs. Partner with us
              and experience the difference of reliable, scalable, and
              future-ready solutions.
            </p>
            <div className="about-body">
              <div className="about-body-card">
                <img src="/images/customer.png" alt="costomer" />
                <h2>Customer-Centric Solutions</h2>
                <p>
                  Experience an intuitive and user-friendly interface tailored
                  to meet the needs of your team. Our software prioritizes a
                  seamless user experience, reducing learning curves and
                  optimizing productivity.
                </p>
              </div>
              <div className="about-body-card">
                <img src="/images/scalability.png" alt="scalability" />
                <h2>Scalability and Flexibility</h2>
                <p>
                  Grow your business without constraints. Our software solutions
                  offer scalability and flexibility, accommodating the evolving
                  demands of your organization. Scale up effortlessly as your
                  requirements change.
                </p>
              </div>
              <div className="about-body-card">
                <img src="/images/innovative.png" alt="innovative" />
                <h2>Innovative Technology</h2>
                <p>
                  Embrace cutting-edge technology with our software solutions,
                  ensuring your business stays ahead in an ever-evolving digital
                  landscape. Benefit from features designed to enhance
                  efficiency and adaptability.
                </p>
              </div>
              <div className="about-body-card">
                <img src="/images/support.png" alt="support" />
                <h2>Support and Training</h2>
                <p>
                  Benefit from a dedicated support team committed to your
                  success. Our software solutions come with personalized
                  training options and ongoing support, empowering your team to
                  maximize the full potential of our tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default About;