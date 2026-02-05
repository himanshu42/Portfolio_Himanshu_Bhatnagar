import React from 'react'
import Header from './Components/Header/Header'
import 'primeicons/primeicons.css';
import Footer from './Components/Footer/Footer';
import Body from './Pages/Body';
import Sidebar from './Components/Sidebar/Sidebar';
import SidebarContent from './Components/SidebarContent/SidebarContent';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex h-0"> {/* h-0 sounds weird but it forces a height basis for children */}
        <div className='flex'>
          <Sidebar />
          <SidebarContent />
        </div>
        <div className="flex-grow">
          <Body />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App