'use client';
import { useState } from 'react';


const RecentAnnouncement = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">RECENT ANNOUNCEMENT</h2>
      <p className="mb-4">
        "Stay updated with the latest announcements and news from Medbank. Explore our recent articles and media coverage to learn more about our company's activities, achievements, and advancements in genetic analysis."
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <img src="/path-to-image1.jpg" alt="Announcement 1" className="mb-2 rounded" />
          <p>24-Jan-2024 12:45PM</p>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          {showMore1 && <p className="mt-2">Additional hidden text for the first announcement.</p>}
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" 
            onClick={() => setShowMore1(!showMore1)}
          >
            {showMore1 ? "Show Less" : "Read More"}
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <img src="/path-to-image2.jpg" alt="Announcement 2" className="mb-2 rounded" />
          <p>24-Jan-2024 12:45PM</p>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          {showMore2 && <p className="mt-2">Additional hidden text for the second announcement.</p>}
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" 
            onClick={() => setShowMore2(!showMore2)}
          >
            {showMore2 ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentAnnouncement;