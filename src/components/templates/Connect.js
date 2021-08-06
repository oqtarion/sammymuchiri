import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import facebook from "../../images/social/facebook.svg"
import twitter from "../../images/social/twitter.svg"
import instagram from "../../images/social/instagram.svg"

// Lets work together

export default function Connect() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const pixar = useAnimation()
  const pixarA = useAnimation()

  useEffect(() => {
    if (inView) {
      pixar.start({
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
      })
    }
    if (!inView) {
      pixar.start({ opacity: 0 })
    }
  }, [inView, pixar])

  useEffect(() => {
    if (inView) {
      pixarA.start({
        opacity: 1,
        transition: { duration: 1 },
      })
    }
    if (!inView) {
      pixarA.start({ opacity: 0 })
    }
  }, [inView, pixarA])

  return (
    <div ref={ref} id="connect" className="connect">
      <motion.div animate={pixar} className="connect-banner">
        <svg width="308.813" height="368" viewBox="0 0 308.813 368">
          <g id="woman" transform="translate(-983 -335)">
            <g id="seat" transform="translate(980 571)">
              <ellipse
                id="Ballsy_Ball"
                data-name="Ballsy Ball"
                cx="77"
                cy="73.5"
                rx="77"
                ry="73.5"
                transform="translate(39 -15)"
                fill="#c7abca"
              />
            </g>
            <g id="right-leg">
              <path
                id="LegLower"
                d="M68.16,120.6C48.444,96.529,33.1,75.075,26.138,63.454,14.213,43.555,4.453,25.848,1.373,19.084-5.972,2.955,18.282-4.6,23.771,2.926,32.079,14.312,51.823,53.748,79,114.022Z"
                transform="matrix(0.966, 0.259, -0.259, 0.966, 1206.886, 557.523)"
                fill="#6f221b"
              />
              <path
                id="Leg_Back"
                data-name="Leg Back"
                d="M63.76,42.729a13,13,0,0,1-.172-3.313L0,7.047V0H7.562s92.277,23.513,94.307,30.137c.014.047.027.093.038.14q.047.062.093.125c12.191,16.767,19.493,98.624,21.89,104.753l-23.362,3.486C91.591,105.5,63,82.418,63.76,42.729Z"
                transform="translate(1128 529)"
                fill="#6b1f72"
              />
              <path
                id="shoe"
                d="M4.474,5.033A2,2,0,0,0,1.908,6.381L0,13.106A64.242,64.242,0,0,0,.9,21H57.3s2.2-7.268-2.538-7.848-7.87-1.047-7.87-1.047L20.68.419a1,1,0,0,0-1.332.532L17.663,5.039s-4.385,2.046-7.127,2.046Z"
                transform="translate(1234 680)"
                fill="#fb4d3d"
              />
            </g>
            <g id="left-leg">
              <path
                id="LegLower-2"
                data-name="LegLower"
                d="M1.8,104.667C.8,92.066-1.072,48.446.8,28.255c.538-5.8,1.1-11.411,1.675-16.674,1.7-15.641,30.7-15.147,28.4-.287-5.736,37.007-15.831,88.87-16.555,93.352C13.3,110.927,2.437,112.586,1.8,104.667Z"
                transform="translate(1192.454 570.336) rotate(73)"
                fill="#6f221b"
              />
              <path
                id="Leg_Front"
                data-name="Leg Front"
                d="M31.077,65.228l19.206-6.588c-5.817-1.164-11.176-2.2-15.76-3.008C4.909,50.438-3.726,34.586,1.38,0H55.942c8.913,2.561,55.232,21.985,79.265,32.316,15.906,6.838,10.892,31.488,1.884,37.9a.879.879,0,0,1-.5.781C103.268,84.811,74.732,84.14,56,83.47c-8.509-.3-15-.609-19,.443Z"
                transform="translate(1083 529)"
                fill="#590361"
              />
              <g
                id="Right_Shoe"
                data-name="Right Shoe"
                transform="matrix(0.438, 0.899, -0.899, 0.438, 1118.565, 586.151)"
              >
                <path
                  id="shoe-2"
                  data-name="shoe"
                  d="M4.474,5.033A2,2,0,0,0,1.908,6.381L0,13.106A64.242,64.242,0,0,0,.9,21H57.3s2.2-7.268-2.538-7.848-7.87-1.047-7.87-1.047L20.68.419a1,1,0,0,0-1.332.532L17.663,5.039s-4.385,2.046-7.127,2.046Z"
                  transform="translate(1 19)"
                  fill="#fb4d3d"
                />
              </g>
            </g>
            <g id="head" transform="translate(1052 342)">
              <path
                id="face"
                d="M0,73,8.262,34.49C3.655,29.081.536,22.452,1.057,15.025c1.5-21.4,31.292-16.692,37.086-5.891s5.107,38.2-2.382,40.129c-2.987.77-9.349-1.116-15.825-5.019L24,73Z"
                transform="translate(54 31)"
                fill="#6f221b"
              />
              <path
                id="hair"
                d="M147.464,34.685c-3.163-.519-11.68-.875-13.251-.875-1,0-2.091.229-2.686-.692-.487-.755-.308-2.031-.454-2.907-.169-1.017-.408-2.022-.651-3.023a30.741,30.741,0,0,0-3.192-8.109,24.924,24.924,0,0,0-11.814-10.7A37.937,37.937,0,0,0,97.48,5.916c-6.437.522-12.265,2.647-18.343,4.647a38.442,38.442,0,0,1-17.916,1.725c-6.1-.938-10.715-4.246-15.863-7.385C40.089,1.688,34.066-.414,27.835.069,22.02.52,16.659,2.922,11.85,6.129c-4.5,3-8.212,6.612-10.308,11.695C-.713,23.291-.711,29.292,3,34.123c5.375,7,15.352,8.814,23.654,8.634A45.193,45.193,0,0,0,40.7,40.183c6.046-2.126,11.27-5.731,16.926-8.655A44.044,44.044,0,0,1,65.9,28.217c2.791-.788,5.539-1.15,8.066.536A38.091,38.091,0,0,0,82.092,33.4a26.206,26.206,0,0,0,9.166,1.646c6.081-.047,12.075-1.942,17.981-3.211,4.816-1.035,9.969-2.066,14.879-1.071,2.049.415,5.041,1.272,5.781,3.4-12.454,2.257-17.346,17.66-13.835,28.967,1.895,6.1,13.286,13.237,17.715,10.029,2.806-2.033,1.1-4.7,0-6.463-2.111-3.373-2.834-7.707,1.073-10.055,3.37-2.026,6.913,2.785,6.98,2.779.926-.073,8.929-4.6,14.443-11.2,5.439.322,6.265-3.264,4.966-6.2S151.834,35.4,147.464,34.685Z"
                transform="translate(-69 -7)"
                fill="#fb4d3d"
              />
            </g>
            <g id="right-arm">
              <path
                id="Arm"
                d="M0,30.617,36.235,14.7A85.864,85.864,0,0,1,54.623.282c1.768-.563,4.787-.733,1.565,3.973s-6.4,9.8-5.112,11.45,5.017-.171,6.49,2.511Q59.04,20.9,38.707,24.633L11.57,45.439Z"
                transform="translate(1190 471)"
                fill="#6f221b"
              />
              <path
                id="Coat_Back"
                data-name="Coat Back"
                d="M0,2.231,8.485,0C28.84,16.559,40.322,59.616,53.332,64.31c12.3,4.438,28.6-2.324,47.89-11.217l7.293,13.1c-16.386,21.165-53.5,41.081-69.953,33C12.253,86.281,1.767,32.855,0,2.231Z"
                transform="matrix(0.996, 0.087, -0.087, 0.996, 1119.89, 427.109)"
                fill="#fb4d3d"
              />
            </g>
            <g id="left-arm">
              <path
                id="Shirt"
                d="M0,114H76.511c3.5,0,2.837-5.048,2.332-7.6C73.011,77,50.241,45.312,50.241,3.461L28.172,0C9.917,29.358,3.6,65.5,0,114Z"
                transform="translate(1082 424)"
                fill="#ffb6ad"
              />
              <path
                id="Arm-2"
                data-name="Arm"
                d="M49.508,0,70,4.066Q39.088,61.674,36.845,65.13c-3.365,5.185-.225,14.687.934,19.691-7.275,1.693-4.406-9.256-13.612-6.97-8.4,2.087-15.528,7.442-23.363.22-.963-.888-1.669-3.663,1.616-5.087C10.6,69.437,22.692,62.8,24.652,60.218Q28.662,54.944,49.508,0Z"
                transform="translate(994 506)"
                fill="#6f221b"
              />
              <path
                id="Coat_Front"
                data-name="Coat Front"
                d="M0,141.859Q15.5,45.756,89.748,0h8.738s29.719,101.306,16.386,135H46c1.09-16.437,4.583-33.819,9.369-50.767q-23.4,42.2-39.332,60.767Z"
                transform="translate(1019 424)"
                fill="#fb4d3d"
              />
            </g>
          </g>
        </svg>
      </motion.div>
      <motion.div animate={pixarA} className="connect-form">
        <div className="form-content">
          <h1 className="form-title">Lets work together</h1>
          <p className="form-text">Leave a message and say hello</p>
        </div>
        <form action="" className="form">
          <input
            type="text"
            id="name"
            name="Name"
            className="form-control-name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="Email"
            className="form-control-email"
            placeholder="Email"
            required
          />
          <textarea
            id="subject"
            name="subject"
            className="form-control-message"
            placeholder="Write something.."
          />
          <button className="form-control-button" type="submit" value="Submit">
            Send message
          </button>
        </form>
        <div className="form-social">
          <div className="social-content">
            <h4 className="social-title">Or find me on social media</h4>
          </div>
          <div className="social-icons">
            <img className="icon" src={facebook} alt="facebook" />
            <img className="icon" src={twitter} alt="twitter" />
            <img className="icon" src={instagram} alt="instagram" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
