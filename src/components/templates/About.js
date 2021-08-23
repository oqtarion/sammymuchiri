import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import cv from "../files/CV-2021.pdf"

import download from "../../images/icons/download.svg"
//Who i am

// Profile

// Download CV
// Education
// Experience

export default function About() {
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

  const cta = {
    initial: { opacity: 0, y: "100vh" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  }

  return (
    <div ref={ref} id="about" className="about">
      <motion.div animate={pixarA} className="about-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1009.25"
          height="637.456"
          viewBox="0 0 1009.25 637.456"
        >
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(-792.875 -221.272)"
          >
            <g id="whiteboard" transform="translate(598.595 221.272)">
              <rect
                id="shape"
                width="763.33"
                height="631.36"
                transform="translate(437.2 3)"
                fill="none"
                stroke="#390099"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <g id="graph">
                <rect
                  id="Rectangle_29"
                  data-name="Rectangle 29"
                  width="42.82"
                  height="66.77"
                  transform="translate(871.24 474.86)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <rect
                  id="Rectangle_30"
                  data-name="Rectangle 30"
                  width="42.82"
                  height="94.88"
                  transform="translate(938.38 446.76)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <rect
                  id="Rectangle_31"
                  data-name="Rectangle 31"
                  width="42.82"
                  height="139.31"
                  transform="translate(1005.52 402.33)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <rect
                  id="Rectangle_32"
                  data-name="Rectangle 32"
                  width="42.82"
                  height="177.68"
                  transform="translate(1072.66 363.96)"
                  fill="#ffbd00"
                />
                <path
                  id="arrow"
                  d="M1129.94,272.77a3.05,3.05,0,0,0-2.44-.7l-28,4.47a3,3,0,0,0,1,5.92l18.27-2.91L1064.1,343l-22.34-21.45a3.044,3.044,0,0,0-4.35.17l-73.17,85L943,390.83a3,3,0,0,0-3.88.24l-65.73,63a3,3,0,0,0,4.15,4.33l63.9-61.26,21.45,16.07a3,3,0,0,0,4.07-.44l72.93-84.74,22.34,21.45a3.044,3.044,0,0,0,4.35-.17l58.29-67.72-.38,23.7a3,3,0,0,0,3,3.05h0a3,3,0,0,0,3-2.95l.48-30.29a3,3,0,0,0-1.03-2.33Z"
                  fill="#23ce6b"
                />
              </g>
              <g id="layout_II" data-name="layout II">
                <g id="lines">
                  <line
                    id="Line_31"
                    data-name="Line 31"
                    x2="184.01"
                    transform="translate(514.26 472.49)"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <line
                    id="Line_32"
                    data-name="Line 32"
                    x2="135.44"
                    transform="translate(514.26 500.49)"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <line
                    id="Line_33"
                    data-name="Line 33"
                    x2="96.01"
                    transform="translate(510.26 531.92)"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                  <line
                    id="Line_34"
                    data-name="Line 34"
                    x2="79.43"
                    transform="translate(719.42 472.49)"
                    fill="none"
                    stroke="#390099"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                  />
                </g>
                <g id="oragne_bar" data-name="oragne bar">
                  <path
                    id="Path_105"
                    data-name="Path 105"
                    d="M601.49,411.38l21.21,19.95V391.02Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_106"
                    data-name="Path 106"
                    d="M570.98,432.37l21.8-20.94-21.8-20.51Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_107"
                    data-name="Path 107"
                    d="M679.08,383.98h-49l24.75,23.29Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_108"
                    data-name="Path 108"
                    d="M597.16,415.55l-24.85,23.86h50.23Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_109"
                    data-name="Path 109"
                    d="M628.7,432.37l21.8-20.94-21.8-20.51Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_110"
                    data-name="Path 110"
                    d="M510.26,388.1v47.15l24.81-23.82Z"
                    fill="#ff312e"
                  />
                  <path
                    id="Path_111"
                    data-name="Path 111"
                    d="M539.44,415.55l-24.85,23.86h50.23Z"
                    fill="#ff312e"
                  />
                  <path
                    id="Path_112"
                    data-name="Path 112"
                    d="M563.65,383.98H514.64l24.76,23.29Z"
                    fill="#ff312e"
                  />
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M680.41,431.33V391.02l-21.2,20.36Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_114"
                    data-name="Path 114"
                    d="M543.78,411.38l21.2,19.95V391.02Z"
                    fill="#ff312e"
                  />
                  <path
                    id="Path_115"
                    data-name="Path 115"
                    d="M654.88,415.55,630,439.41h50.22Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_116"
                    data-name="Path 116"
                    d="M621.37,383.98H572.36l24.76,23.29Z"
                    fill="#ffbd00"
                  />
                  <path
                    id="Path_117"
                    data-name="Path 117"
                    d="M738.13,383.98H686.41v55.43h51.72Z"
                    fill="#23ce6b"
                  />
                  <path
                    id="Path_118"
                    data-name="Path 118"
                    d="M798.85,383.98H744.13v55.43h54.72Z"
                    fill="#f5bb00"
                  />
                  <path
                    id="Path_119"
                    data-name="Path 119"
                    d="M680.25,439.41l.18.13v-.13Z"
                    fill="#ffbd00"
                  />
                </g>
              </g>
              <g id="layout">
                <rect
                  id="Rectangle_33"
                  data-name="Rectangle 33"
                  width="31"
                  height="31"
                  transform="translate(1056.68 180.5)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <rect
                  id="Rectangle_34"
                  data-name="Rectangle 34"
                  width="118.54"
                  height="35.72"
                  transform="translate(975.32 124.32)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_35"
                  data-name="Line 35"
                  x2="60.3"
                  transform="translate(975.32 211.53)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_36"
                  data-name="Line 36"
                  x2="60.3"
                  transform="translate(975.32 196.88)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_37"
                  data-name="Line 37"
                  x2="60.3"
                  transform="translate(975.32 182.22)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
              </g>
              <g id="lines-2" data-name="lines">
                <line
                  id="Line_38"
                  data-name="Line 38"
                  x2="164.7"
                  transform="translate(878.12 295.31)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_39"
                  data-name="Line 39"
                  x2="97.2"
                  transform="translate(878.12 309.47)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
              </g>
              <g id="circle_graph" data-name="circle graph">
                <path
                  id="Path_120"
                  data-name="Path 120"
                  d="M709.16,210l113-57.33A126.62,126.62,0,0,1,835.84,210c0,69.49-57.18,126.68-126.68,126.68a126.75,126.75,0,0,1-99.11-47.79Z"
                  fill="#f5bb00"
                />
                <line
                  id="Line_40"
                  data-name="Line 40"
                  x2="104.64"
                  transform="translate(806.26 113.23)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_41"
                  data-name="Line 41"
                  x1="55.79"
                  transform="translate(855.11 127.34)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_42"
                  data-name="Line 42"
                  x1="37.08"
                  transform="translate(873.82 141.55)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_43"
                  data-name="Line 43"
                  x2="135.14"
                  transform="translate(778.91 225.51)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_44"
                  data-name="Line 44"
                  x1="25.29"
                  transform="translate(888.76 236.6)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_45"
                  data-name="Line 45"
                  x1="80.56"
                  transform="translate(551.79 101.55)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_46"
                  data-name="Line 46"
                  x2="16.17"
                  transform="translate(551.79 112.98)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="Path_121"
                  data-name="Path 121"
                  d="M590,291.23l95.48-75.73L563.6,216.86A121.24,121.24,0,0,0,590,291.23Z"
                  fill="none"
                  stroke="#23ce6b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="Path_122"
                  data-name="Path 122"
                  d="M577,160.62a121.309,121.309,0,0,0-8.24,44.09c0,.54,0,1.08,0,1.63l121.78-1.63Z"
                  fill="none"
                  stroke="#23ce6b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="Path_123"
                  data-name="Path 123"
                  d="M773.87,87.42,713.8,193.11l109-54.14a122.339,122.339,0,0,0-48.93-51.55Z"
                  fill="none"
                  stroke="#23ce6b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="Path_124"
                  data-name="Path 124"
                  d="M759.79,90.28A121.17,121.17,0,0,0,700,74.22h-2a121.86,121.86,0,0,0-112.21,77.33L699.27,196Z"
                  fill="#ff312e"
                />
                <line
                  id="Line_47"
                  data-name="Line 47"
                  x1="80.56"
                  transform="translate(505.79 237.05)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <line
                  id="Line_48"
                  data-name="Line 48"
                  x2="29.11"
                  transform="translate(505.79 248.48)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
              </g>
            </g>
            <g id="man" transform="translate(792.875 334.285)">
              <g
                id="hand_II"
                data-name="hand II"
                transform="translate(263.202 462.948)"
              >
                <path
                  id="Path_125"
                  data-name="Path 125"
                  d="M1055.28,583.08a200.453,200.453,0,0,1,21,2.45c13.6,2.38,36.71,6.34,39,9.85,3.68,5.57-4.55,9.28-13.33,9"
                  transform="translate(-990.67 -575.96)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="Path_126"
                  data-name="Path 126"
                  d="M1163.552,613.4c13.36,3.34,19.76,2.72,16.32-4.29-2.38-4.85-34.53-21.48-40.83-23.35s-61.26-9.8-61.26-9.8l-14.09,58.4h79.59c19.26,1.23,13.71-9.71,5.84-12.54s-22.39-9.61-24.56-9.06c0,0,20.74,5.92,30,11.69,6.58,2.64,14-1.93,14.74-4s-5.35-7.81-15.43-12.95a211.342,211.342,0,0,0-23.15-9.61"
                  transform="translate(-1063.692 -575.96)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
              </g>
              <path
                id="body"
                d="M1148.424,418.26a67.53,67.53,0,0,1,36.71-62.43l37.75-20.26,4.14,18.57a37.53,37.53,0,0,0,44.75,28.51l4.87-1.08a37.52,37.52,0,0,0,28.52-44.74l-6.27-28.29c7.19-5,12.92-11.83,15.64-20.65.18-.57.33-1.16.49-1.75l37.59-20.14.14,291.73-102-20.92,4.92-68.49a3.008,3.008,0,0,0-6-.43l-5.11,71.12a3,3,0,0,0,2.39,3.15l105.76,21.7v.77l57.92,10.55c-11.36,2.16-24,58.66-24,58.66h-205.38a35.86,35.86,0,0,1-35.86-36.45Z"
                transform="translate(-1112.033 -113.013)"
                fill="#390099"
              />
              <g id="head" transform="translate(0)">
                <path
                  id="neck"
                  d="M1250,293.14l12.84,61a37.53,37.53,0,0,0,44.75,28.51l4.87-1.08a37.52,37.52,0,0,0,28.52-44.74l-6.27-28.29"
                  transform="translate(-1147.874 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="face"
                  d="M1246.95,244s-32-62.3,30.74-95.6c5.84-3.11,46.21-23.51,65.59,9.15,13,21.82,22.37,47,28.29,67.08,0,.11,11.76,37.67,3.86,63.31s-41.24,34.51-61.92,30-25.61-8.78-34.46-19.3-32-54.52-32-54.52Z"
                  transform="translate(-1172.958 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="hair_II"
                  data-name="hair II"
                  d="M1243.56,224.58c-5.92-20-15.34-45.26-28.29-67.08-.6-1-1.21-2-1.85-2.87,10.55-8.21,27.59,8.75,39.36,43.6,6.08,18,22.74,27.09,22.74,27.09-12.72,11.14-24.18,6.3-31.74,0C1243.65,224.85,1243.57,224.59,1243.56,224.58Z"
                  transform="translate(-1044.948 -113.013)"
                  fill="#390099"
                />
                <path
                  id="nose"
                  d="M1261.53,213.02l13.5,33.95-11.14,4.08"
                  transform="translate(-1092.568 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <ellipse
                  id="eye_II"
                  data-name="eye II"
                  cx="5.45"
                  cy="3.53"
                  rx="5.45"
                  ry="3.53"
                  transform="translate(180.193 102.722) rotate(-113.22)"
                  fill="#390099"
                  stroke="#7d53de"
                  stroke-width="1"
                />
                <ellipse
                  id="eye"
                  cx="5.45"
                  cy="3.53"
                  rx="5.45"
                  ry="3.53"
                  transform="translate(148.211 116.336) rotate(-102.45)"
                  fill="#390099"
                  stroke="#7d53de"
                  stroke-width="1"
                />
                <path
                  id="brow_II"
                  data-name="brow II"
                  d="M1308.2,213a16.16,16.16,0,0,1,12.32-10.89"
                  transform="translate(-1184.728 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="brow"
                  d="M1261.53,188.09s9.81-9,17.17-3.7"
                  transform="translate(-1096.238 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="cap"
                  d="M1263.432,225.53l33.86-17.18c-4.25-25.24-1.64-64.25,45.7-86.24,74-34.37,101,39.72,101,39.72l-169.5,85.53a12.24,12.24,0,1,1-11.06-21.83Z"
                  transform="translate(-1256.44 -113.013)"
                  fill="#f5bb00"
                />
                <path
                  id="mouth"
                  d="M1266.02,268.44s8.64,9.79,23.86,1.94"
                  transform="translate(-1111.908 -113.013)"
                  fill="none"
                  stroke="#390099"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <path
                  id="hair"
                  d="M1353.371,233.85l71.5-36.09c8.3,25.86,18.72,77.84-25.58,91.46,0,0-34.62,11.48-44.57.1,0,0,23.76-17.43,18.37-31.67,0,0-24.33,36-52.85,16.87C1320.241,274.52,1354,263.7,1353.371,233.85Z"
                  transform="translate(-1308.489 -113.013)"
                  fill="#390099"
                />
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
      <motion.div animate={pixar} className="about-inner">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">about me</h1>
          </div>
          <p className="about-message">
            i am a developer with a designers eye & a designer with a developers
            mind, passionate about crafting products with strong visual
            identity. <br /> i strive to create simple, target
            audience-oriented, & scalable digital experiences to helps digital
            brands & companies move to the next level while increasing user
            engagement.
          </p>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={cta}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className="about-cta"
        >
          <a href={cv} target="_blank" rel="noreferrer" className="cta-text">
            Download CV
          </a>
          <img src={download} alt="download" className="cta-icon" />
        </motion.div>
      </motion.div>
    </div>
  )
}
