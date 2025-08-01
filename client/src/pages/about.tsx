import { Star, Recycle, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-display font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Founded in 2000, AL Furniture began as a small family workshop with a simple mission: to create beautiful, lasting furniture that brings warmth and character to every home.
              </p>
              <p>
                What started as a passion project by Antonio and Luigi, two brothers with a shared love for woodworking, has grown into a respected name in handcrafted furniture. Our commitment to traditional techniques, combined with modern design sensibilities, ensures each piece is both timeless and contemporary.
              </p>
              <p>
                Today, we continue the family tradition with the next generation joining our workshop, bringing fresh ideas while maintaining the same dedication to quality and craftsmanship that has defined us for over two decades.
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
              <p className="text-2xl font-display font-bold">24+</p>
              <p className="font-semibold">Years of Craftsmanship</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-background rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Quality First
              </h4>
              <p className="text-foreground/70">
                We never compromise on quality, using only the finest materials and time-tested techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Sustainability
              </h4>
              <p className="text-foreground/70">
                Committed to responsible sourcing and eco-friendly practices in all our operations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold text-primary mb-3">
                Family Tradition
              </h4>
              <p className="text-foreground/70">
                Preserving traditional craftsmanship while embracing innovation for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Design",
                description: "Collaborative design process to bring your vision to life"
              },
              {
                step: "2",
                title: "Material Selection",
                description: "Carefully choosing the perfect wood for each project"
              },
              {
                step: "3",
                title: "Crafting",
                description: "Meticulous handcrafting using traditional techniques"
              },
              {
                step: "4",
                title: "Finishing",
                description: "Final touches and quality inspection before delivery"
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
