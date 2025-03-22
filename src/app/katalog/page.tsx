import Container from "@/app/_components/container";
import Breadcrumb from "@/app/_components/breadcrumb";
import Image from "next/image";
import { products } from "../../../public/static/doc/items";

export default function Katalog() {
  return (
    <main>
      <Container>
        <Breadcrumb />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Katalog Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={700}
                  className="w-full h-[85%] object-cover mb-2 rounded-md"
                />
                <h3 className="text-base font-semibold">{product.name}</h3>
                {/* {product.description.split(",")?.map((el) => (
                  <>
                    <span>{`-${el}`}</span>
                    <br />
                  </>
                ))} */}
                <p className="text-slate-800 font-bold mt-2 text-xl">
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
