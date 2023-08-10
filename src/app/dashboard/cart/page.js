import Link from "next/link";
import React from "react";

const cart_page = () => {
  return (
    <div>
      <h1 className="mt-10 text-3xl text-indigo-700 font-extrabold text-center">
        Check Out Your Cart Items!
      </h1>
      <Link href="/checkout">
        <button class="btn-primary hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full">
          CheckOut
        </button>
      </Link>
    </div>
  );
};

export default cart_page;
