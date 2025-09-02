import Link from "next/link";
import styles from "./Topo.module.css";
export default function Topo() {
  return (
    <header className={styles.container_topo}>
      <h1>Navegação React</h1>
      <nav>
        <Link href="/frontend">Front-end</Link>
        <Link href="/backend">Back-end</Link>
        <Link href="/mobile">Mobile</Link>
      </nav>
    </header>
  );
}
