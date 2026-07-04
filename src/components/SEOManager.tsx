import { useEffect } from "react";
import { PRODUCTS } from "../data";

interface SEOManagerProps {
  selectedProductId: string | null;
  onSelectProduct: (productId: string | null) => void;
}

export default function SEOManager({ selectedProductId, onSelectProduct }: SEOManagerProps) {
  // Sync selected product with URL search params (?product=slug)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productSlug = params.get("product");
    
    if (productSlug && PRODUCTS.some(p => p.id === productSlug)) {
      if (selectedProductId !== productSlug) {
        onSelectProduct(productSlug);
      }
    } else if (!productSlug && selectedProductId) {
      // Revert URL to reflect state if state was set elsewhere
      const url = new URL(window.location.href);
      url.searchParams.set("product", selectedProductId);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  // Update URL search parameters when selectedProductId changes
  useEffect(() => {
    const url = new URL(window.location.href);
    const currentParam = url.searchParams.get("product");
    
    if (selectedProductId) {
      if (currentParam !== selectedProductId) {
        url.searchParams.set("product", selectedProductId);
        window.history.pushState({}, "", url.toString());
      }
    } else {
      if (currentParam) {
        url.searchParams.delete("product");
        window.history.pushState({}, "", url.toString());
      }
    }
  }, [selectedProductId]);

  // Update SEO Meta Tags & Inject Structured Data Schema
  useEffect(() => {
    const canonicalBase = "https://aremetalindia.com";
    let title = "ARE Metal India | Earthing Materials & Lightning Protection";
    let description = "ISO 9001:2015 certified manufacturer of copper bonded ground rods, chemical earthing electrodes, and lightning arresters in Vasai East, Palghar.";
    let canonicalUrl = canonicalBase + "/";
    let activeProduct = null;

    if (selectedProductId) {
      activeProduct = PRODUCTS.find(p => p.id === selectedProductId);
      if (activeProduct) {
        // Precise SEO Titles (50-60 chars) & Descriptions (140-160 chars) for Products
        if (activeProduct.id === "copper-bonded-earth-rods") {
          title = "Copper Bonded Steel Earth Rods | ARE Metal India";
          description = "High-tensile copper bonded steel earth rods with 254-micron electrolytic copper plating. Exceeds UL 467 standard. Built for B2B industrial projects.";
        } else if (activeProduct.id === "chemical-earthing-electrode") {
          title = "Chemical Earthing Electrodes | ARE Metal India";
          description = "Heavy-duty Pipe-in-Pipe & Strip-in-Pipe chemical earthing electrodes with high-conductive curing mineral compound. Tested to IS 3043 B2B specs.";
        } else if (activeProduct.id === "solid-copper-earth-rods") {
          title = "Solid Copper Ground Rods | ARE Metal India";
          description = "Grade-C101 oxygen-free solid copper ground rods for high-corrosion, acid-sulfate soils. Threaded coupling system with 100% IACS conductivity.";
        } else if (activeProduct.id === "ese-lightning-arrester") {
          title = "Early Streamer Emission ESE Arrester | ARE Metal";
          description = "NFC 17-102 compliant ESE lightning arresters offering up to 107m protection radius. Structural safety for high-rise and industrial complexes.";
        } else if (activeProduct.id === "conventional-lightning-arrester") {
          title = "Conventional Lightning Arresters | ARE Metal India";
          description = "Multi-point solid copper and galvanized steel spike air terminals. Conforms to IEC 62305 & IS 3043 for standard structural lightning safety.";
        } else if (activeProduct.id === "earthing-strips-flats") {
          title = "Copper & GI Earthing Strips Flats | ARE Metal India";
          description = "Premium hot-dip galvanized GI, electrolytic copper, and aluminum earthing flats and strips. High thermal capacity for ground ring grids.";
        } else if (activeProduct.id === "earth-pit-covers") {
          title = "FRP & Concrete Earth Pit Covers | ARE Metal India";
          description = "Heavy-duty FRP polymer and concrete access chambers rated for 5 to 15 tons load. Protects earthing joints with secure, dual-bolt locking.";
        } else if (activeProduct.id === "earth-clamps-accessories") {
          title = "Earthing Clamps & Connectors | ARE Metal India";
          description = "Naval brass, cast copper, and bronze U-bolt clamps, couplers, and disconnection links. Superior contact resistance & mechanical clamping force.";
        } else {
          title = `${activeProduct.title} | ARE Metal India`;
          description = activeProduct.shortDescription.slice(0, 155);
        }
        canonicalUrl = `${canonicalBase}/?product=${activeProduct.id}`;
      }
    }

    // Set Document Title
    document.title = title;

    // Update Meta Tags Helper
    const updateMetaTag = (nameAttr: string, propertyAttr: string, contentValue: string) => {
      let tag = null;
      if (nameAttr) {
        tag = document.querySelector(`meta[name="${nameAttr}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", nameAttr);
          document.head.appendChild(tag);
        }
      } else if (propertyAttr) {
        tag = document.querySelector(`meta[property="${propertyAttr}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", propertyAttr);
          document.head.appendChild(tag);
        }
      }
      if (tag) {
        tag.setAttribute("content", contentValue);
      }
    };

    // Update Meta Description & Keywords
    updateMetaTag("description", "", description);
    updateMetaTag("keywords", "", "earthing rods, copper bonded steel ground rod, chemical earthing electrode, lightning protection system, ESE lightning arrester, solid copper rod, earthing strips, GI flats, earth pit cover, sativali vasai, are metal india, earthing manufacturer india");
    updateMetaTag("robots", "", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Update Open Graph (Social Sharing)
    updateMetaTag("", "og:title", title);
    updateMetaTag("", "og:description", description);
    updateMetaTag("", "og:url", canonicalUrl);
    updateMetaTag("", "og:type", activeProduct ? "product" : "website");
    updateMetaTag("", "og:site_name", "ARE Metal India Private Limited");
    updateMetaTag("", "og:image", activeProduct ? activeProduct.image : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800");

    // Update Twitter Cards
    updateMetaTag("twitter:card", "", "summary_large_image");
    updateMetaTag("twitter:title", "", title);
    updateMetaTag("twitter:description", "", description);
    updateMetaTag("twitter:image", "", activeProduct ? activeProduct.image : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800");

    // Update Canonical URL link tag
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Prepare JSON-LD schemas
    const sID = "are-metal-india";
    const logoUrl = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=300"; // Fallback logo

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${canonicalBase}/#organization`,
      "name": "ARE Metal India Private Limited",
      "legalName": "ARE Metal India Private Limited",
      "url": canonicalBase,
      "logo": logoUrl,
      "foundingDate": "2021",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-97731-51336",
        "contactType": "sales",
        "email": "sales@aremetalindia.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.indiamart.com/aremetal-india/",
        "https://www.tradeindia.com/Seller-15792011-ARE-METAL-INDIA/"
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${canonicalBase}/#localbusiness`,
      "name": "ARE Metal India Private Limited",
      "image": activeProduct ? activeProduct.image : logoUrl,
      "telephony": "+919773151336",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East",
        "addressLocality": "Palghar",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.395159",
        "longitude": "72.880496"
      },
      "url": canonicalBase,
      "telephone": "+919773151336",
      "priceRange": "$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "email": "sales@aremetalindia.com"
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${canonicalBase}/#website`,
      "url": canonicalBase,
      "name": "ARE Metal India",
      "description": "High-Quality Earthing Materials & Lightning Protection Systems Manufacturer"
    };

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": title,
      "description": description,
      "isPartOf": { "@id": `${canonicalBase}/#website` },
      "about": { "@id": `${canonicalBase}/#organization` }
    };

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": canonicalBase
      }
    ];

    if (activeProduct) {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${canonicalBase}/#products`
      });
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 3,
        "name": activeProduct.title,
        "item": canonicalUrl
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": breadcrumbList
    };

    const schemasToInject: any[] = [
      orgSchema,
      localBusinessSchema,
      websiteSchema,
      webpageSchema,
      breadcrumbSchema
    ];

    // If an active product is viewed, inject Product Schema
    if (activeProduct) {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": activeProduct.title,
        "image": activeProduct.image,
        "description": activeProduct.longDescription,
        "brand": {
          "@type": "Brand",
          "name": "ARE"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "500", // Dynamic baseline for B2B
          "highPrice": "15000",
          "offerCount": "100",
          "priceRange": "INR 500 - 15000 (Bulk Contract RFQ)",
          "url": canonicalUrl,
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "ARE Metal India Private Limited"
          }
        },
        "additionalProperty": activeProduct.specifications.map(spec => ({
          "@type": "PropertyValue",
          "name": spec.label,
          "value": spec.value
        }))
      };
      schemasToInject.push(productSchema);
    }

    // FAQ Schema for homepage
    if (!activeProduct) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${canonicalBase}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What certifications do ARE Metal India products hold?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ARE Metal India is an ISO 9001:2015 certified manufacturer. Our earthing electrodes, copper-bonded ground rods, and early streamer emission (ESE) terminals are fully tested and certified by premier labs like CPRI and ERDA. They comply with international standards including UL 467, IEC 62305, BS 7430, and NFC 17-102."
            }
          },
          {
            "@type": "Question",
            "name": "Where is ARE Metal India's manufacturing facility located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our main industrial manufacturing facility is located at Gala No. 2, Royal Industrial Estate, Plot No. 12, Waliv Phata, Vasai East, Palghar - 401208, Maharashtra, India. All products are manufactured in-house using high-quality raw materials."
            }
          },
          {
            "@type": "Question",
            "name": "What is the standard copper plating thickness for your copper bonded earth rods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our copper bonded steel earth rods feature a uniform 254-micron (10 mils) electrolytic copper layer molecularly bonded to a high-tensile carbon steel core, conforming to UL 467 standards for long-term corrosion resistance."
            }
          },
          {
            "@type": "Question",
            "name": "Does ARE Metal India provide custom grounding design and engineering support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our engineering team offers comprehensive technical advisory services, including soil resistivity calculations, specialized grounding layout drawings, and selection guides for complex B2B electrical protection systems."
            }
          },
          {
            "@type": "Question",
            "name": "How can I request a B2B quotation or engineering catalog?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can submit an RFQ through our technical inquiry form on the website, download our complete corporate brochure, email us at sales@aremetalindia.com, or contact our sales team directly on WhatsApp or call at +91 97731 51336."
            }
          }
        ]
      };
      schemasToInject.push(faqSchema);
    }

    // Clean old JSON-LD script tags
    const oldScripts = document.querySelectorAll("script[data-seo='ldjson']");
    oldScripts.forEach(s => s.remove());

    // Inject New Schema Tags
    schemasToInject.forEach((schema, sIdx) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "ldjson");
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [selectedProductId]);

  return null;
}
