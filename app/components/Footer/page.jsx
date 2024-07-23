import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-6">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Map Section */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Our Location</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.233462623733!2d144.96463631531783!3d-37.81410797975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c2a4db9%3A0x2c93d3a3295c2f6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635991951621!5m2!1sen!2sau" 
                        width="400" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Info Section */}
                <div className="md:w-1/2">
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <table className="min-w-full border border-gray-300">
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-medium">About</td>
                                <td className="px-4 py-2">Learn more about our company and mission.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-medium">Services</td>
                                <td className="px-4 py-2">Explore the services we offer to our clients.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-medium">Order Flow</td>
                                <td className="px-4 py-2">Understand our order processing and delivery flow.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </footer>
    );
};

export default Footer;