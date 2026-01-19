import "./Page.css"
import Header from "../Header"
import { Footer } from "../Footer"

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div className="page-container">
            <Header />
            <main className="page-content">
                {children}
            </main>
            <Footer />
        </div>
    )
}