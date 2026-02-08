import React from 'react'
import Header from './Components/Header/Header'
import 'primeicons/primeicons.css';
import Footer from './Components/Footer/Footer';
import Body from './Pages/Body';
import Sidebar from './Components/Sidebar/Sidebar';
import SidebarContent from './Components/SidebarContent/SidebarContent';
import WelcomeMobile from './Pages/WelcomeMobile';

const App = () => {
  return (
    <div className="min-h-screen">

      {/* MOBILE / TABLET */}
      <div className="block lg:hidden">
        <WelcomeMobile />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col min-h-screen">

        <Header />

        <main className="flex flex-grow">

          <div className="flex">
            <Sidebar />
            <SidebarContent />
          </div>

          <div className="flex-grow">
            <Body />
          </div>

        </main>

        <Footer />

      </div>

    </div>
  )
}

export default App;
