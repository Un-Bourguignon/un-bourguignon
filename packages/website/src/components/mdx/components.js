import Typography from "@material-ui/core/Typography";

function H1(props) {
  return <Typography variant="h4" component="h1" {...props} />;
}

function H2(props) {
  return (
    <Typography variant="h5" component="h2" color="textSecondary" {...props} />
  );
}

function H3(props) {
  return <Typography variant="h6" component="h3" {...props} />;
}

function Paragraph(props) {
  return <Typography variant="body1" gutterBottom {...props} />;
}

const Components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
};

export default Components;
