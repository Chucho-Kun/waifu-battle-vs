import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
        <header>
            <Header />
        </header>

        <main className="min-h-screen">
            <Outlet />
        </main>
        
        <footer className="flex flex-col">
            <Footer />
        </footer>
    </>
  )
}
