import React from "react"
import PropTypes from "prop-types"
import { getConfiguration } from "./config"
import { classNames } from "helpers/classNames"
import styles from "./Grid.module.scss"

/**
 * Column child component configuration
 */
const component = "col"
const columnConfig = getConfiguration().columnSizes

/**
 *
 * @prop {Object} size    The default size of the column
 * @prop {string} lg The default size of the column
 * @prop {string} md  The default size of the column
 * @prop {string} sm  The default size of the column
 *
 * @returns {Array} Column classes
 */
const makeColumnClasses = ({ size, offset }) => {
  // Returning the keys for the matching values
  const getKeyByValue = (object, value) =>
    Object.keys(object).find((key) => object[key].indexOf(value) !== -1)

  const classesArray = []

  /**
   * Breakpoint modifiers
   */
  // Settting default and higher screen size
  // To be refactored
  /* eslint-disable */
  if (size) {
    if (typeof size === "object") {
      size.xl &&
        classesArray.push(
          styles[`${component}-xl-${getKeyByValue(columnConfig, size.xl)}`]
        )
      size.lg &&
        classesArray.push(
          styles[`${component}-lg-${getKeyByValue(columnConfig, size.lg)}`]
        )
      size.md &&
        classesArray.push(
          styles[`${component}-md-${getKeyByValue(columnConfig, size.md)}`]
        )
      size.sm &&
        classesArray.push(
          styles[`${component}-sm-${getKeyByValue(columnConfig, size.sm)}`]
        )
      size.xs &&
        classesArray.push(
          styles[`${component}-${getKeyByValue(columnConfig, size.xs)}`]
        )
    } else {
      classesArray.push(
        styles[`${component}-${getKeyByValue(columnConfig, size)}`]
      )
    }
  }

  /**
   * Offset
   */
  if (offset) {
    if (typeof offset === "object") {
      offset.xl &&
        classesArray.push(
          styles[`offset-xl-${getKeyByValue(columnConfig, offset.xl)}`]
        )
      offset.lg &&
        classesArray.push(
          styles[`offset-lg-${getKeyByValue(columnConfig, offset.lg)}`]
        )
      offset.md &&
        classesArray.push(
          styles[`offset-md-${getKeyByValue(columnConfig, offset.md)}`]
        )
      offset.sm &&
        classesArray.push(
          styles[`offset-sm-${getKeyByValue(columnConfig, offset.sm)}`]
        )
      offset.xs &&
        classesArray.push(
          styles[`offset-${getKeyByValue(columnConfig, offset.xs)}`]
        )
    } else {
      classesArray.push(styles[`offset-${getKeyByValue(columnConfig, offset)}`])
    }
  }

  /**
   * Setting the default className
   */
  if (!size) {
    classesArray.push(styles[component])
  }

  return classesArray
}

export const Column = React.forwardRef((props, ref) => {
  // Column classes
  const columnSize = makeColumnClasses(props)

  /**
   * Filtering props
   */
  const properties = {
    className: classNames(columnSize, props.className),
    ref,
  }

  return <div {...properties}>{props.children}</div>
})

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Column.displayName = component

export default Column
