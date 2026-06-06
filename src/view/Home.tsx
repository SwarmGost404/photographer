import Cart from "../component/Cart";

function Home() {

    return(
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Фоновая картинка */}
                <img 
                    src="/site/35.jpg" 
                    alt="cover" 
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                />
                
                {/* Блок с текстом внизу */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                    <h2 className="text-2xl font-bold mb-2">ФОТОГРАФ В САНКТ-ПЕТЕРБУРГЕ</h2>
                    <p className="text-base">«Снимаю не специально, а по любви.»<br/>Есть фото на память, а есть фото как на ладони. Я за то, чтобы в кадр попадали морщинки от смеха, спутанные простыни воскресного утра и блики в ваших глазах.<br/>Я убежден: идеально постановочных снимков не существует. Существует только ваша уникальная химия. Я просто нажимаю на кнопку.<br/>Запишись на съемку-прогулку.</p>
                </div>
            </div>
            <div className="md:flex grid justify-center m-10 p-5 grid-cols-[repeat(auto-fit,minmax(280px,auto))] gap-5">
                <Cart 
                    image="/site/1.jpg"
                    title="Стрит"
                    linkTo="/site/1"
                    description="Динамика большого города, естественность, случайный кадр. Акцент на эмоции «на бегу» или намеренную задумчивость в окружении архитектуры."
                />
                <Cart 
                    image="/site/33.jpg"
                    title="Love Story"
                    linkTo="/site/2"
                    description="Химия между людьми. Фокус на касаниях, взглядах, общем уюте. История одной любви в кадре"
                />
                <Cart 
                    image="/site/27.jpg"
                    title="Fashion solo"
                    linkTo="/site/3"
                    description="В центре внимания — один человек. Чистота образа, контроль каждой тени и блика. Минимум отвлекающих деталей."
                />
            </div>
            <div className="m-10">
                <p className="text-center">Другие виды съёмок (репортажные, корпоративные, фотосессии коллективов) обсуждаются индивидуально.</p>
            </div>
            <div className="m-10 flex justify-center ">
                <div className="mx-10">
                    <img 
                        className="w-50 h-50 object-cover rounded-full" 
                        src="/site/20.jpg" 
                        alt="me" 
                    />
                </div>
                <div className=" justify-center ">
                    <h2>ЗАКАЗАТЬ ФОТОСЕССИЮ И ЗАДАТЬ ВОПРОСЫ</h2>
                    <p><a className="text-gray-600 hover:text-black " href="tel:+79165303691">+7 (916) 530 36 91</a></p>
                    <p><a className="text-gray-600 hover:text-black " href="https://t.me/swarmgost">Написать в Telegram</a></p>
                    <p><a className="text-gray-600 hover:text-black " href="https://vk.com/swarmgost">Написать в ВКонтакте</a></p>
                    <p><a className="text-gray-600 hover:text-black " href="https://www.instagram.com/swarmgost/">Написать в Instagram</a></p>
                    <p><a className="text-gray-600 hover:text-black " href="mailto:vik.z.c.r@yandex.ru">Написать на почту</a></p>
                </div>
            </div>
            <footer className="text-center my-20">А ещё, этот сайт тоже я сделал. Если вам нужен сайт дёшево, пишите</footer>
        </>
        
    )
}
export default Home;