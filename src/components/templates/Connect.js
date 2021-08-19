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
        x: 0,
        transition: { duration: 1 },
      })
    }
    if (!inView) {
      pixarA.start({ x: 200 })
    }
  }, [inView, pixarA])

  return (
    <div ref={ref} id="connect" className="connect">
      <motion.div animate={pixar} className="connect-banner">
        <svg width="1644.29" height="659.592" viewBox="0 0 1644.29 659.592">
          <path
            id="bannerA"
            d="M386.974,956.777V929.335H359.532l13.721,13.722Z"
            transform="translate(1092.509 -928.128)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerA-2"
            data-name="bannerA"
            d="M386.974,956.777V929.335H359.532l13.721,13.722Z"
            transform="translate(1098.037 1587.594) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerB"
            d="M438.941,929.335H411.5v27.443l13.721-13.721Z"
            transform="translate(1067.94 -928.128)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerB-2"
            data-name="bannerB"
            d="M438.941,929.335H411.5v27.443l13.721-13.721Z"
            transform="translate(1122.607 1587.594) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerC"
            d="M2384.567,791.513v27.64H2412.2A61.6,61.6,0,0,1,2384.567,791.513Z"
            transform="translate(-851.253 -708.176)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerC-2"
            data-name="bannerC"
            d="M2384.567,791.513v27.64H2412.2A61.6,61.6,0,0,1,2384.567,791.513Z"
            transform="translate(3041.8 1367.642) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerD"
            d="M2397.776,739.92H2389a52.6,52.6,0,0,0,52.547,52.547v-8.781A43.814,43.814,0,0,1,2397.776,739.92Z"
            transform="translate(-853.343 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerD-2"
            data-name="bannerD"
            d="M2397.776,739.92H2389a52.6,52.6,0,0,0,52.547,52.547v-8.781A43.814,43.814,0,0,1,2397.776,739.92Z"
            transform="translate(3043.889 1343.294) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerE"
            d="M2457.188,774.958v-8.781a26.286,26.286,0,0,1-26.257-26.257h-8.782A35.079,35.079,0,0,0,2457.188,774.958Z"
            transform="translate(-868.989 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerE-2"
            data-name="bannerE"
            d="M2457.188,774.958v-8.781a26.286,26.286,0,0,1-26.257-26.257h-8.782A35.079,35.079,0,0,0,2457.188,774.958Z"
            transform="translate(3059.535 1343.294) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerF"
            d="M2464.106,739.92h-8.781a17.54,17.54,0,0,0,17.52,17.519v-8.781A8.747,8.747,0,0,1,2464.106,739.92Z"
            transform="translate(-884.646 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerF-2"
            data-name="bannerF"
            d="M2464.106,739.92h-8.781a17.54,17.54,0,0,0,17.52,17.519v-8.781A8.747,8.747,0,0,1,2464.106,739.92Z"
            transform="translate(3075.192 1343.294) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerG"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(-851.253 -634.78)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerG-2"
            data-name="bannerG"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(3041.8 1294.246) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerH"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(-853.343 -636.86)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerH-2"
            data-name="bannerH"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(3043.889 1296.325) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerI"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(-868.989 -652.506)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerI-2"
            data-name="bannerI"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(3059.535 1311.972) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerJ"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(-884.646 -668.162)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerJ-2"
            data-name="bannerJ"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(3075.192 1327.628) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerK"
            d="M2540.093,819.163h27.64V791.534A61.611,61.611,0,0,1,2540.093,819.163Z"
            transform="translate(-924.65 -708.186)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerK-2"
            data-name="bannerK"
            d="M2540.093,819.163h27.64V791.534A61.611,61.611,0,0,1,2540.093,819.163Z"
            transform="translate(3115.196 1367.652) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerL"
            d="M2488.5,783.685v8.781a52.61,52.61,0,0,0,52.557-52.547h-8.782A43.823,43.823,0,0,1,2488.5,783.685Z"
            transform="translate(-900.302 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerL-2"
            data-name="bannerL"
            d="M2488.5,783.685v8.781a52.61,52.61,0,0,0,52.557-52.547h-8.782A43.823,43.823,0,0,1,2488.5,783.685Z"
            transform="translate(3090.848 1343.294) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerM"
            d="M2488.5,766.177v8.781a35.079,35.079,0,0,0,35.038-35.038h-8.781A26.286,26.286,0,0,1,2488.5,766.177Z"
            transform="translate(-900.302 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerM-2"
            data-name="bannerM"
            d="M2488.5,766.177v8.781a35.079,35.079,0,0,0,35.038-35.038h-8.781A26.286,26.286,0,0,1,2488.5,766.177Z"
            transform="translate(3090.848 1343.294) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerN"
            d="M2488.5,748.658v8.781a17.542,17.542,0,0,0,17.53-17.519h-8.782A8.748,8.748,0,0,1,2488.5,748.658Z"
            transform="translate(-900.302 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerN-2"
            data-name="bannerN"
            d="M2488.5,748.658v8.781a17.542,17.542,0,0,0,17.53-17.519h-8.782A8.748,8.748,0,0,1,2488.5,748.658Z"
            transform="translate(3090.848 1343.294) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerO"
            d="M466.383,1088.153v-54.884H411.5l27.442,27.442Z"
            transform="translate(1067.445 -977.177)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerO-2"
            data-name="bannerO"
            d="M466.383,1088.153v-54.884H411.5l27.442,27.442Z"
            transform="translate(1123.101 1636.643) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerP"
            d="M362.45,1033.269H307.565v54.884l27.442-27.442Z"
            transform="translate(1116.684 -977.177)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerP-2"
            data-name="bannerP"
            d="M362.45,1033.269H307.565v54.884l27.442-27.442Z"
            transform="translate(1073.862 1636.643) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerQ"
            d="M411.5,1085.236v27.442h27.442l-13.721-13.721Z"
            transform="translate(1067.508 -1001.701)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerQ-2"
            data-name="bannerQ"
            d="M411.5,1085.236v27.442h27.442l-13.721-13.721Z"
            transform="translate(1123.038 1661.167) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerR"
            d="M359.532,1112.678h27.443v-27.442l-13.721,13.721Z"
            transform="translate(1092.122 -1001.701)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerR-2"
            data-name="bannerR"
            d="M359.532,1112.678h27.443v-27.442l-13.721,13.721Z"
            transform="translate(1098.425 1661.167) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerS"
            d="M411.5,984.22h54.884V929.335l-27.442,27.443Z"
            transform="translate(1067.445 -928.128)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerS-2"
            data-name="bannerS"
            d="M411.5,984.22h54.884V929.335l-27.442,27.443Z"
            transform="translate(1123.101 1587.594) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerT"
            d="M307.565,929.335V984.22H362.45l-27.442-27.443Z"
            transform="translate(1116.684 -928.128)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerT-2"
            data-name="bannerT"
            d="M307.565,929.335V984.22H362.45l-27.442-27.443Z"
            transform="translate(1073.862 1587.594) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerU"
            d="M2176.7,947.787v54.885h54.885a54.883,54.883,0,0,1-54.885-54.885"
            transform="translate(-643.387 -672.924)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerU-2"
            data-name="bannerU"
            d="M2176.7,947.787v54.885h54.885a54.883,54.883,0,0,1-54.885-54.885"
            transform="translate(2833.933 1332.389) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerV"
            d="M2335.518,1002.672h-54.884V947.787a54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(-692.435 -672.924)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerV-2"
            data-name="bannerV"
            d="M2335.518,1002.672h-54.884V947.787a54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(2882.981 1332.389) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerW"
            d="M2280.634,898.739h0V843.854h54.884a54.883,54.883,0,0,1-54.884,54.885"
            transform="translate(-692.435 -623.731)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerW-2"
            data-name="bannerW"
            d="M2280.634,898.739h0V843.854h54.884a54.883,54.883,0,0,1-54.884,54.885"
            transform="translate(2882.981 1283.197) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerX"
            d="M2176.7,898.739h54.885V843.854a54.89,54.89,0,0,0-54.885,54.885"
            transform="translate(-643.387 -623.731)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerX-2"
            data-name="bannerX"
            d="M2176.7,898.739h54.885V843.854a54.89,54.89,0,0,0-54.885,54.885"
            transform="translate(2833.933 1283.197) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerY"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(1533.81 220.404) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerY-2"
            data-name="bannerY"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(656.736 439.061)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(-648.48 -1044.986)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerZ-2"
            data-name="bannerZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(2839.026 1704.452) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(-648.48 -886.323)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAA-2"
            data-name="bannerAA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(2839.026 1545.789) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAB"
            d="M785.554,1423.608l-9.111,9.111,9.111,9.111-9.111,9.111-18.222-18.222,18.222-18.222Z"
            transform="translate(575.18 -1267.254)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAB-2"
            data-name="bannerAB"
            d="M785.554,1423.608l-9.111,9.111,9.111,9.111-9.111,9.111-18.222-18.222,18.222-18.222Z"
            transform="translate(1615.366 1926.72) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAC"
            d="M801.838,1466.256l9.111,9.111,9.111-9.111,9.111,9.111-18.222,18.222-18.222-18.222Z"
            transform="translate(558.826 -1291.743)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAC-2"
            data-name="bannerAC"
            d="M801.838,1466.256l9.111,9.111,9.111-9.111,9.111,9.111-18.222,18.222-18.222-18.222Z"
            transform="translate(1631.72 1951.209) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAD"
            d="M820.06,1407.345l-9.111-9.111-9.111,9.1-9.111-9.111,18.222-18.211,18.222,18.211Z"
            transform="translate(558.826 -1250.929)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAD-2"
            data-name="bannerAD"
            d="M820.06,1407.345l-9.111-9.111-9.111,9.1-9.111-9.111,18.222-18.211,18.222,18.211Z"
            transform="translate(1631.72 1910.394) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAE"
            d="M844.486,1441.83l9.111-9.111-9.111-9.111,9.111-9.111,18.222,18.222L853.6,1450.94Z"
            transform="translate(534.323 -1267.254)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAE-2"
            data-name="bannerAE"
            d="M844.486,1441.83l9.111-9.111-9.111-9.111,9.111-9.111,18.222,18.222L853.6,1450.94Z"
            transform="translate(1656.224 1926.72) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAF"
            d="M827.233,1345.069h54.884v54.885Z"
            transform="translate(542.456 -1234.405)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAF-2"
            data-name="bannerAF"
            d="M827.233,1345.069h54.884v54.885Z"
            transform="translate(1648.09 1893.871) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAG"
            d="M723.3,1399.954v-54.885h54.885Z"
            transform="translate(591.695 -1234.405)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAG-2"
            data-name="bannerAG"
            d="M723.3,1399.954v-54.885h54.885Z"
            transform="translate(1598.852 1893.871) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAH"
            d="M778.184,1503.887H723.3V1449Z"
            transform="translate(591.695 -1283.597)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAH-2"
            data-name="bannerAH"
            d="M778.184,1503.887H723.3V1449Z"
            transform="translate(1598.852 1943.063) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAI"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(-653.84 -634.78)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAI-2"
            data-name="bannerAI"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(2844.387 1294.246) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAJ"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(-653.84 -634.78)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAJ-2"
            data-name="bannerAJ"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(2844.387 1294.246) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAK"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(-703.079 -634.78)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAK-2"
            data-name="bannerAK"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(2893.625 1294.246) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAL"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(-703.079 -634.78)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAL-2"
            data-name="bannerAL"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(2893.625 1294.246) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAM"
            d="M863.288,1033.269l-36.055,36.055v-9.378l26.677-26.677Z"
            transform="translate(651.712 -484.843)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAM-2"
            data-name="bannerAM"
            d="M863.288,1033.269l-36.055,36.055v-9.378l26.677-26.677Z"
            transform="translate(1538.834 1144.309) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAN"
            d="M872.268,1104.981H862.89l36.055-36.055v9.378Z"
            transform="translate(634.885 -501.67)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAN-2"
            data-name="bannerAN"
            d="M872.268,1104.981H862.89l36.055-36.055v9.378Z"
            transform="translate(1555.661 1161.136) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAO"
            d="M882.117,1038.031,832,1088.154h-4.762v-4.762l50.122-50.122h4.763Z"
            transform="translate(651.712 -484.843)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAO-2"
            data-name="bannerAO"
            d="M882.117,1038.031,832,1088.154h-4.762v-4.762l50.122-50.122h4.763Z"
            transform="translate(1538.834 1144.309) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAP"
            d="M795.011,1059.946v9.378l-36.055-36.055h9.378Z"
            transform="translate(684.123 -484.843)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAP-2"
            data-name="bannerAP"
            d="M795.011,1059.946v9.378l-36.055-36.055h9.378Z"
            transform="translate(1506.423 1144.309) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAQ"
            d="M749.977,1104.981,723.3,1078.3v-9.378l36.055,36.055Z"
            transform="translate(700.951 -501.67)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAQ-2"
            data-name="bannerAQ"
            d="M749.977,1104.981,723.3,1078.3v-9.378l36.055,36.055Z"
            transform="translate(1489.595 1161.136) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAR"
            d="M728.062,1033.269l50.122,50.122v4.762h-4.762L723.3,1038.031v-4.762Z"
            transform="translate(700.951 -484.843)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAR-2"
            data-name="bannerAR"
            d="M728.062,1033.269l50.122,50.122v4.762h-4.762L723.3,1038.031v-4.762Z"
            transform="translate(1489.595 1144.309) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAS"
            d="M795.011,974.37l-26.677,26.678h-9.378l36.055-36.055Z"
            transform="translate(684.123 -452.46)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAS-2"
            data-name="bannerAS"
            d="M795.011,974.37l-26.677,26.678h-9.378l36.055-36.055Z"
            transform="translate(1506.423 1111.926) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAT"
            d="M723.3,979.458l50.122-50.122h4.762V934.1L728.062,984.22H723.3Z"
            transform="translate(700.951 -435.633)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAT-2"
            data-name="bannerAT"
            d="M723.3,979.458l50.122-50.122h4.762V934.1L728.062,984.22H723.3Z"
            transform="translate(1489.595 1095.099) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAU"
            d="M749.977,929.335h9.378L723.3,965.39v-9.378Z"
            transform="translate(700.951 -435.633)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAU-2"
            data-name="bannerAU"
            d="M749.977,929.335h9.378L723.3,965.39v-9.378Z"
            transform="translate(1489.595 1095.099) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAV"
            d="M619.366,1454.838h0a54.885,54.885,0,0,0,0-109.769Z"
            transform="translate(750.322 -906.234)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAV-2"
            data-name="bannerAV"
            d="M619.366,1454.838h0a54.885,54.885,0,0,0,0-109.769Z"
            transform="translate(1440.224 1565.7) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAW"
            d="M570.317,1345.069H515.432v54.885a54.891,54.891,0,0,1,54.885-54.885"
            transform="translate(799.561 -906.043)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAW-2"
            data-name="bannerAW"
            d="M570.317,1345.069H515.432v54.885a54.891,54.891,0,0,1,54.885-54.885"
            transform="translate(1390.985 1565.509) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAX"
            d="M515.515,1449v54.885H570.4A54.884,54.884,0,0,1,515.515,1449"
            transform="translate(799.522 -955.299)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAX-2"
            data-name="bannerAX"
            d="M515.515,1449v54.885H570.4A54.884,54.884,0,0,1,515.515,1449"
            transform="translate(1391.025 1614.765) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAY"
            d="M674.25,1399.954v-54.885H619.366a54.891,54.891,0,0,1,54.884,54.885"
            transform="translate(750.322 -906.043)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAY-2"
            data-name="bannerAY"
            d="M674.25,1399.954v-54.885H619.366a54.891,54.891,0,0,1,54.884,54.885"
            transform="translate(1440.224 1565.509) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(-593.827 -771.332)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAZ-2"
            data-name="bannerAZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(2784.373 1430.798) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(-648.521 -667.399)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBA-2"
            data-name="bannerBA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(2839.068 1326.865) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBB"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(1424.119 384.466) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBB-2"
            data-name="bannerBB"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(766.427 275) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBC"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(1643.083 384.322) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBC-2"
            data-name="bannerBC"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(547.463 275.144) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBD"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1643.083 384.322) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBD-2"
            data-name="bannerBD"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.463 275.144) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBE"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1643.083 329.581) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBE-2"
            data-name="bannerBE"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.463 329.885) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBF"
            d="M674.25,929.335a54.884,54.884,0,0,1-54.884,54.885,54.884,54.884,0,0,1,54.884-54.885"
            transform="translate(641.25 -763.933)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBF-2"
            data-name="bannerBF"
            d="M674.25,929.335a54.884,54.884,0,0,1-54.884,54.885,54.884,54.884,0,0,1,54.884-54.885"
            transform="translate(1549.296 1423.399) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBG"
            d="M570.317,984.22a54.891,54.891,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(690.299 -763.933)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBG-2"
            data-name="bannerBG"
            d="M570.317,984.22a54.891,54.891,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(1500.247 1423.399) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBH"
            d="M515.432,1088.153a54.891,54.891,0,0,0,54.885-54.884,54.883,54.883,0,0,0-54.885,54.884"
            transform="translate(690.299 -813.126)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBH-2"
            data-name="bannerBH"
            d="M515.432,1088.153a54.891,54.891,0,0,0,54.885-54.884,54.883,54.883,0,0,0-54.885,54.884"
            transform="translate(1500.247 1472.591) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBI"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(1643.083 493.91) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBI-2"
            data-name="bannerBI"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(547.463 165.556)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBJ"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(1643.083 493.91) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBJ-2"
            data-name="bannerBJ"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(547.463 165.556)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBK"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(1588.199 493.91) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBK-2"
            data-name="bannerBK"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(602.348 165.556)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBL"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(1588.199 493.91) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBL-2"
            data-name="bannerBL"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(602.348 165.556)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBM"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(-435.52 -142.284)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBM-2"
            data-name="bannerBM"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(2626.066 801.75) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBN"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(-435.52 -142.284)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBN-2"
            data-name="bannerBN"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(2626.066 801.75) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBO"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(-484.569 -142.284)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBO-2"
            data-name="bannerBO"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(2675.115 801.75) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBP"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(-484.569 -142.284)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBP-2"
            data-name="bannerBP"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(2675.115 801.75) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBQ"
            d="M833.068,1137.2H723.3a54.884,54.884,0,0,1,54.885,54.885,54.891,54.891,0,0,1,54.884-54.885"
            transform="translate(482.44 -807.62)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBQ-2"
            data-name="bannerBQ"
            d="M833.068,1137.2H723.3a54.884,54.884,0,0,1,54.885,54.885,54.891,54.891,0,0,1,54.884-54.885"
            transform="translate(1708.107 1467.086) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBR"
            d="M723.3,1296.02H833.068a54.89,54.89,0,0,1-54.884-54.884A54.884,54.884,0,0,1,723.3,1296.02"
            transform="translate(482.44 -856.813)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBR-2"
            data-name="bannerBR"
            d="M723.3,1296.02H833.068a54.89,54.89,0,0,1-54.884-54.884A54.884,54.884,0,0,1,723.3,1296.02"
            transform="translate(1708.107 1516.278) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBS"
            d="M899.726,1244.876v-70.362a35.181,35.181,0,0,0,0,70.362"
            transform="translate(415.537 -825.305)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBS-2"
            data-name="bannerBS"
            d="M899.726,1244.876v-70.362a35.181,35.181,0,0,0,0,70.362"
            transform="translate(1775.009 1484.771) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBT"
            d="M723.3,1174.514v70.362a35.181,35.181,0,1,0,0-70.362"
            transform="translate(482.44 -825.305)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBT-2"
            data-name="bannerBT"
            d="M723.3,1174.514v70.362a35.181,35.181,0,1,0,0-70.362"
            transform="translate(1708.107 1484.771) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBU"
            d="M2023.719,947.766h-54.885v54.885Z"
            transform="translate(-653.839 -563.449)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBU-2"
            data-name="bannerBU"
            d="M2023.719,947.766h-54.885v54.885Z"
            transform="translate(2844.386 1222.914) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBV"
            d="M2072.767,843.854v54.885h54.885Z"
            transform="translate(-703.077 -514.266)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBV-2"
            data-name="bannerBV"
            d="M2072.767,843.854v54.885h54.885Z"
            transform="translate(2893.624 1173.732) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBW"
            d="M2072.767,843.854l54.885,54.885V843.854Z"
            transform="translate(-703.077 -514.266)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBW-2"
            data-name="bannerBW"
            d="M2072.767,843.854l54.885,54.885V843.854Z"
            transform="translate(2893.624 1173.732) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBX"
            d="M2072.767,1002.672l54.885-54.885h-54.885Z"
            transform="translate(-703.077 -563.459)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBX-2"
            data-name="bannerBX"
            d="M2072.767,1002.672l54.885-54.885h-54.885Z"
            transform="translate(2893.624 1222.924) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBY"
            d="M2127.652,947.787l-54.885,54.885h54.885Z"
            transform="translate(-703.077 -563.459)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBY-2"
            data-name="bannerBY"
            d="M2127.652,947.787l-54.885,54.885h54.885Z"
            transform="translate(2893.624 1222.924) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBZ"
            d="M1968.834,843.854v54.885h54.885Z"
            transform="translate(-653.839 -514.266)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBZ-2"
            data-name="bannerBZ"
            d="M1968.834,843.854v54.885h54.885Z"
            transform="translate(2844.386 1173.732) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCA"
            d="M2221.735,1051.72h-9.378l36.055,36.055V1078.4Z"
            transform="translate(-933.148 -995.629)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCA-2"
            data-name="bannerCA"
            d="M2221.735,1051.72h-9.378l36.055,36.055V1078.4Z"
            transform="translate(3123.694 1655.094) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCB"
            d="M2181.316,1051.72H2176.7v4.762l50.122,50.122h4.762v-4.762l-50.123-50.122Z"
            transform="translate(-916.078 -995.629)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCB-2"
            data-name="bannerCB"
            d="M2181.316,1051.72H2176.7v4.762l50.122,50.122h4.762v-4.762l-50.123-50.122Z"
            transform="translate(3106.624 1655.094) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCC"
            d="M2176.7,1096.754l26.677,26.677h9.378l-36.055-36.055Z"
            transform="translate(-916.078 -1012.456)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCC-2"
            data-name="bannerCC"
            d="M2176.7,1096.754l26.677,26.677h9.378l-36.055-36.055Z"
            transform="translate(3106.624 1671.922) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCD"
            d="M2280.634,1087.775l36.055-36.055h-9.378l-26.677,26.677Z"
            transform="translate(-1074.895 -941.045)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCD-2"
            data-name="bannerCD"
            d="M2280.634,1087.775l36.055-36.055h-9.378l-26.677,26.677Z"
            transform="translate(3265.442 1600.51) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCE"
            d="M2352.346,1096.755v-9.378l-36.055,36.055h9.378Z"
            transform="translate(-1091.723 -957.92)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCE-2"
            data-name="bannerCE"
            d="M2352.346,1096.755v-9.378l-36.055,36.055h9.378Z"
            transform="translate(3282.269 1617.385) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCF"
            d="M2285.4,1106.6l50.122-50.122v-4.762h-4.762l-50.122,50.122v4.762Z"
            transform="translate(-1074.895 -941.054)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCF-2"
            data-name="bannerCF"
            d="M2285.4,1106.6l50.122-50.122v-4.762h-4.762l-50.122,50.122v4.762Z"
            transform="translate(3265.442 1600.519) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCG"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(-1020.013 -1061.852)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCG-2"
            data-name="bannerCG"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(3210.559 1721.318) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCH"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(-1037.083 -1044.977)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCH-2"
            data-name="bannerCH"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(3227.629 1704.443) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCI"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(-1020.013 -1044.986)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCI-2"
            data-name="bannerCI"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(3210.559 1704.452) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCJ"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(-987.792 -1116.388)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCJ-2"
            data-name="bannerCJ"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(3178.338 1775.854) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCK"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(-970.965 -1099.561)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCK-2"
            data-name="bannerCK"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(3161.511 1759.027) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCL"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(-970.965 -1099.561)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCL-2"
            data-name="bannerCL"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(3161.511 1759.027) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCM"
            d="M27.442,27.442V0H0L13.721,13.721Z"
            transform="translate(1397.17 603.312) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCM-2"
            data-name="bannerCM"
            d="M27.442,27.442V0H0L13.721,13.721Z"
            transform="translate(793.376 56.154)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCN"
            d="M27.442,0H0V27.442L13.721,13.721Z"
            transform="translate(1369.816 603.312) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCN-2"
            data-name="bannerCN"
            d="M27.442,0H0V27.442L13.721,13.721Z"
            transform="translate(820.73 56.154)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCO"
            d="M0,54.885H54.884V0L27.442,27.442Z"
            transform="translate(1369.879 603.312) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCO-2"
            data-name="bannerCO"
            d="M0,54.885H54.884V0L27.442,27.442Z"
            transform="translate(820.667 56.154)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCP"
            d="M0,0V54.885H54.885L27.442,27.442Z"
            transform="translate(1424.575 603.312) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCP-2"
            data-name="bannerCP"
            d="M0,0V54.885H54.885L27.442,27.442Z"
            transform="translate(765.972 56.154)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCQ"
            d="M0,27.443V0H27.443Z"
            transform="translate(1260.62 439.106) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCQ-2"
            data-name="bannerCQ"
            d="M0,27.443V0H27.443Z"
            transform="translate(929.926 220.359) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCR"
            d="M27.443,27.443H0V0Z"
            transform="translate(1288.063 439.106) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCR-2"
            data-name="bannerCR"
            d="M27.443,27.443H0V0Z"
            transform="translate(902.484 220.359) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCS"
            d="M0,0H54.885V54.885Z"
            transform="translate(1315.505 439.054) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCS-2"
            data-name="bannerCS"
            d="M0,0H54.885V54.885Z"
            transform="translate(875.041 220.411) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCT"
            d="M54.885,0V54.884H0Z"
            transform="translate(1260.62 439.054) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCT-2"
            data-name="bannerCT"
            d="M54.885,0V54.884H0Z"
            transform="translate(929.926 220.411) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCU"
            d="M0,0V27.64H27.629A61.6,61.6,0,0,1,0,0Z"
            transform="translate(1396.927 275.016) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCU-2"
            data-name="bannerCU"
            d="M0,0V27.64H27.629A61.6,61.6,0,0,1,0,0Z"
            transform="translate(793.62 384.45) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCV"
            d="M8.781,0H0A52.6,52.6,0,0,0,52.547,52.547V43.765A43.814,43.814,0,0,1,8.781,0Z"
            transform="translate(1369.682 272.678) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCV-2"
            data-name="bannerCV"
            d="M8.781,0H0A52.6,52.6,0,0,0,52.547,52.547V43.765A43.814,43.814,0,0,1,8.781,0Z"
            transform="translate(820.865 386.788) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCW"
            d="M35.039,35.038V26.257A26.286,26.286,0,0,1,8.782,0H0A35.079,35.079,0,0,0,35.039,35.038Z"
            transform="translate(1369.682 255.17) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCW-2"
            data-name="bannerCW"
            d="M35.039,35.038V26.257A26.286,26.286,0,0,1,8.782,0H0A35.079,35.079,0,0,0,35.039,35.038Z"
            transform="translate(820.865 404.296) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCX"
            d="M8.781,0H0A17.54,17.54,0,0,0,17.52,17.519V8.738A8.747,8.747,0,0,1,8.781,0Z"
            transform="translate(1369.682 237.65) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCX-2"
            data-name="bannerCX"
            d="M8.781,0H0A17.54,17.54,0,0,0,17.52,17.519V8.738A8.747,8.747,0,0,1,8.781,0Z"
            transform="translate(820.865 421.815) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCY"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(1314.987 275.016) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCY-2"
            data-name="bannerCY"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(875.559 384.45) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCZ"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(1317.314 272.678) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCZ-2"
            data-name="bannerCZ"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(873.232 386.788) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDA"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(1334.823 255.17) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDA-2"
            data-name="bannerDA"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(855.724 404.296) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDB"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(1352.342 237.65) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDB-2"
            data-name="bannerDB"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(838.205 421.815) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDC"
            d="M0,0H54.884V54.885Z"
            transform="translate(1479.131 329.752) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDC-2"
            data-name="bannerDC"
            d="M0,0H54.884V54.885Z"
            transform="translate(711.416 329.714)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDD"
            d="M54.884,0V54.884H0Z"
            transform="translate(1479.131 275.01) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDD-2"
            data-name="bannerDD"
            d="M54.884,0V54.884H0Z"
            transform="translate(711.416 384.455)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDE"
            d="M0,27.443V0H27.443Z"
            transform="translate(1533.8 274.968) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDE-2"
            data-name="bannerDE"
            d="M0,27.443V0H27.443Z"
            transform="translate(656.746 384.498)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDF"
            d="M27.443,27.443H0V0Z"
            transform="translate(1533.8 302.342) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDF-2"
            data-name="bannerDF"
            d="M27.443,27.443H0V0Z"
            transform="translate(656.746 357.124)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDG"
            d="M0,27.443V0H27.442Z"
            transform="translate(1479.092 274.968) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDG-2"
            data-name="bannerDG"
            d="M0,27.443V0H27.442Z"
            transform="translate(711.454 384.498)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDH"
            d="M27.442,27.443H0V0Z"
            transform="translate(1479.092 302.342) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDH-2"
            data-name="bannerDH"
            d="M27.442,27.443H0V0Z"
            transform="translate(711.454 357.124)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDI"
            d="M0,0H54.885V54.885Z"
            transform="translate(1533.826 329.752) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDI-2"
            data-name="bannerDI"
            d="M0,0H54.885V54.885Z"
            transform="translate(656.721 329.714)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDJ"
            d="M54.885,0V54.884H0Z"
            transform="translate(1533.826 275.01) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDJ-2"
            data-name="bannerDJ"
            d="M54.885,0V54.884H0Z"
            transform="translate(656.721 384.455)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDK"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(1479.135 493.933) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDK-2"
            data-name="bannerDK"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(711.411 165.533)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDL"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1479.135 493.933) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDL-2"
            data-name="bannerDL"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(711.411 165.533)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDM"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1533.83 493.933) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDM-2"
            data-name="bannerDM"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(656.716 165.533)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDN"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(1205.739 56.091) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDN-2"
            data-name="bannerDN"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(984.807 603.374) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDO"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(-747.416 -842.918)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDO-2"
            data-name="bannerDO"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(2937.962 1502.383) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDP"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(-764.488 -826.043)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDP-2"
            data-name="bannerDP"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(2955.034 1485.508) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDQ"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(-747.661 -826.07)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDQ-2"
            data-name="bannerDQ"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(2938.207 1485.536) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDR"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(-660.555 -788.176)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDR-2"
            data-name="bannerDR"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(2851.101 1447.642) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDS"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(-643.728 -771.332)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDS-2"
            data-name="bannerDS"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(2834.274 1430.798) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDT"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(-643.483 -771.301)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDT-2"
            data-name="bannerDT"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(2834.029 1430.767) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDU"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(1333.784 329.725) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDU-2"
            data-name="bannerDU"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(856.763 329.74) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDV"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(1315.016 310.944) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDV-2"
            data-name="bannerDV"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(875.53 348.522) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDW"
            d="M0,4.762,50.122,54.885h4.763V50.122L4.762,0H0Z"
            transform="translate(1314.998 329.75) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDW-2"
            data-name="bannerDW"
            d="M0,4.762,50.122,54.885h4.763V50.122L4.762,0H0Z"
            transform="translate(875.548 329.715) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDX"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(1388.484 310.944) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDX-2"
            data-name="bannerDX"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(802.062 348.522) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDY"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(1369.69 329.751) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDY-2"
            data-name="bannerDY"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(820.856 329.715) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDZ"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(1369.717 329.725) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDZ-2"
            data-name="bannerDZ"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(820.83 329.74) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEA"
            d="M2333.246,718.314h0l27.1,27.442h0V635.987l-27.1,27.442Z"
            transform="translate(-717.264 -525.349)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEA-2"
            data-name="bannerEA"
            d="M2333.246,718.314h0l27.1,27.442h0V635.987l-27.1,27.442Z"
            transform="translate(2907.81 1184.814) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEB"
            d="M2203.8,718.314V663.429l-27.1-27.442V745.756Z"
            transform="translate(-643.12 -525.349)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEB-2"
            data-name="bannerEB"
            d="M2203.8,718.314V663.429l-27.1-27.442V745.756Z"
            transform="translate(2833.666 1184.814) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEC"
            d="M2283.588,687.954h-55.566l27.783,27.442Z"
            transform="translate(-667.607 -549.898)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEC-2"
            data-name="bannerEC"
            d="M2283.588,687.954h-55.566l27.783,27.442Z"
            transform="translate(2858.153 1209.364) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerED"
            d="M2283.588,635.987h-55.566l27.783,27.442Z"
            transform="translate(-667.607 -525.306)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerED-2"
            data-name="bannerED"
            d="M2283.588,635.987h-55.566l27.783,27.442Z"
            transform="translate(2858.153 1184.771) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEE"
            d="M2255.805,739.92l-27.783,27.442h55.566Z"
            transform="translate(-667.607 -574.491)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEE-2"
            data-name="bannerEE"
            d="M2255.805,739.92l-27.783,27.442h55.566Z"
            transform="translate(2858.153 1233.957) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEF"
            d="M2255.805,791.887l-27.783,27.442h55.566Z"
            transform="translate(-667.607 -599.084)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEF-2"
            data-name="bannerEF"
            d="M2255.805,791.887l-27.783,27.442h55.566Z"
            transform="translate(2858.153 1258.55) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEG"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(1315.505 493.708) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEG-2"
            data-name="bannerEG"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(875.041 165.758) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEH"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(1313.178 496.046) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEH-2"
            data-name="bannerEH"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(877.368 163.42) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEI"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(1295.67 513.554) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEI-2"
            data-name="bannerEI"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(894.877 145.912) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEJ"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(1278.151 531.073) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEJ-2"
            data-name="bannerEJ"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(912.396 128.392) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEK"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(1260.616 603.322) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEK-2"
            data-name="bannerEK"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(929.93 56.144)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEL"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(-1227.885 -568.98)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEL-2"
            data-name="bannerEL"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(3418.431 1228.446) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEM"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(-1227.885 -568.98)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEM-2"
            data-name="bannerEM"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(3418.431 1228.446) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEN"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(-1178.836 -568.98)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEN-2"
            data-name="bannerEN"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(3369.382 1228.446) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEO"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(-900.302 -295.417)"
            fill="#23ce6b"
          />
          <path
            id="bannerEO-2"
            data-name="bannerEO"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(3090.848 954.883) rotate(180)"
            fill="#23ce6b"
          />
          <path
            id="bannerEP"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(-900.302 -295.417)"
            fill="#1f01b9"
          />
          <path
            id="bannerEP-2"
            data-name="bannerEP"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(3090.848 954.883) rotate(180)"
            fill="#1f01b9"
          />
          <path
            id="bannerEQ"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(-851.254 -295.417)"
            fill="#f5bb00"
          />
          <path
            id="bannerEQ-2"
            data-name="bannerEQ"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(3041.8 954.883) rotate(180)"
            fill="#f5bb00"
          />
          <path
            id="bannerER"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(1314.935 110.981) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerER-2"
            data-name="bannerER"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(875.611 548.485) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerES"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(-795.721 -32.665)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerES-2"
            data-name="bannerES"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(2986.267 692.131) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerET"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(-797.811 -34.745)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerET-2"
            data-name="bannerET"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(2988.357 694.21) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEU"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(-813.457 -50.391)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEU-2"
            data-name="bannerEU"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(3004.003 709.857) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEV"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(-829.113 -66.047)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEV-2"
            data-name="bannerEV"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(3019.66 725.513) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEW"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(1260.552 658.207) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEW-2"
            data-name="bannerEW"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(929.994 1.259) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEX"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(1205.731 658.207) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEX-2"
            data-name="bannerEX"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(984.815 1.259) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEY"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(1369.894 603.322)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEY-2"
            data-name="bannerEY"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(820.652 56.143) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEZ"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1369.894 603.322)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEZ-2"
            data-name="bannerEZ"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(820.652 56.143) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFA"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(1315.165 603.322)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFA-2"
            data-name="bannerFA"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(875.381 56.143) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFB"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(1479.47 603.322) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFB-2"
            data-name="bannerFB"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(711.076 56.144) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFC"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(1479.47 603.322) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFC-2"
            data-name="bannerFC"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(711.076 56.144) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFD"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(1479.251 658.207) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFD-2"
            data-name="bannerFD"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(711.295 1.259) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFE"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(1479.251 658.207) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFE-2"
            data-name="bannerFE"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(711.295 1.259) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFF"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(1533.961 658.207) rotate(-90)"
            fill="#ff312e"
          />
          <path
            id="bannerFF-2"
            data-name="bannerFF"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(656.585 1.259) rotate(90)"
            fill="#ff312e"
          />
          <path
            id="bannerFG"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(1533.961 658.207) rotate(-90)"
            fill="#1f01b9"
          />
          <path
            id="bannerFG-2"
            data-name="bannerFG"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(656.585 1.259) rotate(90)"
            fill="#1f01b9"
          />
          <path
            id="bannerFH"
            d="M27.64,0H0V27.629A61.611,61.611,0,0,1,27.64,0Z"
            transform="translate(1642.271 2.371) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFH-2"
            data-name="bannerFH"
            d="M27.64,0H0V27.629A61.611,61.611,0,0,1,27.64,0Z"
            transform="translate(548.275 657.095) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFI"
            d="M52.557,8.781V0A52.61,52.61,0,0,0,0,52.547H8.782A43.823,43.823,0,0,1,52.557,8.781Z"
            transform="translate(1639.933 4.698) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFI-2"
            data-name="bannerFI"
            d="M52.557,8.781V0A52.61,52.61,0,0,0,0,52.547H8.782A43.823,43.823,0,0,1,52.557,8.781Z"
            transform="translate(550.613 654.768) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFJ"
            d="M35.038,8.781V0A35.079,35.079,0,0,0,0,35.038H8.781A26.286,26.286,0,0,1,35.038,8.781Z"
            transform="translate(1622.425 22.218) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFJ-2"
            data-name="bannerFJ"
            d="M35.038,8.781V0A35.079,35.079,0,0,0,0,35.038H8.781A26.286,26.286,0,0,1,35.038,8.781Z"
            transform="translate(568.121 637.248) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFK"
            d="M17.53,8.781V0A17.542,17.542,0,0,0,0,17.519H8.782A8.748,8.748,0,0,1,17.53,8.781Z"
            transform="translate(1604.906 39.726) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFK-2"
            data-name="bannerFK"
            d="M17.53,8.781V0A17.542,17.542,0,0,0,0,17.519H8.782A8.748,8.748,0,0,1,17.53,8.781Z"
            transform="translate(585.64 619.74) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFL"
            d="M362.216,1137.2H307.565v54.651a54.657,54.657,0,0,1,54.651-54.651"
            transform="translate(788.865 -1081.107)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFL-2"
            data-name="bannerFL"
            d="M362.216,1137.2H307.565v54.651a54.657,54.657,0,0,1,54.651-54.651"
            transform="translate(1401.681 1740.572) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFM"
            d="M307.565,1241.136v54.65h54.651a54.657,54.657,0,0,1-54.651-54.65"
            transform="translate(788.865 -1130.39)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFM-2"
            data-name="bannerFM"
            d="M307.565,1241.136v54.65h54.651a54.657,54.657,0,0,1-54.651-54.65"
            transform="translate(1401.681 1789.855) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFN"
            d="M411.5,1295.786h54.65v-54.65a54.649,54.649,0,0,1-54.65,54.65"
            transform="translate(739.582 -1130.39)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFN-2"
            data-name="bannerFN"
            d="M411.5,1295.786h54.65v-54.65a54.649,54.649,0,0,1-54.65,54.65"
            transform="translate(1450.965 1789.855) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFO"
            d="M466.149,1191.853V1137.2H411.5a54.65,54.65,0,0,1,54.65,54.651"
            transform="translate(739.582 -1081.107)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFO-2"
            data-name="bannerFO"
            d="M466.149,1191.853V1137.2H411.5a54.65,54.65,0,0,1,54.65,54.651"
            transform="translate(1450.965 1740.572) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFP"
            d="M307.565,1191.853h54.651V1137.2a54.649,54.649,0,0,1-54.651,54.651"
            transform="translate(788.865 -1081.107)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFP-2"
            data-name="bannerFP"
            d="M307.565,1191.853h54.651V1137.2a54.649,54.649,0,0,1-54.651,54.651"
            transform="translate(1401.681 1740.572) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFQ"
            d="M362.216,1295.786v-54.65H307.565a54.649,54.649,0,0,1,54.651,54.65"
            transform="translate(788.865 -1130.39)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFQ-2"
            data-name="bannerFQ"
            d="M362.216,1295.786v-54.65H307.565a54.649,54.649,0,0,1,54.651,54.65"
            transform="translate(1401.681 1789.855) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFR"
            d="M466.149,1241.136H411.5v54.65a54.656,54.656,0,0,1,54.65-54.65"
            transform="translate(739.582 -1130.39)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFR-2"
            data-name="bannerFR"
            d="M466.149,1241.136H411.5v54.65a54.656,54.656,0,0,1,54.65-54.65"
            transform="translate(1450.965 1789.855) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFS"
            d="M411.5,1137.2v54.651h54.65A54.656,54.656,0,0,1,411.5,1137.2"
            transform="translate(739.582 -1081.107)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFS-2"
            data-name="bannerFS"
            d="M411.5,1137.2v54.651h54.65A54.656,54.656,0,0,1,411.5,1137.2"
            transform="translate(1450.965 1740.572) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFT"
            d="M619.366,1137.2H674.02v54.655Z"
            transform="translate(2342.941 -399.314) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFT-2"
            data-name="bannerFT"
            d="M619.366,1137.2H674.02v54.655Z"
            transform="translate(-152.395 1058.78) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFU"
            d="M674.02,1241.136v54.654H619.366Z"
            transform="translate(2392.22 -399.314) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFU-2"
            data-name="bannerFU"
            d="M674.02,1241.136v54.654H619.366Z"
            transform="translate(-201.674 1058.78) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFV"
            d="M515.432,1268.463v-27.327h27.327Z"
            transform="translate(2392.22 -350.035) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFV-2"
            data-name="bannerFV"
            d="M515.432,1268.463v-27.327h27.327Z"
            transform="translate(-201.674 1009.5) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFW"
            d="M542.759,1216.5H515.432v-27.327Z"
            transform="translate(2367.581 -350.035) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFW-2"
            data-name="bannerFW"
            d="M542.759,1216.5H515.432v-27.327Z"
            transform="translate(-177.034 1009.5) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFX"
            d="M619.366,1268.463v-27.327h27.327Z"
            transform="translate(2392.22 -399.314) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFX-2"
            data-name="bannerFX"
            d="M619.366,1268.463v-27.327h27.327Z"
            transform="translate(-201.674 1058.78) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFY"
            d="M646.693,1216.5H619.366v-27.327Z"
            transform="translate(2367.581 -399.314) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFY-2"
            data-name="bannerFY"
            d="M646.693,1216.5H619.366v-27.327Z"
            transform="translate(-177.034 1058.78) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFZ"
            d="M515.432,1137.2h54.655v54.655Z"
            transform="translate(2342.941 -350.035) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFZ-2"
            data-name="bannerFZ"
            d="M515.432,1137.2h54.655v54.655Z"
            transform="translate(-152.395 1009.5) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGA"
            d="M570.087,1241.136v54.654H515.432Z"
            transform="translate(2392.22 -350.035) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGA-2"
            data-name="bannerGA"
            d="M570.087,1241.136v54.654H515.432Z"
            transform="translate(-201.674 1009.5) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGB"
            d="M2023.387,635.987V690.54h-54.553a54.552,54.552,0,0,0,54.553-54.553"
            transform="translate(-872.55 -360.959)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGB-2"
            data-name="bannerGB"
            d="M2023.387,635.987V690.54h-54.553a54.552,54.552,0,0,0,54.553-54.553"
            transform="translate(3063.097 1020.425) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGC"
            d="M2127.321,690.54h-54.554V635.987a54.545,54.545,0,0,0,54.554,54.553"
            transform="translate(-921.93 -360.959)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGC-2"
            data-name="bannerGC"
            d="M2127.321,690.54h-54.554V635.987a54.545,54.545,0,0,0,54.554,54.553"
            transform="translate(3112.476 1020.425) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGD"
            d="M2072.767,635.987h54.554V690.54a54.552,54.552,0,0,0-54.554-54.553"
            transform="translate(-921.93 -360.959)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGD-2"
            data-name="bannerGD"
            d="M2072.767,635.987h54.554V690.54a54.552,54.552,0,0,0-54.554-54.553"
            transform="translate(3112.476 1020.425) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGE"
            d="M0,81.94H0l26.974,27.313h0V0L0,27.313Z"
            transform="translate(1205.739 411.86) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGE-2"
            data-name="bannerGE"
            d="M0,81.94H0l26.974,27.313h0V0L0,27.313Z"
            transform="translate(984.807 247.605) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGF"
            d="M26.974,81.94V27.313L0,0V109.253Z"
            transform="translate(1205.739 329.581) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGF-2"
            data-name="bannerGF"
            d="M26.974,81.94V27.313L0,0V109.253Z"
            transform="translate(984.807 329.884) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGG"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(1178.426 356.556) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGG-2"
            data-name="bannerGG"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(1012.121 302.91) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGH"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(1205.739 356.556) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGH-2"
            data-name="bannerGH"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(984.807 302.91) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGI"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(1151.112 356.556) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGI-2"
            data-name="bannerGI"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(1039.434 302.91) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGJ"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(1123.799 356.556) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGJ-2"
            data-name="bannerGJ"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(1066.747 302.91) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGK"
            d="M1486.653,1369.546h54.452V1424a54.455,54.455,0,0,0-54.452-54.453"
            transform="translate(-335.715 -930.71)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGK-2"
            data-name="bannerGK"
            d="M1486.653,1369.546h54.452V1424a54.455,54.455,0,0,0-54.452-54.453"
            transform="translate(2526.261 1590.176) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGL"
            d="M1541.105,1515.694h0v-54.453h-54.452A54.453,54.453,0,0,0,1541.105,1515.694Z"
            transform="translate(-335.715 -967.952)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGL-2"
            data-name="bannerGL"
            d="M1541.105,1515.694h0v-54.453h-54.452A54.453,54.453,0,0,0,1541.105,1515.694Z"
            transform="translate(2526.261 1627.418) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGM"
            d="M1449.411,1461.241h-54.453v54.453h0A54.453,54.453,0,0,0,1449.411,1461.241Z"
            transform="translate(-298.472 -967.952)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGM-2"
            data-name="bannerGM"
            d="M1449.411,1461.241h-54.453v54.453h0A54.453,54.453,0,0,0,1449.411,1461.241Z"
            transform="translate(2489.018 1627.418) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGN"
            d="M1449.411,1369.546h0V1424h-54.453A54.453,54.453,0,0,1,1449.411,1369.546Z"
            transform="translate(-298.472 -930.71)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGN-2"
            data-name="bannerGN"
            d="M1449.411,1369.546h0V1424h-54.453A54.453,54.453,0,0,1,1449.411,1369.546Z"
            transform="translate(2489.018 1590.176) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGO"
            d="M2543.385,898.738,2488.5,843.854h54.884Z"
            transform="translate(-1337.646 -842.647)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGO-2"
            data-name="bannerGO"
            d="M2543.385,898.738,2488.5,843.854h54.884Z"
            transform="translate(3528.193 1502.113) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGP"
            d="M2488.5,843.854l54.884,54.884H2488.5Z"
            transform="translate(-1337.646 -842.647)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGP-2"
            data-name="bannerGP"
            d="M2488.5,843.854l54.884,54.884H2488.5Z"
            transform="translate(3528.193 1502.113) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGQ"
            d="M2384.567,843.854l54.885,54.884h-54.885Z"
            transform="translate(-1288.597 -842.647)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGQ-2"
            data-name="bannerGQ"
            d="M2384.567,843.854l54.885,54.884h-54.885Z"
            transform="translate(3479.143 1502.113) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGR"
            d="M2307.48,1227.594h9.437l-36.284-36.284v9.437Z"
            transform="translate(-1185.361 -624.62)"
            fill="#ff312e"
          />
          <path
            id="bannerGR-2"
            data-name="bannerGR"
            d="M2307.48,1227.594h9.437l-36.284-36.284v9.437Z"
            transform="translate(3375.907 1284.086) rotate(180)"
            fill="#ff312e"
          />
          <path
            id="bannerGS"
            d="M2352.575,1182.5l-26.847-26.846h-9.437l36.284,36.284Z"
            transform="translate(-1202.069 -607.912)"
            fill="#ff312e"
          />
          <path
            id="bannerGS-2"
            data-name="bannerGS"
            d="M2352.575,1182.5l-26.847-26.846h-9.437l36.284,36.284Z"
            transform="translate(3392.615 1267.378) rotate(180)"
            fill="#ff312e"
          />
          <path
            id="bannerGT"
            d="M2280.634,1160.446l50.44,50.44h4.793v-4.793l-50.44-50.44h-4.792Z"
            transform="translate(-1185.361 -607.912)"
            fill="#ff312e"
          />
          <path
            id="bannerGT-2"
            data-name="bannerGT"
            d="M2280.634,1160.446l50.44,50.44h4.793v-4.793l-50.44-50.44h-4.792Z"
            transform="translate(3375.907 1267.378) rotate(180)"
            fill="#ff312e"
          />
          <path
            id="bannerGU"
            d="M2280.634,1088l36.284-36.284h-9.437l-26.846,26.846Z"
            transform="translate(-1130.128 -503.979)"
            fill="#1f01b9"
          />
          <path
            id="bannerGU-2"
            data-name="bannerGU"
            d="M2280.634,1088l36.284-36.284h-9.437l-26.846,26.846Z"
            transform="translate(3320.674 1163.444) rotate(180)"
            fill="#1f01b9"
          />
          <path
            id="bannerGV"
            d="M2352.575,1096.814v-9.437l-36.284,36.284h9.437Z"
            transform="translate(-1146.836 -520.687)"
            fill="#1f01b9"
          />
          <path
            id="bannerGV-2"
            data-name="bannerGV"
            d="M2352.575,1096.814v-9.437l-36.284,36.284h9.437Z"
            transform="translate(3337.382 1180.152) rotate(180)"
            fill="#1f01b9"
          />
          <path
            id="bannerGW"
            d="M2285.427,1106.953l50.44-50.44v-4.793h-4.793l-50.44,50.44v4.793Z"
            transform="translate(-1130.128 -503.979)"
            fill="#1f01b9"
          />
          <path
            id="bannerGW-2"
            data-name="bannerGW"
            d="M2285.427,1106.953l50.44-50.44v-4.793h-4.793l-50.44,50.44v4.793Z"
            transform="translate(3320.674 1163.444) rotate(180)"
            fill="#1f01b9"
          />
          <path
            id="bannerGX"
            d="M2221.794,1227.594l26.847-26.847v-9.437l-36.284,36.284Z"
            transform="translate(-1098.135 -569.387)"
            fill="#f5bb00"
          />
          <path
            id="bannerGX-2"
            data-name="bannerGX"
            d="M2221.794,1227.594l26.847-26.847v-9.437l-36.284,36.284Z"
            transform="translate(3288.681 1228.853) rotate(180)"
            fill="#f5bb00"
          />
          <path
            id="bannerGY"
            d="M2227.141,1155.653l-50.44,50.44v4.793h4.792l50.44-50.44v-4.793Z"
            transform="translate(-1081.428 -552.679)"
            fill="#f5bb00"
          />
          <path
            id="bannerGY-2"
            data-name="bannerGY"
            d="M2227.141,1155.653l-50.44,50.44v4.793h4.792l50.44-50.44v-4.793Z"
            transform="translate(3271.974 1212.145) rotate(180)"
            fill="#f5bb00"
          />
          <path
            id="bannerGZ"
            d="M2176.7,1182.5v9.437l36.284-36.284h-9.437Z"
            transform="translate(-1081.428 -552.679)"
            fill="#f5bb00"
          />
          <path
            id="bannerGZ-2"
            data-name="bannerGZ"
            d="M2176.7,1182.5v9.437l36.284-36.284h-9.437Z"
            transform="translate(3271.974 1212.145) rotate(180)"
            fill="#f5bb00"
          />
          <path
            id="bannerHA"
            d="M2221.794,1051.72h-9.437L2248.641,1088v-9.437Z"
            transform="translate(-1042.902 -448.746)"
            fill="#23ce6b"
          />
          <path
            id="bannerHA-2"
            data-name="bannerHA"
            d="M2221.794,1051.72h-9.437L2248.641,1088v-9.437Z"
            transform="translate(3233.449 1108.211) rotate(180)"
            fill="#23ce6b"
          />
          <path
            id="bannerHB"
            d="M2181.345,1051.72H2176.7v4.793l50.44,50.44h4.793v-4.793l-50.44-50.44Z"
            transform="translate(-1026.195 -448.746)"
            fill="#23ce6b"
          />
          <path
            id="bannerHB-2"
            data-name="bannerHB"
            d="M2181.345,1051.72H2176.7v4.793l50.44,50.44h4.793v-4.793l-50.44-50.44Z"
            transform="translate(3216.741 1108.211) rotate(180)"
            fill="#23ce6b"
          />
          <path
            id="bannerHC"
            d="M2176.7,1096.814l26.846,26.847h9.437l-36.284-36.284Z"
            transform="translate(-1026.195 -465.453)"
            fill="#23ce6b"
          />
          <path
            id="bannerHC-2"
            data-name="bannerHC"
            d="M2176.7,1096.814l26.846,26.847h9.437l-36.284-36.284Z"
            transform="translate(3216.741 1124.919) rotate(180)"
            fill="#23ce6b"
          />
          <path
            id="bannerHD"
            d="M2021.459,1104.346a52.631,52.631,0,0,0-52.625-52.626,52.624,52.624,0,0,0,52.625,52.626"
            transform="translate(-708.282 -828.826)"
            fill="#f5bb00"
          />
          <path
            id="bannerHD-2"
            data-name="bannerHD"
            d="M2021.459,1104.346a52.631,52.631,0,0,0-52.625-52.626,52.624,52.624,0,0,0,52.625,52.626"
            transform="translate(2898.828 1488.292) rotate(180)"
            fill="#f5bb00"
          />
          <path
            id="bannerA-3"
            data-name="bannerA"
            d="M27.443,27.443V0H0L13.721,13.722Z"
            transform="translate(356.774 1.385)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerB-3"
            data-name="bannerB"
            d="M27.442,0H0V27.443L13.721,13.722Z"
            transform="translate(384.171 1.385)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerC-3"
            data-name="bannerC"
            d="M0,0V27.64H27.629A61.6,61.6,0,0,1,0,0Z"
            transform="translate(438.046 83.514)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerD-3"
            data-name="bannerD"
            d="M8.781,0H0A52.6,52.6,0,0,0,52.547,52.547V43.765A43.814,43.814,0,0,1,8.781,0Z"
            transform="translate(440.384 56.27)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerE-3"
            data-name="bannerE"
            d="M35.039,35.038V26.257A26.286,26.286,0,0,1,8.782,0H0A35.079,35.079,0,0,0,35.039,35.038Z"
            transform="translate(457.892 56.27)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerF-3"
            data-name="bannerF"
            d="M8.781,0H0A17.54,17.54,0,0,0,17.52,17.519V8.738A8.747,8.747,0,0,1,8.781,0Z"
            transform="translate(475.411 56.27)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerG-3"
            data-name="bannerG"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(438.046 1.385)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerH-3"
            data-name="bannerH"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.817,43.817,0,0,1,52.547,8.781Z"
            transform="translate(440.384 3.712)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerI-3"
            data-name="bannerI"
            d="M35.039,8.781V0A35.081,35.081,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(457.892 21.221)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerJ-3"
            data-name="bannerJ"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(475.411 38.739)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerK-3"
            data-name="bannerK"
            d="M0,27.629H27.64V0A61.611,61.611,0,0,1,0,27.629Z"
            transform="translate(520.175 83.525)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerL-3"
            data-name="bannerL"
            d="M0,43.765v8.781A52.61,52.61,0,0,0,52.557,0H43.775A43.823,43.823,0,0,1,0,43.765Z"
            transform="translate(492.931 56.27)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerM-3"
            data-name="bannerM"
            d="M0,26.257v8.781A35.079,35.079,0,0,0,35.038,0H26.256A26.286,26.286,0,0,1,0,26.257Z"
            transform="translate(492.931 56.27)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerN-3"
            data-name="bannerN"
            d="M0,8.738v8.781A17.542,17.542,0,0,0,17.53,0H8.748A8.748,8.748,0,0,1,0,8.738Z"
            transform="translate(492.931 56.27)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerO-3"
            data-name="bannerO"
            d="M54.884,54.884V0H0L27.442,27.442Z"
            transform="translate(383.677 56.27)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerP-3"
            data-name="bannerP"
            d="M54.885,0H0V54.884L27.442,27.442Z"
            transform="translate(328.981 56.27)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerQ-3"
            data-name="bannerQ"
            d="M0,0V27.442H27.442L13.721,13.721Z"
            transform="translate(383.74 83.712)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerR-3"
            data-name="bannerR"
            d="M0,27.442H27.443V0L13.721,13.721Z"
            transform="translate(356.386 83.712)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerS-3"
            data-name="bannerS"
            d="M0,54.885H54.884V0L27.442,27.443Z"
            transform="translate(383.677 1.385)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerT-3"
            data-name="bannerT"
            d="M0,0V54.885H54.885L27.442,27.443Z"
            transform="translate(328.981 1.385)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerU-3"
            data-name="bannerU"
            d="M0,0V54.885H54.885A54.883,54.883,0,0,1,0,0"
            transform="translate(438.046 275.041)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerV-3"
            data-name="bannerV"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(492.931 275.041)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerW-3"
            data-name="bannerW"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(492.931 220.301)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerX-3"
            data-name="bannerX"
            d="M0,54.885H54.885V0A54.89,54.89,0,0,0,0,54.885"
            transform="translate(438.046 220.301)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerY-3"
            data-name="bannerY"
            d="M54.885,54.885A54.884,54.884,0,0,0,0,0V27.443A27.455,27.455,0,0,1,27.454,54.885,27.448,27.448,0,0,1,0,82.327V109.77A54.877,54.877,0,0,0,54.885,54.885"
            transform="translate(383.657 110.812)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerZ-3"
            data-name="bannerZ"
            d="M54.885,54.885A54.884,54.884,0,0,0,0,0,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(329.02 110.845)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAA-3"
            data-name="bannerAA"
            d="M0,54.885A54.891,54.891,0,0,0,54.885,0h-.011A54.872,54.872,0,0,0,0,54.874Z"
            transform="translate(329.019 165.574)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAB-3"
            data-name="bannerAB"
            d="M27.333,9.111l-9.111,9.111,9.111,9.111-9.111,9.111L0,18.222,18.222,0Z"
            transform="translate(238.133 147.421)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAC-3"
            data-name="bannerAC"
            d="M9.111,0l9.111,9.111L27.333,0l9.111,9.111L18.222,27.333,0,9.111Z"
            transform="translate(256.286 174.691)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAD-3"
            data-name="bannerAD"
            d="M27.333,27.333l-9.111-9.111-9.111,9.1L0,18.211,18.222,0,36.444,18.211Z"
            transform="translate(256.286 129.261)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAE-3"
            data-name="bannerAE"
            d="M0,27.333l9.111-9.111L0,9.111,9.111,0,27.333,18.222,9.111,36.443Z"
            transform="translate(283.541 147.421)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAF-3"
            data-name="bannerAF"
            d="M0,0H54.884V54.885Z"
            transform="translate(274.421 110.842)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAG-3"
            data-name="bannerAG"
            d="M0,54.885V0H54.885Z"
            transform="translate(219.726 110.842)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAH-3"
            data-name="bannerAH"
            d="M54.885,54.885H0V0Z"
            transform="translate(219.726 165.583)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAI-3"
            data-name="bannerAI"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(219.726 1.385)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAJ-3"
            data-name="bannerAJ"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(219.726 1.385)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAK-3"
            data-name="bannerAK"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(274.421 1.385)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAL-3"
            data-name="bannerAL"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(274.421 1.385)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAM-3"
            data-name="bannerAM"
            d="M36.055,0,0,36.055V26.677L26.677,0Z"
            transform="translate(383.677 548.604)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAN-3"
            data-name="bannerAN"
            d="M9.378,36.055H0L36.055,0V9.378Z"
            transform="translate(402.507 567.433)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAO-3"
            data-name="bannerAO"
            d="M54.885,4.762,4.762,54.885H0V50.122L50.122,0h4.763Z"
            transform="translate(383.677 548.604)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAP-3"
            data-name="bannerAP"
            d="M36.055,26.677v9.378L0,0H9.378Z"
            transform="translate(347.812 548.604)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAQ-3"
            data-name="bannerAQ"
            d="M26.677,36.055,0,9.378V0L36.055,36.055Z"
            transform="translate(328.982 567.433)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAR-3"
            data-name="bannerAR"
            d="M4.763,0,54.885,50.122v4.762H50.122L0,4.762V0Z"
            transform="translate(328.982 548.604)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAS-3"
            data-name="bannerAS"
            d="M36.055,9.378,9.378,36.055H0L36.055,0Z"
            transform="translate(347.812 512.71)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAT-3"
            data-name="bannerAT"
            d="M0,50.122,50.122,0h4.762V4.762L4.763,54.885H0Z"
            transform="translate(328.982 493.88)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAU-3"
            data-name="bannerAU"
            d="M26.677,0h9.378L0,36.055V26.677Z"
            transform="translate(328.982 493.88)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAV-3"
            data-name="bannerAV"
            d="M0,109.769H0A54.883,54.883,0,0,0,54.884,54.885,54.891,54.891,0,0,0,0,0Z"
            transform="translate(274.42 439.013)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAW-3"
            data-name="bannerAW"
            d="M54.885,0H0V54.885A54.891,54.891,0,0,1,54.885,0"
            transform="translate(219.725 439.204)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAX-3"
            data-name="bannerAX"
            d="M0,0V54.885H54.885A54.884,54.884,0,0,1,0,0"
            transform="translate(219.769 493.882)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAY-3"
            data-name="bannerAY"
            d="M54.884,54.885V0H0A54.891,54.891,0,0,1,54.884,54.885"
            transform="translate(274.42 439.204)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAZ-3"
            data-name="bannerAZ"
            d="M54.885,54.885A54.884,54.884,0,0,0,0,0,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(383.672 384.498)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBA-3"
            data-name="bannerBA"
            d="M0,54.885A54.891,54.891,0,0,0,54.885,0h-.011A54.872,54.872,0,0,0,0,54.874Z"
            transform="translate(328.978 384.499)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBB-3"
            data-name="bannerBB"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(328.852 384.644) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBC-3"
            data-name="bannerBC"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(547.815 384.5) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBD-3"
            data-name="bannerBD"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.815 384.5) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBE-3"
            data-name="bannerBE"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.815 329.759) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBF-3"
            data-name="bannerBF"
            d="M54.884,0A54.884,54.884,0,0,1,0,54.885,54.884,54.884,0,0,1,54.884,0"
            transform="translate(165.349 165.58)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBG-3"
            data-name="bannerBG"
            d="M54.885,54.885A54.891,54.891,0,0,0,0,0,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(110.464 165.58)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBH-3"
            data-name="bannerBH"
            d="M0,54.884A54.891,54.891,0,0,0,54.885,0,54.883,54.883,0,0,0,0,54.884"
            transform="translate(110.464 220.321)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBI-3"
            data-name="bannerBI"
            d="M54.885,0V54.885H0A54.876,54.876,0,0,0,54.885,0"
            transform="translate(492.931 439.203)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBJ-3"
            data-name="bannerBJ"
            d="M0,54.885V0H54.885A54.883,54.883,0,0,0,0,54.885"
            transform="translate(492.931 439.203)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBK-3"
            data-name="bannerBK"
            d="M0,0H54.885V54.885A54.876,54.876,0,0,0,0,0"
            transform="translate(438.046 439.203)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBL-3"
            data-name="bannerBL"
            d="M54.885,54.885H0V0A54.883,54.883,0,0,0,54.885,54.885"
            transform="translate(438.046 439.203)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBM-3"
            data-name="bannerBM"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(438.046 493.881)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBN-3"
            data-name="bannerBN"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(438.046 493.881)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBO-3"
            data-name="bannerBO"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(492.93 493.881)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBP-3"
            data-name="bannerBP"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(492.93 493.881)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBQ-3"
            data-name="bannerBQ"
            d="M109.769,0H0A54.884,54.884,0,0,1,54.885,54.885,54.891,54.891,0,0,1,109.769,0"
            transform="translate(110.471 329.76)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBR-3"
            data-name="bannerBR"
            d="M0,54.884H109.769A54.89,54.89,0,0,1,54.885,0,54.884,54.884,0,0,1,0,54.884"
            transform="translate(110.471 384.501)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBS-3"
            data-name="bannerBS"
            d="M35.181,70.362V0a35.181,35.181,0,0,0,0,70.362"
            transform="translate(184.814 349.387)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBT-3"
            data-name="bannerBT"
            d="M0,0V70.362A35.182,35.182,0,0,0,35.181,35.181,35.189,35.189,0,0,0,0,0"
            transform="translate(110.471 349.387)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBU-3"
            data-name="bannerBU"
            d="M54.885,0H0V54.885Z"
            transform="translate(219.727 384.495)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBV-3"
            data-name="bannerBV"
            d="M0,0V54.885H54.885Z"
            transform="translate(274.422 329.765)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBW-3"
            data-name="bannerBW"
            d="M0,0,54.885,54.885V0Z"
            transform="translate(274.422 329.765)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBX-3"
            data-name="bannerBX"
            d="M0,54.885,54.885,0H0Z"
            transform="translate(274.422 384.506)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBY-3"
            data-name="bannerBY"
            d="M54.885,0,0,54.885H54.885Z"
            transform="translate(274.422 384.506)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBZ-3"
            data-name="bannerBZ"
            d="M0,0V54.885H54.885Z"
            transform="translate(219.727 329.765)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCA-3"
            data-name="bannerCA"
            d="M9.378,0H0L36.055,36.055V26.677Z"
            transform="translate(183.941 56.269)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCB-3"
            data-name="bannerCB"
            d="M4.615,0H0V4.762L50.122,54.885h4.762V50.122L4.762,0Z"
            transform="translate(165.355 56.269)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCC-3"
            data-name="bannerCC"
            d="M0,9.378,26.677,36.055h9.378L0,0Z"
            transform="translate(165.355 75.098)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCD-3"
            data-name="bannerCD"
            d="M0,36.055,36.055,0H26.677L0,26.677Z"
            transform="translate(110.471 110.853)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCE-3"
            data-name="bannerCE"
            d="M36.055,9.378V0L0,36.055H9.378Z"
            transform="translate(129.3 129.635)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCF-3"
            data-name="bannerCF"
            d="M4.762,54.885,54.885,4.762V0H50.122L0,50.122v4.762Z"
            transform="translate(110.471 110.844)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCG-3"
            data-name="bannerCG"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(165.354 129.636)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCH-3"
            data-name="bannerCH"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(183.94 110.854)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCI-3"
            data-name="bannerCI"
            d="M0,4.762,50.122,54.885h4.762V50.122L4.762,0H0Z"
            transform="translate(165.354 110.845)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCJ-3"
            data-name="bannerCJ"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(129.297 75.1)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCK-3"
            data-name="bannerCK"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(110.468 56.27)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCL-3"
            data-name="bannerCL"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(110.468 56.27)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCM-3"
            data-name="bannerCM"
            d="M0,0V27.442H27.442L13.721,13.721Z"
            transform="translate(274.46 576.047)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCN-3"
            data-name="bannerCN"
            d="M0,27.442H27.442V0L13.721,13.721Z"
            transform="translate(247.106 576.047)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCO-3"
            data-name="bannerCO"
            d="M54.884,0H0V54.885L27.442,27.443Z"
            transform="translate(219.727 548.605)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCP-3"
            data-name="bannerCP"
            d="M54.885,54.885V0H0L27.442,27.443Z"
            transform="translate(274.422 548.605)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCQ-3"
            data-name="bannerCQ"
            d="M0,27.443V0H27.443Z"
            transform="translate(165.352 439.284) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCR-3"
            data-name="bannerCR"
            d="M27.443,27.443H0V0Z"
            transform="translate(192.795 439.284) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCS-3"
            data-name="bannerCS"
            d="M0,0H54.885V54.885Z"
            transform="translate(220.237 439.232) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCT-3"
            data-name="bannerCT"
            d="M54.885,0V54.884H0Z"
            transform="translate(165.352 439.232) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCU-3"
            data-name="bannerCU"
            d="M0,0V27.64H27.629A61.6,61.6,0,0,1,0,0Z"
            transform="translate(301.659 275.194) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCV-3"
            data-name="bannerCV"
            d="M8.781,0H0A52.6,52.6,0,0,0,52.547,52.547V43.765A43.814,43.814,0,0,1,8.781,0Z"
            transform="translate(274.414 272.856) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCW-3"
            data-name="bannerCW"
            d="M35.039,35.038V26.257A26.286,26.286,0,0,1,8.782,0H0A35.079,35.079,0,0,0,35.039,35.038Z"
            transform="translate(274.414 255.348) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCX-3"
            data-name="bannerCX"
            d="M8.781,0H0A17.54,17.54,0,0,0,17.52,17.519V8.738A8.747,8.747,0,0,1,8.781,0Z"
            transform="translate(274.414 237.828) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCY-3"
            data-name="bannerCY"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(219.719 275.194) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCZ-3"
            data-name="bannerCZ"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(222.046 272.856) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDA-3"
            data-name="bannerDA"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(239.555 255.348) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDB-3"
            data-name="bannerDB"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(257.074 237.828) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDC-3"
            data-name="bannerDC"
            d="M54.884,54.885H0V0Z"
            transform="translate(328.978 275.044)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDD-3"
            data-name="bannerDD"
            d="M0,54.884V0H54.884Z"
            transform="translate(328.978 220.304)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDE-3"
            data-name="bannerDE"
            d="M27.443,0V27.443H0Z"
            transform="translate(411.09 247.703)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDF-3"
            data-name="bannerDF"
            d="M0,0H27.443V27.443Z"
            transform="translate(411.09 275.077)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDG-3"
            data-name="bannerDG"
            d="M27.442,0V27.443H0Z"
            transform="translate(356.383 247.703)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDH-3"
            data-name="bannerDH"
            d="M0,0H27.442V27.443Z"
            transform="translate(356.383 275.077)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDI-3"
            data-name="bannerDI"
            d="M54.885,54.885H0V0Z"
            transform="translate(383.673 275.044)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDJ-3"
            data-name="bannerDJ"
            d="M0,54.884V0H54.885Z"
            transform="translate(383.673 220.304)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDK-3"
            data-name="bannerDK"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(328.982 439.226)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDL-3"
            data-name="bannerDL"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(328.982 439.226)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDM-3"
            data-name="bannerDM"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(383.677 439.226)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDN-3"
            data-name="bannerDN"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(110.471 56.269) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDO-3"
            data-name="bannerDO"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(437.95 348.57)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDP-3"
            data-name="bannerDP"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(456.535 329.789)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDQ-3"
            data-name="bannerDQ"
            d="M0,4.762,50.122,54.885h4.762V50.122L4.762,0H0Z"
            transform="translate(437.705 329.761)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDR-3"
            data-name="bannerDR"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(456.535 403.312)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDS-3"
            data-name="bannerDS"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(437.705 384.499)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDT-3"
            data-name="bannerDT"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(437.951 384.53)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDU-3"
            data-name="bannerDU"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(238.516 329.903) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDV-3"
            data-name="bannerDV"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(219.748 311.122) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDW-3"
            data-name="bannerDW"
            d="M0,4.762,50.122,54.885h4.763V50.122L4.762,0H0Z"
            transform="translate(219.731 329.928) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDX-3"
            data-name="bannerDX"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(293.216 311.122) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDY-3"
            data-name="bannerDY"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(274.422 329.928) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDZ-3"
            data-name="bannerDZ"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(274.449 329.903) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEA-3"
            data-name="bannerEA"
            d="M0,82.327H0l27.1,27.442h0V0L0,27.442Z"
            transform="translate(520.714 110.816)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEB-3"
            data-name="bannerEB"
            d="M27.1,82.327V27.442L0,0V109.769Z"
            transform="translate(438.313 110.816)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEC-3"
            data-name="bannerEC"
            d="M55.566,0H0L27.783,27.442Z"
            transform="translate(465.148 138.233)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerED-3"
            data-name="bannerED"
            d="M55.566,0H0L27.783,27.442Z"
            transform="translate(465.148 110.859)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEE-3"
            data-name="bannerEE"
            d="M27.783,0,0,27.442H55.566Z"
            transform="translate(465.148 165.607)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEF-3"
            data-name="bannerEF"
            d="M27.783,0,0,27.442H55.566Z"
            transform="translate(465.148 192.98)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEG-3"
            data-name="bannerEG"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(220.237 493.886) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEH-3"
            data-name="bannerEH"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(217.91 496.224) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEI-3"
            data-name="bannerEI"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(200.402 513.732) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEJ-3"
            data-name="bannerEJ"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(182.883 531.251) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEK-3"
            data-name="bannerEK"
            d="M0,0H54.884V54.885A54.89,54.89,0,0,1,0,0"
            transform="translate(110.464 548.615)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEL-3"
            data-name="bannerEL"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(165.348 275.052)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEM-3"
            data-name="bannerEM"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(165.348 275.052)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEN-3"
            data-name="bannerEN"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(110.463 275.052)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEO-3"
            data-name="bannerEO"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(492.931 548.615)"
            fill="#23ce6b"
          />
          <path
            id="bannerEP-3"
            data-name="bannerEP"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(492.931 548.615)"
            fill="#1f01b9"
          />
          <path
            id="bannerEQ-3"
            data-name="bannerEQ"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(438.046 548.615)"
            fill="#f5bb00"
          />
          <path
            id="bannerER-3"
            data-name="bannerER"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(219.667 111.158) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerES-3"
            data-name="bannerES"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(493.578 603.5)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerET-3"
            data-name="bannerET"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.817,43.817,0,0,1,52.547,8.781Z"
            transform="translate(495.916 605.827)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEU-3"
            data-name="bannerEU"
            d="M35.039,8.781V0A35.081,35.081,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(513.424 623.336)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEV-3"
            data-name="bannerEV"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(530.944 640.854)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEW-3"
            data-name="bannerEW"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(165.285 658.384) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEX-3"
            data-name="bannerEX"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(110.463 658.384) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEY-3"
            data-name="bannerEY"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(274.627 603.5)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEZ-3"
            data-name="bannerEZ"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(274.627 603.5)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFA-3"
            data-name="bannerFA"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(219.897 603.5)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFB-3"
            data-name="bannerFB"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(384.202 603.5) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFC-3"
            data-name="bannerFC"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(384.202 603.5) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFD-3"
            data-name="bannerFD"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(383.983 658.385) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFE-3"
            data-name="bannerFE"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(383.983 658.385) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFF-3"
            data-name="bannerFF"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(438.693 658.385) rotate(-90)"
            fill="#ff312e"
          />
          <path
            id="bannerFG-3"
            data-name="bannerFG"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(438.693 658.385) rotate(-90)"
            fill="#1f01b9"
          />
          <path
            id="bannerFH-3"
            data-name="bannerFH"
            d="M27.64,0H0V27.629A61.611,61.611,0,0,1,27.64,0Z"
            transform="translate(547.004 2.548) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFI-3"
            data-name="bannerFI"
            d="M52.557,8.781V0A52.61,52.61,0,0,0,0,52.547H8.782A43.823,43.823,0,0,1,52.557,8.781Z"
            transform="translate(544.666 4.876) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFJ-3"
            data-name="bannerFJ"
            d="M35.038,8.781V0A35.079,35.079,0,0,0,0,35.038H8.781A26.286,26.286,0,0,1,35.038,8.781Z"
            transform="translate(527.157 22.395) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFK-3"
            data-name="bannerFK"
            d="M17.53,8.781V0A17.542,17.542,0,0,0,0,17.519H8.782A8.748,8.748,0,0,1,17.53,8.781Z"
            transform="translate(509.638 39.903) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFL-3"
            data-name="bannerFL"
            d="M54.651,0H0V54.651A54.657,54.657,0,0,1,54.651,0"
            transform="translate(1.162 56.273)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFM-3"
            data-name="bannerFM"
            d="M0,0V54.65H54.651A54.657,54.657,0,0,1,0,0"
            transform="translate(1.162 110.924)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFN-3"
            data-name="bannerFN"
            d="M0,54.65H54.65V0A54.649,54.649,0,0,1,0,54.65"
            transform="translate(55.813 110.924)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFO-3"
            data-name="bannerFO"
            d="M54.65,54.651V0H0A54.65,54.65,0,0,1,54.65,54.651"
            transform="translate(55.813 56.273)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFP-3"
            data-name="bannerFP"
            d="M0,54.651H54.651V0A54.649,54.649,0,0,1,0,54.651"
            transform="translate(1.162 56.273)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFQ-3"
            data-name="bannerFQ"
            d="M54.651,54.65V0H0A54.649,54.649,0,0,1,54.651,54.65"
            transform="translate(1.162 110.924)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFR-3"
            data-name="bannerFR"
            d="M54.65,0H0V54.65A54.656,54.656,0,0,1,54.65,0"
            transform="translate(55.813 110.924)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFS-3"
            data-name="bannerFS"
            d="M0,0V54.651H54.65A54.656,54.656,0,0,1,0,0"
            transform="translate(55.813 56.273)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFT-3"
            data-name="bannerFT"
            d="M0,0H54.654V54.655Z"
            transform="translate(110.471 220.23) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFU-3"
            data-name="bannerFU"
            d="M54.654,0V54.654H0Z"
            transform="translate(55.816 220.23) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFV-3"
            data-name="bannerFV"
            d="M0,27.327V0H27.327Z"
            transform="translate(55.816 165.575) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFW-3"
            data-name="bannerFW"
            d="M27.327,27.327H0V0Z"
            transform="translate(83.144 165.575) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFX-3"
            data-name="bannerFX"
            d="M0,27.327V0H27.327Z"
            transform="translate(55.816 220.23) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFY-3"
            data-name="bannerFY"
            d="M27.327,27.327H0V0Z"
            transform="translate(83.144 220.23) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFZ-3"
            data-name="bannerFZ"
            d="M0,0H54.655V54.655Z"
            transform="translate(110.471 165.575) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGA-3"
            data-name="bannerGA"
            d="M54.655,0V54.654H0Z"
            transform="translate(55.816 165.575) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGB-3"
            data-name="bannerGB"
            d="M54.553,0V54.553H0A54.552,54.552,0,0,0,54.553,0"
            transform="translate(1.016 275.205)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGC-3"
            data-name="bannerGC"
            d="M54.554,54.553H0V0A54.545,54.545,0,0,0,54.554,54.553"
            transform="translate(55.569 275.205)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGD-3"
            data-name="bannerGD"
            d="M0,0H54.554V54.553A54.552,54.552,0,0,0,0,0"
            transform="translate(55.569 275.205)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGE-3"
            data-name="bannerGE"
            d="M0,81.94H0l26.974,27.313h0V0L0,27.313Z"
            transform="translate(110.471 412.038) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGF-3"
            data-name="bannerGF"
            d="M26.974,81.94V27.313L0,0V109.253Z"
            transform="translate(110.471 329.759) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGG-3"
            data-name="bannerGG"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(83.158 356.734) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGH-3"
            data-name="bannerGH"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(110.471 356.734) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGI-3"
            data-name="bannerGI"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(55.845 356.734) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGJ-3"
            data-name="bannerGJ"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(28.531 356.734) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGK-3"
            data-name="bannerGK"
            d="M0,0H54.452V54.453A54.455,54.455,0,0,0,0,0"
            transform="translate(55.671 439.013)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGL-3"
            data-name="bannerGL"
            d="M54.452,54.453h0V0H0A54.453,54.453,0,0,0,54.452,54.453Z"
            transform="translate(55.671 493.466)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGM-3"
            data-name="bannerGM"
            d="M54.453,0H0V54.453H0A54.453,54.453,0,0,0,54.453,0Z"
            transform="translate(1.218 493.466)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGN-3"
            data-name="bannerGN"
            d="M54.453,0h0V54.453H0A54.453,54.453,0,0,1,54.453,0Z"
            transform="translate(1.218 439.013)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGO-3"
            data-name="bannerGO"
            d="M54.884,54.884,0,0H54.884Z"
            transform="translate(55.587 1.385)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGP-3"
            data-name="bannerGP"
            d="M0,0,54.884,54.884H0Z"
            transform="translate(55.587 1.385)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGQ-3"
            data-name="bannerGQ"
            d="M0,0,54.885,54.884H0Z"
            transform="translate(0.702 1.385)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGR-3"
            data-name="bannerGR"
            d="M26.846,36.284h9.437L0,0V9.437Z"
            transform="translate(0.005 566.868)"
            fill="#ff312e"
          />
          <path
            id="bannerGS-3"
            data-name="bannerGS"
            d="M36.284,26.846,9.437,0H0L36.284,36.284Z"
            transform="translate(18.954 547.919)"
            fill="#ff312e"
          />
          <path
            id="bannerGT-3"
            data-name="bannerGT"
            d="M0,4.793l50.44,50.44h4.793V50.44L4.792,0H0Z"
            transform="translate(0.005 547.919)"
            fill="#ff312e"
          />
          <path
            id="bannerGU-3"
            data-name="bannerGU"
            d="M0,36.284,36.284,0H26.846L0,26.846Z"
            transform="translate(55.238 547.919)"
            fill="#1f01b9"
          />
          <path
            id="bannerGV-3"
            data-name="bannerGV"
            d="M36.284,9.437V0L0,36.284H9.437Z"
            transform="translate(74.187 566.868)"
            fill="#1f01b9"
          />
          <path
            id="bannerGW-3"
            data-name="bannerGW"
            d="M4.792,55.233l50.44-50.44V0H50.44L0,50.44v4.793Z"
            transform="translate(55.238 547.919)"
            fill="#1f01b9"
          />
          <path
            id="bannerGX-3"
            data-name="bannerGX"
            d="M9.437,36.284,36.284,9.437V0L0,36.284Z"
            transform="translate(18.954 622.101)"
            fill="#f5bb00"
          />
          <path
            id="bannerGY-3"
            data-name="bannerGY"
            d="M50.44,0,0,50.44v4.793H4.792l50.44-50.44V0Z"
            transform="translate(0.005 603.152)"
            fill="#f5bb00"
          />
          <path
            id="bannerGZ-3"
            data-name="bannerGZ"
            d="M0,26.846v9.437L36.284,0H26.846Z"
            transform="translate(0.005 603.152)"
            fill="#f5bb00"
          />
          <path
            id="bannerHA-3"
            data-name="bannerHA"
            d="M9.437,0H0L36.284,36.284V26.846Z"
            transform="translate(74.187 603.152)"
            fill="#23ce6b"
          />
          <path
            id="bannerHB-3"
            data-name="bannerHB"
            d="M4.645,0H0V4.793l50.44,50.44h4.793V50.44L4.792,0Z"
            transform="translate(55.239 603.152)"
            fill="#23ce6b"
          />
          <path
            id="bannerHC-3"
            data-name="bannerHC"
            d="M0,9.437,26.846,36.284h9.437L0,0Z"
            transform="translate(55.239 622.101)"
            fill="#23ce6b"
          />
          <path
            id="bannerHD-3"
            data-name="bannerHD"
            d="M52.625,52.626A52.631,52.631,0,0,0,0,0,52.624,52.624,0,0,0,52.625,52.626"
            transform="translate(165.285 223.072)"
            fill="#f5bb00"
          />
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
