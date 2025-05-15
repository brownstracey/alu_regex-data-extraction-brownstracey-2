 import { fetchTextData } from './apifetcher.js';

async function extractData() {
  const text = await fetchTextData('https://fakeurl.com');

  const patterns = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    phone: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
    url: /https?:\/\/[^\s]+/g,
    time: /\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)|([01]?[0-9]|2[0-3]):[0-5][0-9])\b/g,
    hashtag: /#\w+/g,
    currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g,
    creditCard: /\b(?:\d{4}[- ]?){3}\d{4}\b/g,
  };

  for (const [type, regex] of Object.entries(patterns)) {
    const matches = text.match(regex) || [];
    console.log(`${type.toUpperCase()}S:`, matches);
  }
}

extractData();
