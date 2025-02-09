import { useState } from "react";
import "./FAQ.css";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        { question: "What is a Hackathon?", answer: "A hackathon is an event where you turn ideas into real projects. OhloneHacks is a 2-day event filled with learning and building in a collaborative environment." },
        { question: "Is it overnight?", answer: "Unfortunately not. However, it is a 2-day event where most hacking can be done in-person on Saturday and early morning Sunday. Judging is set for around afternoon on Sunday." },
        { question: "Who can come?", answer: "Anyone who is passionate and above the age of 18 is invited to sign up!" },
        { question: "What does it cost?", answer: "It’s free! Meals, swag, and other arrangements are all provided." },
        { question: "What if I have little to no experience?", answer: "This hackathon will be super beginner-friendly! We will provide support to hackers with mentors and various workshops. In the end, as long as you come out learning something new, that's all that matters!" },
        { question: "What if I don't have a team?", answer: "You may choose to work alone, however, we will provide a networking section located in both the event space and on our OhloneHacks Discord (that will be launched a week before the event!)" },
        { question: "What can I build?", answer: "We will have four different tracks that tackle different challenges. You are free to choose from any one of them on the event day!" },
        { question: "Are there prizes?", answer: "Yes, there are prizes for each track." },
        { question: "How do I apply?", answer: "Fill out the registration form above!" },
    ];

    return (
        
        <div className="faq-section">
            
            <h2 className="faq-title">FAQs</h2>
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
