import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import { countWords } from "./utils/wordCounter";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import styled from "styled-components";

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: ${(props) => (props.darkMode ? "#fff" : "#222")};
  color: ${(props) => (props.darkMode ? "#222" : "#fff")};
  font-weight: bold;
  transition: 0.3s;
`;

const App = () => {
  const [fileContent, setFileContent] = useState("");
  const [wordCounts, setWordCounts] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const handleFileLoaded = (text) => {
    setFileContent(text);
    setWordCounts(countWords(text));
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="container">
        <h2>📂 Word Counter</h2>
        <FileUploader onFileLoaded={handleFileLoaded} />
        <ToggleButton onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </ToggleButton>

        {fileContent && (
          <>
            <h3>📄 File Content:</h3>
            <pre>{fileContent}</pre>

            <h3>🔢 Word Count:</h3>
            <ul>
              {Object.entries(wordCounts).map(([word, count]) => (
                <li key={word}>
                  <strong>{word}</strong>: {count}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
