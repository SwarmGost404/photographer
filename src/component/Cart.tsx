import { Link } from 'react-router-dom';

interface CartProps {
    image: string;
    title: string;
    linkTo: string;
    description?: string;
}

function Cart({ image, title, linkTo, description }: CartProps) {
    return (
        <div className="w-70 min-h-95 flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-full h-50 shrink-0 overflow-hidden bg-gray-100">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Блок с контентом - фиксированная высота */}
            <div className="p-4 h-45 flex flex-col">
                <h3 className="text-base font-semibold mb-2 line-clamp-2">
                    {title}
                </h3>
                
                {description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1">
                        {description}
                    </p>
                )}
                
                <Link 
                    to={linkTo} 
                    className="mt-auto text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                    Узнать больше
                </Link>
            </div>
        </div>
    );
}

export default Cart;