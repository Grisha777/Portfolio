import cross from '../assets/cross.svg'

export const MobileMenu = ({ isOpen, onClose, navigationsItems }) => {
    return (
        <div id="mobileMenu"
            className={`fixed inset-0 bg-white/85 z-20 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 md:hidden`}>
            <div className="container mx-auto px-4 h-full flex flex-col">
                <div className="flex justify-end items-center py-4">
                    <button onClick={onClose} className="p-2 cursor-pointer">
                        <img src={cross} alt="Закрыть"/>
                    </button>
                </div>
                <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
                {navigationsItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href}
                            className="text-2xl text-gray-700 hover:text-blue-300"
                            onClick={onClose}>
                                {item.name}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}