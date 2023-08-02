import HomePage from '@/components/homepage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Description bla bla',
}

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
