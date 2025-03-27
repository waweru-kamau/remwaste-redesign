interface CardImageProps {
  disabled?: boolean;
}
export function CardImage({ disabled }: CardImageProps) {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
        alt="Front of men&#039;s Basic Tee in black."
        className={`aspect-auto w-full h-80 lg:h-72 rounded-md object-cover lg:aspect-auto
          ${
            disabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:cursor-pointer group-hover:opacity-75"
          }
`}
      />
    </div>
  );
}
