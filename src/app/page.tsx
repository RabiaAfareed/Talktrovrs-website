
import BoostBanner from "components/boost";
import ChatfuelAlternativeBanner from "components/chatfuel";
import ChatfuelAlternative from "components/chatfuel-alternative";
import CompareWithOthers from "components/comparision";
import ComparisonSection from "components/comparison-section";
import DidYouKnow from "components/did-u-know";
import FeatureComparison from "components/feature-comparision";
import TalkTrovesFooter from "components/footer";
import GlobalReachSection from "components/global-map";
import HeroSection from "components/hero";
import TalkTrovesPromo from "components/talkTroves";
import TestimonialSection from "components/testimonial";
import TrustUsComponent from "components/trustus";
import ChatWidgetBanner from "components/widget-banner";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <DidYouKnow/>
      <ComparisonSection/>
      <FeatureComparison/>
      <ChatfuelAlternativeBanner/>
      <ChatWidgetBanner/>
      <GlobalReachSection/>
      <BoostBanner/>
      <ChatfuelAlternative/>
      <TestimonialSection/>
      <CompareWithOthers/>
      <TalkTrovesPromo/>
      <TrustUsComponent/>
      <TalkTrovesFooter/>
    </main>
  )
}
