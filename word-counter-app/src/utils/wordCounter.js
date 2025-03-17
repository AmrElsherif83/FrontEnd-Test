export function countWords(text) {
    if (!text) return {};
  
    const words = text
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, "") // Remove punctuation
      .split(/\s+/);
  
    return words.reduce((acc, word) => {
      if (word) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});
  }
  