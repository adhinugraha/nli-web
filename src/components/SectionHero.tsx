"use client";

import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export const SectionHero = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowVideo(true);
        }, 3000)

        const handleResize = () => {
            const width = window.innerWidth;
            const height = (width * 9) / 16;
            setDimensions({ width, height });
        };

        // Set initial dimensions
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center section-hero">
            <div className="bg-video-container">
                {
                    showVideo ? 
                    <>
                        <iframe className="bg-video"
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
                            src="https://www.youtube.com/embed/fYRIG0kxOcA?autoplay=1&mute=1&loop=1&controls=0&playlist=fYRIG0kxOcA" />
                    </>
                    :
                    <></>
                }   
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-5 gap-5 body-content">
                <Image src="/assets/icons/nirvanalife-logo.png" alt="nirvanalife-logo" height={100} width={100} className="z-1 mb-5" />
                <Image src="/assets/images/text-logo-white.png" alt="nirvanalife-logo" height={100} className="z-1" />
            </div>
        </div>
    )
}