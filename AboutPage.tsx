
import Layout from "@/components/layout/Layout";
import marketImage from './pic.png';
const AboutPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">About Veggie Market</h1>
        
        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Veggie Market Oasis began in 2015 with a simple mission: to make fresh, organic produce accessible to everyone. Founded by Maria and John Thompson, who grew up on family farms, the company was born out of a passion for sustainable agriculture and healthy eating.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small farm-to-table delivery service has grown into a thriving online marketplace, connecting consumers directly with local farmers and sustainable food producers across the country.
              </p>
              <p className="text-gray-700">
                Today, we serve thousands of customers who share our belief that good food is the foundation of good living, and we remain committed to our founding principles of freshness, sustainability, and community support.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
            <img 
      src={marketImage} 
      alt="Farmers Market" 
      className="w-full h-auto" 
    />
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="mb-16 bg-veggie-50 py-10 px-6 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              "To nourish communities by providing the freshest, sustainably-grown produce while supporting local farmers and fostering environmental stewardship."
            </p>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-veggie-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 1.997L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Quality</h3>
              <p className="text-gray-700 text-center">
                We never compromise on quality. Every product in our store is carefully selected to ensure the highest standards of freshness and nutrition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-veggie-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Sustainability</h3>
              <p className="text-gray-700 text-center">
                We work with farmers who use sustainable growing practices, reducing environmental impact while promoting biodiversity and soil health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-veggie-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-veggie-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Community</h3>
              <p className="text-gray-700 text-center">
                We believe in building strong relationships between consumers and producers, creating a community that supports local agriculture.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://wallpapercrafter.com/desktop1/580901-iron-man-Robert-Downey-Jr.-Robert-Downey-Mladshiy.jpg" 
                  alt="Tony starc" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Tony starc</h3>
                <p className="text-veggie-600 mb-3">Co-founder & CEO</p>
                <p className="text-gray-700">
                  Maria grew up on her family's organic farm in Oregon and brings her passion for sustainable agriculture to the company.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://th.bing.com/th/id/OSK.HEROWy3soKUJRMPtPYqtiLwoydYQm3Uqu6mbt2ssCfwKojQ?w=312&h=200&c=15&rs=2&o=6&oif=webp&pid=SANGAM" 
                  alt="Ma Dong-seok" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ma Dong-seok</h3>
                <p className="text-veggie-600 mb-3">Co-founder & COO</p>
                <p className="text-gray-700">
                  John has over 15 years of experience in the food industry and oversees our operations and logistics.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://th.bing.com/th/id/OSK.p-MJO-CmOwmf1xXibYg_TGEiAikFsNs2Hxs-oDT-E40?w=224&h=200&c=12&rs=1&o=6&pid=SANGAM" 
                  alt="Gong Yoo" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Gong Yoo</h3>
                <p className="text-veggie-600 mb-3">Head of Product</p>
                <p className="text-gray-700">
                  Sarah leads our product team, ensuring we offer only the best quality produce and specialty foods.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
