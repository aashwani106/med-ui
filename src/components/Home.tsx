
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeIn from './FadeIn';
import Hero from './Hero';
import TrendingSection from './TrendingSection';
import RecommendedSection from './RecommendedSection';
// import BannerGrid from './BannerGrid';
// import LatestNews from './LatestNews';
import ProcessSteps from './ProcessSteps';
import DeliveryBanner from './DeliveryBanner';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash !== '#how-to-book') return;

        requestAnimationFrame(() => {
            const section = document.getElementById('how-to-book');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }, [location.pathname, location.hash]);

    return (
        <>
            <FadeIn delay={0.1}>
                <Hero />
            </FadeIn>

            {/* <FadeIn delay={0.2}>
                <PromoCards />
            </FadeIn> */}

            <FadeIn delay={0.2}>
                <TrendingSection />
            </FadeIn>

            <FadeIn delay={0.2}>
                <RecommendedSection />
            </FadeIn>

            {/* <FadeIn delay={0.2}>
                <BannerGrid />
            </FadeIn> */}

            {/* <FadeIn delay={0.2}>
                <LatestNews />
            </FadeIn> */}

            <div id="how-to-book">
                <FadeIn delay={0.2}>
                    <ProcessSteps />
                </FadeIn>
            </div>

            <FadeIn delay={0.2}>
                <DeliveryBanner />
            </FadeIn>
        </>
    );
}
