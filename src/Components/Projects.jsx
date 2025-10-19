import github from '../assets/github.svg';
import barbershop from '../assets/barbershop.png';
import lego from '../assets/Lego.png';
import dApp from '../assets/dApp.png';


export const Projects = () => {
    const projects = [
        {
            title: 'Барбершоп',
            description: 'Адаптивный сайт c предоставлением товаров и услуг',
            image: barbershop,
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            link: 'https://github.com/Grisha777/Barbershop',
        },
        {
            title: 'Магазин лего',
            description: 'Магазин Лего с регистрацией и авторизацией, взаимодействием с товарами и с сервером',
            image: lego,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Json-server'],
            link: 'https://github.com/Grisha777/Shop',
        },
        {
            title: 'Децентрализованное приложение для управления недвижимостью',
            description: 'DApp, обеспечивающее размещение объектов недвижимости, проверку права собственности и проведение сделок на основе технологии блокчейн.',
            image: dApp,
            technologies: ['TypeScript', 'React', 'Tailwind', 'MetaMask', 'Ethers.js', 'Solidity', 'Hardhat','NodeJS','Pinata', 'Vite'],
            link: 'https://github.com/Grisha777/Real-estate-dapp',
        },
    ]

    return (
        <section id="projects" className="py-20 bg-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                    Мои проекты
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-500">
                        <div className="h-60 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4 h-16">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 my-6">
                            {project.technologies.map((tech, i) => (
                                <span key={i}
                                className="px-3 py-1 bg-gray-700  text-gray-200 rounded-full text-sm hover:bg-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                                <img src={github} alt="GitHub" className="w-5 h-5 mr-2" />
                                Code
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}