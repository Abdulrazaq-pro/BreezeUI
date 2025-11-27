import Hero from "@/components/Hero/Hero";
import { Map } from "@/components/Map/Map";
import { Showcase } from "@/components/Showcase";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { FeatureSteps } from "@/components/Features_Section/features";
import { Feature_Comparison } from "@/components/Feature_comparison/feature_comparison";
import Footer from "@/components/Footer/Footer";
import { CardDemo } from "@/components/Card/CardDemo";

import { FeaturesSection } from "@/components/feature-graphics/features-section";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Hero />
      <Showcase />
      <div className="bg-[#1f1f1f]">
        <CpuArchitecture />
      </div>
      <Map />
      <Feature_Comparison />
      <CardDemo />
      <FeaturesSection
        domain="breezeui.dev"
        utmParams={{ utm_source: "homepage", utm_campaign: "launch" }}
      />


      <FeatureSteps
        className="bg-[#303030]"
        features={[
          {
            step: "Step 1",
            title: "Explore Breeze UI",
            content:
              "Get familiar with Breeze UI's interactive components and smooth animations.",
            image:
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
          },
          {
            step: "Step 2",
            title: "Design Smarter",
            content:
              "Leverage intuitive layouts, theming, and pre-built UI patterns to build faster.",
            image:
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
          },
          {
            step: "Step 3",
            title: "Ship Interfaces",
            content:
              "Bring your apps to life with Breeze UI—delightful interactions and polished design.",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
          },
        ]}
        title="Start Your Breeze UI Journey"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
      <Footer />
    </main>
  );
}
