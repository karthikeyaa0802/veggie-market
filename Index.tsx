
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import Layout from "@/components/layout/Layout";

const Index = () => {
  // Featured categories (using first 3)
  const featuredCategories = categories.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Shop By Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of fresh, organic products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/categories">
              <Button 
                variant="outline" 
                className="border-veggie-600 text-veggie-700 hover:bg-veggie-50"
              >
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Promotion Banner */}
      <section className="py-12 bg-veggie-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Fresh Organic Vegetables Delivered to Your Door
              </h2>
              <p className="text-white/90 mb-6">
                Sign up today and get free delivery on your first order over $50.
                We deliver fresh, high-quality produce right to your doorstep.
              </p>
              <Link to="/signup">
                <Button 
                  className="bg-white text-veggie-700 hover:bg-gray-100"
                  size="lg"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh vegetables" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best grocery shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-veggie-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Organic</h3>
              <p className="text-gray-600">
                We source our products directly from local farms to ensure freshness and quality.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-veggie-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery available for orders placed before 2 PM in select areas.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-veggie-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Multiple secure payment options for your convenience and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
