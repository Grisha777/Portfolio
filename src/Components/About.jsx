import photo from '../profile.jpg';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Обо мне
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Я - Григорий, frontend-разработчик с активной позицией и ориентацией на профессиональный рост. Сейчас углубляюсь в современные технологии и оттачиваю уже приобретённые навыки. Открыт к обратной связи, готов делиться опытом и учиться у коллег. С энтузиазмом принимаюсь за новые вызовы и стремлюсь к высокому качеству в своей работе.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
                            <img src={photo} alt="Profile Photo" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};