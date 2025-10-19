export const Footer = () => {
    const navigationsItems = [
        { name: "Обо мне", href: "#about" },
        { name: "Образование", href: "#education" },
        { name: "Навыки", href: "#skills" },
        { name: "Проекты", href: "#projects" },
        { name: "Контакты", href: "#contact" },
    ]

    return(
        <footer className="bg-gray-700 py-12">
            <div className="container mx-auto px-4">
                <div className="flex md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-white text-xl font-extrabold">
                            Copyright: <span>{new Date().getFullYear()}</span>
                        </p>
                    </div>
                    <ul className="flex gap-8 flex-wrap justify-center">
                        {navigationsItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href}
                            className="text-gray-300 hover:text-white transition-colors">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}