import DrawerAppBar from "../components/DrawerAppBar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">

        <DrawerAppBar/>

        <main className="flex-grow">
            {children}
        </main>

        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Cinema.LK. All rights reserved.</p>
            </div>
        </footer>

    </div>
  );
}

export default MainLayout;