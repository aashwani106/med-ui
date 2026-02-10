
import FadeIn from './FadeIn';
import Hero from './Hero';
import PromoCards from './PromoCards';
import TrendingSection from './TrendingSection';
import RecommendedSection from './RecommendedSection';
// import BannerGrid from './BannerGrid';
import LatestNews from './LatestNews';
import ProcessSteps from './ProcessSteps';
import DeliveryBanner from './DeliveryBanner';

export default function Home() {
    return (
        <>
            <FadeIn delay={0.1}>
                <Hero />
            </FadeIn>

            <FadeIn delay={0.2}>
                <PromoCards />
            </FadeIn>

            <FadeIn delay={0.2}>
                <TrendingSection />
            </FadeIn>

            <FadeIn delay={0.2}>
                <RecommendedSection />
            </FadeIn>

            {/* <FadeIn delay={0.2}>
                <BannerGrid />
            </FadeIn> */}

            <FadeIn delay={0.2}>
                <LatestNews />
            </FadeIn>

            <FadeIn delay={0.2}>
                <ProcessSteps />
            </FadeIn>

            <FadeIn delay={0.2}>
                <DeliveryBanner />
            </FadeIn>
        </>
    );
}
