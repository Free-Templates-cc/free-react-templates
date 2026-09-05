import { useEffect } from 'react'
import { Dropdown } from './components/Dropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropcall — Two-Column Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-dropcall-text">
      <main className="flex-1 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-dropcall-title">
          Dropdown #2
        </h2>
        <Dropdown />
      </main>
      <Footer />
    </div>
  )
}
