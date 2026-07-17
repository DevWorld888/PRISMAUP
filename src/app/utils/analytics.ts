export function trackPhoneClick(clickLocation = "unknown") {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "phone_click",
    contact_method: "phone",
    click_location: clickLocation,
    phone_number: "0401508036",
    page_location: window.location.href,
  };

  window.dataLayer ??= [];
  window.dataLayer.push(eventData);

  console.log("Phone click pushed to dataLayer:", eventData);
}

export function trackFormSubmission(formLocation = "unknown") {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "form_submit_success",
    contact_method: "form",
    form_location: formLocation,
    page_location: window.location.href,
  };

  window.dataLayer ??= [];
  window.dataLayer.push(eventData);

  console.log("Form submission pushed to dataLayer:", eventData);
}

export function trackWhatsAppClick(clickLocation = "unknown") {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "whatsapp_click",
    contact_method: "whatsapp",
    click_location: clickLocation,
    page_location: window.location.href,
  };

  window.dataLayer ??= [];
  window.dataLayer.push(eventData);

  console.log("WhatsApp click pushed:", eventData);
}