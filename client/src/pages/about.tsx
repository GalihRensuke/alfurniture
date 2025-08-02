import { Star, Recycle, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-display font-bold text-primary mb-6">Cerita Kami</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Didirikan pada tahun 2025, AL Furniture dimulai sebagai workshop keluarga kecil dengan misi sederhana: menciptakan furnitur berkualitas yang tahan lama untuk mendukung dunia pendidikan.
              </p>
              <p>
                Berawal dari proyek passion oleh Agung dan Kholis, dua pria dengan kecintaan yang sama terhadap woodworking, kini telah berkembang menjadi nama terpercaya dalam furnitur handcrafted. Komitmen kami terhadap teknik tradisional, dikombinasikan dengan sensibilitas desain modern, memastikan setiap produk memiliki kualitas yang timeless dan kontemporer.
              </p>
              <p>
                Hari ini, kami terus melanjutkan tradisi keluarga dengan generasi selanjutnya yang bergabung dalam workshop kami, membawa ide-ide segar sambil mempertahankan dedikasi yang sama terhadap kualitas dan keahlian yang telah menjadi ciri khas kami selama bertahun-tahun. Fokus kami adalah menyediakan solusi furnitur terbaik untuk institusi pendidikan di seluruh Indonesia.
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
        <div className="bg-background rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Nilai-Nilai Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
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
                description: "Proses konsultasi kolaboratif untuk mewujudkan visi sekolah Anda"
              },
              {
                step: "2",
                title: "Pemilihan Material",
                description: "Memilih kayu yang sempurna untuk setiap proyek pendidikan"
              },
              {
                step: "3",
                title: "Pengerjaan",
                description: "Pengerjaan handcrafted yang teliti menggunakan teknik tradisional"
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
      </div>
    </div>
  );
};

export default About;
