import { Link } from "react-router-dom";

export default function Cart({ CartPage, SetCartPage }) {
  // increase product in cart
  const qtyincrease = (product) => {
    const exist = CartPage.find((ele) => ele.id === product.id);
    SetCartPage(
      CartPage.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty + 1 } : ele
      )
    );
  };

  // decrease product in cart
  const qtydecrease = (product) => {
    const exist = CartPage.find((ele) => ele.id === product.id);
    SetCartPage(
      CartPage.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty - 1 } : ele
      )
    );
  };
  // remove product in cart
  const removeProd = (product) => {
    SetCartPage(CartPage.filter((ele) => ele.id !== product.id));
  };
  // total price
  const total = CartPage.reduce((price, item) => {
    return price + item.qty * item.price;
  }, 0);

  return (
    <>
      <section className="container cart">
        <h1>#cart</h1>
        {CartPage.length === 0 && (
          <div className="empty-box">
            <p>your shopping cart is empty</p>
            <Link to="/shop">
              <button>shop now</button>
            </Link>
          </div>
        )}
        <div className="product-box">
          {CartPage.map((ele, index) => (
            <>
              <div key={index} className="box">
                <div className="img-box">
                  <img src={ele.images[0]} alt="" />
                </div>
                <div className="details">
                  <div className="prod-data">
                    <h4>{ele.category}</h4>
                    <h3>{ele.title}</h3>
                    <p className="p1">Price : {ele.price}$</p>
                    <p className="p2">Total : {ele.price * ele.qty}$</p>
                  </div>
                  <div className="prod-num">
                    <button className="b1" onClick={() => qtyincrease(ele)}>
                      +
                    </button>
                    <input value={ele.qty} />
                    <button className="b2" onClick={() => qtydecrease(ele)}>
                      −
                    </button>
                  </div>
                  <i
                    onClick={() => removeProd(ele)}
                    className="fa-solid fa-square-xmark"
                  ></i>
                </div>
              </div>
            </>
          ))}
        </div>
        {CartPage.length > 0 && (
          <div className="total">
            <h4>total price: {total}$</h4>
            <button>checkout</button>
          </div>
        )}
      </section>
    </>
  );
}
