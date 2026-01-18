import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import PortfolioPreview from '@/components/PortfolioPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import Statistics from '@/components/Statistics'
import ProcessSteps from '@/components/ProcessSteps'
import CTA from '@/components/CTA'
import LatestBlogs from '@/components/LatestBlogs'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Statistics />
      <ServicesPreview />
      <ProcessSteps />
      <AboutPreview />
      <PortfolioPreview />
      <TestimonialsPreview />
      <LatestBlogs />
      <CTA />
    </div>
  )
}