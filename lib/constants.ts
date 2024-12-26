// Constants
// ==============================
export const currentYear = new Date().getFullYear();
export const siteName = "Oxmiq";

// URL and Path Utilities
// ==============================
export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
};
