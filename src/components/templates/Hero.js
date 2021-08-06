import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Get in touch
// Hire me

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const pixar = useAnimation();
  const pixarA = useAnimation();

  useEffect(() => {
    if (inView) {
      pixar.start({
        x: 0,
        transition: { duration: 1, delay: 0.7 }
      });
    }
    if (!inView) {
      pixar.start({ x: "100vw" });
    }
  }, [inView, pixar]);

  useEffect(() => {
    if (inView) {
      pixarA.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
      });
    }
    if (!inView) {
      pixarA.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView, pixarA]);

  const container = {
    initial: { y: 10 },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        delayChildren: 1.2,
        staggerDirection: 1,
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    initial: { y: 10 },
    animate: { y: 0 }
  };

  const icons = {
    initial: {
      scale: 0.8
    },
    animate: {
      scale: 1,
      rotate: 360,
      transition: {
        type: "spring",
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
        duration: 11,
        bounce: 0,
        velocity: 900
      }
    }
  };

  return (
    <div id="home" ref={ref} className="hero">
      <div className="hero-banner">
        <motion.svg
          animate={pixar}
          width="1080"
          height="1080"
          viewBox="0 0 1080 1080"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Mask"
                d="M23.635,50.646V30.387H3.376a3.376,3.376,0,1,1,0-6.752H23.635V3.376a3.376,3.376,0,1,1,6.752,0V23.635H50.646a3.376,3.376,0,0,1,0,6.752H30.387V50.646a3.376,3.376,0,0,1-6.752,0Z"
                fill="#0c6"
              />
            </clipPath>
            <clipPath id="clip-path-2">
              <path
                id="Mask-2"
                data-name="Mask"
                d="M7.1,71A7.108,7.108,0,0,1,0,63.9V14.2A7.108,7.108,0,0,1,7.1,7.1h7.1v7.1H7.1V24.851H63.9V14.2H56.8V7.1h7.1A7.108,7.108,0,0,1,71,14.2V63.9A7.108,7.108,0,0,1,63.9,71Zm0-7.1H63.9V31.95H7.1Zm46.152-7.1V49.7h7.1v7.1Zm-14.2,0V49.7h7.1v7.1Zm-14.2,0V49.7h7.1v7.1Zm-14.2,0V49.7h7.1v7.1Zm42.6-14.2V35.5h7.1v7.1Zm-14.2,0V35.5h7.1v7.1Zm-14.2,0V35.5h7.1v7.1Zm21.3-28.4V3.55a3.551,3.551,0,0,1,7.1,0V14.2a3.551,3.551,0,1,1-7.1,0Zm-28.4,0V3.55a3.55,3.55,0,0,1,7.1,0V14.2a3.55,3.55,0,1,1-7.1,0Zm10.649,0V7.1H42.6v7.1Z"
                fill="#ff0054"
              />
            </clipPath>
            <clipPath id="clip-path-3">
              <path
                id="Mask-3"
                data-name="Mask"
                d="M49.215,61.963l-10.782-10.9H9.472A9.536,9.536,0,0,1,0,41.49V9.574A9.533,9.533,0,0,1,9.472,0H59.994a9.533,9.533,0,0,1,9.472,9.574V41.49a9.536,9.536,0,0,1-9.472,9.577V57.45a6.316,6.316,0,0,1-6.36,6.394A6.173,6.173,0,0,1,49.215,61.963Z"
                fill="#f9c80e"
              />
            </clipPath>
            <clipPath id="clip-path-4">
              <path
                id="Mask-4"
                data-name="Mask"
                d="M0,33.236C0,16.39,11.876,2.234,27.593.061c5.525-.762,9.241,5.807,5.969,10.564A10.313,10.313,0,0,0,31.756,16.5a9.824,9.824,0,0,0,9.091,10.03,6.5,6.5,0,0,1,6.035,6.011A8.268,8.268,0,0,0,54.2,40.127c4.664.411,7.317,5.813,4.943,10.06A31.468,31.468,0,0,1,31.756,66.694C14.217,66.694,0,51.715,0,33.236Z"
                fill="#0c6"
              />
            </clipPath>
            <clipPath id="clip-path-5">
              <path
                id="Mask-5"
                data-name="Mask"
                d="M42.9,59.4H17.5a1,1,0,0,1-1-1V53.8a1,1,0,0,1,1-1h5.6V49.5H6.6A6.608,6.608,0,0,1,0,42.9V6.6A6.607,6.607,0,0,1,6.6,0H59.4A6.607,6.607,0,0,1,66,6.6V42.9a6.609,6.609,0,0,1-6.6,6.6H42.9v3.3h5.6a1,1,0,0,1,1,1v4.6a1,1,0,0,1-1,1Zm-6.6-6.6V49.5H29.7v3.3ZM6.6,42.9H59.4V33H6.6ZM59.4,26.4V6.6H6.6V26.4Z"
                fill="#f9c80e"
              />
            </clipPath>
            <clipPath id="clip-path-6">
              <path
                id="Mask-6"
                data-name="Mask"
                d="M28.332,61.268,1.064,24.506a6.122,6.122,0,0,1-.18-6.617L9.972,2.917A6.1,6.1,0,0,1,15.148,0H51.5a6.089,6.089,0,0,1,5.173,2.917l9.091,14.973a6.116,6.116,0,0,1-.183,6.617L38.318,61.268a6.048,6.048,0,0,1-9.986,0Zm4.993-3.451,24.83-33.473H8.494ZM58.894,18.259,51.5,6.085H15.148L7.756,18.259Z"
                transform="translate(0)"
                fill="#fe621d"
              />
            </clipPath>
            <clipPath id="clip-path-7">
              <path
                id="Mask-7"
                data-name="Mask"
                d="M67.2,64H3.2a3.2,3.2,0,1,1,0-6.4H6.4V22.4A6.407,6.407,0,0,1,12.8,16H16a6.407,6.407,0,0,1,6.4,6.4V57.6h3.2V6.4A6.407,6.407,0,0,1,32,0h3.2a6.407,6.407,0,0,1,6.4,6.4V57.6h3.2V32a6.407,6.407,0,0,1,6.4-6.4h3.2A6.407,6.407,0,0,1,60.8,32V57.6h6.4a3.2,3.2,0,1,1,0,6.4Zm-16-32V57.6h3.2V32ZM32,6.4V57.6h3.2V6.4Zm-19.2,16V57.6H16V22.4Z"
                fill="#f71735"
              />
            </clipPath>
            <clipPath id="clip-path-8">
              <path
                id="Mask-8"
                data-name="Mask"
                d="M26.6,61.6a26.6,26.6,0,1,1,0-53.2c.575,0,1.169.02,1.767.058A5.614,5.614,0,0,1,33.6,14.046V28H47.555a5.613,5.613,0,0,1,5.587,5.232c.038.6.058,1.192.058,1.769A26.629,26.629,0,0,1,26.6,61.6Zm0-47.6a21,21,0,1,0,21,21c0-.468-.015-.94-.045-1.4H28V14.046C27.552,14.017,27.08,14,26.6,14ZM56,24.356H42a5.608,5.608,0,0,1-5.6-5.6V5.622A5.608,5.608,0,0,1,41.681.03C42.037.01,42.4,0,42.769,0A18.83,18.83,0,0,1,61.6,18.724,5.6,5.6,0,0,1,56,24.356ZM42.769,5.6c-.258,0-.509.007-.769.023V18.754H56A13.259,13.259,0,0,0,42.769,5.6Z"
                fill="#a81adb"
              />
            </clipPath>
            <clipPath id="clip-path-9">
              <path
                id="Mask-9"
                data-name="Mask"
                d="M26.331,53.924,5.219,31.879a19.084,19.084,0,0,1,0-26.225,17.649,17.649,0,0,1,25.071-.6,17.686,17.686,0,0,1,25.235.488,19.118,19.118,0,0,1,.012,26.26l-21.177,22.1a5.568,5.568,0,0,1-8.027.018Z"
                transform="translate(0)"
                fill="#f71735"
              />
            </clipPath>
            <clipPath id="clip-path-10">
              <path
                id="Mask-10"
                data-name="Mask"
                d="M50.06,58.4H11.129a2.784,2.784,0,0,1-2.781-2.781V33.374H2.787A2.779,2.779,0,0,1,.822,28.628L28.628.814a2.783,2.783,0,0,1,3.932,0L60.367,28.628A2.78,2.78,0,0,1,58.4,33.374H52.838v22.25A2.783,2.783,0,0,1,50.06,58.4ZM27.812,30.593h5.562a5.569,5.569,0,0,1,5.564,5.562V52.842h8.343V30.593a2.784,2.784,0,0,1,2.781-2.781h1.63l-21.1-21.1L9.5,27.812h1.627a2.785,2.785,0,0,1,2.783,2.781v22.25h8.343V36.154A5.568,5.568,0,0,1,27.812,30.593Zm0,5.562V52.842h5.562V36.154Z"
                fill="#1a8fe3"
              />
            </clipPath>
            <clipPath id="clip-path-11">
              <path
                id="Mask-11"
                data-name="Mask"
                d="M28.95,64.333a6.431,6.431,0,0,1-3.193-.848L3.242,50.62a6.433,6.433,0,0,1,0-11.172L4.725,38.6l-1.482-.848a6.433,6.433,0,0,1,0-11.172l1.485-.848-1.485-.848a6.434,6.434,0,0,1,0-11.172L25.757.849a6.43,6.43,0,0,1,6.386,0L54.658,13.714a6.434,6.434,0,0,1,0,11.172l-1.485.848,1.485.848a6.433,6.433,0,0,1,0,11.172l-1.482.845,1.482.848a6.433,6.433,0,0,1,0,11.172L32.143,63.485A6.431,6.431,0,0,1,28.95,64.333ZM11.207,42.305h0l-4.774,2.73L28.95,57.9,51.467,45.035l-4.777-2.73L32.143,50.62a6.454,6.454,0,0,1-6.386,0l-14.55-8.314Zm0-12.865h0L6.433,32.167,28.95,45.035,51.467,32.167,46.691,29.44,32.143,37.754a6.444,6.444,0,0,1-6.386,0L11.209,29.44ZM28.95,6.433h0L6.433,19.3,28.95,32.167,51.467,19.3,28.95,6.433Z"
                transform="translate(0)"
                fill="#a81adb"
              />
            </clipPath>
            <clipPath id="clip-path-12">
              <path
                id="Mask-12"
                data-name="Mask"
                d="M42.618,52.154,32,38.886a21.056,21.056,0,1,1,4.334-3.549L46.99,48.656a2.8,2.8,0,1,1-4.373,3.5ZM5.6,21A15.4,15.4,0,1,0,21,5.6,15.418,15.418,0,0,0,5.6,21Z"
                fill="#f9c80e"
              />
            </clipPath>
            <clipPath id="clip-path-13">
              <path
                id="Mask-13"
                data-name="Mask"
                d="M6.124,55.413A6.148,6.148,0,0,1,0,49.256V6.156A6.148,6.148,0,0,1,6.124,0H61.247a6.148,6.148,0,0,1,6.124,6.156v43.1a6.148,6.148,0,0,1-6.124,6.156Zm0-6.156H61.247V10.418L35.356,34.489a3.052,3.052,0,0,1-3.619-.017L6.124,10.19ZM33.572,28.18,56.9,6.156h-46.2Z"
                transform="translate(0)"
                fill="#1a8fe3"
              />
            </clipPath>
            <clipPath id="clip-path-14">
              <path
                id="Mask-14"
                data-name="Mask"
                d="M10.175,57.384C4,46.492,0,34.97,0,28.023,0,12.57,12.323,0,27.467,0S54.934,12.57,54.934,28.023c0,6.946-4,18.469-10.175,29.361-4.978,8.773-12.138,18.148-17.292,18.148S15.153,66.157,10.175,57.384ZM6.866,28.023c0,5.565,3.535,15.564,9,25.471,4.638,8.4,10.138,15.172,11.6,15.172s6.956-6.767,11.6-15.172c5.469-9.907,9-19.906,9-25.471,0-11.665-9.242-21.157-20.6-21.157S6.866,16.358,6.866,28.023Zm6.866-.556A13.734,13.734,0,1,1,27.467,41.2,13.735,13.735,0,0,1,13.732,27.467Z"
                fill="#ff0054"
              />
            </clipPath>
            <clipPath id="clip-path-15">
              <path
                id="Mask-15"
                data-name="Mask"
                d="M6.2,73.4A6.458,6.458,0,0,1,0,66.726V6.672A6.456,6.456,0,0,1,6.2,0h31a6.456,6.456,0,0,1,6.2,6.672V66.726A6.459,6.459,0,0,1,37.2,73.4Zm0-6.119h31V6.116H6.2Zm12.4-6.116a3.1,3.1,0,1,1,3.1,3.058A3.079,3.079,0,0,1,18.6,61.166Zm0-47.4a1.529,1.529,0,1,1,0-3.058h6.2a1.529,1.529,0,1,1,0,3.058Z"
                fill="#fe621d"
              />
            </clipPath>
            <clipPath id="clip-path-16">
              <path
                id="Mask-16"
                data-name="Mask"
                d="M32.833,58.691a12.883,12.883,0,0,1,1.236-5.521l-11.845-7.9a13.043,13.043,0,1,1,.008-18.8L34.1,18.622a12.893,12.893,0,0,1-1.264-5.581A13.134,13.134,0,1,1,45.968,26.085a13.125,13.125,0,0,1-7.63-2.432L25.684,32.022a12.979,12.979,0,0,1,0,7.7l12.6,8.4a13.019,13.019,0,1,1-5.446,10.567Zm6.566,0a6.568,6.568,0,1,0,6.569-6.521A6.552,6.552,0,0,0,39.4,58.691ZM6.566,35.866a6.568,6.568,0,1,0,6.566-6.521A6.552,6.552,0,0,0,6.566,35.866ZM39.4,13.041a6.568,6.568,0,1,0,6.569-6.521A6.553,6.553,0,0,0,39.4,13.041Z"
                fill="#0c6"
              />
            </clipPath>
            <clipPath id="clip-path-17">
              <path
                id="Mask-17"
                data-name="Mask"
                d="M52.736,65.246A3.106,3.106,0,0,1,49.7,62.069c.377-16.962-6.571-21.68-21.735-21.68-14.362,0-21.369,4.779-21.749,21.819A3.107,3.107,0,0,1,0,62.069C.454,41.83,10.017,34.176,27.964,34.176c18.791,0,28.4,7.712,27.946,28.033a3.1,3.1,0,0,1-3.1,3.038ZM12.427,15.536A15.536,15.536,0,1,1,27.964,31.069,15.552,15.552,0,0,1,12.427,15.536Zm6.216,0a9.32,9.32,0,1,0,9.32-9.323A9.33,9.33,0,0,0,18.644,15.536Z"
                fill="#a81adb"
              />
            </clipPath>
            <clipPath id="clip-path-18">
              <path
                id="Mask-18"
                data-name="Mask"
                d="M7.137,57.845,1.562,52.271a5.2,5.2,0,0,1-.073-7.358L20.053,26.352A20.4,20.4,0,0,1,44.168.508,5.259,5.259,0,0,1,46.848,9.3l-8.58,8.578L41.987,21.6l9.122-9.12a5.255,5.255,0,0,1,8.658,2.178A20.438,20.438,0,0,1,32.39,40.031L14.5,57.919a5.08,5.08,0,0,1-3.611,1.488A5.293,5.293,0,0,1,7.137,57.845Z"
                transform="translate(0 0)"
                fill="#1a8fe3"
              />
            </clipPath>
            <filter
              id="Bezel"
              x="175"
              y="-40.791"
              width="731"
              height="1167.791"
              filterUnits="userSpaceOnUse"
            >
              <feOffset input="SourceAlpha" />
              <feGaussianBlur stdDeviation="49.5" result="blur" />
              <feFlood flood-opacity="0.49" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <clipPath id="clip-Banner">
              <rect width="1080" height="1080" />
            </clipPath>
          </defs>
          <g id="Banner" clip-path="url(#clip-Banner)">
            <motion.g
              initial="initial"
              animate="animate"
              variants={icons}
              id="Icons"
              transform="translate(-37.216 4.242)"
            >
              <motion.g id="Add" transform="translate(941 653)">
                <rect
                  id="Icon_Add_background"
                  data-name="Icon/Add background"
                  width="101"
                  height="101"
                  fill="none"
                />
                <g id="Icon_Add" data-name="Icon/Add">
                  <path id="Grid" d="M0,0H101V101H0Z" fill="none" />
                  <path
                    id="Mask-19"
                    data-name="Mask"
                    d="M23.567,50.5V30.3H3.366a3.366,3.366,0,1,1,0-6.733h20.2V3.366a3.366,3.366,0,1,1,6.733,0v20.2H50.5a3.366,3.366,0,0,1,0,6.733H30.3V50.5a3.366,3.366,0,0,1-6.733,0Z"
                    transform="translate(23.567 23.567)"
                    fill="#0c6"
                  />
                  <g
                    id="Icon_Add-2"
                    data-name="Icon/Add"
                    transform="translate(23.489 23.489)"
                    clip-path="url(#clip-path)"
                  >
                    <g id="Color" transform="translate(-23.634 -23.634)">
                      <path
                        id="Icon_Fill_Bright"
                        data-name="Icon/🖌 Fill/Bright"
                        d="M0,0H101.291V101.291H0Z"
                        fill="#0c6"
                      />
                    </g>
                  </g>
                </g>
              </motion.g>
              <g
                id="Calendar"
                transform="translate(223.214 622.494) rotate(14)"
              >
                <path
                  id="Grid-2"
                  data-name="Grid"
                  d="M0,0H106V106H0Z"
                  fill="none"
                />
                <path
                  id="Mask-20"
                  data-name="Mask"
                  d="M7.066,70.666A7.075,7.075,0,0,1,0,63.6V14.132A7.075,7.075,0,0,1,7.066,7.066h7.066v7.066H7.066v10.6H63.6v-10.6H56.534V7.066H63.6a7.075,7.075,0,0,1,7.066,7.066V63.6A7.075,7.075,0,0,1,63.6,70.666Zm0-7.066H63.6V31.8H7.066ZM53,56.534V49.468h7.066v7.066Zm-14.135,0V49.468h7.066v7.066Zm-14.132,0V49.468H31.8v7.066Zm-14.135,0V49.468h7.069v7.066ZM53,42.4V35.333h7.066V42.4Zm-14.135,0V35.333h7.066V42.4Zm-14.132,0V35.333H31.8V42.4Zm21.2-28.267V3.533a3.535,3.535,0,0,1,7.069,0v10.6a3.535,3.535,0,1,1-7.069,0Zm-28.264,0V3.533a3.533,3.533,0,0,1,7.066,0v10.6a3.533,3.533,0,1,1-7.066,0Zm10.6,0V7.066H42.4v7.066Z"
                  transform="translate(17.667 17.667)"
                  fill="#ff0054"
                />
                <g
                  id="Icon_Calendar"
                  data-name="Icon/Calendar"
                  transform="translate(17.5 17.5)"
                  clip-path="url(#clip-path-2)"
                >
                  <g
                    id="Color-2"
                    data-name="Color"
                    transform="translate(-17.75 -17.75)"
                  >
                    <path
                      id="Icon_Fill_Bright-2"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H106.5V106.5H0Z"
                      fill="#ff0054"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Comment"
                transform="matrix(0.921, -0.391, 0.391, 0.921, 82.216, 545.336)"
              >
                <path
                  id="Grid-3"
                  data-name="Grid"
                  d="M0,0H95V95H0Z"
                  fill="none"
                />
                <path
                  id="Mask-21"
                  data-name="Mask"
                  d="M49.356,61.477,38.543,50.667H9.5a9.512,9.512,0,0,1-9.5-9.5V9.5A9.509,9.509,0,0,1,9.5,0H60.166a9.509,9.509,0,0,1,9.5,9.5V41.165a9.512,9.512,0,0,1-9.5,9.5V57a6.3,6.3,0,0,1-6.378,6.344A6.224,6.224,0,0,1,49.356,61.477Z"
                  transform="translate(12.667 19)"
                  fill="#f9c80e"
                />
                <g
                  id="Icon_Comment"
                  data-name="Icon/Comment"
                  transform="translate(12.767 18.4)"
                  clip-path="url(#clip-path-3)"
                >
                  <g
                    id="Color-3"
                    data-name="Color"
                    transform="translate(-12.63 -19.15)"
                  >
                    <path
                      id="Icon_Fill_Bright-3"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H94.727V95.75H0Z"
                      fill="#f9c80e"
                    />
                  </g>
                </g>
              </g>
              <g id="Cookie" transform="translate(97.57 296.5)">
                <path
                  id="Grid-4"
                  data-name="Grid"
                  d="M0,0H100V100H0Z"
                  fill="none"
                />
                <path
                  id="Mask-22"
                  data-name="Mask"
                  d="M0,33.223C0,16.384,11.871,2.233,27.582.061,33.1-.7,36.819,5.866,33.549,10.621A10.309,10.309,0,0,0,31.743,16.5,9.82,9.82,0,0,0,40.83,26.524a6.5,6.5,0,0,1,6.033,6.009,8.265,8.265,0,0,0,7.311,7.578c4.662.411,7.314,5.811,4.941,10.056a31.455,31.455,0,0,1-27.372,16.5C14.211,66.667,0,51.694,0,33.223Z"
                  transform="translate(20 16.666)"
                  fill="#0c6"
                />
                <g
                  id="Icon_Cookie"
                  data-name="Icon/Cookie"
                  transform="translate(19.988 16.652)"
                  clip-path="url(#clip-path-4)"
                >
                  <g
                    id="Color-4"
                    data-name="Color"
                    transform="translate(-20.008 -16.673)"
                  >
                    <path
                      id="Icon_Fill_Bright-4"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H100.041V100.041H0Z"
                      fill="#0c6"
                    />
                  </g>
                </g>
              </g>
              <g id="Desktop" transform="translate(577.216 908.496) rotate(45)">
                <path
                  id="Grid-5"
                  data-name="Grid"
                  d="M0,0H99V99H0Z"
                  fill="none"
                />
                <path
                  id="Mask-23"
                  data-name="Mask"
                  d="M42.9,59.4H17.5a1,1,0,0,1-1-1V53.8a1,1,0,0,1,1-1h5.6V49.5H6.6A6.608,6.608,0,0,1,0,42.9V6.6A6.607,6.607,0,0,1,6.6,0H59.4A6.607,6.607,0,0,1,66,6.6V42.9a6.609,6.609,0,0,1-6.6,6.6H42.9v3.3h5.6a1,1,0,0,1,1,1v4.6a1,1,0,0,1-1,1Zm-6.6-6.6V49.5H29.7v3.3ZM6.6,42.9H59.4V33H6.6ZM59.4,26.4V6.6H6.6V26.4Z"
                  transform="translate(16.5 19.8)"
                  fill="#f9c80e"
                />
                <g
                  id="Icon_Desktop"
                  data-name="Icon/Desktop"
                  transform="translate(16.5 19.8)"
                  clip-path="url(#clip-path-5)"
                >
                  <g
                    id="Color-5"
                    data-name="Color"
                    transform="translate(-16.5 -19.8)"
                  >
                    <path
                      id="Icon_Fill_Bright-5"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H99V99H0Z"
                      fill="#f9c80e"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Gem"
                transform="matrix(0.891, -0.454, 0.454, 0.891, 282.803, 849.313)"
              >
                <path
                  id="Grid-6"
                  data-name="Grid"
                  d="M0,0H91V91H0Z"
                  fill="none"
                />
                <path
                  id="Mask-24"
                  data-name="Mask"
                  d="M28.365,61.073,1.065,24.428a6.08,6.08,0,0,1-.18-6.6l9.1-14.925A6.113,6.113,0,0,1,15.165,0h36.4a6.1,6.1,0,0,1,5.179,2.907l9.1,14.925a6.075,6.075,0,0,1-.183,6.6l-27.3,36.645a6.07,6.07,0,0,1-10,0Zm5-3.44L58.223,24.267H8.5ZM58.963,18.2l-7.4-12.135h-36.4L7.765,18.2Z"
                  transform="translate(12.136 18.2)"
                  fill="#fe621d"
                />
                <g
                  id="Icon_Gem"
                  data-name="Icon/Gem"
                  transform="translate(12.175 17.967)"
                  clip-path="url(#clip-path-6)"
                >
                  <g
                    id="Color-6"
                    data-name="Color"
                    transform="translate(-12.122 -18.258)"
                  >
                    <path
                      id="Icon_Fill_Bright-6"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H90.894V91.291H0Z"
                      fill="#fe621d"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Graph_Bar"
                data-name="Graph Bar"
                transform="matrix(0.875, -0.485, 0.485, 0.875, 860.747, 910.289)"
              >
                <path
                  id="Grid-7"
                  data-name="Grid"
                  d="M0,0H96V96H0Z"
                  fill="none"
                />
                <path
                  id="Mask-25"
                  data-name="Mask"
                  d="M67.2,64H3.2a3.2,3.2,0,1,1,0-6.4H6.4V22.4A6.407,6.407,0,0,1,12.8,16H16a6.407,6.407,0,0,1,6.4,6.4V57.6h3.2V6.4A6.407,6.407,0,0,1,32,0h3.2a6.407,6.407,0,0,1,6.4,6.4V57.6h3.2V32a6.407,6.407,0,0,1,6.4-6.4h3.2A6.407,6.407,0,0,1,60.8,32V57.6h6.4a3.2,3.2,0,1,1,0,6.4Zm-16-32V57.6h3.2V32ZM32,6.4V57.6h3.2V6.4Zm-19.2,16V57.6H16V22.4Z"
                  transform="translate(12.8 16)"
                  fill="#f71735"
                />
                <g
                  id="Icon_Graph_Bar"
                  data-name="Icon/Graph Bar"
                  transform="translate(12.8 16)"
                  clip-path="url(#clip-path-7)"
                >
                  <g
                    id="Color-7"
                    data-name="Color"
                    transform="translate(-12.8 -16)"
                  >
                    <path
                      id="Icon_Fill_Bright-7"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H96V96H0Z"
                      fill="#f71735"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Graph_Pie"
                data-name="Graph Pie"
                transform="translate(400 269)"
              >
                <path
                  id="Grid-8"
                  data-name="Grid"
                  d="M0,0H84V84H0Z"
                  fill="none"
                />
                <path
                  id="Mask-26"
                  data-name="Mask"
                  d="M26.6,61.6a26.6,26.6,0,1,1,0-53.2c.575,0,1.169.02,1.767.058A5.614,5.614,0,0,1,33.6,14.046V28H47.555a5.613,5.613,0,0,1,5.587,5.232c.038.6.058,1.192.058,1.769A26.629,26.629,0,0,1,26.6,61.6Zm0-47.6a21,21,0,1,0,21,21c0-.468-.015-.94-.045-1.4H28V14.046C27.552,14.017,27.08,14,26.6,14ZM56,24.356H42a5.608,5.608,0,0,1-5.6-5.6V5.622A5.608,5.608,0,0,1,41.681.03C42.037.01,42.4,0,42.769,0A18.83,18.83,0,0,1,61.6,18.724,5.6,5.6,0,0,1,56,24.356ZM42.769,5.6c-.258,0-.509.007-.769.023V18.754H56A13.259,13.259,0,0,0,42.769,5.6Z"
                  transform="translate(11.2 11.2)"
                  fill="#a81adb"
                />
                <g
                  id="Icon_Graph_Pie"
                  data-name="Icon/ Graph Pie"
                  transform="translate(11.2 11.2)"
                  clip-path="url(#clip-path-8)"
                >
                  <g
                    id="Color-8"
                    data-name="Color"
                    transform="translate(-11.2 -11.2)"
                  >
                    <path
                      id="Icon_Fill_Bright-8"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H84V84H0Z"
                      fill="#a81adb"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Heart"
                transform="matrix(0.978, 0.208, -0.208, 0.978, 778.535, 297.279)"
              >
                <path
                  id="Grid-9"
                  data-name="Grid"
                  d="M0,0H83V83H0Z"
                  fill="none"
                />
                <path
                  id="Mask-27"
                  data-name="Mask"
                  d="M26.382,53.642,5.229,31.713a18.886,18.886,0,0,1,0-26.088,17.772,17.772,0,0,1,25.119-.6,17.809,17.809,0,0,1,25.283.486,18.92,18.92,0,0,1,.012,26.123L34.425,53.625a5.606,5.606,0,0,1-8.043.017Z"
                  transform="translate(11.066 13.833)"
                  fill="#f71735"
                />
                <g
                  id="Icon_Heart"
                  data-name="Icon/Heart"
                  transform="translate(11.125 13.688)"
                  clip-path="url(#clip-path-9)"
                >
                  <g
                    id="Color-9"
                    data-name="Color"
                    transform="translate(-11.045 -13.906)"
                  >
                    <path
                      id="Icon_Fill_Bright-9"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H82.841V83.436H0Z"
                      fill="#f71735"
                    />
                  </g>
                </g>
              </g>
              <g id="Home" transform="translate(777.888 144.301) rotate(-34)">
                <path
                  id="Grid-10"
                  data-name="Grid"
                  d="M0,0H83.436V83.436H0Z"
                  transform="translate(-0.218 -0.218)"
                  fill="none"
                />
                <path
                  id="Mask-28"
                  data-name="Mask"
                  d="M50.06,58.4H11.129a2.784,2.784,0,0,1-2.781-2.781V33.374H2.787A2.779,2.779,0,0,1,.822,28.628L28.628.814a2.783,2.783,0,0,1,3.932,0L60.367,28.628A2.78,2.78,0,0,1,58.4,33.374H52.838v22.25A2.783,2.783,0,0,1,50.06,58.4ZM27.812,30.593h5.562a5.569,5.569,0,0,1,5.564,5.562V52.842h8.343V30.593a2.784,2.784,0,0,1,2.781-2.781h1.63l-21.1-21.1L9.5,27.812h1.627a2.785,2.785,0,0,1,2.783,2.781v22.25h8.343V36.154A5.568,5.568,0,0,1,27.812,30.593Zm0,5.562V52.842h5.562V36.154Z"
                  transform="translate(10.906 10.907)"
                  fill="#1a8fe3"
                />
                <g
                  id="Icon_Home"
                  data-name="Icon/Home"
                  transform="translate(10.906 10.907)"
                  clip-path="url(#clip-path-10)"
                >
                  <g
                    id="Color-10"
                    data-name="Color"
                    transform="translate(-11.124 -11.125)"
                  >
                    <path
                      id="Icon_Fill_Bright-10"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H83.436V83.436H0Z"
                      fill="#1a8fe3"
                    />
                  </g>
                </g>
              </g>
              <g id="Layers" transform="translate(976 327)">
                <path
                  id="Grid-11"
                  data-name="Grid"
                  d="M0,0H96V96H0Z"
                  fill="none"
                />
                <path
                  id="Mask-29"
                  data-name="Mask"
                  d="M28.8,64a6.4,6.4,0,0,1-3.177-.844l-22.4-12.8a6.4,6.4,0,0,1,0-11.114L4.7,38.4l-1.475-.844a6.4,6.4,0,0,1,0-11.114L4.7,25.6l-1.477-.844a6.4,6.4,0,0,1,0-11.114l22.4-12.8a6.4,6.4,0,0,1,6.353,0l22.4,12.8a6.4,6.4,0,0,1,0,11.114L52.9,25.6l1.477.844a6.4,6.4,0,0,1,0,11.114L52.9,38.4l1.475.844a6.4,6.4,0,0,1,0,11.114l-22.4,12.8A6.4,6.4,0,0,1,28.8,64ZM11.148,42.086h0L6.4,44.8,28.8,57.6,51.2,44.8l-4.752-2.716L31.977,50.358a6.42,6.42,0,0,1-6.353,0L11.148,42.086Zm0-12.8h0L6.4,32,28.8,44.8,51.2,32l-4.752-2.713L31.977,37.559a6.411,6.411,0,0,1-6.353,0L11.151,29.287ZM28.8,6.4h0L6.4,19.2,28.8,32,51.2,19.2,28.8,6.4Z"
                  transform="translate(19.2 15.999)"
                  fill="#a81adb"
                />
                <g
                  id="Icon_Layers"
                  data-name="Icon/Layers"
                  transform="translate(19.05 15.833)"
                  clip-path="url(#clip-path-11)"
                >
                  <g
                    id="Color-11"
                    data-name="Color"
                    transform="translate(-19.3 -16.083)"
                  >
                    <path
                      id="Icon_Fill_Bright-11"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H96.5V96.5H0Z"
                      fill="#a81adb"
                    />
                  </g>
                </g>
              </g>
              <g id="Lens" transform="translate(515.242 39.786) rotate(101)">
                <rect
                  id="Icon_Lens_background"
                  data-name="Icon/Lens background"
                  width="84"
                  height="84"
                  fill="none"
                />
                <g id="Icon_Lens" data-name="Icon/Lens">
                  <path
                    id="Grid-12"
                    data-name="Grid"
                    d="M0,0H84V84H0Z"
                    fill="none"
                  />
                  <path
                    id="Mask-30"
                    data-name="Mask"
                    d="M42.613,52.149,32,38.883a21.054,21.054,0,1,1,4.334-3.548L46.985,48.651a2.8,2.8,0,1,1-4.372,3.5ZM5.6,21A15.4,15.4,0,1,0,21,5.6,15.416,15.416,0,0,0,5.6,21Z"
                    transform="translate(16.8 14)"
                    fill="#f9c80e"
                  />
                  <g
                    id="Icon_Lens-2"
                    data-name="Icon/Lens"
                    transform="translate(16.798 13.998)"
                    clip-path="url(#clip-path-12)"
                  >
                    <g
                      id="Color-12"
                      data-name="Color"
                      transform="translate(-16.802 -14.001)"
                    >
                      <path
                        id="Icon_Fill_Bright-12"
                        data-name="Icon/🖌 Fill/Bright"
                        d="M0,0H84.009V84.009H0Z"
                        fill="#f9c80e"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="Mail" transform="translate(280.54 374.57) rotate(21)">
                <path
                  id="Grid-13"
                  data-name="Grid"
                  d="M0,0H92V92H0Z"
                  fill="none"
                />
                <path
                  id="Mask-31"
                  data-name="Mask"
                  d="M6.133,55.2A6.14,6.14,0,0,1,0,49.067V6.133A6.14,6.14,0,0,1,6.133,0h55.2a6.14,6.14,0,0,1,6.133,6.133V49.067A6.14,6.14,0,0,1,61.333,55.2Zm0-6.133h55.2V10.378L35.405,34.356a3.069,3.069,0,0,1-3.624-.017L6.133,10.151Zm27.487-21L56.975,6.133H10.706Z"
                  transform="translate(12.267 18.4)"
                  fill="#1a8fe3"
                />
                <g
                  id="Icon_Mail"
                  data-name="Icon/Mail"
                  transform="translate(12.314 18.294)"
                  clip-path="url(#clip-path-13)"
                >
                  <g
                    id="Color-13"
                    data-name="Color"
                    transform="translate(-12.249 -18.471)"
                  >
                    <path
                      id="Icon_Fill_Bright-13"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H91.871V92.355H0Z"
                      fill="#1a8fe3"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Marker"
                transform="matrix(0.875, 0.485, -0.485, 0.875, 794.925, 750.989)"
              >
                <path
                  id="Grid-14"
                  data-name="Grid"
                  d="M0,0H103V103H0Z"
                  fill="none"
                />
                <path
                  id="Mask-32"
                  data-name="Mask"
                  d="M10.175,57.384C4,46.492,0,34.97,0,28.023,0,12.57,12.323,0,27.467,0S54.934,12.57,54.934,28.023c0,6.946-4,18.469-10.175,29.361-4.978,8.773-12.138,18.148-17.292,18.148S15.153,66.157,10.175,57.384ZM6.866,28.023c0,5.565,3.535,15.564,9,25.471,4.638,8.4,10.138,15.172,11.6,15.172s6.956-6.767,11.6-15.172c5.469-9.907,9-19.906,9-25.471,0-11.665-9.242-21.157-20.6-21.157S6.866,16.358,6.866,28.023Zm6.866-.556A13.734,13.734,0,1,1,27.467,41.2,13.735,13.735,0,0,1,13.732,27.467Z"
                  transform="translate(24.033 13.733)"
                  fill="#ff0054"
                />
                <g
                  id="Icon_Marker"
                  data-name="Icon/Marker"
                  transform="translate(24.033 13.733)"
                  clip-path="url(#clip-path-14)"
                >
                  <g
                    id="Color-14"
                    data-name="Color"
                    transform="translate(-24.033 -13.733)"
                  >
                    <path
                      id="Icon_Fill_Bright-14"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H103V103H0Z"
                      fill="#ff0054"
                    />
                  </g>
                </g>
              </g>
              <g id="Mobile" transform="translate(810.787 535.768) rotate(-43)">
                <path
                  id="Grid-15"
                  data-name="Grid"
                  d="M0,0H92V92H0Z"
                  fill="none"
                />
                <path
                  id="Mask-33"
                  data-name="Mask"
                  d="M6.133,73.6A6.439,6.439,0,0,1,0,66.908V6.69A6.437,6.437,0,0,1,6.133,0H36.8a6.437,6.437,0,0,1,6.135,6.69V66.908A6.44,6.44,0,0,1,36.8,73.6Zm0-6.135H36.8V6.133H6.133ZM18.4,61.333A3.066,3.066,0,1,1,21.467,64.4,3.067,3.067,0,0,1,18.4,61.333Zm0-47.533a1.533,1.533,0,1,1,0-3.066h6.133a1.533,1.533,0,0,1,0,3.066Z"
                  transform="translate(24.533 9.2)"
                  fill="#fe621d"
                />
                <g
                  id="Icon_Mobile"
                  data-name="Icon/Mobile"
                  transform="translate(24.3 9.3)"
                  clip-path="url(#clip-path-15)"
                >
                  <g
                    id="Color-15"
                    data-name="Color"
                    transform="translate(-24.8 -9.175)"
                  >
                    <path
                      id="Icon_Fill_Bright-15"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H93V91.75H0Z"
                      fill="#fe621d"
                    />
                  </g>
                </g>
              </g>
              <g id="Share" transform="translate(344 759)">
                <path
                  id="Grid-16"
                  data-name="Grid"
                  d="M0,0H98V98H0Z"
                  fill="none"
                />
                <path
                  id="Mask-34"
                  data-name="Mask"
                  d="M32.666,58.8a12.982,12.982,0,0,1,1.23-5.531L22.111,45.356a13.067,13.067,0,1,1,.007-18.837l11.806-7.862a13.09,13.09,0,1,1,4.219,5.04l-12.59,8.384a13.09,13.09,0,0,1,0,7.715l12.534,8.417A13.061,13.061,0,1,1,32.666,58.8Zm6.533,0a6.534,6.534,0,1,0,6.536-6.533A6.542,6.542,0,0,0,39.2,58.8ZM6.533,35.933A6.534,6.534,0,1,0,13.065,29.4,6.541,6.541,0,0,0,6.533,35.933ZM39.2,13.065a6.534,6.534,0,1,0,6.536-6.533A6.542,6.542,0,0,0,39.2,13.065Z"
                  transform="translate(16.333 13.067)"
                  fill="#0c6"
                />
                <g
                  id="Icon_Share"
                  data-name="Icon/Share"
                  transform="translate(16.208 13.133)"
                  clip-path="url(#clip-path-16)"
                >
                  <g
                    id="Color-16"
                    data-name="Color"
                    transform="translate(-16.417 -13.042)"
                  >
                    <path
                      id="Icon_Fill_Bright-16"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H98.5V97.818H0Z"
                      fill="#0c6"
                    />
                  </g>
                </g>
              </g>
              <g id="User" transform="translate(221.384 150.08) rotate(-17)">
                <path
                  id="Grid-17"
                  data-name="Grid"
                  d="M0,0H93V93H0Z"
                  fill="none"
                />
                <path
                  id="Mask-35"
                  data-name="Mask"
                  d="M52.617,65.1a3.1,3.1,0,0,1-3.03-3.169C49.964,45.005,43.031,40.3,27.9,40.3c-14.329,0-21.321,4.768-21.7,21.77A3.1,3.1,0,0,1,0,61.93C.453,41.736,9.994,34.1,27.9,34.1c18.749,0,28.338,7.695,27.883,27.97A3.1,3.1,0,0,1,52.689,65.1ZM12.4,15.5A15.5,15.5,0,1,1,27.9,31,15.517,15.517,0,0,1,12.4,15.5Zm6.2,0a9.3,9.3,0,1,0,9.3-9.3A9.309,9.309,0,0,0,18.6,15.5Z"
                  transform="translate(18.599 12.4)"
                  fill="#a81adb"
                />
                <g
                  id="Icon_User"
                  data-name="Icon/User"
                  transform="translate(18.537 12.428)"
                  clip-path="url(#clip-path-17)"
                >
                  <g
                    id="Color-17"
                    data-name="Color"
                    transform="translate(-18.641 -12.428)"
                  >
                    <path
                      id="Icon_Fill_Bright-17"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H93.209V93.209H0Z"
                      fill="#a81adb"
                    />
                  </g>
                </g>
              </g>
              <g id="Wrench" transform="translate(682 821)">
                <path
                  id="Grid-18"
                  data-name="Grid"
                  d="M0,0H79V79H0Z"
                  fill="none"
                />
                <path
                  id="Mask-36"
                  data-name="Mask"
                  d="M7.151,57.965,1.565,52.379a5.213,5.213,0,0,1-.073-7.373l18.6-18.6A20.438,20.438,0,0,1,44.251.509a5.27,5.27,0,0,1,2.685,8.812l-8.6,8.6,3.726,3.723L51.2,12.5a5.264,5.264,0,0,1,8.674,2.183,20.478,20.478,0,0,1-27.428,25.43L14.524,58.039a5.09,5.09,0,0,1-3.618,1.491A5.3,5.3,0,0,1,7.151,57.965Z"
                  transform="translate(9.833 10.066)"
                  fill="#1a8fe3"
                />
                <g
                  id="Icon_Wrench"
                  data-name="Icon/Wrench"
                  transform="translate(9.895 10.13)"
                  clip-path="url(#clip-path-18)"
                >
                  <g
                    id="Color-18"
                    data-name="Color"
                    transform="translate(-9.814 -10.045)"
                  >
                    <path
                      id="Icon_Fill_Bright-18"
                      data-name="Icon/🖌 Fill/Bright"
                      d="M0,0H78.852V78.836H0Z"
                      fill="#1a8fe3"
                    />
                  </g>
                </g>
              </g>
            </motion.g>
            <g id="Phone" transform="translate(-1124 0.5)">
              <g id="Device" transform="translate(1453 107.5)">
                <path
                  id="Screen"
                  d="M57,0H366a56.993,56.993,0,0,1,57,56.986V802.8a56.993,56.993,0,0,1-57,56.986H57A56.993,56.993,0,0,1,0,802.8V56.986A56.993,56.993,0,0,1,57,0Z"
                  transform="translate(0 5.209)"
                  fill="#131316"
                />
                <g id="Notch" transform="translate(0 0)">
                  <path
                    id="Home-2"
                    data-name="Home"
                    d="M2.5,0h125a2.5,2.5,0,0,1,0,5H2.5a2.5,2.5,0,0,1,0-5Z"
                    transform="translate(147 821)"
                    fill="#a81adb"
                  />
                  <g
                    transform="matrix(1, 0, 0, 1, -329, -108)"
                    filter="url(#Bezel)"
                  >
                    <path
                      id="Bezel-2"
                      data-name="Bezel"
                      d="M57,0H366a56.993,56.993,0,0,1,57,56.986V802.8a56.993,56.993,0,0,1-57,56.986H57A56.993,56.993,0,0,1,0,802.8V56.986A56.993,56.993,0,0,1,57,0Z"
                      transform="translate(329 113.21)"
                      fill="none"
                      stroke="#a81adb"
                      stroke-width="11"
                    />
                  </g>
                  <path
                    id="Back"
                    d="M33.811,36.241c-13.086-.135-17.45-10.694-18.529-14.727s-1.624-8.03-2.1-10.134S10.624,6.12,6.888,6.12H0V0L117.666.84,235.331,0V6.12h-6.888a6.514,6.514,0,0,0-6.293,5.26c-.477,2.1-1.022,6.1-2.1,10.134s-5.444,14.592-18.53,14.727C197.158,36.286,45.349,36.36,33.811,36.241Z"
                    transform="translate(95.334)"
                    fill="#a81adb"
                  />
                  <ellipse
                    id="Camera"
                    cx="4.5"
                    cy="4.5"
                    rx="4.5"
                    ry="4.5"
                    transform="translate(259 11.209)"
                    fill="#171a21"
                  />
                  <path
                    id="Ear_Peice"
                    data-name="Ear Peice"
                    d="M4,.5H59a3.5,3.5,0,0,1,0,7H4a3.5,3.5,0,0,1,0-7Z"
                    transform="translate(181 12.209)"
                    fill="#07080d"
                  />
                </g>
              </g>
              <motion.g id="Red" transform="translate(1481 162.709)">
                <rect
                  id="Back-2"
                  data-name="Back"
                  width="367"
                  height="272"
                  rx="32"
                  fill="#ff0054"
                />
                <g id="Content" transform="translate(29 29)">
                  <rect
                    id="Three"
                    width="138"
                    height="215"
                    rx="24"
                    fill="#ffadaf"
                  />
                  <g id="Two" transform="translate(172 151)">
                    <rect
                      id="Rectangle_6"
                      data-name="Rectangle 6"
                      width="138"
                      height="13"
                      rx="6.5"
                      fill="#ffadaf"
                    />
                    <rect
                      id="Rectangle_6-2"
                      data-name="Rectangle 6"
                      width="138"
                      height="13"
                      rx="6.5"
                      transform="translate(0 34)"
                      fill="#ffadaf"
                    />
                  </g>
                  <rect
                    id="One"
                    width="120"
                    height="120"
                    rx="32"
                    transform="translate(181 9)"
                    fill="#ffadaf"
                  />
                </g>
              </motion.g>
              <g id="Yellow">
                <rect
                  id="Back-3"
                  data-name="Back"
                  width="367"
                  height="100"
                  rx="24"
                  transform="translate(1481 794.709)"
                  fill="#f9c80e"
                />
                <g id="Content-2" data-name="Content">
                  <rect
                    id="Four"
                    width="50"
                    height="50"
                    rx="25"
                    transform="translate(1493.5 818.709)"
                    fill="#fe621d"
                  />
                  <rect
                    id="Three-2"
                    data-name="Three"
                    width="50"
                    height="50"
                    rx="25"
                    transform="translate(1561.5 818.709)"
                    fill="#fe621d"
                  />
                  <g
                    id="Center"
                    transform="translate(1629.5 808.709)"
                    fill="none"
                    stroke="#fe621d"
                    stroke-width="11"
                  >
                    <rect width="70" height="70" rx="35" stroke="none" />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="59"
                      height="59"
                      rx="29.5"
                      fill="none"
                    />
                  </g>
                  <rect
                    id="Two-2"
                    data-name="Two"
                    width="50"
                    height="50"
                    rx="25"
                    transform="translate(1717.5 818.709)"
                    fill="#fe621d"
                  />
                  <rect
                    id="One-2"
                    data-name="One"
                    width="50"
                    height="50"
                    rx="25"
                    transform="translate(1785.5 818.709)"
                    fill="#fe621d"
                  />
                </g>
              </g>
              <g id="Blue">
                <rect
                  id="Back-4"
                  data-name="Back"
                  width="367"
                  height="318"
                  rx="32"
                  transform="translate(1481 454.709)"
                  fill="#1a8fe3"
                />
                <g id="Content-3" data-name="Content">
                  <rect
                    id="One-3"
                    data-name="One"
                    width="120"
                    height="120"
                    rx="24"
                    transform="translate(1521.145 488.065)"
                    fill="#8edef6"
                  />
                  <rect
                    id="Two-3"
                    data-name="Two"
                    width="100"
                    height="100"
                    rx="24"
                    transform="translate(1666.434 548.065) rotate(-45)"
                    fill="#8edef6"
                  />
                  <rect
                    id="Three-3"
                    data-name="Three"
                    width="120"
                    height="120"
                    rx="60"
                    transform="translate(1521.145 629.065)"
                    fill="#8edef6"
                  />
                  <rect
                    id="Four-2"
                    data-name="Four"
                    width="120"
                    height="120"
                    rx="24"
                    transform="translate(1677.145 630.065)"
                    fill="#8edef6"
                  />
                </g>
              </g>
            </g>
          </g>
        </motion.svg>
      </div>
      <motion.div animate={pixarA} className="hero-inner">
        <div className="hero-content">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="hero-title"
          >
            <motion.h1 variants={item} className="hero-title-one">
              s
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              a
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              m
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              m
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              y
            </motion.h1>
          </motion.div>
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="hero-title"
          >
            <motion.h1 variants={item} className="hero-title-two">
              m
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              u
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              c
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              h
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              i
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              r
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              i
            </motion.h1>
          </motion.div>
          <p className="hero-message">digital designer & developer</p>
        </div>
        <div className="hero-cta">
          <p className="cta-text">Get in touch</p>
          <svg className="cta-icon" viewBox="0 0 50 50" width="50" height="50">
            <path
              id="arrow-forward"
              d="M25.073,1.969,50,26.969l-24.927,25-4.4-4.387L38.121,30.038H0V23.9H38.123L20.675,6.354Z"
              transform="translate(0 -1.969)"
              fill="#d11149"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
