import { useState, useEffect } from 'react';
import axios from 'axios';

// Определяем интерфейс для отзыва
interface ReviewItem {
    text: string;
    name: string;
}

function Review() {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get<ReviewItem[]>('/reviews.json');
                setReviews(response.data);
                setError(null);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Произошла неизвестная ошибка';
                setError('Ошибка при загрузке отзывов: ' + errorMessage);
                console.error('Error fetching reviews:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="text-red-500 text-center my-20">
                <p>Загрузка отзывов...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center my-20">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="">
            <h2 className='text-center my-20 text-2xl text-gray-500'>Отзывы наших клиентов</h2>
            <div className="m-20">
                {reviews.map((review, index) => (
                    <div key={index} className="m-5 border rounded-2xl">
                        <p className="m-5">"{review.text}"</p>
                        <p className="text-gray-500 m-5">— {review.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;