import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfPopup({ isOpen, onClose, pdfUrl='/pdf-proxy/1715706685712' }) {
  const [numPages, setNumPages] = React.useState(null);
  const [error, setError] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null); // Reset error on successful load
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading document:', error);
    setError('Failed to load PDF document.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white text-black p-6 rounded shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-500 text-white px-4 py-2 rounded"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">View PDF</h2>
        <div className="overflow-y-auto max-h-96">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdfPopup;
