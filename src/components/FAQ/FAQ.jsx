import { useState } from "react";
import "./FAQ.css";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        { question: "What is a Hackathon?", answer: "A hackathon is an event where you turn ideas into real projects. It typically lasts 36 hours and is filled with learning and building in a collaborative environment." },
        { question: "Who can come?", answer: "Anyone passionate about learning and creating can join, regardless of experience." },
        { question: "What does it cost?", answer: "It’s free! Meals, swag, and other arrangements are all provided." },
        { question: "What if I don't know how to code?", answer: "This Hackathon will be super beginner-friendly!" },
        { question: "What if I don't have a team or idea?", answer: "No worries, you can work alone. You can also choose any of our tracks to work on." },
        { question: "What can I build?", answer: "We will have four different tracks (Track 1, Track 2, Track 3, Track 4). You are free to choose from any!" },
        { question: "Are there prizes?", answer: "Yes, there are many prizes. TBA at a later date." },
        { question: "How do I apply?", answer: "Fill out the registration form above!" },
    ];

    return (
        
        <div className="faq-section">
            
            <h2 className="faq-title">FAQ's</h2>
            <div className="faq-items">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className="question">{faq.question}</div>
                        <div className="answer">{activeIndex === index && <p>{faq.answer}</p>}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
