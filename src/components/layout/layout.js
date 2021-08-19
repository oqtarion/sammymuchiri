/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { motion } from "framer-motion"

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

  // const container = {
  //   initial: { opacity: 0 },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       when: "beforeChildren",
  //       type: "spring",
  //       delayChildren: 0.2,
  //       staggerDirection: 1,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // }

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

  // className ="one"

  return (
    <div className="landing">
      <div className="bg-one">
        <svg width="549.022" height="659.414" viewBox="0 0 549.022 659.414">
          <path
            id="bannerA"
            d="M386.974,956.777V929.335H359.532l13.721,13.722Z"
            transform="translate(-2.758 -928.128)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerB"
            d="M438.941,929.335H411.5v27.443l13.721-13.721Z"
            transform="translate(-27.328 -928.128)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerC"
            d="M2384.567,791.513v27.64H2412.2A61.6,61.6,0,0,1,2384.567,791.513Z"
            transform="translate(-1946.521 -708.176)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerD"
            d="M2397.776,739.92H2389a52.6,52.6,0,0,0,52.547,52.547v-8.781A43.814,43.814,0,0,1,2397.776,739.92Z"
            transform="translate(-1948.611 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerE"
            d="M2457.188,774.958v-8.781a26.286,26.286,0,0,1-26.257-26.257h-8.782A35.079,35.079,0,0,0,2457.188,774.958Z"
            transform="translate(-1964.257 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerF"
            d="M2464.106,739.92h-8.781a17.54,17.54,0,0,0,17.52,17.519v-8.781A8.747,8.747,0,0,1,2464.106,739.92Z"
            transform="translate(-1979.913 -683.828)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerG"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(-1946.521 -634.78)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerH"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(-1948.611 -636.86)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerI"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(-1964.257 -652.506)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerJ"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(-1979.913 -668.162)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerK"
            d="M2540.093,819.163h27.64V791.534A61.611,61.611,0,0,1,2540.093,819.163Z"
            transform="translate(-2019.918 -708.186)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerL"
            d="M2488.5,783.685v8.781a52.61,52.61,0,0,0,52.557-52.547h-8.782A43.823,43.823,0,0,1,2488.5,783.685Z"
            transform="translate(-1995.57 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerM"
            d="M2488.5,766.177v8.781a35.079,35.079,0,0,0,35.038-35.038h-8.781A26.286,26.286,0,0,1,2488.5,766.177Z"
            transform="translate(-1995.57 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerN"
            d="M2488.5,748.658v8.781a17.542,17.542,0,0,0,17.53-17.519h-8.782A8.748,8.748,0,0,1,2488.5,748.658Z"
            transform="translate(-1995.57 -683.828)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerO"
            d="M466.383,1088.153v-54.884H411.5l27.442,27.442Z"
            transform="translate(-27.823 -977.177)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerP"
            d="M362.45,1033.269H307.565v54.884l27.442-27.442Z"
            transform="translate(21.416 -977.177)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerQ"
            d="M411.5,1085.236v27.442h27.442l-13.721-13.721Z"
            transform="translate(-27.76 -1001.701)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerR"
            d="M359.532,1112.678h27.443v-27.442l-13.721,13.721Z"
            transform="translate(-3.146 -1001.701)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerS"
            d="M411.5,984.22h54.884V929.335l-27.442,27.443Z"
            transform="translate(-27.823 -928.128)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerT"
            d="M307.565,929.335V984.22H362.45l-27.442-27.443Z"
            transform="translate(21.416 -928.128)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerU"
            d="M2176.7,947.787v54.885h54.885a54.883,54.883,0,0,1-54.885-54.885"
            transform="translate(-1738.655 -672.924)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerV"
            d="M2335.518,1002.672h-54.884V947.787a54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(-1787.703 -672.924)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerW"
            d="M2280.634,898.739h0V843.854h54.884a54.883,54.883,0,0,1-54.884,54.885"
            transform="translate(-1787.703 -623.731)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerX"
            d="M2176.7,898.739h54.885V843.854a54.89,54.89,0,0,0-54.885,54.885"
            transform="translate(-1738.655 -623.731)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerY"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(438.542 220.404) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(-1743.748 -1044.986)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(-1743.748 -886.323)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAB"
            d="M785.554,1423.608l-9.111,9.111,9.111,9.111-9.111,9.111-18.222-18.222,18.222-18.222Z"
            transform="translate(-520.088 -1267.254)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAC"
            d="M801.838,1466.256l9.111,9.111,9.111-9.111,9.111,9.111-18.222,18.222-18.222-18.222Z"
            transform="translate(-536.441 -1291.743)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAD"
            d="M820.06,1407.345l-9.111-9.111-9.111,9.1-9.111-9.111,18.222-18.211,18.222,18.211Z"
            transform="translate(-536.441 -1250.929)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAE"
            d="M844.486,1441.83l9.111-9.111-9.111-9.111,9.111-9.111,18.222,18.222L853.6,1450.94Z"
            transform="translate(-560.945 -1267.254)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAF"
            d="M827.233,1345.069h54.884v54.885Z"
            transform="translate(-552.812 -1234.405)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAG"
            d="M723.3,1399.954v-54.885h54.885Z"
            transform="translate(-503.573 -1234.405)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAH"
            d="M778.184,1503.887H723.3V1449Z"
            transform="translate(-503.573 -1283.597)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAI"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(-1749.108 -634.78)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAJ"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(-1749.108 -634.78)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAK"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(-1798.347 -634.78)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAL"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(-1798.347 -634.78)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAM"
            d="M863.288,1033.269l-36.055,36.055v-9.378l26.677-26.677Z"
            transform="translate(-443.555 -484.843)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAN"
            d="M872.268,1104.981H862.89l36.055-36.055v9.378Z"
            transform="translate(-460.383 -501.67)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAO"
            d="M882.117,1038.031,832,1088.154h-4.762v-4.762l50.122-50.122h4.763Z"
            transform="translate(-443.555 -484.843)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAP"
            d="M795.011,1059.946v9.378l-36.055-36.055h9.378Z"
            transform="translate(-411.144 -484.843)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAQ"
            d="M749.977,1104.981,723.3,1078.3v-9.378l36.055,36.055Z"
            transform="translate(-394.317 -501.67)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAR"
            d="M728.062,1033.269l50.122,50.122v4.762h-4.762L723.3,1038.031v-4.762Z"
            transform="translate(-394.317 -484.843)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAS"
            d="M795.011,974.37l-26.677,26.678h-9.378l36.055-36.055Z"
            transform="translate(-411.144 -452.46)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAT"
            d="M723.3,979.458l50.122-50.122h4.762V934.1L728.062,984.22H723.3Z"
            transform="translate(-394.317 -435.633)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAU"
            d="M749.977,929.335h9.378L723.3,965.39v-9.378Z"
            transform="translate(-394.317 -435.633)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAV"
            d="M619.366,1454.838h0a54.885,54.885,0,0,0,0-109.769Z"
            transform="translate(-344.946 -906.234)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAW"
            d="M570.317,1345.069H515.432v54.885a54.891,54.891,0,0,1,54.885-54.885"
            transform="translate(-295.707 -906.043)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAX"
            d="M515.515,1449v54.885H570.4A54.884,54.884,0,0,1,515.515,1449"
            transform="translate(-295.746 -955.299)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAY"
            d="M674.25,1399.954v-54.885H619.366a54.891,54.891,0,0,1,54.884,54.885"
            transform="translate(-344.946 -906.043)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerAZ"
            d="M2127.652,1210.538a54.884,54.884,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(-1689.095 -771.332)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBA"
            d="M2072.767,1106.6a54.891,54.891,0,0,0,54.885-54.885h-.011a54.872,54.872,0,0,0-54.874,54.874Z"
            transform="translate(-1743.789 -667.399)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBB"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(328.852 384.466) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBC"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(547.815 384.322) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBD"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.815 384.322) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBE"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(547.815 329.581) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBF"
            d="M674.25,929.335a54.884,54.884,0,0,1-54.884,54.885,54.884,54.884,0,0,1,54.884-54.885"
            transform="translate(-454.018 -763.933)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBG"
            d="M570.317,984.22a54.891,54.891,0,0,0-54.885-54.885,54.884,54.884,0,0,0,54.885,54.885"
            transform="translate(-404.968 -763.933)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBH"
            d="M515.432,1088.153a54.891,54.891,0,0,0,54.885-54.884,54.883,54.883,0,0,0-54.885,54.884"
            transform="translate(-404.968 -813.126)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBI"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(547.815 493.91) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBJ"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(547.815 493.91) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBK"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(492.931 493.91) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBL"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(492.931 493.91) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBM"
            d="M1968.834,690.872V635.987h54.885a54.876,54.876,0,0,0-54.885,54.885"
            transform="translate(-1530.788 -142.284)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBN"
            d="M2023.719,635.987v54.885h-54.885a54.883,54.883,0,0,0,54.885-54.885"
            transform="translate(-1530.788 -142.284)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBO"
            d="M2127.652,690.872h-54.885V635.987a54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(-1579.837 -142.284)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBP"
            d="M2072.767,635.987h54.885v54.885a54.883,54.883,0,0,0-54.885-54.885"
            transform="translate(-1579.837 -142.284)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBQ"
            d="M833.068,1137.2H723.3a54.884,54.884,0,0,1,54.885,54.885,54.891,54.891,0,0,1,54.884-54.885"
            transform="translate(-612.828 -807.62)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBR"
            d="M723.3,1296.02H833.068a54.89,54.89,0,0,1-54.884-54.884A54.884,54.884,0,0,1,723.3,1296.02"
            transform="translate(-612.828 -856.813)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBS"
            d="M899.726,1244.876v-70.362a35.181,35.181,0,0,0,0,70.362"
            transform="translate(-679.731 -825.305)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBT"
            d="M723.3,1174.514v70.362a35.181,35.181,0,1,0,0-70.362"
            transform="translate(-612.828 -825.305)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBU"
            d="M2023.719,947.766h-54.885v54.885Z"
            transform="translate(-1749.107 -563.449)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBV"
            d="M2072.767,843.854v54.885h54.885Z"
            transform="translate(-1798.345 -514.266)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBW"
            d="M2072.767,843.854l54.885,54.885V843.854Z"
            transform="translate(-1798.345 -514.266)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBX"
            d="M2072.767,1002.672l54.885-54.885h-54.885Z"
            transform="translate(-1798.345 -563.459)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBY"
            d="M2127.652,947.787l-54.885,54.885h54.885Z"
            transform="translate(-1798.345 -563.459)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerBZ"
            d="M1968.834,843.854v54.885h54.885Z"
            transform="translate(-1749.107 -514.266)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCA"
            d="M2221.735,1051.72h-9.378l36.055,36.055V1078.4Z"
            transform="translate(-2028.416 -995.629)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCB"
            d="M2181.316,1051.72H2176.7v4.762l50.122,50.122h4.762v-4.762l-50.123-50.122Z"
            transform="translate(-2011.346 -995.629)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCC"
            d="M2176.7,1096.754l26.677,26.677h9.378l-36.055-36.055Z"
            transform="translate(-2011.346 -1012.456)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCD"
            d="M2280.634,1087.775l36.055-36.055h-9.378l-26.677,26.677Z"
            transform="translate(-2170.163 -941.045)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCE"
            d="M2352.346,1096.755v-9.378l-36.055,36.055h9.378Z"
            transform="translate(-2186.99 -957.92)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCF"
            d="M2285.4,1106.6l50.122-50.122v-4.762h-4.762l-50.122,50.122v4.762Z"
            transform="translate(-2170.163 -941.054)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCG"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(-2115.281 -1061.852)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCH"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(-2132.351 -1044.977)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCI"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(-2115.281 -1044.986)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCJ"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(-2083.06 -1116.388)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCK"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(-2066.233 -1099.561)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCL"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(-2066.233 -1099.561)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCM"
            d="M27.442,27.442V0H0L13.721,13.721Z"
            transform="translate(301.902 603.312) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCN"
            d="M27.442,0H0V27.442L13.721,13.721Z"
            transform="translate(274.548 603.312) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCO"
            d="M0,54.885H54.884V0L27.442,27.442Z"
            transform="translate(274.612 603.312) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCP"
            d="M0,0V54.885H54.885L27.442,27.442Z"
            transform="translate(329.307 603.312) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCQ"
            d="M0,27.443V0H27.443Z"
            transform="translate(165.352 439.106) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCR"
            d="M27.443,27.443H0V0Z"
            transform="translate(192.795 439.106) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCS"
            d="M0,0H54.885V54.885Z"
            transform="translate(220.237 439.054) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCT"
            d="M54.885,0V54.884H0Z"
            transform="translate(165.352 439.054) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCU"
            d="M0,0V27.64H27.629A61.6,61.6,0,0,1,0,0Z"
            transform="translate(301.659 275.016) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCV"
            d="M8.781,0H0A52.6,52.6,0,0,0,52.547,52.547V43.765A43.814,43.814,0,0,1,8.781,0Z"
            transform="translate(274.414 272.678) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCW"
            d="M35.039,35.038V26.257A26.286,26.286,0,0,1,8.782,0H0A35.079,35.079,0,0,0,35.039,35.038Z"
            transform="translate(274.414 255.17) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCX"
            d="M8.781,0H0A17.54,17.54,0,0,0,17.52,17.519V8.738A8.747,8.747,0,0,1,8.781,0Z"
            transform="translate(274.414 237.65) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCY"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(219.719 275.016) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerCZ"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(222.046 272.678) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDA"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(239.555 255.17) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDB"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(257.074 237.65) rotate(-90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDC"
            d="M0,0H54.884V54.885Z"
            transform="translate(383.863 329.752) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDD"
            d="M54.884,0V54.884H0Z"
            transform="translate(383.863 275.01) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDE"
            d="M0,27.443V0H27.443Z"
            transform="translate(438.532 274.968) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDF"
            d="M27.443,27.443H0V0Z"
            transform="translate(438.532 302.342) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDG"
            d="M0,27.443V0H27.442Z"
            transform="translate(383.825 274.968) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDH"
            d="M27.442,27.443H0V0Z"
            transform="translate(383.825 302.342) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDI"
            d="M0,0H54.885V54.885Z"
            transform="translate(438.558 329.752) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDJ"
            d="M54.885,0V54.884H0Z"
            transform="translate(438.558 275.01) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDK"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(383.867 493.933) rotate(180)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDL"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(383.867 493.933) rotate(180)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDM"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(438.562 493.933) rotate(180)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDN"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(110.471 56.091) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDO"
            d="M2307.311,1227.365h9.378l-36.055-36.055v9.378Z"
            transform="translate(-1842.684 -842.918)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDP"
            d="M2352.346,1182.331l-26.678-26.677h-9.378l36.055,36.055Z"
            transform="translate(-1859.756 -826.043)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDQ"
            d="M2280.634,1160.416l50.122,50.122h4.762v-4.762l-50.122-50.122h-4.762Z"
            transform="translate(-1842.929 -826.07)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDR"
            d="M2221.735,1227.365l26.677-26.678v-9.378l-36.055,36.055Z"
            transform="translate(-1755.823 -788.176)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDS"
            d="M2226.823,1155.653l-50.122,50.122v4.762h4.762l50.123-50.122v-4.762Z"
            transform="translate(-1738.995 -771.332)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDT"
            d="M2176.7,1182.331v9.378l36.055-36.055h-9.378Z"
            transform="translate(-1738.75 -771.301)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDU"
            d="M26.677,36.055h9.378L0,0V9.378Z"
            transform="translate(238.516 329.725) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDV"
            d="M36.055,26.677,9.378,0H0L36.055,36.055Z"
            transform="translate(219.748 310.944) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDW"
            d="M0,4.762,50.122,54.885h4.763V50.122L4.762,0H0Z"
            transform="translate(219.731 329.75) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDX"
            d="M9.378,36.055,36.055,9.378V0L0,36.055Z"
            transform="translate(293.216 310.944) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDY"
            d="M50.122,0,0,50.122v4.762H4.762L54.885,4.762V0Z"
            transform="translate(274.422 329.751) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerDZ"
            d="M0,26.677v9.378L36.055,0H26.677Z"
            transform="translate(274.449 329.725) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEA"
            d="M2333.246,718.314h0l27.1,27.442h0V635.987l-27.1,27.442Z"
            transform="translate(-1812.532 -525.349)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEB"
            d="M2203.8,718.314V663.429l-27.1-27.442V745.756Z"
            transform="translate(-1738.387 -525.349)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEC"
            d="M2283.588,687.954h-55.566l27.783,27.442Z"
            transform="translate(-1762.875 -549.898)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerED"
            d="M2283.588,635.987h-55.566l27.783,27.442Z"
            transform="translate(-1762.875 -525.306)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEE"
            d="M2255.805,739.92l-27.783,27.442h55.566Z"
            transform="translate(-1762.875 -574.491)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEF"
            d="M2255.805,791.887l-27.783,27.442h55.566Z"
            transform="translate(-1762.875 -599.084)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEG"
            d="M27.64,0H0V27.629A61.6,61.6,0,0,1,27.64,0Z"
            transform="translate(220.237 493.708) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEH"
            d="M52.547,8.781V0A52.609,52.609,0,0,0,0,52.557H8.781A43.816,43.816,0,0,1,52.547,8.781Z"
            transform="translate(217.91 496.046) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEI"
            d="M35.039,8.781V0A35.082,35.082,0,0,0,0,35.049H8.782A26.3,26.3,0,0,1,35.039,8.781Z"
            transform="translate(200.402 513.554) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEJ"
            d="M17.52,8.781V0A17.542,17.542,0,0,0,0,17.53H8.781A8.749,8.749,0,0,1,17.52,8.781Z"
            transform="translate(182.883 531.073) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEK"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(165.349 603.322) rotate(180)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEL"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(-2323.153 -568.98)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEM"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(-2323.153 -568.98)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEN"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(-2274.104 -568.98)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEO"
            d="M2543.386,898.739,2488.5,843.854h54.885Z"
            transform="translate(-1995.57 -295.417)"
            fill="#23ce6b"
          />
          <path
            id="bannerEP"
            d="M2488.5,843.854l54.885,54.885H2488.5Z"
            transform="translate(-1995.57 -295.417)"
            fill="#1f01b9"
          />
          <path
            id="bannerEQ"
            d="M2384.567,843.854l54.885,54.885h-54.885Z"
            transform="translate(-1946.521 -295.417)"
            fill="#f5bb00"
          />
          <path
            id="bannerER"
            d="M0,54.885A54.884,54.884,0,0,0,54.885,109.77V82.327a27.442,27.442,0,1,1,0-54.885V0A54.877,54.877,0,0,0,0,54.885"
            transform="translate(219.667 110.981) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerES"
            d="M2412.207,635.987h-27.64v27.629A61.6,61.6,0,0,1,2412.207,635.987Z"
            transform="translate(-1890.989 -32.665)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerET"
            d="M2441.542,649.175v-8.781A52.609,52.609,0,0,0,2389,692.951h8.781A43.817,43.817,0,0,1,2441.542,649.175Z"
            transform="translate(-1893.079 -34.745)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEU"
            d="M2457.188,682.33v-8.781a35.081,35.081,0,0,0-35.039,35.049h8.782A26.3,26.3,0,0,1,2457.188,682.33Z"
            transform="translate(-1908.725 -50.391)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEV"
            d="M2472.844,715.505v-8.781a17.542,17.542,0,0,0-17.52,17.53h8.781A8.749,8.749,0,0,1,2472.844,715.505Z"
            transform="translate(-1924.381 -66.047)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEW"
            d="M54.884,54.885H0V0A54.89,54.89,0,0,1,54.884,54.885"
            transform="translate(165.284 658.207) rotate(-90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEX"
            d="M0,54.885H0V0H54.884A54.883,54.883,0,0,1,0,54.885"
            transform="translate(110.463 658.207) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEY"
            d="M0,54.885,54.885,0V54.885Z"
            transform="translate(274.626 603.322)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerEZ"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(274.626 603.322)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFA"
            d="M54.885,0,0,54.885V0Z"
            transform="translate(219.897 603.322)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFB"
            d="M0,54.885V0H54.885A54.876,54.876,0,0,0,0,54.885"
            transform="translate(384.202 603.322) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFC"
            d="M54.885,0V54.885H0A54.883,54.883,0,0,0,54.885,0"
            transform="translate(384.202 603.322) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFD"
            d="M54.885,54.885H0V0A54.876,54.876,0,0,0,54.885,54.885"
            transform="translate(383.983 658.207) rotate(-90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFE"
            d="M0,0H54.885V54.885A54.883,54.883,0,0,0,0,0"
            transform="translate(383.983 658.207) rotate(-90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFF"
            d="M54.885,54.885,0,0H54.885Z"
            transform="translate(438.693 658.207) rotate(-90)"
            fill="#ff312e"
          />
          <path
            id="bannerFG"
            d="M0,0,54.885,54.885H0Z"
            transform="translate(438.693 658.207) rotate(-90)"
            fill="#1f01b9"
          />
          <path
            id="bannerFH"
            d="M27.64,0H0V27.629A61.611,61.611,0,0,1,27.64,0Z"
            transform="translate(547.004 2.371) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFI"
            d="M52.557,8.781V0A52.61,52.61,0,0,0,0,52.547H8.782A43.823,43.823,0,0,1,52.557,8.781Z"
            transform="translate(544.666 4.698) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFJ"
            d="M35.038,8.781V0A35.079,35.079,0,0,0,0,35.038H8.781A26.286,26.286,0,0,1,35.038,8.781Z"
            transform="translate(527.157 22.218) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFK"
            d="M17.53,8.781V0A17.542,17.542,0,0,0,0,17.519H8.782A8.748,8.748,0,0,1,17.53,8.781Z"
            transform="translate(509.638 39.726) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFL"
            d="M362.216,1137.2H307.565v54.651a54.657,54.657,0,0,1,54.651-54.651"
            transform="translate(-306.403 -1081.107)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFM"
            d="M307.565,1241.136v54.65h54.651a54.657,54.657,0,0,1-54.651-54.65"
            transform="translate(-306.403 -1130.39)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFN"
            d="M411.5,1295.786h54.65v-54.65a54.649,54.649,0,0,1-54.65,54.65"
            transform="translate(-355.686 -1130.39)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFO"
            d="M466.149,1191.853V1137.2H411.5a54.65,54.65,0,0,1,54.65,54.651"
            transform="translate(-355.686 -1081.107)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFP"
            d="M307.565,1191.853h54.651V1137.2a54.649,54.649,0,0,1-54.651,54.651"
            transform="translate(-306.403 -1081.107)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFQ"
            d="M362.216,1295.786v-54.65H307.565a54.649,54.649,0,0,1,54.651,54.65"
            transform="translate(-306.403 -1130.39)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFR"
            d="M466.149,1241.136H411.5v54.65a54.656,54.656,0,0,1,54.65-54.65"
            transform="translate(-355.686 -1130.39)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFS"
            d="M411.5,1137.2v54.651h54.65A54.656,54.656,0,0,1,411.5,1137.2"
            transform="translate(-355.686 -1081.107)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFT"
            d="M619.366,1137.2H674.02v54.655Z"
            transform="translate(1247.673 -399.314) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFU"
            d="M674.02,1241.136v54.654H619.366Z"
            transform="translate(1296.952 -399.314) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFV"
            d="M515.432,1268.463v-27.327h27.327Z"
            transform="translate(1296.952 -350.035) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFW"
            d="M542.759,1216.5H515.432v-27.327Z"
            transform="translate(1272.313 -350.035) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFX"
            d="M619.366,1268.463v-27.327h27.327Z"
            transform="translate(1296.952 -399.314) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFY"
            d="M646.693,1216.5H619.366v-27.327Z"
            transform="translate(1272.313 -399.314) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerFZ"
            d="M515.432,1137.2h54.655v54.655Z"
            transform="translate(1247.673 -350.035) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGA"
            d="M570.087,1241.136v54.654H515.432Z"
            transform="translate(1296.952 -350.035) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGB"
            d="M2023.387,635.987V690.54h-54.553a54.552,54.552,0,0,0,54.553-54.553"
            transform="translate(-1967.818 -360.959)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGC"
            d="M2127.321,690.54h-54.554V635.987a54.545,54.545,0,0,0,54.554,54.553"
            transform="translate(-2017.198 -360.959)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGD"
            d="M2072.767,635.987h54.554V690.54a54.552,54.552,0,0,0-54.554-54.553"
            transform="translate(-2017.198 -360.959)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGE"
            d="M0,81.94H0l26.974,27.313h0V0L0,27.313Z"
            transform="translate(110.471 411.86) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGF"
            d="M26.974,81.94V27.313L0,0V109.253Z"
            transform="translate(110.471 329.581) rotate(90)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGG"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(83.158 356.556) rotate(90)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGH"
            d="M55.3,0H0L27.652,27.313Z"
            transform="translate(110.471 356.556) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGI"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(55.844 356.556) rotate(90)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGJ"
            d="M27.652,0,0,27.313H55.3Z"
            transform="translate(28.531 356.556) rotate(90)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGK"
            d="M1486.653,1369.546h54.452V1424a54.455,54.455,0,0,0-54.452-54.453"
            transform="translate(-1430.982 -930.71)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGL"
            d="M1541.105,1515.694h0v-54.453h-54.452A54.453,54.453,0,0,0,1541.105,1515.694Z"
            transform="translate(-1430.982 -967.952)"
            fill="#ff312e"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGM"
            d="M1449.411,1461.241h-54.453v54.453h0A54.453,54.453,0,0,0,1449.411,1461.241Z"
            transform="translate(-1393.74 -967.952)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGN"
            d="M1449.411,1369.546h0V1424h-54.453A54.453,54.453,0,0,1,1449.411,1369.546Z"
            transform="translate(-1393.74 -930.71)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGO"
            d="M2543.385,898.738,2488.5,843.854h54.884Z"
            transform="translate(-2432.914 -842.647)"
            fill="#1f01b9"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGP"
            d="M2488.5,843.854l54.884,54.884H2488.5Z"
            transform="translate(-2432.914 -842.647)"
            fill="#f5bb00"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGQ"
            d="M2384.567,843.854l54.885,54.884h-54.885Z"
            transform="translate(-2383.865 -842.647)"
            fill="#23ce6b"
            stroke="rgba(0,0,0,0)"
            stroke-width="1"
          />
          <path
            id="bannerGR"
            d="M2307.48,1227.594h9.437l-36.284-36.284v9.437Z"
            transform="translate(-2280.629 -624.62)"
            fill="#ff312e"
          />
          <path
            id="bannerGS"
            d="M2352.575,1182.5l-26.847-26.846h-9.437l36.284,36.284Z"
            transform="translate(-2297.337 -607.912)"
            fill="#ff312e"
          />
          <path
            id="bannerGT"
            d="M2280.634,1160.446l50.44,50.44h4.793v-4.793l-50.44-50.44h-4.792Z"
            transform="translate(-2280.629 -607.912)"
            fill="#ff312e"
          />
          <path
            id="bannerGU"
            d="M2280.634,1088l36.284-36.284h-9.437l-26.846,26.846Z"
            transform="translate(-2225.396 -503.979)"
            fill="#1f01b9"
          />
          <path
            id="bannerGV"
            d="M2352.575,1096.814v-9.437l-36.284,36.284h9.437Z"
            transform="translate(-2242.104 -520.687)"
            fill="#1f01b9"
          />
          <path
            id="bannerGW"
            d="M2285.427,1106.953l50.44-50.44v-4.793h-4.793l-50.44,50.44v4.793Z"
            transform="translate(-2225.396 -503.979)"
            fill="#1f01b9"
          />
          <path
            id="bannerGX"
            d="M2221.794,1227.594l26.847-26.847v-9.437l-36.284,36.284Z"
            transform="translate(-2193.403 -569.387)"
            fill="#f5bb00"
          />
          <path
            id="bannerGY"
            d="M2227.141,1155.653l-50.44,50.44v4.793h4.792l50.44-50.44v-4.793Z"
            transform="translate(-2176.695 -552.679)"
            fill="#f5bb00"
          />
          <path
            id="bannerGZ"
            d="M2176.7,1182.5v9.437l36.284-36.284h-9.437Z"
            transform="translate(-2176.695 -552.679)"
            fill="#f5bb00"
          />
          <path
            id="bannerHA"
            d="M2221.794,1051.72h-9.437L2248.641,1088v-9.437Z"
            transform="translate(-2138.17 -448.746)"
            fill="#23ce6b"
          />
          <path
            id="bannerHB"
            d="M2181.345,1051.72H2176.7v4.793l50.44,50.44h4.793v-4.793l-50.44-50.44Z"
            transform="translate(-2121.462 -448.746)"
            fill="#23ce6b"
          />
          <path
            id="bannerHC"
            d="M2176.7,1096.814l26.846,26.847h9.437l-36.284-36.284Z"
            transform="translate(-2121.462 -465.453)"
            fill="#23ce6b"
          />
          <path
            id="bannerHD"
            d="M2021.459,1104.346a52.631,52.631,0,0,0-52.625-52.626,52.624,52.624,0,0,0,52.625,52.626"
            transform="translate(-1803.55 -828.826)"
            fill="#f5bb00"
          />
        </svg>
      </div>
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
