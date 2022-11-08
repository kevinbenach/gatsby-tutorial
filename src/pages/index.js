import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
// From Gatsby v3 onwards we need to import styles like this (below)
import * as styles from "../styles/home.module.css";

export default function Home({ data }) {
  console.log(data);
  const { title, description } = data.site.siteMetadata;
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
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyFirstQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
