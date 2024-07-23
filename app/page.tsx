import Offerings from './components/Offerings/page'
import PriceTable from './components/PriceTable/page'
import Process from './components/Process/page'
import RecentAnnouncement from './components/RecentAnnouncement/page'
import FAQ from './components/Faq/page'
import ContactUs from './components/ContactUs/page'
import Footer from './components/Footer/page'

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-20 text-white">
        <h1 className="text-4xl font-bold">Unlock the Power of Next-Generation Sequencing with Medbank</h1>
        <p className="mt-4 text-xl">Gain deeper insights into genes, RNA, and genomes for breakthrough discoveries</p>
        <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded">Discover Our Services</button>
      </section>
      <section className="text-center bg-gray-200 py-20">
        <h4 className="text-1xl font-bold">About Us</h4>
        <h1 className="text-3xl font-bold">MEDBANK</h1>
        <p className="mt-4 text-lg">
          Welcome to Medbank, your trusted partner in genetic analysis. Learn more about our company’s mission, values, and commitment to excellence.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Read More</button>
      </section>
      <section className="text-center bg-gray-300 py-20">
        <h2 className="text-3xl font-bold">Our Strength</h2>
        <p className="mt-4 text-lg">
          At Medbank, we take pride in our strengths and capabilities that set us apart as a leader in genetic analysis. Discover how our expertise and specialized services can benefit your research projects.
        </p>
        <div className="flex">
      <div className="w-1/2 p-4">
        <p>Comprehensive Next Generation Sequencing Processes</p>
        <p>Specialized Environment for DNA/RNA Analysis</p>
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <p>Customer-Centric Approach to Analysis Results</p>
          <p>Automation of Processes</p>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <p className="text-center">State-of-the-Art NGS Platform</p>
        </div>
      </div>
      

    </div>
  
      </section>
      <Offerings></Offerings>
      <PriceTable/>
      <Process></Process>
      <RecentAnnouncement></RecentAnnouncement>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
      
    </div>
  );
}
