import React from "react"
import PropTypes from "prop-types"
import { classNames } from "helpers/classNames"
import styles from "./Grid.module.scss"

/**
 * Container of the Grid compound component
 */
const component = "container"

export const Container = ({ fluid, className, style, children }) => {
  /**
   * Filtering props
   */
  const properties = {
    className: classNames(
      fluid ? styles[`${component}-fluid`] : styles[component],
      className
    ),
    style: { ...style },
  }

  return <div {...properties}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  style: PropTypes.object,
}

export default Container
