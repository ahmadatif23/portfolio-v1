import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter()
    const [page, setPage] = useState(true)
    const [showContactForm, setShowContactForm] = useState(false)

    const handlePage = (path) => {
        if (router.pathname !== path) setPage(false)
        setTimeout(() => {
            if (router.pathname !== path) router.push(path)
            setPage(true)
        }, 400)
    }

    const handleContactMe = () => {
        setShowContactForm(true)
    }

    const handleCloseForm = () => {
        setShowContactForm(false)
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col relative">
                <Navbar onHandlePage={ handlePage } onHandleContactMe={ handleContactMe } />
                <div className="flex-1 w-full relative">
                    <div className={ 'absolute top-0 flex h-full w-full justify-center px-6 xl:px-0 transform transition-all duration-500 ' + (page ? 'left-0' : '-left-full') }>
                        <div className="max-w-5xl w-full">{ children }</div>
                    </div>
                </div>

                { showContactForm && <ContactForm onHandleCloseForm={ handleCloseForm } /> }
            </div>
        </>
    )
}
