import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">About This App</h1>
        <p className="text-xl mb-8">
          This is a simple, bare-bones React application created with Vite, React Router, and Shadcn UI components.
          It's designed to be a starting point for your projects, providing a clean and minimal structure that you can easily build upon.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;