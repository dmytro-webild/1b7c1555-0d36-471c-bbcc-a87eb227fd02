"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles } from "lucide-react";

const commonNavItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" },
  { name: "Entertainment", id: "/#features" },
  { name: "Performers", id: "/#performers" },
  { name: "VIP", id: "/#pricing" },
  { name: "AI Assistant", id: "/assistant" },
  { name: "Contact", id: "/#contact" }
];

const commonFooterColumns = [
  { items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/#about" }, { label: "Entertainment", href: "/#features" }] },
  { items: [{ label: "Performers", href: "/#performers" }, { label: "VIP Packages", href: "/#pricing" }, { label: "AI Assistant", href: "/assistant" }, { label: "Contact", href: "/#contact" }] },
  { items: [{ label: "FAQ", href: "/#faq" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
];

export default function AssistantPage() {
  const onSubmit = (data: Record<string, string>) => {
    console.log("AI Assistant query:", data);
    alert("Query sent to AI assistant: " + data.query);
    // In a real application, this would send data to an AI backend
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-radial"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav" className="mx-auto px-4 md:px-6">
        <NavbarLayoutFloatingInline
          brandName="AIRSTRIP"
          navItems={commonNavItems}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lm5gbj"
          logoAlt="Airstrip Gentlemen's Club Logo"
          button={{
            text: "Book a Table",            href: "/#contact"
          }}
        />
      </div>

      <div id="ai-assistant" data-section="ai-assistant" className="mx-auto px-4 md:px-6 py-20">
        <ContactSplitForm
          title="Chat with Our AI Assistant"
          description="Ask our AI anything about Airstrip Gentlemen's Club, services, or entertainment. We're here to help!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
          ]}
          textarea={{ name: "query", placeholder: "Ask your question here...", rows: 5, required: true }}
          buttonText="Send to AI"
          onSubmit={onSubmit}
          useInvertedBackground={false}
          mediaAnimation="none"
          imageSrc="http://img.b2bpic.net/free-photo/view-futuristic-urban-city_23-2150935573.jpg"
          imageAlt="AI assistant interface"
        />
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lm5gbj"
          logoAlt="Airstrip Gentlemen's Club Logo"
          logoText="Experience Luxury, Indulge in Entertainment. © 2024 Airstrip Gentlemen's Club. All rights reserved."
          columns={commonFooterColumns}
        />
      </div>
    </ThemeProvider>
  );
}