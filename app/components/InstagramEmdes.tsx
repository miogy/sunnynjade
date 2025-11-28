"use client";

import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    // 인스타그램 embed 스크립트 로드
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="mt-10 flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CxVLEhbPsEm/"
        data-instgrm-version="14"
      />
    </div>
  );
}
