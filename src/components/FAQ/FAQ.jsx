import { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is a Hackathon?",
            answer: "A hackathon is an event where you turn ideas into real projects. It typically lasts 36 hours and is filled with learning and building in a collaborative environment."
        },
        {
            question: "Who can come?",
            answer: "Anyone passionate about learning and creating can join, regardless of experience."
        },
        {
            question: "What does it cost?",
            answer: "It’s free! Meals, swag, and sleeping arrangements are all provided."
        },
        // Add more FAQ items here
    ];

    return (
        <div className="faq">
            <div className="faq-title">
                Frequently Asked Questions
            </div>
            <div className="faq-items">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className="question">{faq.question}</div>
                        <div className="answer">{faq.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
