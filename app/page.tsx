import { Inter } from 'next/font/google'
import Header from './layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}
