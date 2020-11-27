import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const BASE_URL_LOGO = "https://cdn.svgporn.com/logos";
const useStyles = makeStyles(styles);

const logos = [
  { title: "React", url: "react" },
  { title: "NexJS", url: "nextjs" },
  { title: "Material UI", url: "material-ui" },
  { title: "Redux", url: "redux" },
  { title: "Redux Saga", url: "redux-saga" },
  { title: "Storybook", url: "storybook-icon" },
  { title: "Chromatic", url: "chromatic-icon" },
  { title: "Jest", url: "jest" },
  { title: "AWS", url: "aws" },
  { title: "MDX", url: "mdx" },
];

function LogoWebTechno() {
  const classes = useStyles();

  return (
    <div>
      {logos.map(({ title, url }) => (
        <img
          key={url}
          src={`${BASE_URL_LOGO}/${url}.svg`}
          alt={title}
          className={classes.logo}
        />
      ))}
    </div>
  );
}

export default LogoWebTechno;
