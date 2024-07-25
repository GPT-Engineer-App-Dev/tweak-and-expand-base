import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center">
        <Package2 className="h-16 w-16 mb-4 text-primary" />
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl mb-8">This is a bare-bones application that you can modify and build upon.</p>
        <Button asChild>
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;