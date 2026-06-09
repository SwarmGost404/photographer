import React, { useState } from 'react';

interface PolaroidCardProps {
  imageUrl: string;
  caption?: string;
  alt?: string;
  className?: string;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageUrl,
  caption,
  alt = 'Polaroid photo',
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Закрытие по Escape
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      // Блокируем прокрутку body
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Карточка с кликом */}
      <div 
        className={`m-auto inline-block bg-white p-3 pb-5 shadow-lg rounded-sm cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={openModal}
      >
        <img 
          src={"/site/preview/" + imageUrl + ".webp"} 
          alt={alt}
          className="w-64 h-64 object-cover block"
          loading="lazy"
        />
        {caption && (
          <div className="text-center mt-3 font-['Courier_New',monospace] text-sm text-gray-700">
            {caption}
          </div>
        )}
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Контент модального окна */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на изображение
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl font-light"
              aria-label="Закрыть"
            >
              ×
            </button>

            {/* Полное изображение */}
            <img 
              src={"/site/" + imageUrl + ".webp"}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Подпись в модальном окне */}
            {caption && (
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="inline-block bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-['Courier_New',monospace] text-sm text-white">
                    {caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PolaroidCard;