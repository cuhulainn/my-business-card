import Head from "next/head";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import BusinessCard from "../components/BusinessCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connor&apos;s Business Card</title>
        <meta
          name="description"
          content="Connor's business card - React and Java software engineer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <BusinessCard />
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://www.linkedin.com/in/ConnorMcGinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/cuhulainn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
        </div>

        <div>
          <a
            href="https://twitter.com/ConnorMcGinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter />
          </a>
        </div>

        <div>
          <a
            href="mailto:connor.mcginn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMail />
          </a>
        </div>
      </footer>
    </div>
  );
}
