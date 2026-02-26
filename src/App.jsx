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
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <div className="min-h-screen">

      {/* MOBILE / TABLET */}
      <div className="block lg:hidden h-screen overflow-y-auto mb-5 bg-[#2C3037]">

        {!showSidebar && (
          <>
              <i
                className="pi pi-bars text-[24px] cursor-pointer text-[#AAB1BE] p-2"
                onClick={() => setShowSidebar(true)}
              />
            {selectedProject ? (
              <Body selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
            ) : (
              <WelcomeMobile />
            )}
          </>
        )}

        {showSidebar && (
          <div className="flex min-h-screen w-full">
            <SidebarContent
              className="flex-1"
              setShowSidebar={setShowSidebar}
              setSelectedProject={setSelectedProject}
              closeOnSelect={true}
            />
          </div>
        )}

      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex h-0"> {/* h-0 sounds weird but it forces a height basis for children */}
          <div className='flex'>
            <Sidebar />
            <SidebarContent setSelectedProject={setSelectedProject} setShowSidebar={setShowSidebar} />
          </div>
          <div className="flex-grow overflow-y-auto bg-[#2C3037] min-h-screen">
            <Body selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          </div>
        </main>
        <Footer />
      </div>

    </div>
  )
}

export default App;
