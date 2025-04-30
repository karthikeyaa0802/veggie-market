
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        navigate("/account");
      } else {
        setError("Invalid email or password. Try user@example.com for demo.");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="page-container max-w-md mx-auto">
        <h1 className="page-title text-center">Login to Your Account</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="mt-1"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-veggie-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="mt-1"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-veggie-600 hover:bg-veggie-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-veggie-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            
            {/* Demo credentials */}
            <div className="text-center mt-4 text-sm text-gray-500 border-t pt-4">
              <p className="mb-2">For demo purposes, use these credentials:</p>
              <p>Email: <strong>user@example.com</strong></p>
              <p>Password: <strong>password</strong> (any password will work)</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
