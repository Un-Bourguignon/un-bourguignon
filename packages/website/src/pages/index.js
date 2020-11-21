import Link from "next/link";
import { HeaderSource } from "@un-bourguignon/components";

function Home() {
  return (
    <div>
      <HeaderSource>
        <h1>Un Bourguignon</h1>
      </HeaderSource>

      <p>Service de développement web && éditeur logiciel</p>

      <div>
        <ul>
          <li>
            <Link href="/stephane.maire">Freelance</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
