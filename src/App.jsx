import useDesserts from "./hook/useDesserts";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Products from "./components/Products";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const { data: datas, loading } = useDesserts();
  const data = datas.data || [];
  console.log(data);

  const [modalCheck, setModalCheck] = useState(false);

  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);
  const cartItems = items.filter((item) => item.quantity > 0);

  return (
    <>
      <Navbar />
      <main className="flex items-start justify-center gap-10 p-6">
        {loading ? (
          <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/80 flex items-center justify-center">
            <h2 className="font-bold font-mono text-2xl text-white ease-in-out">
              Loading...
            </h2>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
            <Products products={data} />
          </ul>
        )}

        <section className="bg-white rounded-lg shadow p-4 w-[300px]">
          <h2 className="font-bold text-lg mb-4">Your Cart ({totalCount})</h2>

          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr className="my-3" />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setModalCheck(true)}
                disabled={cartItems.length === 0}
                className="mt-4 w-full py-2 rounded-lg bg-[#C73B0F] text-white hover:bg-[#a42f0d] cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src="../public/images/illustration-empty-cart.svg"
                alt="img"
                className="my-8"
              />
              <p className="text-[#87635A]">
                Your added items will appear here
              </p>
            </div>
          )}
        </section>

        {modalCheck && (
          <Modal
            onClose={() => setModalCheck(false)}
            items={cartItems}
            totalPrice={totalPrice}
          />
        )}
      </main>
    </>
  );
}

export default App;
