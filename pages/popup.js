import { useState, useEffect } from "react";

const OpenSourcePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-[#f5f0e1] p-8 rounded-lg shadow-2xl border border-[#c2b8a3] max-w-lg text-center">
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-4 font-serif">
            Contribute to Open Source
          </h2>
          <p className="text-[#7a6b5e] text-lg font-serif">
            This blog is an open-source project! Fork the repository and make a pull request to contribute.
          </p>
          <a
            href="https://github.com/your-repo-url"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#8b5e3b] font-semibold underline mt-3"
          >
            Fork & Contribute
          </a>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 px-5 py-2 bg-[#8b5e3b] text-white rounded-lg shadow-md hover:bg-[#6f4630] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default OpenSourcePopup;
