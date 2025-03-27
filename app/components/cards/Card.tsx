import { Subheading } from "../typography/Subheading";
import { BodyText } from "../typography/BodyText";
import { LightText } from "../typography/LightText";
import { Button } from "../Button";
import { CardImage } from "./CardImage";
import { Badge } from "../typography/Badge";
import { AiOutlineWarning } from "react-icons/ai";
export function Card({ skipData }: { skipData: any }) {
  const disabled =
    skipData.forbidden ||
    (!skipData.allowed_on_road && !skipData.allows_heavy_waste);
  return (
    <div
      key={skipData.id}
      className={`group flex flex-col gap-4 border border-gray-200 rounded-md dark:border-gray-800  ${
        disabled
          ? "cursor-not-allowed"
          : "hover:cursor-pointer hover:border-indigo-800"
      }`}
    >
      <div className="relative">
        <CardImage disabled={disabled} />
        <div className="w-full absolute bg-linear-to-b from-transparent to-black opacity-70 lg:aspect-auto h-1/2 bottom-0" />
        <Subheading className="absolute text-white">
          £{skipData.price_before_vat}
          <span className="text-sm"> / week </span>
        </Subheading>
      </div>
      <div className="grid grid-cols-5 gap-1 px-4 items-center">
        <div className="flex flex-col gap-2 text-start col-span-2">
          <BodyText>{skipData.size} Yard</BodyText>
          <LightText>{skipData.hire_period_days} day hire</LightText>
        </div>
        <div className="flex flex-col gap-2 col-span-3">
          {!skipData.allowed_on_road && (
            <Badge>
              <AiOutlineWarning />
              Not for Heavy Waste
            </Badge>
          )}
          {!skipData.allows_heavy_waste && (
            <Badge color="orange">
              <AiOutlineWarning />
              Private Property Only
            </Badge>
          )}
        </div>
      </div>
      <Button variant="secondary" disabled={disabled}>
        Select This Skip
      </Button>
    </div>
  );
}
