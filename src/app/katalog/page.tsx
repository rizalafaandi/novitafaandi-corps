import Container from "@/app/_components/container";
import Breadcrumb from "@/app/_components/breadcrumb";
import Image from "next/image";
import { products } from "../../../public/static/doc/items";
import { RiDiscountPercentFill } from "react-icons/ri";

export default function Katalog() {
  return (
    <main>
      <Container>
        <Breadcrumb />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Katalog Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => {
              const isDiscount =
                typeof product.discount !== undefined && product?.discount > 0;
              return (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={700}
                    className="w-full h-[80%] object-cover mb-2 rounded-md"
                  />
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  {/* {product.description.split(",")?.map((el) => (
                  <>
                    <span>{`-${el}`}</span>
                    <br />
                  </>
                ))} */}
                  {isDiscount ? (
                    <p className="font-bold mt-2 border w-fit px-3 py-1 rounded-lg border-red-700 text-red-700 flex items-center gap-1">
                      <RiDiscountPercentFill />
                      Rp {(product.price - product.discount).toLocaleString()}
                    </p>
                  ) : (
                    <></>
                  )}
                  <p
                    className={`text-slate-800 font-bold mt-2  ${
                      isDiscount ? "text-sm" : "text-xl"
                    }`}
                  >
                    <span
                      className={`${isDiscount ? "line-through" : ""}`}
                    >{`Rp ${product.price.toLocaleString()}`}</span>
                    <span>
                      {isDiscount
                        ? ` - Rp ${product.discount.toLocaleString()}`
                        : ""}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
