import React from "react";

// What I do

export default function Services() {
  return (
    <div>
      <div className="services">
        <div className="services-left">
          <h1 className="services-header">What I do</h1>
          <p className="services-text">Here's what I'm most passionate about</p>
        </div>
        <div className="services-right">
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="createfolder"
                  d="M30.648,30.625H28.46v2.188A2.16,2.16,0,0,1,26.272,35H21.9a2.129,2.129,0,0,1-1.538-.633,2.087,2.087,0,0,1-.649-1.555V30.625H4.4A4.218,4.218,0,0,1,1.3,29.343,4.206,4.206,0,0,1,.024,26.25V8.75A2.1,2.1,0,0,1,.673,7.212a2.1,2.1,0,0,1,1.538-.649H18.617l1.573-2.871a3.129,3.129,0,0,1,1.026-1.026,2.573,2.573,0,0,1,1.435-.479h8.2a2.954,2.954,0,0,1,1.538.427,2.113,2.113,0,0,1,.957,1.076,8.378,8.378,0,0,1,1.675,2.871V26.249a4.376,4.376,0,0,1-4.375,4.375Zm0-8.75H26.272V17.5a2.217,2.217,0,0,0-2.2-2.187,2.064,2.064,0,0,0-1.538.649A2.134,2.134,0,0,0,21.9,17.5v4.375H17.523a2.086,2.086,0,0,0-1.555.649,2.149,2.149,0,0,0-.633,1.555,2.091,2.091,0,0,0,.633,1.538,2.119,2.119,0,0,0,1.555.633H21.9v4.375a2.16,2.16,0,0,0,2.17,2.188,2.152,2.152,0,0,0,1.555-.633,2.082,2.082,0,0,0,.649-1.555V26.25h4.375a2.129,2.129,0,0,0,1.538-.633,2.066,2.066,0,0,0,.649-1.538,2.124,2.124,0,0,0-.649-1.555,2.1,2.1,0,0,0-1.538-.649ZM1.6,1.5A2.113,2.113,0,0,1,2.552.427,2.9,2.9,0,0,1,4.056,0h8.2A2.954,2.954,0,0,1,13.8.427,2.3,2.3,0,0,1,14.787,1.5l1.641,2.871H.022Z"
                  transform="translate(-0.022)"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Digital Design</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Design for both print and online implementation complemented
                with animations
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">Adobe</p>
              <p className="tags">Blender</p>
              <p className="tags">Figma</p>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="terminalalt"
                  d="M30.639,35H4.389A4.218,4.218,0,0,1,1.3,33.717,4.207,4.207,0,0,1,.015,30.624V4.375A4.218,4.218,0,0,1,1.3,1.282,4.21,4.21,0,0,1,4.39,0H30.64a4.218,4.218,0,0,1,3.094,1.282,4.21,4.21,0,0,1,1.282,3.094v26.25A4.376,4.376,0,0,1,30.64,35ZM16.762,15.79,10.37,9.365a2.108,2.108,0,0,0-1.589-.683,2.276,2.276,0,0,0-2.273,2.273,2.108,2.108,0,0,0,.683,1.589l4.819,4.887L7.191,22.284a2.217,2.217,0,0,0-.683,1.623A2.133,2.133,0,0,0,7.174,25.5a2.22,2.22,0,0,0,1.607.649A2.161,2.161,0,0,0,10.37,25.5l6.392-6.426a2.013,2.013,0,0,0,.649-1.435,2.206,2.206,0,0,0-.479-1.5q.068-.1-.171-.342Zm9.5,6.05H19.7a2.2,2.2,0,0,0,0,4.408h6.562a2.087,2.087,0,0,0,1.555-.649,2.228,2.228,0,0,0,0-3.11A2.087,2.087,0,0,0,26.264,21.84Z"
                  transform="translate(-0.015)"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Web Development</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Creating functional user interfaces and website experiences that
                look good and easy to implement.
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">HTML</p>
              <p className="tags">CSS</p>
              <p className="tags">JS</p>
              <p className="tags">React</p>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="draft"
                  d="M32.842,35H2.218a2.087,2.087,0,0,1-1.555-.649A2.13,2.13,0,0,1,.03,32.812v-8.75a2.114,2.114,0,0,1,.633-1.555,2.114,2.114,0,0,1,1.555-.633H6.593a3.114,3.114,0,0,1,1.316.291,1.686,1.686,0,0,1,.872.8L9.926,26.4l1.042,3.128a1.452,1.452,0,0,0,.82.889,4.54,4.54,0,0,0,1.538.205h8.51a4.089,4.089,0,0,0,1.487-.205,1.486,1.486,0,0,0,.769-.889q1.743-5.264,2.188-6.562.445-1.094,2.188-1.094h4.375a2.129,2.129,0,0,1,1.538.633,2.087,2.087,0,0,1,.649,1.555v8.75a2.129,2.129,0,0,1-.633,1.538A2.087,2.087,0,0,1,32.842,35ZM22.452,26.694a2.77,2.77,0,0,1-1.11,1.23,3.1,3.1,0,0,1-1.692.513H15.513a3.178,3.178,0,0,1-1.709-.513,2.754,2.754,0,0,1-1.128-1.23l-2.427-7.007H2.217V2.188A2.114,2.114,0,0,1,2.849.633,2.114,2.114,0,0,1,4.4,0h26.25A2.114,2.114,0,0,1,32.21.633a2.114,2.114,0,0,1,.633,1.555v17.5H24.81ZM7.686,15.312h4.375a1.094,1.094,0,0,0,0-2.188H7.686a1.094,1.094,0,0,0,0,2.188Zm8.75-8.75H7.686a1.087,1.087,0,0,0-.769,1.863,1.053,1.053,0,0,0,.769.325h8.75A1.087,1.087,0,0,0,17.2,6.887a1.053,1.053,0,0,0-.769-.325Zm10.937,0H20.811a1.087,1.087,0,0,0-.769,1.863,1.053,1.053,0,0,0,.769.325h6.562a1.087,1.087,0,0,0,.769-1.863,1.053,1.053,0,0,0-.769-.325Zm1.094,7.656a1.11,1.11,0,0,0-1.094-1.094H16.436a1.094,1.094,0,0,0,0,2.188H27.373a1.11,1.11,0,0,0,1.094-1.094Z"
                  transform="translate(-0.03)"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Content Strategy</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Coming up with sensible tailored copy, and content for use
                online and print media from captions to blogs.
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">Microsoft</p>
              <p className="tags">Adobe</p>
              <p className="tags">Google</p>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="domain"
                  d="M29.326,26.556a29.635,29.635,0,0,0,1.333-6.8H35a18.387,18.387,0,0,1-2.256,6.8Zm0-18.113h3.418A18.387,18.387,0,0,1,35,15.239H30.659A29.621,29.621,0,0,0,29.326,8.443ZM25.635,1.472a18.2,18.2,0,0,1,3.486,2.453H27.344a17.467,17.467,0,0,0-1.709-2.453ZM19.722,15.24v-6.8h5.4a30.64,30.64,0,0,1,1.128,6.8H19.722Zm0-15.24A9.191,9.191,0,0,1,23.31,3.924H19.722ZM9.878,26.556a30.639,30.639,0,0,1-1.128-6.8h6.528v6.8Zm0-18.113h5.4v6.8H8.75A30.64,30.64,0,0,1,9.878,8.443ZM15.278,0V3.924H11.689A9.2,9.2,0,0,1,15.278,0Zm-9.4,3.924A18.2,18.2,0,0,1,9.365,1.472,17.467,17.467,0,0,0,7.656,3.924H5.879ZM0,15.24a18.387,18.387,0,0,1,2.256-6.8H5.674a29.635,29.635,0,0,0-1.333,6.8H0ZM5.674,26.556H2.256A18.387,18.387,0,0,1,0,19.76H4.341a29.621,29.621,0,0,0,1.333,6.8Zm1.982,4.519a17.467,17.467,0,0,0,1.709,2.453,18.2,18.2,0,0,1-3.486-2.453H7.656Zm7.622,0V35a9.473,9.473,0,0,1-3.588-3.924ZM19.722,19.76H26.25a30.64,30.64,0,0,1-1.128,6.8h-5.4ZM23.31,31.076A9.473,9.473,0,0,1,19.722,35V31.077H23.31Zm5.811,0a16.889,16.889,0,0,1-3.486,2.453,17.467,17.467,0,0,0,1.709-2.453h1.777Z"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Search Engine Optimization</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Configuration of websites to take advantage of the search
                engines for maximum reach.
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">Google Tags</p>
              <p className="tags">Keywords</p>
              <p className="tags">Keyword phrases</p>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="forumsalt"
                  d="M31.747,28.439H30.654V35l-6.562-6.562H9.872a3.135,3.135,0,0,1-2.8-1.573l4.991-4.991H25.185a5.486,5.486,0,0,0,5.469-5.47V8.75h1.094a3.266,3.266,0,0,1,3.281,3.281V25.157a3.266,3.266,0,0,1-3.281,3.281Zm-6.562-8.75H10.966L4.4,26.251V19.688H3.31a3.164,3.164,0,0,1-2.324-.957,3.164,3.164,0,0,1-.957-2.324V3.282A3.164,3.164,0,0,1,.986.958,3.164,3.164,0,0,1,3.31,0H25.185a3.164,3.164,0,0,1,2.324.957,3.164,3.164,0,0,1,.957,2.324V16.408a3.266,3.266,0,0,1-3.281,3.281Z"
                  transform="translate(-0.029 -0.001)"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Digital Media Marketing</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Efficient management of social media accounts using the latest
                technologies like Hootsuite.
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">Facebook</p>
              <p className="tags">Instagram</p>
              <p className="tags">YouTube</p>
              <p className="tags">Twitter</p>
            </div>
          </article>
          <article className="card">
            <header className="card-header">
              <svg
                className="card-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
              >
                <path
                  id="statistics"
                  d="M30.639,35H4.389A4.218,4.218,0,0,1,1.3,33.717,4.207,4.207,0,0,1,.015,30.624V4.375A4.218,4.218,0,0,1,1.3,1.282,4.21,4.21,0,0,1,4.39,0H30.64a4.218,4.218,0,0,1,3.094,1.282,4.21,4.21,0,0,1,1.282,3.094v26.25A4.376,4.376,0,0,1,30.64,35ZM10.952,25.156a1.11,1.11,0,0,0-1.094-1.094H7.671a1.11,1.11,0,0,0-1.094,1.094v4.375a1.11,1.11,0,0,0,1.094,1.094H9.858a1.11,1.11,0,0,0,1.094-1.094Zm8.75-8.75a1.11,1.11,0,0,0-1.094-1.094H16.42a1.11,1.11,0,0,0-1.094,1.094V29.531a1.11,1.11,0,0,0,1.094,1.094h2.188A1.11,1.11,0,0,0,19.7,29.531V16.406Zm8.75-10.937a1.11,1.11,0,0,0-1.094-1.094H25.17a1.11,1.11,0,0,0-1.094,1.094V29.531a1.11,1.11,0,0,0,1.094,1.094h2.188a1.11,1.11,0,0,0,1.094-1.094V5.469Z"
                  transform="translate(-0.015)"
                  fill="#ff0054"
                />
              </svg>
              <h2 className="card-title">Analytics & Insights</h2>
            </header>
            <div className="card-content">
              <p className="card-text">
                Integration of analytics helps analyze online traffic to measure
                and optimize user engagement.
              </p>
            </div>
            <div className="card-tags">
              <p className="tags">Google Analytics</p>
              <p className="tags">Facebook Insights</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
