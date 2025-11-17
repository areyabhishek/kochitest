const faqs = [
  {
    question: "What is the booking process?",
    answer: "Reserve with a 20% deposit, complete traveller forms, then settle the balance 45 days prior to departure."
  },
  {
    question: "Do you offer flexible payment plans?",
    answer: "Yes—split payments into up to four instalments or sync with company travel budgets."
  },
  {
    question: "How do cancellations work?",
    answer: "Trips cancelled 30+ days out receive full travel credit; within 30 days we apply supplier-specific penalties."
  },
  {
    question: "Are flights included?",
    answer: "Most itineraries exclude international flights, but our air desk can quote competitive fares."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-10">
          Answers to common questions about booking, payments, cancellations and travel prep.
        </p>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


