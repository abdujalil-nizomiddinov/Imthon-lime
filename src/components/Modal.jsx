export default function Modal({ onClose, items, totalPrice }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[600px] relative">
        <button
          onClick={onClose}
          className="px-3 py-3 text-white absolute top-2 right-2 rounded-full bg-red-600 hover:bg-red-700 cursor-pointer"
        >
          Exit
        </button>
        <div className="flex flex-col gap-6">
          <img
            src="../../public/images/icon-order-confirmed.svg"
            alt="img"
            className="w-[80px]"
          />
          <div className="mb-8">
            <h2 className="text-6xl font-bold">Order Confirmed</h2>
            <p className="text-[#87635A] text-lg font-[300]">
              We hope you enjoy your food!
            </p>
          </div>
        </div>
        <div className="m-8">
          <div className="max-h-[300px] overflow-y-auto pr-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex max-h-[300px] overflow-y-auto justify-between mb-12 gap-4"
              >
                <img
                  src={item.image.thumbnail}
                  alt="img"
                  className="w-[60px]"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span className=" text-xl translate-y-[50%] font-[300]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-[#C73B0F]">
                      {item.quantity}x
                    </span>
                    <span className="text-[#87635A] font-[300]">
                      @ ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between  mb-4">
            <span className="font-[300]">Order Total:</span>
            <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-end gap-2 w-full">
          <button
            onClick={() => {
              onClose();
            }}
            className="px-4 py-2 w-full cursor-pointer rounded-full bg-[#C73B0F] text-white hover:bg-[#a42f0d]"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
