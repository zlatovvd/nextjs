import Image from "next/image";
import styles from "./page.module.css";
import cource from "./course.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {cource.lessons.map((lesson) => (
          <li key={lesson.name}>
            <h2>{lesson.title}</h2>
            <p>{lesson.shortSummary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
