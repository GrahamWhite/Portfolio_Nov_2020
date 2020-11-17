import React from "react";
// nodejs library to set properties for template_components
import PropTypes from "prop-types";
// @material-ui/core template_components
import {makeStyles} from "@material-ui/core/styles";
// core template_components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Info(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node
};
