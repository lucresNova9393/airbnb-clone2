import { Poppins } from 'next/font/google'

import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser  from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';


export const metadata = {
  title: 'AirBnB',
  description: 'Welcome to AirBnB',
}

const font = Poppins({
  subsets: ["latin-ext"],
  weight: '200'
});
  

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className} >
        
        <ClientOnly>
          <ToasterProvider/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
           <SearchModal />
        <Navbar currentUser= { currentUser }/>
        
        </ClientOnly>
        <div className='pb-20 pt-28'>
        {children}
        </div>
        </body>
    </html>
  )
}
