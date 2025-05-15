export function extractTimes(text) {
    const regex = /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm])|(2[0-3]|[01]?[0-9]):([0-5][0-9]))\b/g;
    return text.match(regex) || [];
  }
  