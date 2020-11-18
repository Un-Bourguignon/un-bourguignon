import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useSize from "./index";

export default {
  title: "utils/useSize",
  component: useSize,
};

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    "&.position1": {
      width: "30%",
      height: 100,
    },
    "&.position2": {
      width: "100%",
      height: 200,
    },
    transform: "translate3d(0, 0, 0)",
    willChange: "width, height",
    transition: "2.5s ease",
    transitionProperty: "width, height",
  },
  size: {
    marginBottom: theme.spacing(1),
  },
}));

const Template = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const size = useSize(ref);
  const [position, setPosition] = useState(1);

  function handleResize() {
    setPosition(position === 1 ? 2 : 1);
  }

  return (
    <div ref={ref} className={`${classes.root1} position${position}`}>
      <div className={classes.size}>
        {Math.round(size.width)} x {Math.round(size.height)}
      </div>
      <button onClick={handleResize}>Resize</button>
    </div>
  );
};

export const Default = Template.bind({});
