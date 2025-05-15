export function extractPhones(text) {
    const regex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
    return text.match(regex) || [];
  }
  