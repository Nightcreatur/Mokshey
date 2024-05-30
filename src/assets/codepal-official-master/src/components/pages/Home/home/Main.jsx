import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Workflow from "./Workflow";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Testimonials />
      </div>
    </div>
  );
};

export default Main;
