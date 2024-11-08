import {useEffect, useState} from "react";
import {X} from "lucide-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./header.css";

interface MenuItem {
    id: string;
    label: string;
    href: string;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen((prevState) => !prevState);

    const isEventFinished = true;
    const logo = "/logo-alert4sud.svg"
    const burgerIcon = "/burger-icon.svg"

    // Définit les éléments de menu
    const menuItems: MenuItem[] = [
        {id: "01", label: "Accueil", href: "/"},
        {id: "02", label: "La video du Hackathon", href: "/#video"},
        {id: "03", label: "Les vainqueurs du Hackathon", href: "/#winners"},
        {id: isEventFinished ? "04" : "03", label: "Les sujets abordés", href: "/#subjects"},
        {id: isEventFinished ? "05" : "04", label: "Réalisations", href: "/#teams"},
        {id: isEventFinished ? "06" : "05", label: "À propos", href: "/#about"},
    ];

    // Menu sans les vainqueurs
    const menuItemsWithoutWinners = menuItems.filter(item => item.label !== "Les vainqueurs du Hackathon");

    // Gère le body pour l'effet de modal
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isOpen]);

    return (
        <header>
            <nav id="nav4sud" className="container-header flex justify-between w-full">
                <a href="/" className="cursor-pointer w-1/7 logo-header">
                    <img src={logo} alt="code4sud logo" className="w-full self-start"/>
                </a>
                <div>
                    <button
                        onClick={toggleDrawer}
                        className="cursor-pointer bg-transparent w-fit h-full flex items-center justify-end menu-burger"
                    >
                        <img src={burgerIcon} alt="menu burger" className="w-[32px]"/>
                    </button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction="right"
                        className="!w-full h-screen !bg-[#fff375] border border-[#fff375] content-sheet"
                    >
                        <button
                            className="absolute top-4 z-50 bg-[transparent] right-5"
                            onClick={toggleDrawer}
                        >
                            <X className="text-white" size={40} color="black"/>
                        </button>
                        <div className="text-white flex justify-center items-center h-screen">
                            <ul className="flex flex-col gap-10">
                                {(isEventFinished ? menuItems : menuItemsWithoutWinners).map((item) => (
                                    <li key={item.id} className="flex items-start gap-2">
                                        <span className="font-[Open_Sans] text-xl text-red-500">{item.id}</span>
                                        <a
                                            href={item.href}
                                            className="text-4xl font-[Anton] tracking-wide flex items-start gap-2 text-black hover:underline"
                                            onClick={toggleDrawer}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Drawer>
                </div>
            </nav>
        </header>
    );
}
