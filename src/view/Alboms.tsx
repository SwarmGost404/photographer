import PolaroidCard from "../component/PolaroidCard";


function Alboms() {
    const arr = Array.from({ length: 35 }, (_, i) => i + 1);
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
            {
                arr.map(item => <PolaroidCard imageUrl={"/site/" + item + ".jpg"}/>)
            }
        </div>
    )
}
export default Alboms;