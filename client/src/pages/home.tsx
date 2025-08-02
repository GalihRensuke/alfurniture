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
              Furnitur kayu berkualitas untuk berbagai kebutuhan
            </p>
            <p className="text-lg text-foreground/70 mb-12 max-w-lg leading-relaxed">
              Spesialis furnitur untuk institusi pendidikan dengan pengalaman melayani berbagai klien. Menggabungkan keahlian tradisional dengan desain modern yang fungsional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                >
                  Jelajahi Produk
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Cerita Kami
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
              Mengapa Memilih AL Furniture
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Rasakan perbedaan kualitas keahlian autentik dan material berkelanjutan, dipercaya oleh banyak sekolah di Indonesia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Hammer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Kualitas Handmade
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Setiap produk dibuat dengan teliti oleh pengrajin ahli menggunakan teknik tradisional yang diwariskan turun-temurun.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Material Berkelanjutan
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Kami menggunakan kayu berkualitas dari hutan berkelanjutan bersertifikat, memastikan tanggung jawab lingkungan.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Pengalaman Pendidikan
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Berpengalaman melayani berbagai institusi pendidikan, memahami kebutuhan khusus lingkungan belajar dengan desain ergonomis dan tahan lama.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
