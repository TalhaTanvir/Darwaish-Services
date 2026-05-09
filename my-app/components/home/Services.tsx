'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DestinationCard } from '@/components/ui/card-21';

const services = [
  {
    imageUrl: '/images/Hero1.png',
    imagePosition: 'center 30%',
    location: 'Electrical Services',
    flag: 'EL',
    stats: '24/7 Support - On-Site Team',
    href: '#',
    themeColor: '210 40% 22%',
  },
  {
    imageUrl: '/images/Hero2.png',
    imagePosition: 'center 35%',
    location: 'HVAC Solutions',
    flag: 'HV',
    stats: 'Installations - Energy Tuning',
    href: '#',
    themeColor: '195 55% 26%',
  },
  {
    imageUrl: '/images/Hero3.png',
    imagePosition: 'center 28%',
    location: 'Civil Works',
    flag: 'CW',
    stats: 'Interior - Exterior - Renovation',
    href: '#',
    themeColor: '32 55% 28%',
  },
  {
    imageUrl: '/images/Hero4.png',
    imagePosition: 'center 32%',
    location: 'Maintenance Plans',
    flag: 'MP',
    stats: 'Annual Contracts - Fast Response',
    href: '#',
    themeColor: '148 45% 24%',
  },
];

function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: false,
  });
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

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
              What We Offer
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              Explore Our Core Service Categories
            </h2>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base">
              Swipe through our featured services built for reliable operations,
              fast response, and long-term value.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900"
              aria-label="Previous service"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900"
              aria-label="Next service"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {services.map((service) => (
              <div
                key={service.location}
                className="min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_55%] lg:flex-[0_0_36%]"
              >
                <div className="h-[430px]">
                  <DestinationCard {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.location}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === selectedIndex
                  ? 'w-8 bg-neutral-900'
                  : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to ${service.location}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
