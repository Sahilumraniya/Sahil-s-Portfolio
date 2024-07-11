const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Use the imported PDF file for download
    const pdfUrl = "https://drive.google.com/file/d/1M_sN7FRI2ad4bBiU4fPJ73vqcVQ_EI_M/view?usp=sharing";

    // Initiate download by creating a temporary link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "SahilUmraniya_Resume.pdf"; // Set the desired file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-5 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Resume
      </div>
    </button>
  );
};

export default ResumeDownloadButton;
