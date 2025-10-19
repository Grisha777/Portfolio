import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/javascript.svg';
import gitIcon from '../assets/git.svg';
import figmaIcon from '../assets/figma.svg';
import TsIcon from '../assets/typescript.svg';
import ReactIcon from '../assets/react.svg';
import TailwindCSS from '../assets/tailwind.svg';
import ViteIcon from '../../public/vite.svg';

export const Skills = () => {
    const skills = [
        { name: 'Git', icon: gitIcon, bgClass: 'bg-orange-500/20' },
        { name: 'HTML5', icon: htmlIcon, bgClass: 'bg-red-500/20' },
        { name: 'CSS3', icon: cssIcon, bgClass: 'bg-blue-500/20' },
        { name: 'Figma', icon: figmaIcon, bgClass: 'bg-purple-500/20' },
        { name: 'JavaScript', icon: jsIcon, bgClass: 'bg-yellow-500/20' },
        { name: 'TypeScript', icon: TsIcon, bgClass: 'bg-blue-500/40' },
        { name: 'React', icon: ReactIcon, bgClass: 'bg-blue-400/20' },
        { name: 'Tailwind CSS', icon: TailwindCSS, bgClass: 'bg-cyan-400/20' },
        { name: 'Vite', icon: ViteIcon, bgClass: 'bg-purple-500/20' },
    ]

    return (
        <section  id="skills" className="py-24 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                    Навыки
                </h2>
                <p className="text-xl text-center mb-16 text-gray-300">
                    Технологии, которыми я владею
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index}
                        className="bg-gray-700 p-4 rounded-lg flex flex-col items-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 ${skill.bgClass} rounded-full flex items-center justify-center`}>
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain"/>
                        </div>
                        <h3 className="text-lg font-semibold text-white text-center">
                            {skill.name}
                        </h3>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}