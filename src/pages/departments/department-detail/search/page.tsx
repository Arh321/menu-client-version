"use client";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "@/hooks/useSearchProducts";
import { Spin, Input } from "antd";
import { ISearchedProduct } from "@/types/products/products";
import ProductsCard from "@/components/page-components/products-page/products-section/products-card";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ⏳ اعمال debounce برای کاهش تعداد درخواست‌ها
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim() === "" ? "__empty__" : searchTerm);
    }, 500); // ⏳ تاخیر ۵۰۰ میلی‌ثانیه برای ارسال درخواست

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 📡 درخواست API (وقتی `__empty__` باشه، سرور هیچ چیزی برنمی‌گردونه)
  const { data: products, isLoading } = useProducts(
    undefined,
    undefined,
    debouncedSearch
  );

  return (
    <div className="flex flex-col gap-4 grow h-full overflow-y-auto px-4">
      <Input
        placeholder="محصول مورد نظر خود را جست و جو کنید"
        style={{
          boxShadow: "inset 0 2px 5px rgba(255,255,255,.3)",
        }}
        className=" rounded-[10px] p-3 w-full backdrop-blur-md flex items-center gap-2"
        classNames={{
          input:
            "!bg-[rgba(0,0,0,0.15)]  !text-light-secondary-text placeholder:!text-light-gray !border-none font-Yekan-Regular",
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* نمایش محصولات */}
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Spin size="large" />
          </div>
        ) : products?.data?.length === 0 || debouncedSearch === "__empty__" ? (
          <div className="text-gray-400 text-center">محصولی یافت نشد</div>
        ) : (
          <div className="flex flex-col gap-4 overflow-y-auto h-full pb-24">
            {products?.data?.map((product: ISearchedProduct) => (
              // <ProductCard product={product} key={product.product_id} />
              <ProductsCard product={product} key={product.product_id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
