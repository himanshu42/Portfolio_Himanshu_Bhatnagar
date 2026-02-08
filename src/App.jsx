import React from 'react'
import Header from './Components/Header/Header'
import 'primeicons/primeicons.css';
import Footer from './Components/Footer/Footer';
import Body from './Pages/Body';
import Sidebar from './Components/Sidebar/Sidebar';
import SidebarContent from './Components/SidebarContent/SidebarContent';
import WelcomeMobile from './Pages/WelcomeMobile';

const App = () => {

  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="min-h-screen">

      {/* MOBILE / TABLET */}
      <div className="block lg:hidden relative h-screen overflow-y-auto">

        {!showSidebar && (
          <>
            <WelcomeMobile />
            <i
              className="pi pi-bars text-[24px] absolute top-4 left-4 cursor-pointer text-[#AAB1BE]"
              onClick={() => setShowSidebar(true)}
            />
          </>
        )}

        {showSidebar && (
          <div className="flex min-h-screen w-full">
            <SidebarContent className="flex-1" setShowSidebar={setShowSidebar} />
          </div>
        )}

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
