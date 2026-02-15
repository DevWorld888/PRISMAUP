"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  onToken: (token: string) => void;
};

export default function TurnstileWidget({ onToken }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const id = useId();

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.error("Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY");
      return;
    }

    const tryRender = () => {
      if (!window.turnstile || !containerRef.current) return;

      // Evita render doble
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(""),
        "expired-callback": () => onToken(""),
      });
    };

    // Espera a que cargue el script
    const interval = setInterval(() => {
      tryRender();
      if (widgetIdRef.current) clearInterval(interval);
    }, 200);

    return () => {
      clearInterval(interval);
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [onToken]);

  return <div id={id} ref={containerRef} />;
}
