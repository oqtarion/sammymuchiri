import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

//Work Flow

export default function Process() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <div className="process-section">
      <div className="process-header">
        <div className="project-heading">
          <h1 className="process-title">work flow</h1>
        </div>
        <p className="process-text">
          a step by step guide to my design process
        </p>
      </div>
      <div className="process-content">
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                1
              </motion.h1>
            </div>
            <h2 className="process-card-title">Client Brief</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              Analyze the brief to assess the timeline, needs and requirements
              to come up with a solution to the clients problem therefore
              maximizing return on investment (ROI)
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                2
              </motion.h1>
            </div>
            <h2 className="process-card-title">Research</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              Gather facts on competition, current clients, target demographics,
              and pain points to mould a strategy to best reach the target
              audience and improve interactivity.
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                3
              </motion.h1>
            </div>
            <h2 className="process-card-title">Brainstorm</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              Create a mood board using the brief, design guidelines, and
              research which helps consolidate ideas for the project to achieve
              a workflow that is both effective and productive.
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                4
              </motion.h1>
            </div>
            <h2 className="process-card-title">Sketch</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              It all begins with a sketch pad and pen. Putting thoughts on paper
              first to visualize possible design patterns and wire frames makes
              art direction a reality and success.
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                5
              </motion.h1>
            </div>
            <h2 className="process-card-title">Concept</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              Here's where we begin to implement the sketches either through
              design or code. A todo list and documentation is created to track
              the progress of the project.
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                6
              </motion.h1>
            </div>
            <h2 className="process-card-title">Revisions</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              The first implementation of the project is sent for approval. Any
              revisions required by the client are resolved until they are
              satisfied with the result and all requirements realized.
            </p>
          </div>
        </motion.div>
        <motion.div
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className="process-card"
        >
          <div className="process-card-header">
            <div className="process-card-circle">
              <div className="card-circle"></div>
            </div>
            <div className="process-card-icon-wrapper">
              <motion.h1
                drag
                dragElastic={0.12}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 10000 }}
                className="process-card-icon"
              >
                7
              </motion.h1>
            </div>
            <h2 className="process-card-title">Completion</h2>
          </div>
          <div className="process-card-content">
            <p className="process-card-text">
              After client approval the handover process begins. High quality
              assets are delivered according to the client's request all within
              the agreed timeline.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
