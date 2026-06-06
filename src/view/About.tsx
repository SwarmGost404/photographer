

function About() {

    return (
        <div>
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
            <div className="flex justify-center my-10">
                <div><img className="w-50 h-50 mx-10" src="/tg-qr.jpg" alt="https://t.me/swarmgost" /></div>
                <div><img className="w-50 h-50 mx-10" src="/vk-qr.jpg" alt="https://vk.com/swarmgost" /></div>
                <div><img className="w-50 h-50 mx-10" src="/inst-qr.png" alt="https://instageam.com/swarmgost" /></div>
            </div>
        </div>
    )
}
export default About;