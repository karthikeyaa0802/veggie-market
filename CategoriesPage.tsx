
import Layout from "@/components/layout/Layout";
import CategoryGrid from "@/components/CategoryGrid";

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Browse Categories</h1>
        <p className="text-gray-600 mb-8">Explore our wide range of fresh, organic products by category</p>
        <CategoryGrid />
      </div>
    </Layout>
  );
};

export default CategoriesPage;
