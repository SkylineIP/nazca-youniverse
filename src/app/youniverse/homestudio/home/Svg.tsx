import React, { useEffect, useRef, useState } from "react";

export const Svg = ({
    from = "0 0 1600 1080",
    to = "0 0 1600 1080",
    duration = 500,
}: {
    from?: string;
    to?: string;
    duration?: number;
}) => {
    const [viewBox, setViewBox] = useState(from);
    const animRef = useRef<number>("" as unknown as number);

    useEffect(() => {
        const [fx, fy, fw, fh] = from.split(" ").map(Number);
        const [tx, ty, tw, th] = to.split(" ").map(Number);

        const start = performance.now();

        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const lerp = (a: number, b: number) => a + (b - a) * progress;

            const newViewBox = [
                lerp(fx, tx),
                lerp(fy, ty),
                lerp(fw, tw),
                lerp(fh, th),
            ].join(" ");

            setViewBox(newViewBox);

            if (progress < 1) {
                animRef.current = requestAnimationFrame(animate);
            }
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [from, to, duration]);
    return (
        <svg className='absolute top-0 left-0 object-contain w-full h-full z-10 animate-fade animate-delay-500 duration-1000' viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_2668_2)">
                <mask id="mask0_2668_2" style={{
                    maskType: "alpha"
                }} maskUnits="userSpaceOnUse" x="947" y="180" width="180" height="180">
                    <path d="M1127 270C1127 319.706 1086.71 360 1037 360C987.294 360 947 319.706 947 270C947 220.294 987.294 180 1037 180C1086.71 180 1127 220.294 1127 270Z" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2668_2)">
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" fill="url(#paint0_linear_2668_2)" fillOpacity="0.6" stroke="white" strokeWidth="0.725642" />
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" fill="black" fillOpacity="0.3" style={{
                        mixBlendMode: "color-dodge"
                    }} />
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" stroke="white" strokeWidth="0.725642" />
                </g>
            </g>
            <g filter="url(#filter1_dd_2668_2)">
                <mask id="mask1_2668_2" style={{
                    maskType: "alpha"
                }} maskUnits="userSpaceOnUse" x="947" y="180" width="180" height="180">
                    <path d="M1127 270C1127 319.706 1086.71 360 1037 360C987.294 360 947 319.706 947 270C947 220.294 987.294 180 1037 180C1086.71 180 1127 220.294 1127 270Z" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask1_2668_2)">
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" fill="url(#paint1_linear_2668_2)" fillOpacity="0.6" stroke="white" strokeWidth="0.725642" />
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" fill="black" fillOpacity="0.3" style={{
                        mixBlendMode: "color-dodge"
                    }} />
                    <path d="M1037 180.363C1086.51 180.363 1126.64 220.495 1126.64 270C1126.64 319.505 1086.51 359.637 1037 359.637C987.495 359.637 947.363 319.505 947.363 270C947.363 220.495 987.495 180.363 1037 180.363Z" stroke="white" strokeWidth="0.725642" />
                </g>
            </g>
            <defs>
                <filter id="filter0_dd_2668_2" x="886.53" y="119.53" width="300.94" height="300.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="30.2351" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2668_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6.45757" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_2668_2" result="effect2_dropShadow_2668_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2668_2" result="shape" />
                </filter>
                <filter id="filter1_dd_2668_2" x="886.53" y="119.53" width="300.94" height="300.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="30.2351" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2668_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6.45757" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_2668_2" result="effect2_dropShadow_2668_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2668_2" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_2668_2" x1="1088.88" y1="156.226" x2="1023.39" y2="318.709" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_2668_2" x1="1088.88" y1="156.226" x2="1023.39" y2="318.709" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>


    )
}
