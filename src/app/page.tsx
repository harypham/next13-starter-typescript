
import Link from 'next/link'
import x from '@/styles/app.module.css'
import AppTable from '@/components/app.table'
export default function Home() {
  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link href="/youtube">
            YouTube Hello
          </Link>
        </li>
        <li>
          <Link href="/facebook">
            Facebook  
          </Link>
        </li>
        <li>
          <Link href="/tiktok">
            Tiktok
          </Link>
        </li>
      </ul>
        <AppTable />
    </div>
  )
}
