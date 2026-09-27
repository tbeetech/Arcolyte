import React from "react";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi ARCOLYTE TECHNOLOGIES, I'd like to learn more"
  );
  const href = `https://wa.me/2348122536647?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-foreground text-background font-medium px-4 py-3 shadow-md z-50 hover:bg-muted-foreground transition-colors border border-border"
    >
      Contact Support
    </a>
  );
}
