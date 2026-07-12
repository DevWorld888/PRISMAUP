export function trackPhoneClick(clickLocation: string = "unknown") {
    console.log(`Phone click tracked from: ${clickLocation}`);
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", "phone_click", {
      contact_method: "phone",
      click_location: clickLocation,
      phone_number: "0401508036",
      page_location: window.location.href,
    });
  }
}
