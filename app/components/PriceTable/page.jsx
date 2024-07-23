const PriceTable = () => (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">REFERENCE PRICE</h2>
      <h3 className="text-xl font-semibold mb-4">PRICE TABLE</h3>
      <p className="mb-4">
        "Explore our reference prices to gain insight into the cost structure of our genetic analysis services. While actual prices may vary depending on specific project requirements, our reference prices provide an estimate of the costs involved."
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Plan</th>
            <th className="border p-2">Read Length</th>
            <th className="border p-2">Data Volume</th>
            <th className="border p-2">Reference Price</th>
            <th className="border p-2">Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">DNA Sequencing</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
          <tr>
            <td className="border p-2">RNA Sequencing</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
          <tr>
            <td className="border p-2">Amplicon Sequencing</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
          <tr>
            <td className="border p-2">Human Genome Sequencing</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
  
  export default PriceTable;