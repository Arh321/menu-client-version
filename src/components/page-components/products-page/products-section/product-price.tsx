const ProductPrice = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  return discount && discount > 0 ? (
    <span dir="rtl" className="w-full flex items-center gap-2">
      <span dir="ltr" className="line-through text-red-600">
        {price.toLocaleString("fa-IR")}
      </span>
      <span className="text-light-secondary-text">
        <span dir="ltr">
          {(price - price * (discount / 100)).toLocaleString("fa-IR")}
        </span>
        <span className="pr-1">تومان</span>
      </span>
    </span>
  ) : (
    <span className="w-full text-light-secondary-text">
      <span>{price.toLocaleString("fa-IR")}</span>
      <span className="pr-1">تومان</span>
    </span>
  );
};

export default ProductPrice;
