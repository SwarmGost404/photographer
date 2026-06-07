import Cart from "./Cart";


function PriceBlock() {
    return (
        <div className="md:flex grid justify-center m-10 p-5 grid-cols-[repeat(auto-fit,minmax(280px,auto))] gap-5">
            <Cart 
                image="/site/1.jpg"
                title="Стрит"
                linkTo="/price/street"
                description="Уличная фотография"
                price="0 ₽"
                oldPrice="8000 ₽"
            />
            <Cart 
                image="/site/33.jpg"
                title="Love Story"
                linkTo="/price/lovestory"
                description="Парные фотокрафии"
                price="0 ₽"
                oldPrice="8000 ₽"
            />
            <Cart 
                image="/site/27.jpg"
                title="Fashion solo"
                linkTo="/price/fasionsolo"
                description="Только вы в студии"
                price="0 ₽"
                oldPrice="8000 ₽"
            />
        </div>
    )
}
export default PriceBlock;