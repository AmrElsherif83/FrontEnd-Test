import React, { useState } from "react";
import { logEvent, logError } from "../utils/logger";
import styled from "styled-components";

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 14px;
`;
const FileUploader = ({ onFileLoaded }) => {
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setError("No file selected.");
      logError("File upload error: No file selected.");
      return;
    }

    logEvent(`File selected: ${file.name}`);

    if (file.type !== "text/plain") {
      setError("Invalid file type. Please upload a .txt file.");
      logError("Invalid file type uploaded.");
      return;
    }
    setFileName(file.name);
    setError("");
    const reader = new FileReader();
    reader.onload = (e) => {
      onFileLoaded(e.target.result);
      logEvent("File loaded successfully.");
    };

    reader.onerror = () => {
      setError("Error reading file.");
      logError("Error reading file.");
    };

    reader.readAsText(file);
    setError(""); // Clear any previous errors
  };

  return (
    <FileUploadWrapper>
    <label className="file-label" htmlFor="file-upload">
      📂 Choose a .txt file
    </label>
    <input id="file-upload" type="file" accept=".txt" onChange={handleFileUpload} />
    <p>{fileName}</p>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </FileUploadWrapper>
  );
};

export default FileUploader;
