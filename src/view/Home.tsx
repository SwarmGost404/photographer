import PriceBlock from "../component/PriceBlock";
import About from "./About";

function Home() {

    return(
        <>
            <div className="relative h-screen overflow-hidden">
                <img 
                    src="/site/35.webp" 
                    alt="cover" 
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                    <h2 className="text-2xl font-bold mb-2">ФОТОГРАФ В САНКТ-ПЕТЕРБУРГЕ</h2>
                    <p className="text-base">«Снимаю не специально, а по любви.»<br/>Есть фото на память, а есть фото как на ладони. Я за то, чтобы в кадр попадали морщинки от смеха, спутанные простыни воскресного утра и блики в ваших глазах.<br/>Я убежден: идеально постановочных снимков не существует. Существует только ваша уникальная химия. Я просто нажимаю на кнопку.<br/>Запишись на съемку-прогулку.</p>
                </div>
            </div>
            <PriceBlock />
            <div className="m-10">
                <p className="text-center">Другие виды съёмок (репортажные, корпоративные, фотосессии коллективов) обсуждаются индивидуально.</p>
            </div>
            <About />
            <footer className="text-center my-20">А ещё, этот сайт тоже я сделал. Если вам нужен сайт дёшево, пишите</footer>
        </>
        
    )
}
export default Home;