

interface CoverProps {
    imageURL: string;
    headerText: string;
    paragraphText: string;
}

function Cover({imageURL, headerText, paragraphText}: CoverProps ) {
    return (
        <div className="relative h-screen overflow-hidden">
            <img 
                src={"/site/"+ imageURL +".webp"}
                alt="cover" 
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
            /> 
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">{headerText}</h2>
                <p className="text-base">{paragraphText}</p>
            </div>
        </div>
    )
}
export default Cover;