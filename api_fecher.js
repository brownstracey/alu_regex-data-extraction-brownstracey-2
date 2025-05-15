export async function fetchTextData(url) {
    
    const mockText = `
      Contact us at support@tracyregex.com or call (123) 456-7890.
      Visit https://example.org/contact or https://shop.example.com for more.
      The meeting is at 2:30 PM and again at 14:00.
      Use #help or #urgent.
      Total cost is $1,299.99. Card: 1234-5678-9012-3456
    `;
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockText), 300); 
    });
  }
  