import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Carousel, { consts } from "react-elastic-carousel"

import bustube from "../../images/assets/bustube.jpg"
import estilo from "../../images/assets/estilo.jpg"
import gadgetShop from "../../images/assets/gadget-shop.mp4"
import mci from "../../images/assets/mci.png"
import motosouk from "../../images/assets/motosouk.jpg"

import pIcon from "../../images/icons/pagination.svg"
import prev from "../../images/icons/chevron left.svg"
import next from "../../images/icons/chevron right.svg"
import right from "../../images/icons/arrow right.svg"
import { Link } from "gatsby"

// My works
const breakPoints = [
  { width: 480, itemsToShow: 1 },
  { width: 960, itemsToShow: 2 },
  { width: 1440, itemsToShow: 3 },
  { width: 1920, itemsToShow: 4 },
]

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <img src={prev} alt="Previous" className="arrow-icons" />
    ) : (
      <img src={next} alt="Next" className="arrow-icons" />
    )

  return (
    <div
      className="carousel-icons"
      aria-hidden="true"
      onClick={onClick}
      disabled={isEdge}
    >
      {pointer}
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const pixar = useAnimation()

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

  return (
    <div ref={ref} id="projects" className="project-section">
      <motion.div animate={pixar} className="project-content">
        <div className="project-header">
          <h1 className="project-title">portfolio showcase</h1>
          <p className="project-text">curated projects and works</p>
        </div>
      </motion.div>
      <Carousel
        className="project-carousel"
        initialActiveIndex={0}
        itemPadding={[2, 2]}
        breakPoints={breakPoints}
        renderArrow={myArrow}
        disableArrowsOnEnd={true}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className="carousel-pagination">
              {pages.map(page => {
                const isActivePage = activePage === page
                return (
                  <img
                    src={pIcon}
                    className="pagination"
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                    alt="pagination"
                    aria-hidden="true"
                  />
                )
              })}
            </div>
          )
        }}
      >
        <Link to="/" className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={mci} />
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <p className="carousel-content-text">Social Media</p>
              <h2 className="carousel-content-title">MCI</h2>
            </div>
            <div className="carousel-content-icons">
              <img src={right} alt="icon" className="icon" />
            </div>
          </div>
        </Link>
        <Link to="/" className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={bustube} />
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <p className="carousel-content-text">Web Development</p>
              <h2 className="carousel-content-title">BusTube</h2>
            </div>
            <div className="carousel-content-icons">
              <img src={right} alt="icon" className="icon" />
            </div>
          </div>
        </Link>
        <Link to="/" className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={estilo} />
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <p className="carousel-content-text">Print Design</p>
              <h2 className="carousel-content-title">Estilo</h2>
            </div>
            <div className="carousel-content-icons">
              <img src={right} alt="icon" className="icon" />
            </div>
          </div>
        </Link>
        <Link to="/" className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={motosouk} />
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <p className="carousel-content-text">Digital Design</p>
              <h2 className="carousel-content-title">Motosouk</h2>
            </div>
            <div className="carousel-content-icons">
              <img src={right} alt="icon" className="icon" />
            </div>
          </div>
        </Link>
        <Link to="/" className="carousel-item">
          <div className="carousel-image-wrapper">
            <video className="carousel-image" src={gadgetShop}>
              <track kind="Captions" />
              <track kind="subtitles" />
            </video>
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <p className="carousel-content-text">Animation</p>
              <h2 className="carousel-content-title">Gadget Shop</h2>
            </div>
            <div className="carousel-content-icons">
              <img src={right} alt="icon" className="icon" />
            </div>
          </div>
        </Link>
      </Carousel>
    </div>
  )
}
