
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                </div>

                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col sm:flex-row">
                      {/* Product Image */}
                      <div className="flex-shrink-0 sm:w-24 sm:h-24 rounded-md overflow-hidden mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 ml-0 sm:ml-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/product/${item.id}`} className="font-medium text-gray-900 hover:text-veggie-600">
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                          </div>
                          <p className="font-medium text-gray-900">
                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              disabled={(item.quantity || 1) <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 text-center w-12">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Cart Actions */}
                <div className="border-t p-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    Clear Cart
                  </Button>
                  <Link to="/categories">
                    <Button variant="outline">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full mt-6 bg-veggie-600 hover:bg-veggie-700">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/categories">
              <Button className="bg-veggie-600 hover:bg-veggie-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
