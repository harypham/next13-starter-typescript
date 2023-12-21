'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const fetchData = async () => { 
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log("check data", data);
    }
    fetchData();
  }, []);


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
