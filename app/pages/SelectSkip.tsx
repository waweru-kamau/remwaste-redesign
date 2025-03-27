import { Card } from "~/components/cards/card";
import { LightText } from "~/components/typography/LightText";
import { Subheading } from "~/components/typography/Subheading";
import { skipData } from "~/utils/skipData";

export function SelectSkip() {
  return (
    <main className="h-full mx-auto max-w-2xl sm:max-w-4xl px-4 sm:px-6 sm:py-12 md:px-8 lg:max-w-7xl lg:px-8">
      <div className="text-center gap-4">
        <Subheading>Choose Your Skip Size</Subheading>
        <LightText>Select the skip size that best suits your needs</LightText>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {skipData.map((skip) => (
          <Card skipData={skip} />
        ))}
      </div>
    </main>
  );
}
