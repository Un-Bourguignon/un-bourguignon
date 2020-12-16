import PropTypes from "prop-types";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { AVATAR_DIMENSION } from "@un-bourguignon/components";
import { PERSONAL_DETAILS } from "../../constants";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AvatarPhoto({ small = false }) {
  const classes = useStyles();

  return (
    <Image
      src={PERSONAL_DETAILS.image}
      alt={`${PERSONAL_DETAILS.firstname} ${PERSONAL_DETAILS.lastname}`}
      width={small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default}
      height={small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default}
      layout="fixed"
      className={classes.AvatarPhoto}
    />
  );
}

AvatarPhoto.propTypes = {
  small: PropTypes.bool,
};

export default AvatarPhoto;
