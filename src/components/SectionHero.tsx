"use client";

import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export const SectionHero = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            const width = window.innerWidth;
            const height = (width * 9) / 16;
            setDimensions({ width, height });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center section-hero">
            <div className="bg-video-container">
                {!isVideoLoaded && (
                    <Image
                        src="/assets/images/img-hero-f1.webp"
                        alt="Hero Placeholder"
                        style={{
                            width: dimensions.width ? `${dimensions.width}px` : '100vw',
                            height: dimensions.height ? `${dimensions.height}px` : '56.25vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            objectFit: 'cover'
                        }}
                    />
                )}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="bg-video"
                    title="Real estate Nirvana life Investment"
                    onPlaying={() => setIsVideoLoaded(true)}
                    style={{
                        width: dimensions.width ? `${dimensions.width}px` : '100vw',
                        height: dimensions.height ? `${dimensions.height}px` : '56.25vw',
                        opacity: isVideoLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}>
                    <source src="/assets/videos/hero-video.webm" type="video/webm" />
                </video>
                {/* <iframe className="bg-video" 
                            role="presentation"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Real estate Nirvana life Investment"
                            style={{
                                width: dimensions.width ? `${dimensions.width}px` : '100vw',
                                height: dimensions.height ? `${dimensions.height}px` : '56.25vw'
                            }}
                        src="https://www.youtube.com/embed/fYRIG0kxOcA?autoplay=1&mute=1&loop=1&controls=0&playlist=fYRIG0kxOcA" /> */}
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-5 gap-5 body-content">
                <Image src="/assets/icons/nirvanalife-logo.webp" alt="nirvanalife-logo" height={100} width={100} className="z-1 mb-5" />
                <Image src="/assets/images/text-logo-white.webp" alt="nirvanalife-logo" height={100} className="z-1" fetchPriority="high" />
            </div>
        </div>
    )
}