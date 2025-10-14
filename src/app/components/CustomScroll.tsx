"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Slider from "@mui/material/Slider";

type ScrollSliderProps = {
    images: { src: string; alt?: string }[];
    orientation?: "vertical" | "horizontal";
    color?: string;
    thumbImage?: string;
    thumbColor?: string;
    onSelectImage?: (index: number) => void;
};

export default function ScrollSlider({
    images,
    orientation = "vertical",
    color = "#A39126",
    thumbImage,
    thumbColor = "#fff",
    onSelectImage,
}: ScrollSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(100);

    const thumbHeight = 230;

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (!scrollRef.current) return;
    const value = Array.isArray(newValue) ? newValue[0] : newValue;

    const { scrollHeight, clientHeight } = scrollRef.current;
    const maxScroll = scrollHeight - clientHeight;

    const offsetPercent = (thumbHeight / 2 / clientHeight) * 100;
    const clampedValue = Math.min(Math.max(value, offsetPercent), 100 - offsetPercent);

    // INVERT for vertical scroll
    scrollRef.current.scrollTop = ((100 - clampedValue) / 100) * maxScroll;
    setScrollValue(clampedValue);
};


    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const maxScroll = scrollHeight - clientHeight;

    const rawPercentage = (scrollTop / maxScroll) * 100;
    const offsetPercent = (thumbHeight / 2 / clientHeight) * 100;

    // INVERT for vertical scroll
    const clampedPercentage = Math.min(Math.max(100 - rawPercentage, offsetPercent), 100 - offsetPercent);

    setScrollValue(clampedPercentage);
};
    return (
        <div className="flex gap-4 h-full ml-40">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className={`flex ${orientation === "vertical" ? "flex-col overflow-y-scroll" : "flex-row overflow-x-scroll"} no-scrollbar p-4 h-full scroll-smooth`}
            >
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectImage?.(index)}
                        className="m-2 flex justify-center items-center"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt || `Image ${index + 1}`}
                            width={350}
                            height={400}
                            className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </button>
                ))}
            </div>

            <Slider
                value={scrollValue}
                min={0}
                max={100}
                orientation={orientation}
                step={1}
                valueLabelDisplay="off"
                className=" scroll-smooth"
                sx={{
                    color: color,
                    "& .MuiSlider-thumb": {
                        ...(thumbImage
                            ? {
                                height: 230,
                                width: 40,
                                backgroundImage: `url(${thumbImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundColor: "transparent",
                                borderRadius: 0,
                                border: 0,
                                boxShadow: 0,
                            }
                            : {
                                height: 40,
                                width: 40,
                                backgroundColor: thumbColor,
                            }),
                    },
                    "& .MuiSlider-rail": {
                        opacity: 1,
                        backgroundColor: color,
                        width: 20
                    },
                }}
                onChange={handleSliderChange}
            />
        </div>
    );
}
