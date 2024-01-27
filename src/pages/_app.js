import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
// ! Easy to get Fonts now !
import { Montserrat } from '@next/font/google'
import Head from 'next/head'

import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';


const montserrat = Montserrat({
  subsets: ['latin'],
  weights: 400,
})

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <motion.div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${montserrat.className} dark:bg-dark bg-light w-full min-h-screen`}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </motion.div >
    </AnimatePresence>
  )
}
