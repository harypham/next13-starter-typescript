
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li >
          <Link href={"/facebook"}>

            Facebook
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a href="/youtube"> Youtube </a>
        </li>
        <li>
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul>
    </div>
  )
}
