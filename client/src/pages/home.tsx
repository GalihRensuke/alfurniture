import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Hammer, Leaf, Heart } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary mb-6 leading-tight">
              AL Furniture
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
              Handcrafted wooden furniture from local artisans
            </p>
            <p className="text-lg text-foreground/70 mb-12 max-w-lg leading-relaxed">
              Discover our collection of meticulously crafted wooden furniture, where traditional craftsmanship meets modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Why Choose AL Furniture
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience the difference of authentic craftsmanship and sustainable materials
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Hammer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Handcrafted Quality
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Sustainable Materials
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We source our wood responsibly from certified sustainable forests, ensuring environmental responsibility.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Family Legacy
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Over 20 years of family tradition, bringing passion and expertise to every piece we create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
