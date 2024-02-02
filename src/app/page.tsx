
import Link from 'next/link'
import "@/style/app.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'hihihi',
}

export default function Home() {
  return (
    <div>                                                                                                                                                                                                                                                                                                                                             
      <ul>
        <li className='red' style={{margin: "20px 0"}}>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li className='green' style={{margin: "20px 0"}}>
        <Link href="/youtube">Youtube</Link>
        </li>
        <li style={{margin: "20px 0"}}>
         <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
    </div>
  )
}
