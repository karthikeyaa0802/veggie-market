
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await signup(name, email, password);
      if (success) {
        toast({
          title: "Account created",
          description: "Welcome to Veggie Market!",
        });
        navigate("/account");
      } else {
        setError("This email is already in use. Please try another.");
      }
    } catch (error) {
      setError("An error occurred during signup. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="page-container max-w-md mx-auto">
        <h1 className="page-title text-center">Create an Account</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-veggie-600 hover:bg-veggie-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-veggie-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
