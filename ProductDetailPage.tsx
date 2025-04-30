
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getProductsByCategory } from "@/data/products";
import { ChevronLeft, Plus, Minus, ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  
  const product = productId ? getProductById(parseInt(productId)) : undefined;
  
  useEffect(() => {
    if (product) {
      // Get related products from the same category (excluding current product)
      const related = getProductsByCategory(product.category)
        .filter((p) => p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart.`,
        duration: 2000,
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return (
      <Layout>
        <div className="page-container">
          <p className="text-gray-600">Product not found.</p>
          <Link to="/categories">
            <Button variant="link" className="pl-0 mt-2">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to shopping
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-container">
        <div className="mb-6">
          <Link to={`/categories/${product.category}`}>
            <Button variant="link" className="pl-0">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to {product.category}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-veggie-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="my-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-1 text-center w-12">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="bg-veggie-600 hover:bg-veggie-700 w-full md:w-auto"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 border-t pt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
