import About from "@/components/section/about";
import Accordioon from "@/components/section/accordio";
import FeaturesAndContact from "@/components/section/Defferent";
import Doing from "@/components/section/doign";
import Footer from "@/components/section/Footer";
import ProfileHeader from "@/components/section/hero";
import MyBusinessSection from "@/components/section/Mybissnus";
import CurrentProjects from "@/components/section/Myproject";
import Navbar from "@/components/section/navBar";
import StackingSkills from "@/components/section/skill";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <About />
      <Doing />
      <MyBusinessSection />
      <CurrentProjects />
      <FeaturesAndContact />
      <Accordioon />
      <StackingSkills />
      <Footer />
    </div>
  );
}
