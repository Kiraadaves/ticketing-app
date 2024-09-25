export const fetchTickets = async () => {
  try {
    const res = await fetch("/api/tickets", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }
    const result = await res.json();
    return result; } catch (error) {
    console.error("Error loading tickets: ", error);
    return null; 
  }
};
