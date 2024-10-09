const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1C252E] text-white text-left pl-4 py-1 sticky bottom-0">
            <p className="text-xs sm:text-sm">© {currentYear} Rohit Jangid. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
