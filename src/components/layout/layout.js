import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { motion } from "framer-motion"
import lottie from "lottie-web"

import animation from "../animations/hero.json"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          logo
          title
        }
      }
    }
  `)

  const item = {
    initial: {},
    animate: {
      transition: {},
    },
  }

  const container = {
    initial: {
      scale: 1.4,
      rotate: -10,
    },
    animate: {
      scale: 1.8,
      rotate: 10,

      transition: {
        type: "spring",
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
        duration: 10,
        bounce: 0,
        velocity: 900,
      },
    },
  }

  let animationContainer = React.createRef()

  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    })
  }, [animationContainer])

  return (
    <div className="landing">
      <div className="bg-one" ref={animationContainer} />
      <div className="bg-two">
        <svg width="1475.425" height="4080.518" viewBox="0 0 1475.425 4080.518">
          <motion.g
            variants={container}
            initial="initial"
            animate="animate"
            id="Group_34"
            data-name="Group 34"
            transform="translate(-273.21 -163.508)"
          >
            <motion.path
              variants={item}
              id="bannerGR"
              d="M26.846,36.284h9.437L0,0V9.437Z"
              transform="translate(637.896 410.052)"
              fill="#ff312e"
            />
            <motion.path
              variants={item}
              id="bannerGS"
              d="M36.284,26.846,9.437,0H0L36.284,36.284Z"
              transform="translate(992.781 883.538)"
              fill="#ff312e"
            />
            <motion.path
              variants={item}
              id="bannerGT"
              d="M0,4.793l50.44,50.44h4.793V50.44L4.792,0H0Z"
              transform="translate(628.421 2294.522)"
              fill="#ff312e"
            />
            <motion.path
              variants={item}
              id="bannerGV"
              d="M36.284,9.437V0L0,36.284H9.437Z"
              transform="translate(637.896 1830.51)"
              fill="#1f01b9"
            />
            <motion.path
              variants={item}
              id="bannerGW"
              d="M4.792,55.233l50.44-50.44V0H50.44L0,50.44v4.793Z"
              transform="translate(628.421 874.063)"
              fill="#1f01b9"
            />
            <motion.path
              variants={item}
              id="bannerGX"
              d="M9.437,36.284,36.284,9.437V0L0,36.284Z"
              transform="translate(1160.923 646.795)"
              fill="#f5bb00"
            />
            <motion.path
              variants={item}
              id="bannerGY"
              d="M50.44,0,0,50.44v4.793H4.792l50.44-50.44V0Z"
              transform="translate(796.563 1584.293)"
              fill="#f5bb00"
            />
            <motion.path
              variants={item}
              id="bannerGZ"
              d="M0,26.846v9.437L36.284,0H26.846Z"
              transform="translate(1347.666 1830.51)"
              fill="#f5bb00"
            />
            <motion.path
              variants={item}
              id="bannerHB"
              d="M4.645,0H0V4.793l50.44,50.44h4.793V50.44L4.792,0Z"
              transform="translate(1506.333 637.32)"
              fill="#23ce6b"
            />
            <motion.path
              variants={item}
              id="bannerAJ"
              d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
              transform="translate(3175.341 2275.338) rotate(180)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAK"
              d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
              transform="translate(2924.389 1328.366) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAL"
              d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
              transform="translate(3634.159 1801.852) rotate(180)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerC"
              d="M2384.567,791.513v27.64H2412.2A61.6,61.6,0,0,1,2384.567,791.513Z"
              transform="translate(3764.189 3600.958) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerD"
              d="M2397.776,739.92H2389a52.6,52.6,0,0,0,52.547,52.547v-8.781A43.814,43.814,0,0,1,2397.776,739.92Z"
              transform="translate(3239.448 1904.616) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerE"
              d="M2457.188,774.958v-8.781a26.286,26.286,0,0,1-26.257-26.257h-8.782A35.079,35.079,0,0,0,2457.188,774.958Z"
              transform="translate(4160.361 1659.119) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerJ"
              d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
              transform="translate(3998.034 2800.884) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerL"
              d="M2488.5,783.685v8.781a52.61,52.61,0,0,0,52.557-52.547h-8.782A43.823,43.823,0,0,1,2488.5,783.685Z"
              transform="translate(3693.844 957.644) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerM"
              d="M2488.5,766.177v8.781a35.079,35.079,0,0,0,35.038-35.038h-8.781A26.286,26.286,0,0,1,2488.5,766.177Z"
              transform="translate(3685.084 2842.834) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFI"
              d="M52.557,8.781V0A52.61,52.61,0,0,0,0,52.547H8.782A43.823,43.823,0,0,1,52.557,8.781Z"
              transform="translate(1694.419 2821.903) rotate(-90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFJ"
              d="M35.038,8.781V0A35.079,35.079,0,0,0,0,35.038H8.781A26.286,26.286,0,0,1,35.038,8.781Z"
              transform="translate(1161.545 2576.4) rotate(-90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFK"
              d="M17.53,8.781V0A17.542,17.542,0,0,0,0,17.519H8.782A8.748,8.748,0,0,1,17.53,8.781Z"
              transform="translate(292.393 1857.417) rotate(-90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBI"
              d="M54.885,0V54.885H0A54.876,54.876,0,0,0,54.885,0"
              transform="translate(1506.507 1584.467)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBJ"
              d="M0,54.885V0H54.885A54.883,54.883,0,0,0,0,54.885"
              transform="translate(441.852 637.494)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBK"
              d="M0,0H54.885V54.885A54.876,54.876,0,0,0,0,0"
              transform="translate(983.48 400.751)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBL"
              d="M54.885,54.885H0V0A54.883,54.883,0,0,0,54.885,54.885"
              transform="translate(1338.365 2294.696)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBM"
              d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
              transform="translate(1151.622 1110.981)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBO"
              d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
              transform="translate(628.595 1347.724)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAC"
              d="M801.838,1466.256l9.111,9.111,9.111-9.111,9.111,9.111-18.222,18.222-18.222-18.222Z"
              transform="translate(1280.243 3091.831) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAD"
              d="M820.06,1407.345l-9.111-9.111-9.111,9.1-9.111-9.111,18.222-18.211,18.222,18.211Z"
              transform="translate(1635.128 3479.073) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAE"
              d="M844.486,1441.83l9.111-9.111-9.111-9.111,9.111-9.111,18.222,18.222L853.6,1450.94Z"
              transform="translate(2578.845 3754.857) rotate(180)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAF"
              d="M827.233,1345.069h54.884v54.885Z"
              transform="translate(2388.625 3931.393) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAG"
              d="M723.3,1399.954v-54.885h54.885Z"
              transform="translate(1220.036 2510.934) rotate(180)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAH"
              d="M778.184,1503.887H723.3V1449Z"
              transform="translate(2471.434 1904.639) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGE"
              d="M0,81.94H0l26.974,27.313h0V0L0,27.313Z"
              transform="translate(523.921 2071.908) rotate(90)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGF"
              d="M26.974,81.94V27.313L0,0V109.253Z"
              transform="translate(1420.434 888.193) rotate(90)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGH"
              d="M55.3,0H0L27.652,27.313Z"
              transform="translate(1024.579 2294.486) rotate(90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGJ"
              d="M27.652,0,0,27.313H55.3Z"
              transform="translate(1379.464 400.541) rotate(90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFL"
              d="M54.651,0H0V54.651A54.657,54.657,0,0,1,54.651,0"
              transform="translate(983.597 2768.299)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFQ"
              d="M54.651,54.65V0H0A54.649,54.649,0,0,1,54.651,54.65"
              transform="translate(1506.624 164.125)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFS"
              d="M0,0V54.651H54.65A54.656,54.656,0,0,1,0,0"
              transform="translate(1693.367 1347.841)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerA"
              d="M27.443,27.443V0H0L13.721,13.722Z"
              transform="translate(287.432 1361.445)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerO"
              d="M54.884,54.884V0H0L27.442,27.442Z"
              transform="translate(983.48 1347.724)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerP"
              d="M54.885,0H0V54.884L27.442,27.442Z"
              transform="translate(273.71 2768.182)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerR"
              d="M0,27.442H27.443V0L13.721,13.721Z"
              transform="translate(642.316 2781.904)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerS"
              d="M0,54.885H54.884V0L27.442,27.443Z"
              transform="translate(983.48 1821.21)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerT"
              d="M0,0V54.885H54.885L27.442,27.443Z"
              transform="translate(273.71 400.751)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerY"
              d="M54.885,54.885A54.884,54.884,0,0,0,0,0V27.443A27.455,27.455,0,0,1,27.454,54.885,27.448,27.448,0,0,1,0,82.327V109.77A54.877,54.877,0,0,0,54.885,54.885"
              transform="translate(796.737 2503.997)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerZ"
              d="M54.885,54.885A54.884,54.884,0,0,0,0,0,54.884,54.884,0,0,0,54.885,54.885"
              transform="translate(1338.365 1347.723)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAA"
              d="M0,54.885A54.891,54.891,0,0,0,54.885,0h-.011A54.872,54.872,0,0,0,0,54.874Z"
              transform="translate(1693.25 1821.21)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBF"
              d="M674.25,929.335a54.884,54.884,0,0,1-54.884,54.885,54.884,54.884,0,0,1,54.884-54.885"
              transform="translate(-177.514 1602.104)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBG"
              d="M570.317,984.22a54.891,54.891,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
              transform="translate(-73.58 -765.327)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBR"
              d="M723.3,1296.02H833.068a54.89,54.89,0,0,1-54.884-54.884A54.884,54.884,0,0,1,723.3,1296.02"
              transform="translate(1602.363 1460.029) rotate(180)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBS"
              d="M899.726,1244.876v-70.362a35.181,35.181,0,0,0,0,70.362"
              transform="translate(1183.288 3531.833) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBT"
              d="M723.3,1174.514v70.362a35.181,35.181,0,1,0,0-70.362"
              transform="translate(1042.042 2111.375) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGU"
              d="M0,36.284,36.284,0H26.846L0,26.846Z"
              transform="translate(283.011 4197.941)"
              fill="#1f01b9"
            />
            <motion.path
              variants={item}
              id="bannerHA"
              d="M9.437,0H0L36.284,36.284V26.846Z"
              transform="translate(992.781 3724.455)"
              fill="#23ce6b"
            />
            <motion.path
              variants={item}
              id="bannerHC"
              d="M0,9.437,26.846,36.284h9.437L0,0Z"
              transform="translate(806.038 3487.712)"
              fill="#23ce6b"
            />
            <motion.path
              variants={item}
              id="bannerAI"
              d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
              transform="translate(2652.314 3932.54) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerER"
              d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
              transform="translate(710.923 4188.641) rotate(90)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerF"
              d="M2464.106,739.92h-8.781a17.54,17.54,0,0,0,17.52,17.519v-8.781A8.747,8.747,0,0,1,2464.106,739.92Z"
              transform="translate(3829.892 4491.277) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerG"
              d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
              transform="translate(2867.682 3682.169) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerH"
              d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
              transform="translate(2884.563 4172.527) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerI"
              d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
              transform="translate(3805.476 3960.185) rotate(180)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerK"
              d="M2540.093,819.163h27.64V791.534A61.611,61.611,0,0,1,2540.093,819.163Z"
              transform="translate(3564.836 4074.459) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerN"
              d="M2488.5,748.658v8.781a17.542,17.542,0,0,0,17.53-17.519h-8.782A8.748,8.748,0,0,1,2488.5,748.658Z"
              transform="translate(2798.419 4491.277) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFH"
              d="M27.64,0H0V27.629A61.611,61.611,0,0,1,27.64,0Z"
              transform="translate(1165.25 3046.188) rotate(-90)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBP"
              d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
              transform="translate(1506.507 3478.412)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerAB"
              d="M785.554,1423.608l-9.111,9.111,9.111,9.111-9.111,9.111-18.222-18.222,18.222-18.222Z"
              transform="translate(1596.067 4465.086) rotate(180)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGG"
              d="M55.3,0H0L27.652,27.313Z"
              transform="translate(1192.721 3951.688) rotate(90)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerGI"
              d="M27.652,0,0,27.313H55.3Z"
              transform="translate(669.694 3714.944) rotate(90)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFM"
              d="M0,0V54.65H54.651A54.657,54.657,0,0,1,0,0"
              transform="translate(273.827 3241.786)"
              fill="#1f01b9"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFN"
              d="M0,54.65H54.65V0A54.649,54.649,0,0,1,0,54.65"
              transform="translate(983.598 4188.758)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFO"
              d="M54.65,54.651V0H0A54.65,54.65,0,0,1,54.65,54.651"
              transform="translate(796.854 3952.015)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFP"
              d="M0,54.651H54.651V0A54.649,54.649,0,0,1,0,54.651"
              transform="translate(1693.367 3715.271)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerFR"
              d="M54.65,0H0V54.65A54.656,54.656,0,0,1,54.65,0"
              transform="translate(1506.624 3952.015)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerB"
              d="M27.442,0H0V27.443L13.721,13.722Z"
              transform="translate(1165.344 3492.133)"
              fill="#23ce6b"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerQ"
              d="M0,0V27.442H27.442L13.721,13.721Z"
              transform="translate(455.574 3965.619)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBH"
              d="M515.432,1088.153a54.891,54.891,0,0,0,54.885-54.884,54.883,54.883,0,0,0-54.885,54.884"
              transform="translate(1177.818 2208.4)"
              fill="#ff312e"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerBQ"
              d="M833.068,1137.2H723.3a54.884,54.884,0,0,1,54.885,54.885,54.891,54.891,0,0,1,54.884-54.885"
              transform="translate(2143.991 5380.728) rotate(180)"
              fill="#f5bb00"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
            <motion.path
              variants={item}
              id="bannerHD"
              d="M2021.459,1104.346a52.631,52.631,0,0,0-52.625-52.626,52.624,52.624,0,0,0,52.625,52.626"
              transform="translate(-461.197 1954.335)"
              fill="#f5bb00"
            />
          </motion.g>
        </svg>
      </div>
      <Header siteTitle={data.site.siteMetadata?.logo || `Title`} />
      <main className="main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
