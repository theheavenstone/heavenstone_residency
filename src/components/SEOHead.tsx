import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      <title>
        Heavenstone Residency | Premium Apartments for Rent in Kochi
      </title>
      <meta
        name="description"
        content="Discover luxury apartments at Heavenstone Residency in Kochi. Perfect for families, corporates & remote workers seeking pet-friendly, serviced stays now."
      />

      <meta
        name="keywords"
        content="Heavenstone Residency, luxury apartments Kochi, furnished rooms for rent, serviced apartments, short-term rentals, monthly rentals, long-term stays, family-friendly stays, pet-friendly apartments, corporate guest house, workcation, service apartment, business travel accommodations, extended stays, executive apartments, digital nomad housing, temporary housing, vacation rentals, hotel alternatives, fully furnished homes, premium stays in Kochi"
      />

      <meta name="author" content="Heavenstone Residency" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />

      <meta
        property="og:title"
        content="Heavenstone Residency | Luxury Apartment & Room Rentals in Kochi"
      />
      <meta
        property="og:description"
        content="Discover fully furnished luxury apartments & rooms for rent at Heavenstone Residency. Enjoy premium amenities and flexible rental options in Kochi."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/hGJnf98y/meta-img-1.jpg"
      />
      <meta property="og:url" content="https://heavenstone.in" />
      <meta property="og:type" content="business.business" />
      <meta property="og:site_name" content="Heavenstone Residency" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Heavenstone Residency | Luxury Apartment & Room Rentals in Kochi"
      />
      <meta
        name="twitter:description"
        content="Find fully furnished apartments & rooms for rent at Heavenstone Residency. Modern amenities, short-term & long-term rental options available."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/hGJnf98y/meta-img-1.jpg"
      />
      <meta name="twitter:site" content="@heavenstoneresidency" />

      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="canonical" href="https://heavenstone.in" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: "Heavenstone Residency",
          url: "https://heavenstone.in",
          logo: "https://i.postimg.cc/hGJnf98y/meta-img-1.jpg",
          description:
            "Find luxury apartments for rent at Heavenstone Residency in Kochi. Fully furnished apartments with modern amenities for short-term and long-term stays.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Heavenstone Ln, Vaduthala",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            postalCode: "682012",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "10.01501223577804",
            longitude: "76.27609168304916",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 9447959544",
            contactType: "customer service",
          },
          priceRange: "$$$",
          hasMap: "https://maps.app.goo.gl/oEnyUJvRQjrAucT99",
          image: "https://i.postimg.cc/hGJnf98y/meta-img-1.jpg",
          amenities: [
            "call on doctor",
            "Family friendly",
            "Pets Friendly",
            "Free WiFi",
            "Air Conditioning",
            "Parking",
            "Housekeeping",
            "Laundry Services",
            "Fully Furnished Apartments",
            "Kitchen Facilities",
            "Flexible Rental Options",
          ],
        })}
      </script>
    </Head>
  );
}
