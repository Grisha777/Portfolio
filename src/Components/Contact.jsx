import email from '../assets/email.svg';
import networks from '../assets/networks.svg';
import githubIcon from '../assets/github.svg';
import telegramIcon from '../assets/telegram.svg';

export const Contact = () => {
    const Networks = [
        { name: 'github', icon: githubIcon, link: 'https://github.com/Grisha777' },
        { name: 'telegram', icon: telegramIcon, link: 'https://t.me/grifon_11' },
    ]

    return (
        <section id="contact" className="py-24 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                    Мои контакты
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-6">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center flex-1 max-w-xs">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-800">
                            <img src={email} alt="Email" className="w-10 h-10 "/>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                        <p className="text-gray-300">zima.grisha@gmail.com</p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center flex-1 max-w-xs">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-800">
                            <img src={networks} alt="Social" className="w-10 h-10"/>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Social</h3>
                        <div className="flex justify-center space-x-4">
                        {Networks.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-200 transition-all duration-300 hover:bg-gray-600"
                            aria-label={social.name}>
                                <img src={social.icon} alt={social.name} className="w-5 h-5"/>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}