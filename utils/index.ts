import "./artificialDelay";

declare global {
  const Config: {
    isDefined: boolean;
  }
}

console.log(`Uptime: ${performance.now()}ms`);
if (typeof Config === "undefined") {
  console.error("Config is not defined!");
}

if (Config.isDefined) {
  console.log("Config is defined!");
}

export const testDelay = 300;
