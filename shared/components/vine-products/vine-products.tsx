import { MobileVineCard } from "@/shared/components/vine-products/component/mobile-vine-card";
import { VineCard } from "@/shared/components/vine-products/component/vine-card";
import { vineProducts } from "@/shared/contant/vine";

export function VineProducts() {
  return (
    <section className="bg-white">
      <div className="hidden flex-col gap-10 px-6 py-16 sm:flex md:px-10 lg:gap-14 lg:px-14">
        {vineProducts.map((product) => (
          <VineCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex flex-col gap-10 py-8 sm:hidden">
        {vineProducts.map((product) => (
          <MobileVineCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
