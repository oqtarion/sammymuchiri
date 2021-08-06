import React from "react"
import cv from "../files/CV-2021.pdf"
//Who i am

// Profile

// Download CV
// Education
// Experience

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-banner">
        <svg width="320" height="433" viewBox="0 0 320 433">
          <g id="man" transform="translate(-126.313 -124.665)">
            <g id="right-leg" transform="translate(247.126 308.402)">
              <path
                id="Leg"
                d="M0,0,77.423,129.562,135.468,239.1h12.5L50.715,0Z"
                transform="translate(12.874)"
                fill="#6f221b"
              />
              <path
                id="shoe"
                d="M4.661,5.235A2.084,2.084,0,0,0,1.988,6.641L0,13.654a67.062,67.062,0,0,0,.939,8.233H59.707S62,14.307,57.062,13.7s-8.2-1.091-8.2-1.091L21.547.423A1.042,1.042,0,0,0,20.16.978L18.4,5.241s-4.569,2.134-7.425,2.134Z"
                transform="translate(138.949 227.376)"
                fill="#fb4d3d"
              />
              <path
                id="Pant"
                d="M132.222,221.556l24.111-7.3S140.487,166.841,117.491,109.9,68.1,0,68.1,0H0S29.349,66.99,62.227,121.738A930.28,930.28,0,0,0,132.222,221.556Z"
                fill="#7d3b84"
              />
            </g>
            <g id="left-leg" transform="translate(126.313 308.402)">
              <path
                id="Leg-2"
                data-name="Leg"
                d="M118.5,0C111.19,45.529,97.1,103.7,95.766,105.492q-1.33,1.8-95.766,32.121l2.7,11.035q112.614-16.264,118.676-25.236C127.439,114.44,157.707,43.557,169.431,0Z"
                transform="translate(10.555)"
                fill="#6f221b"
              />
              <path
                id="shoe-2"
                data-name="shoe"
                d="M4.474,4.7A2,2,0,0,0,1.908,6.049L0,12.774a64.242,64.242,0,0,0,.9,7.894H57.3s2.2-7.268-2.538-7.848-7.87-1.047-7.87-1.047L20.68.087a1,1,0,0,0-1.332.532L17.663,4.707s-4.385,2.046-7.127,2.046Z"
                transform="matrix(0.174, 0.985, -0.985, 0.174, 20.354, 130.007)"
                fill="#fb4d3d"
              />
              <path
                id="Pant-2"
                data-name="Pant"
                d="M0,128.074l4.757,17.773q84.229,7.395,103.218-10.686T151.259,0H86.324Q70.931,95.874,69.113,99.9T0,128.074Z"
                transform="translate(32.685)"
                fill="#590361"
              />
            </g>
            <g id="head" transform="translate(265.423 124.665)">
              <path
                id="Head-2"
                data-name="Head"
                d="M0,76.135,8.609,35.971C3.808,30.33.558,23.416,1.1,15.67,2.666-6.649,33.706-1.739,39.743,9.526s5.321,39.839-2.482,41.853c-3.112.8-9.742-1.164-16.489-5.235l4.235,29.991Z"
                transform="matrix(0.998, 0.07, -0.07, 0.998, 20.653, 17.882)"
                fill="#6f221b"
              />
              <path
                id="hair"
                d="M7.912,24.928A7.825,7.825,0,0,1,6.282,21.9a30.674,30.674,0,0,1-1.043-3.442c-.525-2.346-.53-5.044,1.142-6.865a7.861,7.861,0,0,1,5.209-2.258,9.564,9.564,0,0,1,3.693.469c1.177.387,2.191,1.159,3.331,1.637a14.931,14.931,0,0,1,1.757-7.332A7.3,7.3,0,0,1,25.81.557a10.773,10.773,0,0,1,6.624,1.335c.515.279,1.025.571,1.513.9a4.241,4.241,0,0,0,1.314.723c.535.126.8-.183,1.147-.574a8.722,8.722,0,0,1,1.352-1.219A7.961,7.961,0,0,1,45.216.441a6.928,6.928,0,0,1,3.04,2.2c.693.911,1.188,2.355,2.145,2.989.406.269.693-.087,1.063-.351.555-.4,1.085-.833,1.647-1.219A7.542,7.542,0,0,1,55.672,2.9c1.34-.31,3.193-.238,3.576,1.52a7.26,7.26,0,0,1-.013,2.031c-.064.913-.13,1.826-.21,2.738a19.786,19.786,0,0,1-.267,2.041,2.989,2.989,0,0,0-.132,1.4c.194.454,1.089.2,1.472.212a5.812,5.812,0,0,1,2.213.487,2.382,2.382,0,0,1,1.339,1.24,2.23,2.23,0,0,1,.037,1.166,3.482,3.482,0,0,0,.071,1.2c1.015-.5,4.532-1.612,4.974.209a2.85,2.85,0,0,1-.444,1.8,15.623,15.623,0,0,1-1.639,2.5,22.32,22.32,0,0,1-4.366,4.239,2.865,2.865,0,0,1,.747,4.8,3.542,3.542,0,0,1-2.6.756,5.751,5.751,0,0,0-1.076-.085,2.572,2.572,0,0,1-.488.164,14.5,14.5,0,0,1-3.993-.507,13.162,13.162,0,0,1-6.09-3.188,1.877,1.877,0,0,0-1.409-.647c-.524.005-1.038.149-1.561.162a11.236,11.236,0,0,1-3.918-1.093,14.81,14.81,0,0,1-1.284,5.217c-.579,1.275-1.789,1.461-2.978,1.573-3.8.358-7.617-.042-11.423-.036,3.685.834,7.492,1.177,11.144,2.158,1.651.443.39,1.557-.316,2.329a13.425,13.425,0,0,0-2.626,4.506c-1.8-2.352-4.988-3.9-7.811-3.179-3.119.8-5.315,5.02-3.321,8.055,1.158,1.762,3.249,2.442,4.988,3.2-1.357,1.412-1.685,3.5-2.5,5.256A3.76,3.76,0,0,1,23.9,57.264a2.185,2.185,0,0,0-.987.393c-.326.337-.4.713-.819,1a4.617,4.617,0,0,1-5.725-.441c-1.331-1.363-.984-3.521.127-4.9-1.769-.738-4.992-1.687-4.289-4.446-3.833-.255-13.14-6.478-8-11.025-2.823-1.6-5.417-5.5-3.6-8.942,1.4-2.65,4.644-3.834,7.309-3.975"
                transform="matrix(0.998, 0.07, -0.07, 0.998, 4.147, 0)"
                fill="#fb4d3d"
              />
            </g>
            <g id="right-arm" transform="translate(277.211 201.095)">
              <path
                id="Arm"
                d="M8.289,0,40.2,26.135A89.416,89.416,0,0,1,62.288,36.393c1.359,1.376,2.945,4.1-2.948,3.336s-12.126-1.305-13.048.672,2.532,4.581.739,7.22Q45.237,50.26,32.153,33.135L0,17.77Z"
                transform="translate(67.579 96.693) rotate(7)"
                fill="#6f221b"
              />
              <path
                id="Back_Arm"
                data-name="Back Arm"
                d="M3.839,59.531C-1.232,49.775.484,16.632,0,4.574L11.143,0C26.677,32.14,47.7,62.975,78.929,89.314A35.692,35.692,0,0,1,92.844,91.4a4.695,4.695,0,0,1,.05,8.878q1.43,1.044,2.888,2.079L87.4,119.488C52.114,101.879,18.951,88.6,3.839,59.531Z"
                transform="matrix(0.985, 0.174, -0.174, 0.985, 20.749, 0)"
                fill="#fb4d3d"
              />
            </g>
            <g id="left-arm" transform="translate(138.153 180.409)">
              <path
                id="Arm-2"
                data-name="Arm"
                d="M56.915,0S30.254,59.054,25.979,64.484c-2.09,2.654-14.809,9.364-23.4,12.915C-.87,78.824-.186,81.733.8,82.677c8.034,7.678,15.556,2.22,24.351.2,9.635-2.218,6.446,9.154,14.058,7.52C38.093,85.15,34.995,75.179,38.6,69.83,41,66.265,75.137,3.964,75.137,3.964Z"
                transform="translate(12.603 74.592) rotate(8)"
                fill="#6f221b"
              />
              <path
                id="Shirt"
                d="M-.016,116.769s49.064,5.384,77.239-.011c2.327-.446,2.226-10.479,1.148-13.219C61.571,60.869,50.52,29.632,50.524-.007,45.9,2.41,34.335.72,34.335.72,13.611,31.267,4.082,66.314-.016,116.769Z"
                transform="matrix(0.985, 0.174, -0.174, 0.985, 121.582, 13.648)"
                fill="#ffb6ad"
              />
              <path
                id="Coat_Front"
                data-name="Coat Front"
                d="M63.3,123.935a4.5,4.5,0,0,1-1.416-4.122l.611-3.463a4.5,4.5,0,0,1,4.039-3.7q.518-2.323.89-4.616c1.971-12.212-1.06-24.2-1.311-35.986-13.955,12.444-30.847,34.14-45.1,71.747L1.337,138Q2.465,133.8,3.7,129.738c-2.278-1.256-4.964-7.223-3.045-8.218a22.984,22.984,0,0,1,6.445-2.2C36.056,36.487,95.44,0,95.44,0h11.85c-3.489,46.183,44.7,147.008,27.967,233.117-13.1,2.927-28.567.758-45.314-1.412-22.8-2.954-47.968-5.907-72.746,4C18.8,201.052,50.787,160.349,63.3,123.935Z"
                transform="matrix(0.985, 0.174, -0.174, 0.985, 53.718, 0)"
                fill="#fb4d3d"
              />
              <path
                id="Buttons"
                d="M6.252,52.148a4.168,4.168,0,1,1,4.167,4.171A4.17,4.17,0,0,1,6.252,52.148ZM5.21,28.16a4.167,4.167,0,1,1,4.167,4.171A4.169,4.169,0,0,1,5.21,28.16ZM0,4.171A4.168,4.168,0,1,1,4.167,8.344,4.17,4.17,0,0,1,0,4.171Z"
                transform="matrix(0.985, 0.174, -0.174, 0.985, 144.833, 105.025)"
                fill="#6f221b"
              />
              <path
                id="Shade_Lapel"
                data-name="Shade Lapel"
                d="M9.609,0,4.233,16.547l10.825,12.4L5.275,38.7,28.944,79.264,0,38.78l9.609-9.829L0,17.989Z"
                transform="matrix(0.985, 0.174, -0.174, 0.985, 142.301, 16.679)"
                fill="#6f221b"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="about-inner">
        <div className="about-content">
          <h1 className="about-title">about me</h1>
          <mp className="about-message">
            I am a developer with a designers eye & a designer with a developers
            mind, passionate about crafting products with strong visual
            identity. <br /> I strive to create simple, target
            audience-oriented, & scalable digital experiences to helps digital
            brands & companies move to the next level while increasing user
            engagement
          </mp>
        </div>
        <div className="about-cta">
          <a href={cv} target="_blank" rel="noreferrer" className="cta-text">
            Download CV
          </a>
          <svg className="cta-icon" width="50" height="50" viewBox="0 0 50 50">
            <path
              id="download"
              d="M9.125,47.737h43.75A2.91,2.91,0,0,1,56,50.368,2.91,2.91,0,0,1,52.875,53H9.125A2.91,2.91,0,0,1,6,50.368,2.91,2.91,0,0,1,9.125,47.737Zm25-15.33,10.133-8.532L48.677,27.6,31,42.484,13.321,27.6l4.419-3.721,10.135,8.533V3h6.25V32.409Z"
              transform="translate(-6 -3)"
              fill="#ff0054"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
