
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, categories } from "@/data/products";
import { Product } from "@/hooks/useCart";
import { ChevronLeft } from "lucide-react";

const CategoryProductsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<typeof categories[0] | null>(null);

  useEffect(() => {
    if (categoryId) {
      const foundCategory = categories.find((c) => c.id === categoryId);
      setCategory(foundCategory || null);
      
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
    }
  }, [categoryId]);

  if (!category) {
    return (
      <Layout>
        <div className="page-container">
          <p>Category not found.</p>
          <Link to="/categories">
            <Button variant="link" className="pl-0">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to categories
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
          <Link to="/categories">
            <Button variant="link" className="pl-0">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to categories
            </Button>
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="page-title mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No products available in this category yet.</p>
            <Link to="/categories">
              <Button variant="outline">Browse other categories</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProductsPage;
