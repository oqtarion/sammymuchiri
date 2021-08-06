import React from "react"
import Carousel, { consts } from "react-elastic-carousel"
import pIcon from "../../images/pagination.svg"
import bustube from "../../images/bustube.jpg"
import estilo from "../../images/estilo.jpg"
import gadgetShop from "../../images/gadget-shop.mp4"
import mci from "../../images/mci.png"
import motosouk from "../../images/motosouk.jpg"
import prev from "../../images/chevron-left.svg"
import next from "../../images/chevron-right.svg"

// My works
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <img src={prev} alt="Previous" />
    ) : (
      <img src={next} alt="Next" />
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
  return (
    <div id="projects" className="project-section">
      <div className="project-content">
        <h1 className="project-title">Portfolio Showcase</h1>
        <p className="project-text">Curated projects and works</p>
      </div>
      <Carousel
        className="project-carousel"
        initialActiveIndex={1}
        itemPadding={[2, 2]}
        breakPoints={breakPoints}
        renderArrow={myArrow}
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
        <div className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={mci} />
          </div>
          <div className="carousel-item-wrapper">
            <h2 className="carousel-item-title">MCI</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={bustube} />
          </div>
          <div className="carousel-item-wrapper">
            <h2 className="carousel-item-title">BusTube</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={estilo} />
          </div>
          <div className="carousel-item-wrapper">
            <h2 className="carousel-item-title">Estilo</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-wrapper">
            <img className="carousel-image" alt="project" src={motosouk} />
          </div>
          <div className="carousel-item-wrapper">
            <h2 className="carousel-item-title">Motosouk</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-wrapper">
            <video className="carousel-image" src={gadgetShop}>
              <track kind="Captions" />
              <track kind="subtitles" />
            </video>
          </div>
          <div className="carousel-item-wrapper">
            <h2 className="carousel-item-title">Gadget Shop</h2>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
