const min = 1200;
const max = 1250;
const waitMs = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`With waitMs: ${waitMs}ms`);
await new Promise((resolve) => setTimeout(resolve, waitMs));

export {};
