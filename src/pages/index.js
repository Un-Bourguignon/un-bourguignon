import Link from "next/link";
import HeaderTeleporter from "../components/AppLayout/HeaderTeleporter";

export default function Home() {
  return (
    <div>
      <HeaderTeleporter.Source>
        <h1>Un Bourguignon</h1>
      </HeaderTeleporter.Source>

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
    </div>
  );
}
