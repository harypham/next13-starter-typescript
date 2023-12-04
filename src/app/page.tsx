// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}
