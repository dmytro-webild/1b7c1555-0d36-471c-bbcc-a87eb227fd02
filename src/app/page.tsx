"use client";

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Key, GlassWater, Sparkles, Crown, Gem, Diamond } from "lucide-react";

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

export default function LandingPage() {
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
      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroBillboard
          title="Experience Unforgettable Nights"
          description="Step into Airstrip Gentlemen's Club for premier adult entertainment, luxurious ambiance, and an exclusive experience unlike any other."
          background={{
            variant: "rotated-rays-animated-grid"
          }}
          tag="Premier Entertainment"
          buttons={[
            { text: "View Performers", href: "/#performers" },
            { text: "Book VIP", href: "/#contact" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/people-enjoying-their-time-dj-party_23-2149658376.jpg"
          imageAlt="Luxurious interior of Airstrip Gentlemen's Club"
          mediaAnimation="slide-up"
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>
      <div id="about" data-section="about" className="mx-auto px-4 md:px-6">
        <TextSplitAbout
          title="Your Exclusive Destination"
          description={[
            "Airstrip Gentlemen's Club offers a refined experience where luxury meets allure. Our meticulously designed venue provides a sophisticated backdrop for an evening of unparalleled entertainment.",            "Indulge in our world-class amenities, from private VIP suites to a full-service bar stocked with premium spirits. Our commitment to excellence ensures every visit is memorable and every guest feels like royalty. Discover the ultimate escape."
          ]}
          useInvertedBackground={true}
        />
      </div>
      <div id="features" data-section="features" className="mx-auto px-4 md:px-6">
        <FeatureCardTwentyFive
          title="Beyond Expectations"
          description="Our services are curated to provide the most exclusive and unforgettable experience for our distinguished guests."
          tag="Our Signature Offerings"
          features={[
            {
              title: "Private VIP Suites",              description: "Experience intimacy and luxury in our exclusive private suites, perfect for discreet gatherings or personalized entertainment.",              icon: Key,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/still-life-object_1122-1808.jpg", imageAlt: "exclusive VIP lounge luxurious seating" },
                { imageSrc: "http://img.b2bpic.net/free-photo/rhythmic-gymnast-professional-arena_654080-814.jpg", imageAlt: "exotic dancer on stage performance" }
              ]
            },
            {
              title: "Full-Service Premium Bar",              description: "Savor expertly crafted cocktails and a wide selection of top-shelf spirits at our elegant bar, designed for sophisticated tastes.",              icon: GlassWater,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/hookah-sparksfrom-grapefruit-hookah-bowl_141793-3261.jpg", imageAlt: "full service bar elegant cocktails" },
                { imageSrc: "http://img.b2bpic.net/free-photo/nightlife-with-people-dancing-club_23-2149052695.jpg", imageAlt: "themed party event decor nightclub" }
              ]
            },
            {
              title: "Personalized Entertainment",              description: "Enjoy the company of our stunning performers with personalized dances and exclusive one-on-one experiences in a setting of your choice.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/latin-amateurs-dancing-salsa_23-2151245249.jpg", imageAlt: "private dance VIP experience" },
                { imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-with-car_23-2150274556.jpg", imageAlt: "valet parking luxury cars club entrance" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="performers" data-section="performers" className="mx-auto px-4 md:px-6">
        <ProductCardFour
          title="Featured Performers"
          description="Meet some of the dazzling stars who grace our stage nightly. Each performer brings unique talent and charisma."
          tag="Our Talent"
          products={[
            { id: "performer-1", name: "Luna", price: "Enchanting", variant: "Exotic", imageSrc: "http://img.b2bpic.net/free-photo/male-ballroom-performer-dancing_23-2149454021.jpg", imageAlt: "glamorous female dancer portrait" },
            { id: "performer-2", name: "Scarlett", price: "Captivating", variant: "Sensual", imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-girl-party_23-2149628500.jpg", imageAlt: "alluring dancer posing gracefully" },
            { id: "performer-3", name: "Amber", price: "Vibrant", variant: "Energetic", imageSrc: "http://img.b2bpic.net/free-photo/girl-coat_1303-4454.jpg", imageAlt: "stunning club dancer smiling" },
            { id: "performer-4", name: "Jade", price: "Alluring", variant: "Mysterious", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495257.jpg", imageAlt: "captivating dancer portrait elegant" },
            { id: "performer-5", name: "Diamond", price: "Radiant", variant: "Glamorous", imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-brunette-female-trendy-evening-silver-dress-sexy-carefree-woman-posing-near-white-wall-studio-circle-lightfashionable-model-with-bright-makeup-high-fashion_158538-22808.jpg", imageAlt: "attractive dancer alluring gaze" },
            { id: "performer-6", name: "Ruby", price: "Passionate", variant: "Fiery", imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-brunette-female-trendy-evening-gold-jacket-sexy-carefree-woman-posing-near-white-wall-studio-circle-lightfashionable-model-with-bright-makeup_158538-22774.jpg", imageAlt: "charismatic dancer portrait stage" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardSixteen
          title="What Our Guests Say"
          description="Don't just take our word for it. Our distinguished patrons consistently share their glowing reviews."
          tag="Rave Reviews"
          testimonials={[
            { id: "1", name: "Mark S.", role: "CEO", company: "Global Enterprises", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-together_23-2148826968.jpg" },
            { id: "2", name: "David L.", role: "Investor", company: "Phoenix Capital", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blurred-young-businesswomen-showing-thumb-up-sign-toward-camera_23-2148073298.jpg" },
            { id: "3", name: "Robert B.", role: "Entrepreneur", company: "Innovate Solutions", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-bearded-man-busines-clothes-showing-thumb-up-looking-camera-gray_171337-11351.jpg" },
            { id: "4", name: "Chris P.", role: "Developer", company: "TechStream", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg" },
            { id: "5", name: "Anthony R.", role: "Consultant", company: "Elite Advisory", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/group-businessmen-with-whiskey-enjoying-night-club_329181-18656.jpg" }
          ]}
          kpiItems={[
            { value: "500+", label: "Happy Patrons" },
            { value: "100%", label: "Satisfaction" },
            { value: "5-Star", label: "Experience" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6">
        <PricingCardOne
          title="Exclusive Packages"
          description="Elevate your experience with our tailored VIP packages, offering unparalleled luxury and service."
          tag="VIP Access"
          plans={[
            {
              id: "silver",              badge: "Standard",              badgeIcon: Crown,
              price: "$500",              subtitle: "Entry for 2, bottle service credit",              features: ["Reserved seating", "Dedicated server", "Priority entry", "Bottle service credit"]
            },
            {
              id: "gold",              badge: "Premium",              badgeIcon: Gem,
              price: "$1500",              subtitle: "Private Booth for 4, premium bottle",              features: ["Exclusive private booth", "Premium bottle selection", "Personalized dancer greeting", "Complimentary valet"]
            },
            {
              id: "platinum",              badge: "Ultimate",              badgeIcon: Diamond,
              price: "$5000",              subtitle: "VIP Suite for 6, top-shelf spirits, private show",              features: ["Luxurious VIP suite", "Top-shelf liquor selection", "Dedicated private show", "Chauffeur service"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="team" data-section="team" className="mx-auto px-4 md:px-6">
        <TeamCardOne
          title="Meet Our Dazzling Dancers"
          description="Each performer at Airstrip is a star in her own right, captivating guests with grace, talent, and charm. Discover your favorite."
          tag="Our Talent"
          members={[
            { id: "dancer-1", name: "Celeste", role: "Featured Performer", imageSrc: "http://img.b2bpic.net/free-photo/stylish-portrait-beautiful-girl-model-black-clothes-posing-black-studio-lights-background_158538-9583.jpg" },
            { id: "dancer-2", name: "Isabella", role: "Main Stage Star", imageSrc: "http://img.b2bpic.net/free-photo/upset-disappointed-fooled-blond-elegant-girlfriend-silver-dress-frowning-grimacing-bothered_1258-231919.jpg" },
            { id: "dancer-3", name: "Valentina", role: "VIP Experience Host", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-performing_23-2149215623.jpg" },
            { id: "dancer-4", name: "Aurora", role: "Guest Favorite", imageSrc: "http://img.b2bpic.net/free-photo/portrait-asian-gymnast-getting-ready-competition_23-2150867797.jpg" },
            { id: "dancer-5", name: "Seraphina", role: "Evening Enchantress", imageSrc: "http://img.b2bpic.net/free-photo/surprised-blonde-girl-is-looking-camera-by-raising-up-her-hands-blue-background_176474-119308.jpg" },
            { id: "dancer-6", name: "Anastasia", role: "Spotlight Star", imageSrc: "http://img.b2bpic.net/free-photo/passionate-elgant-flamenco-dancer_23-2149160814.jpg" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq" className="mx-auto px-4 md:px-6">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common inquiries about Airstrip Gentlemen's Club."
          tag="Your Questions Answered"
          faqs={[
            { id: "faq-1", title: "What is the dress code?", content: "Our dress code is smart casual. We encourage stylish attire to match our club's sophisticated ambiance. Please no athletic wear, shorts, or excessively casual clothing." },
            { id: "faq-2", title: "What are your operating hours?", content: "Airstrip Gentlemen's Club is open Tuesday through Saturday from 7 PM until late. We recommend checking our social media for any special holiday hours." },
            { id: "faq-3", title: "Do you offer private dances?", content: "Yes, we offer private dances and exclusive one-on-one experiences in our VIP areas. Please speak with our host or your dedicated server for arrangements." },
            { id: "faq-4", title: "Is there an age restriction?", content: "All guests must be 21 years of age or older with a valid government-issued ID to enter Airstrip Gentlemen's Club." },
            { id: "faq-5", title: "Can I make a reservation?", content: "Yes, we highly recommend making reservations, especially for VIP tables and private suites, to ensure the best experience. You can contact us via phone or through our website form." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6">
        <ContactCTA
          tag="Connect With Us"
          title="Plan Your Visit"
          description="Ready for an unforgettable evening? Contact us to book your VIP experience or for any inquiries. Our team is here to assist you."
          buttons={[
            { text: "Call Us Now", href: "tel:+1234567890" },
            { text: "Send an Email", href: "mailto:info@airstripclub.com" }
          ]}
          background={{
            variant: "radial-gradient"
          }}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
          useInvertedBackground={false}
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