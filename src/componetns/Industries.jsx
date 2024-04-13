import React from 'react';

const Industries=()=>{
    return (
      <>
        <div className="industrie">
          <div className="industre-container">
            <div className="industre-body">
              <h2>Industries</h2>
              <p>
                At Nigus Systems, we are dedicated to developing cutting-edge
                technology solutions that empower businesses across various
                industries. Our team of experts specializes in software
                development, digital platforms, and IT consulting services. We
                harness the power of artificial intelligence, cloud computing,
                and data analytics to create customized solutions that drive
                efficiency, productivity, and growth for our clients.
                </p>
                <p>
                We provide a range of software solutions, applications, and system
                integrations with business applications, offering numerous
                advantages as the software extracts insights from various
                applications.
              </p>
              <ol>
              <li>IT</li>
              <li>ITeS</li>
              <li>Manufacturing</li>
              <li>Retail</li>
              <li>Education</li>
              </ol>
            </div>
            <div className='industrie-img'><img src="/images/industries.png" alt="industries" /></div>
          </div>
        </div>
      </>
    );
}

export default Industries;
