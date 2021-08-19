import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Get in touch
// Hire me

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const pixar = useAnimation()
  const pixarA = useAnimation()

  useEffect(() => {
    if (inView) {
      pixar.start({
        x: 0,
        opacity: 1,
        transition: {
          when: "beforeChildren",
          duration: 2,
          delay: 0.7,
          type: "spring",
        },
      })
    }
    if (!inView) {
      pixar.start({ x: "200vw", opacity: 0 })
    }
  }, [inView, pixar])

  useEffect(() => {
    if (inView) {
      pixarA.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      })
    }
    if (!inView) {
      pixarA.start({ x: "-100vw", opacity: 0 })
    }
  }, [inView, pixarA])

  const container = {
    initial: { y: 10 },
    animate: {
      y: 0,
      transition: {
        when: "beforeChildren",
        type: "spring",
        delayChildren: 0.2,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  }

  const title = {
    initial: { opacity: 0, y: "-100vh" },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const cta = {
    initial: { opacity: 0, y: "100vh" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  }

  // initial = "initial"
  // animate = "animate"
  // variants = { icons }
  // className = "banner"

  return (
    <div id="home" ref={ref} className="hero">
      <motion.div animate={pixar} className="hero-banner"></motion.div>
      <motion.div animate={pixarA} className="hero-inner">
        <motion.p
          initial="initial"
          animate="animate"
          variants={title}
          className="hero-message"
        >
          sammy muchiri
        </motion.p>
        <div className="hero-content">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="hero-title"
          >
            <motion.h1 variants={item} className="hero-title-one">
              d
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              e
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              s
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              i
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              g
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              n
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              e
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-one">
              r
            </motion.h1>
          </motion.div>
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="hero-title"
          >
            <motion.h1 variants={item} className="hero-title-span">
              &#38;
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              d
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              e
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              v
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              e
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              l
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              o
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              p
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              e
            </motion.h1>
            <motion.h1 variants={item} className="hero-title-two">
              r
            </motion.h1>
          </motion.div>
        </div>
        <motion.div
          href="/#connect"
          initial="initial"
          animate="animate"
          variants={cta}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className="hero-cta"
        >
          <a href="/#connect" className="cta-text">
            Get in touch
          </a>
          <svg className="cta-icon" viewBox="0 0 50 50" width="50" height="50">
            <path
              id="arrow-forward"
              d="M25.073,1.969,50,26.969l-24.927,25-4.4-4.387L38.121,30.038H0V23.9H38.123L20.675,6.354Z"
              transform="translate(0 -1.969)"
              fill="#00a1e4"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
