import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
// From Gatsby v3 onwards we need to import styles like this (below)
import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Desing</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web Developer based in Barcelona</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
