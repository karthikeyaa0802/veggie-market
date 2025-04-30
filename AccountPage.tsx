
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const AccountPage = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Account Menu</h2>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-gray-200">
                  <li>
                    <button
                      className="w-full text-left px-6 py-3 text-veggie-600 font-medium bg-veggie-50"
                    >
                      Account Details
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => navigate("/orders")}
                    >
                      Order History
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => navigate("/wishlist")}
                    >
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => navigate("/addresses")}
                    >
                      Addresses
                    </button>
                  </li>
                  {user?.isAdmin && (
                    <li>
                      <button
                        className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50"
                        onClick={() => navigate("/admin")}
                      >
                        Admin Dashboard
                      </button>
                    </li>
                  )}
                  <li>
                    <button
                      className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Account Type</p>
                  <p className="font-medium">{user?.isAdmin ? "Administrator" : "Customer"}</p>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" onClick={() => navigate("/edit-profile")}>
                      Edit Profile
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/change-password")}>
                      Change Password
                    </Button>
                    <Button 
                      variant="outline" 
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
