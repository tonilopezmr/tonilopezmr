import { useEffect, useRef, useState } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)
  const [isFocus, setFocus] = useState(false)

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor')
    if (!cursor) {
      return
    }
  
    const move = e => {      
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`      
    }
  
    const onClick = (e) => {    
      setFocus(!isFocus)      

      if(isFocus) {                
        move(e)
        cursor.style.display = 'none'
        document.body.style.cursor = ''        
      } else {
        cursor.style.display = ''
        document.body.style.cursor = 'none'
      }
    }
  
    document.addEventListener('mousemove', move)
    document.addEventListener('mousedown', onClick)    
  
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', onClick)      
    }
  }, [isFocus])

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 border-l border-r" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        {router.pathname !== '/' && <Footer />}
      </div>
      <div className="custom-cursor dark:text-white" id="cursor" style={{ left: '753px', top: '610px', position: 'absolute', display: 'none' }}>focus</div>              
    </>
  )
}
