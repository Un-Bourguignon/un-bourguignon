import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Un Bourguignon</title>
      </Head>

      <main>
        <h1>
          <a>Un Bourguignon</a>
        </h1>

        <p>Service de développement web && éditeur logiciel</p>

        <div>
          <ul>
            <li>
              <Link href="/stephane.maire">Freelance</Link>
            </li>
            <li>
              <Link href="/projects">Projets</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </main>

      <footer>©2020 Un Bourguignon</footer>
    </div>
  );
}
