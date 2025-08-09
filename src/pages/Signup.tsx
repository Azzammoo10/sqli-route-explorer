import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Lock, User } from "lucide-react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempted with:", { firstName, lastName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{
           background: "linear-gradient(135deg, #2a1b3d 0%, #44337a 50%, #6b46c1 100%)"
         }}>
      <Card className="w-full max-w-6xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel - Signup Form */}
          <div className="md:w-1/2 p-8 lg:p-12">
            {/* Header */}
            <div className="text-left mb-8">
              <div className="text-sm text-muted-foreground mb-6">Sign Up</div>
              <div className="mb-2">
                <img 
                  src="/assets/images/SQLI-LOGO.png" 
                  alt="SQLI Logo" 
                  className="h-8 mb-4"
                />
                <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  SQLI
                </h1>
                <h2 className="text-xl lg:text-2xl font-bold text-primary">
                  DIGITAL
                </h2>
                <h2 className="text-xl lg:text-2xl font-bold text-primary">
                  EXPERIENCE
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Create your account
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10 h-12 bg-input border-border focus:ring-primary focus:border-primary"
                      placeholder="John"
                    />
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="pl-10 h-12 bg-input border-border focus:ring-primary focus:border-primary"
                      placeholder="Doe"
                    />
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-input border-border focus:ring-primary focus:border-primary"
                    placeholder="john.doe@example.com"
                  />
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12 bg-input border-border focus:ring-primary focus:border-primary"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 h-12 bg-input border-border focus:ring-primary focus:border-primary"
                    placeholder="Confirm your password"
                  />
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Already have an account?
              </p>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  Login now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Panel - Illustration */}
          <div className="md:w-1/2 bg-accent/20 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full max-w-md">
              {/* Background Elements */}
              <div className="absolute top-8 right-8 flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-12 right-4 space-y-2">
                <div className="w-16 h-2 bg-muted rounded"></div>
                <div className="w-12 h-2 bg-muted rounded"></div>
                <div className="w-20 h-2 bg-muted rounded"></div>
              </div>

              {/* Main Illustration */}
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src="/assets/images/undraw_security.png"
                  alt="Security Illustration"
                  className="w-full max-w-sm mx-auto"
                />
                
                {/* Security Badge */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signup;