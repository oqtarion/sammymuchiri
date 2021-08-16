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
        <svg width="543" height="459.28" viewBox="0 0 543 459.28">
          <g
            id="Group_2"
            data-name="Group 2"
            transform="translate(-420.5 -296.19)"
          >
            <g
              id="code_lines"
              data-name="code lines"
              transform="translate(183 82)"
            >
              <rect
                id="Rectangle_66"
                data-name="Rectangle 66"
                width="246.45"
                height="141.38"
                rx="21.86"
                transform="translate(497.76 217.19)"
                fill="none"
                stroke="#390099"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <g id="code_lines-2" data-name="code lines">
                <rect
                  id="Rectangle_67"
                  data-name="Rectangle 67"
                  width="8.13"
                  height="11.14"
                  rx="3.72"
                  transform="translate(589.05 270.4)"
                  fill="#ffbd00"
                />
                <rect
                  id="Rectangle_68"
                  data-name="Rectangle 68"
                  width="55.9"
                  height="11.14"
                  rx="5"
                  transform="translate(530.03 270.4)"
                  fill="#390099"
                />
                <rect
                  id="Rectangle_69"
                  data-name="Rectangle 69"
                  width="60.96"
                  height="11.14"
                  rx="5"
                  transform="translate(530.03 322.13)"
                  fill="#390099"
                />
                <rect
                  id="Rectangle_70"
                  data-name="Rectangle 70"
                  width="94.54"
                  height="11.14"
                  rx="5"
                  transform="translate(545.44 304.91)"
                  fill="#ff0054"
                />
                <rect
                  id="Rectangle_71"
                  data-name="Rectangle 71"
                  width="51.07"
                  height="11.14"
                  rx="5"
                  transform="translate(645.28 304.91)"
                  fill="#ff0054"
                />
                <rect
                  id="Rectangle_72"
                  data-name="Rectangle 72"
                  width="8.13"
                  height="11.14"
                  rx="3.72"
                  transform="translate(705.49 287.69)"
                  fill="#390099"
                />
                <rect
                  id="Rectangle_73"
                  data-name="Rectangle 73"
                  width="97.76"
                  height="11.14"
                  rx="5"
                  transform="translate(530.03 287.66)"
                  fill="#390099"
                />
                <rect
                  id="Rectangle_74"
                  data-name="Rectangle 74"
                  width="55.9"
                  height="11.14"
                  rx="5"
                  transform="translate(600.77 270.4)"
                  fill="#390099"
                />
                <rect
                  id="Rectangle_75"
                  data-name="Rectangle 75"
                  width="68.96"
                  height="11.2"
                  rx="5"
                  transform="translate(632.17 287.62)"
                  fill="#ffbd00"
                />
                <g id="_" data-name="&lt;/&gt;">
                  <path
                    id="Path_188"
                    data-name="Path 188"
                    d="M540.5,246.23l14.42-8.66a1.429,1.429,0,0,1,.72-.18,1.454,1.454,0,0,1,.71,2.72L544,247.53,556.35,255a1.454,1.454,0,0,1-.71,2.72,1.43,1.43,0,0,1-.72-.18l-14.42-8.66a1.46,1.46,0,0,1,0-2.61Z"
                    fill="#390099"
                  />
                  <path
                    id="Path_189"
                    data-name="Path 189"
                    d="M572,232a1.37,1.37,0,0,1,1-.42,1.45,1.45,0,0,1,1.45,1.45,1.629,1.629,0,0,1-.12.62l-11.6,29a1.45,1.45,0,0,1-2.35.41,1.39,1.39,0,0,1-.42-1,1.439,1.439,0,0,1,.13-.62l11.59-29A1.519,1.519,0,0,1,572,232Z"
                    fill="#390099"
                  />
                  <path
                    id="Path_190"
                    data-name="Path 190"
                    d="M594.77,247.53a1.5,1.5,0,0,1-.79,1.31l-14.43,8.66a1.43,1.43,0,0,1-.72.18,1.454,1.454,0,0,1-.71-2.72l12.4-7.43-12.4-7.42a1.454,1.454,0,0,1,.71-2.72,1.43,1.43,0,0,1,.72.18L594,246.23A1.5,1.5,0,0,1,594.77,247.53Z"
                    fill="#390099"
                  />
                </g>
              </g>
            </g>
            <g
              id="hoodie_man"
              data-name="hoodie man"
              transform="translate(183 82)"
            >
              <g id="body">
                <path
                  id="hoodie"
                  d="M379.08,391.64c-31.76,9.14-38.8,22-34.91,34.59-12.74,7.65-38.82,26.4-62.14,62.54-32.35,50.13,72,129.37,90.39,129.37s148.07-50.66,148.07-50.66l7.62-23.08a88.58,88.58,0,0,0-24.4-93.31l-.61-.55c-14-12.53-27.39-28.13-40.39-34.29-1.81-9.39-6.89-19.42-20.32-25"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="shape_II"
                  data-name="shape II"
                  d="M459.9,415c1.41,7.26.86,14.16.68,18.35-.75,17.53-7.35,27-9.33,33.54,12.79-7.63,24.61-25.18,30.37-36.66C478,426.8,466.28,418.15,459.9,415Z"
                  fill="#390099"
                />
                <path
                  id="shape"
                  d="M390,468.26c-6.33-2.91-38.49-23.67-43.92-43.88-6.51,3.49-16.65,9.59-22.95,17.11,7.29,4.41,48.35,28.82,66.51,27.51l.73-.06A5.469,5.469,0,0,1,390,468.26Z"
                  fill="#390099"
                />
                <path
                  id="shirt"
                  d="M439.4,468.44c6.92-20.16,1.66-42.59-3.19-49.18a80.35,80.35,0,0,1-16.9,32.58,201,201,0,0,0-40.19-35.06l.58-.67-1.36.06L371,423.73s35,26.62,46.39,90.76c7.4,41.67,11.2,80.81,11.2,80.81l21.7-1.16S431.86,490.37,439.4,468.44Z"
                  fill="#ffbd00"
                />
                <g id="head">
                  <path
                    id="ear"
                    d="M369.59,371.66c-3.31,1.45-9.53,5.38-5.7,13.52,3.43,7.29,10.19,5.09,14.23,2.89"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="face"
                    d="M431.9,336.5c7.24,18.52,9.75,40.32,10,50.5"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="neck"
                    d="M386.35,403.68l-.29,5.13-6.94,8h0a201,201,0,0,1,40.19,35.06A80.82,80.82,0,0,0,438,410.12"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="beard"
                    d="M378.7,371.74c2.6,1.6,11.21,12.37,14,17.71,0,0,12.68-8.19,32.45-13.38,0,0,10.88-2.45,15.51-2.21,0,0,4,20.31-2.18,32.87S413,421,402.74,416.86s-12.42-6.72-16.09-12.91-15.14-29.81-15.14-29.81Z"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="hair"
                    d="M374.22,377.4s-8.26-7.76-12.93-16.8a20.4,20.4,0,0,1,4.82-25.1c6.16-5.11,12-3.74,12-3.74S367.56,321,375.94,307a20.92,20.92,0,0,1,13.44-9.62,20.13,20.13,0,0,1,20.74,7.5s8-30.35,41.72-21.89c3.4.85,7.89,4.47,10.26,7.06,14.35,15.73-12.83,45.28-29.33,51.16-18.11,6.46-29.74,6.07-36.85,3C401,345.83,402.9,374.86,374.22,377.4Z"
                    fill="#390099"
                  />
                  <path
                    id="nose"
                    d="M424.69,367.97l6.33,17-6.55-.06"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <ellipse
                    id="eye_II"
                    data-name="eye II"
                    cx="1.85"
                    cy="2.86"
                    rx="1.85"
                    ry="2.86"
                    transform="translate(430.098 363.808) rotate(-13.88)"
                    fill="#390099"
                  />
                  <ellipse
                    id="eye"
                    cx="1.85"
                    cy="2.86"
                    rx="1.85"
                    ry="2.86"
                    transform="translate(414.915 367.187) rotate(-3.1)"
                    fill="#390099"
                  />
                  <path
                    id="brow_II"
                    data-name="brow II"
                    d="M404.56,363.23a8.45,8.45,0,0,1,7.29-4.58"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="brow"
                    d="M426.36,350.4s5.83-3.81,9.19-.46"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="mouth"
                    d="M424.43,396.9c-5.75-.54-7.72-3.42-7.72-3.42l9.94-.65S428.24,396.81,424.43,396.9Z"
                    fill="#390099"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                </g>
                <g id="lines">
                  <path
                    id="Path_195"
                    data-name="Path 195"
                    d="M393.89,463.46s9.75,22.62,11.3,38.59"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="Path_196"
                    data-name="Path 196"
                    d="M446.26,464.49s1.73,19.72,3.44,35.68"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="Path_197"
                    data-name="Path 197"
                    d="M326.86,511.65s10.37-11.44,27.3-.92l15.1-13.42"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <path
                    id="Path_198"
                    data-name="Path 198"
                    d="M392.29,532.39c-1.83-.92-39.5-22.42-39.5-22.42"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <line
                    id="Line_144"
                    data-name="Line 144"
                    x1="7.5"
                    y1="17.05"
                    transform="translate(478.22 492.48)"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                </g>
                <path
                  id="trousers"
                  d="M390.43,598.87s-37.54-15.6-83.95-47.77-76,17.65-63.49,38c11,18,72.79,79.71,72.79,79.71l210.34-1.71s49.42-62.19,57.18-71.93c26.23-32.94,4.56-50.36-24.27-52.88-27.14-2.38-100.38,51-109.38,57.85Z"
                  fill="#390099"
                />
              </g>
              <path
                id="laptop"
                d="M519.09,507.77H383.92a3.81,3.81,0,0,0-3.72,2.94l-18.31,77.52h-34s-3.07,15.9,14.88,15.9h19a3.942,3.942,0,0,0,1.09.16H498.1a3.83,3.83,0,0,0,3.72-2.94l21-88.88a3.83,3.83,0,0,0-3.73-4.7Z"
                fill="#ff0054"
              />
            </g>
            <line
              id="line"
              x1="537"
              transform="translate(423.5 752.47)"
              fill="none"
              stroke="#390099"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6"
            />
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
