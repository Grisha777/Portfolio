import { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import menu from '../assets/menu.svg';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navigationsItems = [
        { name: "Обо мне", href: "#about" },
        { name: "Образование", href: "#education" },
        { name: "Навыки", href: "#skills" },
        { name: "Проекты", href: "#projects" },
        { name: "Контакты", href: "#contact" },
    ]

    return(
        <>
            <header className="fixed w-full z-10 shadow-sm bg-gray-700 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-center items-center py-4">
                        <ul className="hidden md:flex space-x-8">
                        {navigationsItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-gray-100 hover:text-cyan-400 transition-colors">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </nav>
                    <div className="flex justify-end items-center">
                        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)} aria-label="Меню">
                            <img src={menu} alt="Меню" className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navigationsItems={navigationsItems}/>
        </>
    )
}