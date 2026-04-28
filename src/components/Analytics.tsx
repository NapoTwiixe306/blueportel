import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S1N8FDZEDJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S1N8FDZEDJ');
        `}
      </Script>
      <Script
        defer
        data-website-id="3348cf1c-a01f-42c9-9702-3880314be312"
        src="https://stats.blueportel.com/script.js"
      />
    </>
  );
}


