import { DestinationCard } from "@/components/ui/card-21";

const DestinationCardDemo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-12">
      <div className="h-[450px] w-full max-w-[320px]">
        <DestinationCard
          imageUrl="/images/Hero1.png"
          location="Indonesia"
          flag="🇮🇩"
          stats="1,345 Hotels • 24 Packages"
          href="#"
          themeColor="150 50% 25%"
        />
      </div>
      <div className="h-[450px] w-full max-w-[320px]">
        <DestinationCard
          imageUrl="/images/Hero2.png"
          location="Dubai"
          flag="🇦🇪"
          stats="2,345 Hotels • 54 Packages"
          href="#"
          themeColor="250 50% 30%"
        />
      </div>
    </div>
  );
};

export default DestinationCardDemo;
