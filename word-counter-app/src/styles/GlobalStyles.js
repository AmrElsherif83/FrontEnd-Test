import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.main};
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background 0.5s ease-in-out, color 0.3s ease-in-out;
  }

  .container {
    max-width: 600px;
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 25px;
    border-radius: 15px;
    box-shadow: ${(props) => props.theme.shadows.card};
    text-align: center;
    animation: fadeIn 0.6s ease-in-out;
    transition: background 0.5s ease-in-out, color 0.3s ease-in-out;
  }


  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 24px;
    margin-bottom: 15px;
  }

  input[type="file"] {
    display: none;
  }

  .file-label {
    display: inline-block;
    padding: 12px 20px;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.shadows.button};
  }

  .file-label:hover {
    transform: scale(1.05);
    background: #388e3c;
  }

  .file-name {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  .error-message {
    color: ${(props) => props.theme.colors.error};
    font-size: 14px;
    margin-top: 5px;
  }

  pre {
    background: ${(props) => props.theme.colors.cardBackground}; /* ✅ Now adapts to dark mode */
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    max-height: 200px;
    border: 1px solid #ddd;
  }

  ul {
    list-style: none;
    padding: 0;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 15px;
    border-radius: 10px;
    padding: 12px;
    background: ${(props) => props.theme.colors.cardBackground};
    box-shadow: ${(props) => props.theme.shadows.card};
  }

  li {
    text-align: left;
    font-size: 15px;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }

  li:last-child {
    border-bottom: none;
  }

  .btn {
    padding: 12px 18px;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border: none;
    box-shadow: ${(props) => props.theme.shadows.button};
  }

  .btn:hover {
    transform: scale(1.05);
    background: #388e3c;
  }

  @media (max-width: 768px) {
    body {
      padding: 10px;
    }

    h2 {
      font-size: 20px;
    }

    .file-label {
      padding: 10px 16px;
      font-size: 14px;
    }

    .container {
      width: 90%;
      padding: 18px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;
