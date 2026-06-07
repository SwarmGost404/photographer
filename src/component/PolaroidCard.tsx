import React from 'react';

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
  return (
    <div className={` m-auto inline-block  bg-white p-3 pb-5 shadow-lg rounded-sm ${className}`}>
      <img 
        src={imageUrl} 
        alt={alt}
        className="w-64 h-64 object-cover block"
      />
      {caption && (
        <div className="text-center mt-3 font-['Courier_New',monospace] text-sm text-gray-700">
          {caption}
        </div>
      )}
    </div>
  );
};

export default PolaroidCard;