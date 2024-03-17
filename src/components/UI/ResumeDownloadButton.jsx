import resumePDF from "../../assets/resume.pdf"; // Import the PDF file

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Use the imported PDF file for download
    const pdfUrl = resumePDF;

    // Initiate download by creating a temporary link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // Set the desired file name for download
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
