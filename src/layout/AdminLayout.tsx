import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 991);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            setOverlayVisible(newState); // Show overlay when opening
            return newState;
        });
    };

    const handleResize = () => {
        if (window.innerWidth > 991) {
            setIsOpen(true);
            setOverlayVisible(false);
        } else {
            setIsOpen(false);
            setOverlayVisible(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Sidebar isOpen={isOpen} />
            <div className={`flex flex-col flex-grow transition-all duration-300 ${isOpen && window.innerWidth > 991 ? 'ml-60' : ''}`}>
                <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <main className="flex-grow overflow-y-auto">
                    <Outlet />
                </main>
                {overlayVisible && window.innerWidth <= 991 && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20"
                        onClick={() => {
                            setIsOpen(false);
                            setOverlayVisible(false);
                        }}
                    />
                )}
                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
