import React from "react";
// nodejs library to set properties for template_components
import PropTypes from "prop-types";
// @material-ui/core template_components
import {makeStyles} from "@material-ui/core/styles";
// core template_components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Quote(props) {
  const { text, author } = props;
  const classes = useStyles();
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};
