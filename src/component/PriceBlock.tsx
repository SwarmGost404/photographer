import Cart from "./Cart";


function PriceBlock() {
    return (
        <div className="md:flex grid justify-center m-10 p-5 grid-cols-[repeat(auto-fit,minmax(280px,auto))] gap-5">
            <Cart 
                image="/site/1.webp"
                title="Street"
                linkTo="/price/street"
                description="Уличная фотография"
                price="2000 ₽"
                oldPrice="8000 ₽"
            />
            <Cart 
                image="/site/33.webp"
                title="Love Story"
                linkTo="/price/lovestory"
                description="Парные фотокрафии"
                price="2000 ₽ + Цена студии"
                oldPrice="8000 ₽ + Цена студии"
            />
            <Cart 
                image="/site/27.webp"
                title="Fashion solo"
                linkTo="/price/fasionsolo"
                description="Только вы в студии"
                price="2000 ₽ + Цена студии"
                oldPrice="8000 ₽ + Цена студии"
            />
        </div>
    )
}
export default PriceBlock;