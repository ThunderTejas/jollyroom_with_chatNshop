import React from 'react';
import { SuccessIcon } from './Icons';

interface ThankYouPageProps {
    onGoHome: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onGoHome }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full">
                <div className="flex justify-center mb-6">
                    <SuccessIcon className="h-20 w-20 text-green-500" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Thank You!</h1>
                <p className="text-gray-600 mt-3 text-lg">
                    Thank you for purchasing with Jollyroom.
                </p>
                <p className="text-gray-500 mt-2">
                    Your order is being processed and you will receive a confirmation email shortly.
                </p>
                <button
                    onClick={onGoHome}
                    className="mt-8 w-full max-w-xs bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default ThankYouPage;