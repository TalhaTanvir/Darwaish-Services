
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  return (
    <section className="relative isolate overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop
        speed={900}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-[72vh] min-h-[520px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-[72vh] min-h-[520px] w-full">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
