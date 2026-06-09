import { HeroSection } from "../sections/scm/HeroSection";
import { PainPointsSection } from "../sections/scm/PainPointsSection";
import { ValueSection } from "../sections/scm/ValueSection";
import { FreeToolsSection } from "../sections/scm/FreeToolsSection";
import { ProductsSection } from "../sections/scm/ProductsSection";
import { ArticlesSection } from "../sections/scm/ArticlesSection";
import { ServicesSection } from "../sections/scm/ServicesSection";
import { AboutSection } from "../sections/scm/AboutSection";
import { CTASection } from "../sections/scm/CTASection";
import { SCMFooter } from "../sections/scm/SCMFooter";

export function SCMPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Title & CTA */}
      <HeroSection />
      
      {/* Pain Points - Nỗi đau */}
      <PainPointsSection />
      
      {/* Value Props - Website giúp gì */}
      <ValueSection />
      
      {/* Free Tools - Công cụ miễn phí */}
      <FreeToolsSection />
      
      {/* Products - Sách & Template */}
      <ProductsSection />
      
      {/* Articles - Bài viết */}
      <ArticlesSection />
      
      {/* Services - Dịch vụ */}
      <ServicesSection />
      
      {/* About - Về tác giả */}
      <AboutSection />
      
      {/* CTA + Footer */}
      <CTASection />
      <SCMFooter />
    </div>
  );
}