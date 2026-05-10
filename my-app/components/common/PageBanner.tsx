import Image from "next/image";
import Link from "next/link";

type PageBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  parentLabel?: string;
  parentHref?: string;
};

function PageBanner({
  title,
  imageSrc,
  imageAlt,
  parentLabel = "Home",
  parentHref = "/",
}: PageBannerProps) {
  return (
    <section className="relative h-[260px] overflow-hidden sm:h-[320px]">
      <Image
        src={imageSrc}
        alt={imageAlt ?? `${title} banner`}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-10 sm:px-10 lg:px-16">
        <div>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          <nav className="mt-3 text-sm text-white/90" aria-label="Breadcrumb">
            <Link href={parentHref} className="transition hover:text-white">
              {parentLabel}
            </Link>
            <span className="px-2">/</span>
            <span className="font-medium text-white">{title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
