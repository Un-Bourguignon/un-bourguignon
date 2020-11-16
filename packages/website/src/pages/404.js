import Link from "next/link";

function Custom404() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>This page could not be found !</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Custom404;
