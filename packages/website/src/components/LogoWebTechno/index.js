import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import ReactIcon from "../../../public/react.svg";
import NextJSIcon from "../../../public/nextjs.svg";
import AWSIcon from "../../../public/aws.svg";
import ChromaticIcon from "../../../public/chromatic-icon.svg";
import JestIcon from "../../../public/jest.svg";
import MaterialUIIcon from "../../../public/material-ui.svg";
import MDXIcon from "../../../public/mdx.svg";
import ReduxSagaIcon from "../../../public/redux-saga.svg";
import ReduxIcon from "../../../public/redux.svg";
import StorybookIcon from "../../../public/storybook-icon.svg";
import styles from "./styles";

const useStyles = makeStyles(styles);

const logos = [
  { title: "React", key: "react", icon: ReactIcon },
  { title: "NexJS", key: "nextjs", icon: NextJSIcon, filter: "contrast(0.2)" },
  { title: "Material UI", key: "material-ui", icon: MaterialUIIcon },
  { title: "Redux", key: "redux", icon: ReduxIcon },
  { title: "Redux Saga", key: "redux-saga", icon: ReduxSagaIcon },
  { title: "Storybook", key: "storybook-icon", icon: StorybookIcon },
  { title: "Chromatic", key: "chromatic-icon", icon: ChromaticIcon },
  { title: "Jest", key: "jest", icon: JestIcon },
  { title: "AWS", key: "aws", icon: AWSIcon, filter: "contrast(0.4)" },
  { title: "MDX", key: "mdx", icon: MDXIcon },
];

function LogoWebTechno() {
  const classes = useStyles();
  const theme = useTheme();
  const prefersDarkMode = theme.palette.type;

  return (
    <div style={{ filter: "grayscale(60%)" }}>
      {logos.map(({ title, icon: Icon, key, filter }) => (
        <Tooltip title={title} aria-label={title} key={key}>
          <span>
            <Icon
              className={classes.svg}
              style={prefersDarkMode ? { filter } : {}}
            />
          </span>
        </Tooltip>
      ))}
    </div>
  );
}

export default LogoWebTechno;
