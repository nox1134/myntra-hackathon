import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({ onNextClick, onPreviousClick, progress, isLastQuestion, isFirstQuestion, onSubmit }) => {
    const navigate = useNavigate();

    const handleSubmitClick = async () => {
        if (onSubmit) {
            await onSubmit(); // Ensure onSubmit completes before navigation
        }
        navigate('/quiz-results'); // Navigate to the quiz results page
    };

    return (
        <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-end">
                <p className="text-[#1b0e17] text-sm font-normal leading-normal">{progress.toFixed(0)}%</p>
            </div>
            <div className="rounded bg-[#e7d0df]">
                <div className="h-2 rounded bg-[#e71ea4]" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-[#974e7f] text-sm font-normal leading-normal">Complete to earn Myntra credits</p>
            <div className="flex justify-between pt-4">
                <button
                    className={`bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform ${!isFirstQuestion ? 'hover:scale-105' : ''}`}
                    onClick={onPreviousClick}
                    disabled={isFirstQuestion}
                >
                    Previous
                </button>
                {isLastQuestion ? (
                    <button
                        className="bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105"
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        className="bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105"
                        onClick={onNextClick}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Footer;
