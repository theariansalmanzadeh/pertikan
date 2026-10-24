import {
  ProductCard,
  type ProductCardProps,
} from "@/shared/components/honey-products/component/product-card";
import { MobileHoneyCard } from "@/shared/components/honey-products/component/mobile-honey-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/components/ui/carousel";

const productDetails = [
  {
    label: "Aroma & Palate",
    body: "Finely whipped through gentle mechanical stirring for a velvety, spreadable consistency. Delicate orchard blossom sweetness that melts effortlessly on the tongue.",
  },
  {
    label: "Texture & Crystallization",
    body: "Naturally fine, stable micro-crystalline texture; never drips.",
  },
  {
    label: "Table & Culinary Ritual",
    body: "Warm sourdough crust, alpine butter, soft ripened cheeses, and morning herbal infusions.",
  },
] as const;

const products: ProductCardProps[] = [
  {
    title: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    image: {
      src: "/images/honey.png",
      alt: "Creamed Honey jar",
    },
    details: productDetails,
  },
  {
    title: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    image: {
      src: "/images/honey.png",
      alt: "Creamed Honey jar",
    },
    details: productDetails,
  },
  {
    title: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    image: {
      src: "/images/honey.png",
      alt: "Creamed Honey jar",
    },
    details: productDetails,
  },
  {
    title: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    image: {
      src: "/images/honey.png",
      alt: "Creamed Honey jar",
    },
    details: productDetails,
  },
  {
    title: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    image: {
      src: "/images/honey.png",
      alt: "Creamed Honey jar",
    },
    details: productDetails,
  },
];

export function ProductCards() {
  return (
    <>
      <div className="hidden sm:block">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem
                key={`${product.title}-${index}`}
                className="basis-1/3 md:basis-[600px]"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col gap-10 sm:hidden">
        {products.map((product, index) => (
          <MobileHoneyCard
            key={`${product.title}-mobile-${index}`}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
