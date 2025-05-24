import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FAQSection() {
  const faqs = [
    {
      question: "What is Triple R Recycling?",
      answer:
        "Triple R is a social enterprise that collects plastic waste and rewards people with cash.",
    },
    {
      question: "What does Triple R stand for?",
      answer: "Reduce. Reuse. Recycle.",
    },
    {
      question: "Where are you located?",
      answer: "We operate in Abuja, Nigeria.",
    },
    {
      question: "How can I give you my plastic waste?",
      answer:
        "You can schedule a pickup or drop it off at one of our collection points.",
    },
    {
      question: "Do you pay for plastic waste?",
      answer:
        "Yes, we reward contributors based on the quantity and type of plastic.",
    },
    {
      question: "What type of plastics do you collect?",
      answer: "Mostly PET bottles, pure water sachets, and other recyclables.",
    },
    {
      question: "Why should I recycle with Triple R?",
      answer:
        "You earn money, protect the environment, and support local jobs.",
    },
    {
      question: "Do you offer community or school programs?",
      answer:
        "Yes, we run awareness campaigns and workshops on recycling and climate action.",
    },
    {
      question: "Are you partnered with any organization?",
      answer:
        "Yes, we work with Wecyclers and other sustainability-focused bodies.",
    },
    {
      question: "How do I contact you?",
      answer: "Via phone, email, or any of our social media handles.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find quick answers to common questions about our services
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
            aria-labelledby={`faq-${index}`}
          >
            <div className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3
                  id={`faq-${index}`}
                  className="text-lg font-semibold text-gray-900 mb-2"
                >
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Still have questions?{" "}
          <Link
            to="/contact"
            className="text-green-600 hover:text-green-800 font-medium transition-colors"
            aria-label="Contact us for more questions"
          >
            Contact us directly
          </Link>
        </p>
      </div>
    </section>
  );
}
