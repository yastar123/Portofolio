import { useEffect, useRef } from "react";
import Image from "next/image";

const Certificate = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scroll = () => {
            if (!carouselRef.current) return;
            const carousel = carouselRef.current;
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                carousel.scrollLeft = 0; // Kembali ke awal
            } else {
                carousel.scrollLeft += 2; // Kecepatan scroll
            }
        };

        const interval = setInterval(scroll, 30); // Kecepatan animasi
        return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
    }, []);

    const certificates = [
        "/sertifikat-1.png",
        "/sertifikat-2.png",
        "/sertifikat-3.png",
        "/sertifikat-4.png",
        "/sertifikat-5.png",
        "/sertifikat-6.png",
        "/sertifikat-7.png",
        "/sertifikat-8.png",
    ]; // Ganti dengan URL sertifikat Anda

    return (
        <div className="overflow-hidden space-y-6 relative mb-10 md:max-w-4xl md:mx-auto text-white">
            <div className="text-center font-bold text-xl md:text-2xl">
                Achievements in My Career Journey
            </div>
            <p className="text-justify px-4">
                Certificates are tangible evidence of my dedication to learning and honing skills in the world of technology. On this page, I showcase various awards and certifications I have earned from training programs, courses, and competitions. Each certificate represents a step toward mastering modern technologies and my commitment to continuous growth. Discover the stories behind each of my achievements below.
            </p>
            <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar"
            >
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="min-w-[50px] h-[150px]  md:min-w-[100px] md:h-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <Image
                            src={cert}
                            alt={`Certificate ${index + 1}`}
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificate;
