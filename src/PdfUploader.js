import React, { useState } from 'react';
import axios from 'axios';

function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('YOUR_ENDPOINT_URL', formData, config);
      setResponseMessage(response.data.message);
      // Update with the actual response handling logic
    } catch (error) {
      console.error('Error uploading file:', error);
      setResponseMessage('Failed to upload file.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        <button type="submit">Upload PDF</button>
      </form>
      {responseMessage && <p>Response: {responseMessage}</p>}
    </div>
  );
}

export default PdfUploader;
