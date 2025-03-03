export default function Services() {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-400 mt-2">
          Unlock the full potential of GeneticX with exceptional features and unmatched performance.
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-[#FF00CD] to-[#734EFF] p-1 rounded-lg">
        <div className="bg-black p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-[#FF00CD] text-3xl">✨</div>
            <h3 className="text-xl font-bold mt-4">DNA Analysis</h3>
            <p className="text-gray-400 mt-2">In-depth examination of your genetic sequences.</p>
          </div>
          <div className="text-center">
            <div className="text-[#734EFF] text-3xl">🛡️</div>
            <h3 className="text-xl font-bold mt-4">Risk Assessment</h3>
            <p className="text-gray-400 mt-2">Evaluate your susceptibility to various diseases.</p>
          </div>
          <div className="text-center">
            <div className="text-[#FF00CD] text-3xl">✔️</div>
            <h3 className="text-xl font-bold mt-4">Mutation Detection</h3>
            <p className="text-gray-400 mt-2">AI-powered mutation detection to assess its impact.</p>
          </div>
          <div className="text-center">
            <div className="text-[#734EFF] text-3xl">📄</div>
            <h3 className="text-xl font-bold mt-4">Personalized Reports</h3>
            <p className="text-gray-400 mt-2">Receive detailed insights into your DNA and health risks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
