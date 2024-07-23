const ContactUs = () => (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">REACH OUT TO US</h2>
      <p className="mb-4">
        "Connect with Medbank's team for inquiries, support, and collaboration opportunities. We're here to assist you with your genetic analysis needs and provide personalized guidance every step of the way."
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input type="tel" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Confirm Email Address</label>
          <input type="email" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Inquiry Details</label>
          <textarea className="w-full border rounded p-2" rows="4" required></textarea>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2">By clicking checkbox, I authorize Medbank...</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Get Guide</button>
      </form>
    </section>
  );
  
  export default ContactUs;