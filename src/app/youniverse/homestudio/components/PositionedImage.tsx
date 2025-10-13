import Image from "next/image";

interface PositionedImageProps {
    name: 'YouStudio' | 'YouPlex' | 'YouHome'; // Type safety for position keys
    src: string;
    selectedItem: string;
    setSelectedItem: (name: string) => void;
    resolution: '4k' | 'fullhd'; // Match the positions object keys
}

const positions = {
    fullhd: {
        YouStudio: {
            bottom: "28px",
            right: "344px",
            width: 368,
            height: 226, // Added height (16:9 ratio)
            zIndex: 20,
        },
        YouPlex: {
            bottom: "350px",
            right: "355px",
            width: 290,
            height: 32, // Added height
            zIndex: 10,
        },
        YouHome: {
            bottom: "602px",
            right: "352px",
            width: 300,
            height: 277, // Added height
            zIndex: 0,
        },
    },
    "4k": {
        YouStudio: {
            bottom: "28px",
            right: "684px",
            width: 750,
            height: 498, // Added height
            zIndex: 20,
        },
        YouPlex: {
            bottom: "490px",
            right: "705px",
            width: 590,
            height: 295, // Added height
            zIndex: 10,
        },
        YouHome: {
            bottom: "655px",
            right: "700px",
            width: 610,
            height: 1136, // Added height
            zIndex: 0,
        },
    },
};

const PositionedImage = ({ name, src, selectedItem, setSelectedItem, resolution }: PositionedImageProps) => {
    const pos = positions[resolution][name];

    return (
        <div
            style={{
                position: "absolute",
                bottom: pos.bottom,
                right: pos.right,
                width: pos.width,
                height: pos.height,
                zIndex: pos.zIndex,
            }}
        >
            <Image
                src={src}
                alt={name}
                onClick={() => setSelectedItem(name)}
                width={pos.width}
                height={pos.height}
                className={`cursor-pointer transition-all duration-500 ease-in-out
                    animate-fade-down animate-duration-[2000ms] duration-1000
                    ${selectedItem === "YouHome" && name === "YouHome" ? "-translate-y-15" : ""}
                    ${selectedItem === "YouPlex" && name === "YouPlex" ? "-translate-y-15" : ""}
                    ${selectedItem === "YouPlex" && name === "YouHome" ? "-translate-y-25" : ""}
                    ${selectedItem === "YouStudio" && name === "YouStudio" ? "-translate-y-15" : ""}
                    ${selectedItem === "YouStudio" && name === "YouPlex" ? "-translate-y-25" : ""}
                    ${selectedItem === "YouStudio" && name === "YouHome" ? "-translate-y-35" : ""}
                    `}
                    />
        </div>
    );
};

export default PositionedImage;