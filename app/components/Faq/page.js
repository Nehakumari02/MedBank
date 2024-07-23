const FAQ = () => (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">FAQ</h2>
      <p className="mb-4">
        "Have questions about Medbank's genetic analysis services? Explore our frequently asked questions to find answers to common queries. If you can't find what you're looking for, feel free to reach out to our team for personalized assistance."
      </p>
      <div className="space-y-4">
        {[
          "Do I need to register with Mypage?",
          "How long does it take to deliver the products?",
          "How long do you keep samples and analysis results?",
          "What sequencer do you use?"
        ].map((question, index) => (
          <details key={index} className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold cursor-pointer">{question}</summary>
            <p className="mt-2">Answer to the question will be placed here.</p>
          </details>
        ))}
      </div>
    </section>
  );
  
  export default FAQ;