import { useNavigate } from 'react-router-dom';

interface CartProps {
    image: string;
    title: string;
    linkTo: string;
    description?: string;
    price?: string;
    oldPrice?: string;
}

function Cart({ image, title, linkTo, description, price, oldPrice }: CartProps) {
    const navigate = useNavigate();

    const Nav = () => {
        navigate(linkTo)
    }

    return (
        <div onClick={Nav} className="w-70 min-h-95 flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-full h-50 shrink-0 overflow-hidden bg-gray-100">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Блок с контентом - фиксированная высота */}
            <div className="p-4 h-45 flex flex-col">
                <h3 className=" text-4xl font-semibold mb-2 truncate">
                    {title}
                </h3>
                
                {description && (
                    <p className="text-sm text-gray-600 truncate flex-1">
                        {description}
                    </p>
                )}
                {price && 
                    <>
                        <span className='text-green-500 text-2xl'>{price}</span>
                        {oldPrice && 
                            <span className='line-through text-gray-500'>
                                {oldPrice}
                            </span>
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Cart;