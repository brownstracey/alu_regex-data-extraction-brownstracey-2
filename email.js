export function extractEmails(text) {
    const regex = /[\w.-]+@[\w.-]+\.\w+/g;
    return text.match(regex) || [];
  }
  