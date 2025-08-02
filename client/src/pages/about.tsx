import { Star, Recycle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 sm:mb-6">Cerita Kami</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Didirikan pada tahun 2025, AL Furniture dimulai sebagai workshop keluarga kecil dengan misi sederhana: menciptakan furnitur kayu berkualitas yang tahan lama untuk berbagai kebutuhan.
              </p>
              <p>
                Berawal dari proyek passion oleh Agung dan Kholis, dua pria dengan kecintaan yang sama terhadap woodworking, kini telah berkembang menjadi nama terpercaya dalam furnitur handcrafted. Komitmen kami terhadap teknik tradisional, dikombinasikan dengan sensibilitas design modern, memastikan setiap produk memiliki kualitas yang timeless dan kontemporer.
              </p>
              <p>
                Hari ini, kami terus melanjutkan tradisi keluarga dengan generasi selanjutnya yang bergabung dalam workshop kami. Dengan pengalaman melayani berbagai klien, kami telah membangun reputasi kuat terutama di sektor pendidikan, dipercaya oleh banyak sekolah di seluruh Indonesia untuk menyediakan solusi furnitur berkualitas.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Artisan crafting furniture in our workshop"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-display font-bold">2025</p>
              <p className="font-semibold">Tahun Pendirian</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-background rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary text-center mb-8 sm:mb-12">
            Nilai-Nilai Kami
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Kualitas Utama
              </h4>
              <p className="text-foreground/70">
                Kami tidak pernah berkompromi pada kualitas, menggunakan hanya material terbaik dan teknik yang teruji waktu.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Keberlanjutan
              </h4>
              <p className="text-foreground/70">
                Berkomitmen pada sourcing yang bertanggung jawab dan praktik ramah lingkungan dalam semua operasi kami.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Tradisi Keluarga
              </h4>
              <p className="text-foreground/70">
                Melestarikan keahlian tradisional sambil merangkul inovasi untuk generasi mendatang.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Proses Kami
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Konsultasi",
                description: "Proses konsultasi kolaboratif untuk mewujudkan visi furnitur Anda"
              },
              {
                step: "2",
                title: "Pemilihan Material",
                description: "Memilih kayu yang sempurna untuk setiap proyek dengan standar kualitas tinggi"
              },
              {
                step: "3",
                title: "Pengerjaan",
                description: "Pengerjaan handcrafted yang teliti menggunakan teknik tradisional teruji"
              },
              {
                step: "4",
                title: "Finishing",
                description: "Sentuhan akhir dan inspeksi kualitas sebelum pengiriman"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-accent/20 rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-4">
            Mari Wujudkan Proyek Furnitur Anda
          </h3>
          <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Dengan pengalaman dan dedikasi kami, mari ciptakan furnitur berkualitas untuk kebutuhan Anda
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Mulai Konsultasi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
