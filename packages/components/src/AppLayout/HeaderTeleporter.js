import { createTeleporter } from "react-teleporter";

const HeaderTeleporter = createTeleporter();
const { Target, Source } = HeaderTeleporter;

export const HeaderTarget = Target;
export const HeaderSource = Source;
export default HeaderTeleporter;
