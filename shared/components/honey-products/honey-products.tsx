import { Header } from "@/shared/components/honey-products/component/header";
import { ProductCards } from "@/shared/components/honey-products/component/product-cards";

export function HoneyProducts() {
  return (
    <section className="bg-white">
      <Header />
      <div className="pb-16">
        <ProductCards />
      </div>
    </section>
  );
}
