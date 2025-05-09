import DrawerAppBar from "../components/DrawerAppBar";

function MainLayout({ children }) {
  return (
      <div className="flex flex-col h-screen">

          <DrawerAppBar/>

          <main className="flex-grow mt-28">
              {children}
          </main>

          <footer className="bg-blue-600 dark:bg-[#282424] text-white dark:text-gray-300 py-4">
              <div className="container mx-auto text-center">
                  <p>&copy; {new Date().getFullYear()} Cinema.LK. All rights reserved.</p>
              </div>
          </footer>


      </div>
  );
}

export default MainLayout;