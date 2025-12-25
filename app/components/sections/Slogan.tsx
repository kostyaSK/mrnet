import Image from "next/image";

export default function Slogan() {
  return (
    <section className="pt-[61px] flex gap-3">
      <div className="flex-1">
        <h1 className="pb-[31px] text-[32px] leading-[39px] tracking-[0.05em] uppercase">
          не балансируем
        </h1>
        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/slogan/oldTrain.png"
            alt="СтарыйПоезд"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="pb-[31px] text-[32px] leading-[39px] tracking-[0.05em] uppercase">
          а суммируем
        </h1>
        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/slogan/newTrain.png"
            alt="НовыйПоезд"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
