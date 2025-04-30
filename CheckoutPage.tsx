
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  
  // Form state (simplified, in a real app you'd use a form library like react-hook-form)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive an email confirmation shortly.",
      });
      clearCart();
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="page-container">
          <div className="text-center py-12">
            <h1 className="page-title">Checkout</h1>
            <p className="text-gray-600 mb-6">Your cart is empty. Please add some products before checkout.</p>
            <Button
              onClick={() => navigate("/categories")}
              className="bg-veggie-600 hover:bg-veggie-700"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Shipping Information</h2>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  {/* Address Info */}
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Section */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Payment Information</h2>
                </div>
                
                <div className="p-6">
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="credit-card" className="space-y-6">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="XXXX XXXX XXXX XXXX"
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiry">Expiration Date</Label>
                          <Input
                            id="expiry"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="XXX"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal" className="text-center py-6">
                      <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-10 mx-auto" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-veggie-600 hover:bg-veggie-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>
              
              <ul className="divide-y divide-gray-200 mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity || 1}</p>
                    </div>
                    <p className="text-gray-900">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${(totalPrice * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
