import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Allow players to spend gold without spending time!</p>
        <div>
          <a
            href="https://github.com/Way2SelfAware"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <strong>Way2SelfAware</strong>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/DM Shopkeep_transparent.png"
          alt="DM Shopkeep Logo"
          width={375}
          height={375}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Shopkeeper Dashboard <span>-&gt;</span>
          </h2>
          <p>Fully control what players see and the items availble to them!</p>
        </a>

        <a
          // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Create different shops <span>-&gt;</span>
          </h2>
          <p>
            Setup individual shops and select what is sold at each location!
          </p>
        </a>

        <a
          // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Player Autonomy <span>-&gt;</span>
          </h2>
          <p>
            Allow your players to take their time without spending time waiting
            for you or each other.
          </p>
        </a>

        <a
          // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Upcoming! <span>-&gt;</span>
          </h2>
          <p>
            Check here for more information on upcoming features and reach out
            with suggestions for additional features you would like to see in
            the future!
          </p>
        </a>
      </div>
    </main>
  );
}
