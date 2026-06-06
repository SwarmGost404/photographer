import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-4 px-5% bg-[#abc600]">
            <div id="logo" className="mb-4 md:mb-0">
                <Link to="/" className="text-xl font-bold text-black no-underline hover:text-[#563500] transition">
                    КОРЖОВ ВИКТОР
                </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
                <Link to="/" className="text-black no-underline hover:text-[#563500] transition text-sm md:text-base">
                    ГЛАВНОЕ     
                </Link>
                <Link to="/about" className="text-black no-underline hover:text-[#563500] transition text-sm md:text-base">
                    КОНТАКТЫ
                </Link>
                <Link to="/alboms" className="text-black no-underline hover:text-[#563500] transition text-sm md:text-base">
                    ПАРТФОЛИО
                </Link>
                <Link to="/price" className="text-black no-underline hover:text-[#563500] transition text-sm md:text-base">
                    ПРАЙС
                </Link>
                <Link to="/review" className="text-black no-underline hover:text-[#563500] transition text-sm md:text-base">
                    ОТЗЫВЫ
                </Link>
            </nav>
        </header>
    );
}

export default Header;