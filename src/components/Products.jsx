import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity } from "../app/feature/cartSlice";

const Products = ({ products }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return products.map((item) => {
    const cartItem = items.find((p) => p.id === item.id);

    return (
      <li key={item.id} className="mb-10">
        <div className="max-w-xs relative mb-8">
          <img
            src={item.image.desktop}
            alt={item.category}
            className="rounded-2xl border-transparent hover:border-[#C73B0F] border-3"
          />

          {!cartItem || cartItem.quantity < 1 ? (
            <div
              onClick={() => dispatch(addToCart(item))}
              className="flex cursor-pointer gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[60%] py-[10px] items-center justify-center bg-white rounded-full border-[#AD8A85] border-2 hover:border-[#C73B0F] hover:text-[#C73B0F] transition-all duration-200 ease-in-out"
            >
              <img src="../../public/images/icon-add-to-cart.svg" alt="img" />
              <p>Add to Cart</p>
            </div>
          ) : (
            <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[60%] py-[10px] items-center justify-between bg-[#C73B0F] text-white rounded-full border-[#AD8A85] border-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-3 font-bold text- cursor-pointer active:scale-95"
              >
                <img
                  src="../../public/images/icon-decrement-quantity.svg"
                  alt="img"
                  className="border-2 rounded-full w-[24px] h-[24px] p-1"
                />
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-3 font-bold text-xl cursor-pointer active:scale-95"
              >
                <img
                  src="../../public/images/icon-increment-quantity.svg"
                  alt="img"
                  className="border-2 rounded-full w-[24px] h-[24px] p-1"
                />
              </button>
            </div>
          )}
        </div>

        <p className="text-[19px] text-[#87635A] font-[100]">{item.category}</p>
        <h2 className="font-semibold text-[#260F08] text-[21px]">
          {item.name}
        </h2>
        <h2 className="text-[#C73B0F] font-semibold text-[21px]">
          ${item.price}0
        </h2>
      </li>
    );
  });
};

export default Products;
