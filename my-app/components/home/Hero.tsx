
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    image: '/images/Hero1.png',
    title: 'Reliable Technical Services',
    description:
      'End-to-end maintenance and project support to keep your systems safe, efficient, and always ready.',
    cta: 'Book a Service',
  },
  {
    image: '/images/Hero2.png',
    title: 'Smart Installation Solutions',
    description:
      'Professional on-site installation for residential and commercial spaces with clean, modern execution.',
    cta: 'Get a Free Quote',
  },
  {
    image: '/images/Hero3.png',
    title: 'Skilled Team, Quality Results',
    description:
      'From inspection to completion, our experts deliver dependable workmanship with clear communication.',
    cta: 'Explore Our Work',
  },
  {
    image: '/images/Hero4.png',
    title: 'Fast Response, Lasting Value',
    description:
      'Quick turnaround for urgent jobs and long-term service plans tailored to your property needs.',
    cta: 'Contact Our Team',
  },
];

function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.title} className="min-w-0 flex-[0_0_100%]">
              <div className="relative h-[86vh] min-h-[620px] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

              <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
                <div className="max-w-xl text-white">
                  <p className="font-display mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em]">
                    Darwaish Services
                  </p>
                  <h1 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-sm text-white/90 sm:text-base">
                    {slide.description}
                  </p>
                  <Link
                    href="#services"
                    className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-neutral-100 backdrop-blur-sm transition hover:-translate-y-px hover:bg-black/90"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-neutral-100 backdrop-blur-sm transition hover:-translate-y-px hover:bg-black/90"
          aria-label="Next slide"
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? 'w-8 bg-neutral-900'
                : 'w-2.5 bg-white/45 hover:bg-white/65'
            }`}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
