import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Masukkan alamat email yang valid"),
  message: z.string().min(10, "Pesan harus minimal 10 karakter"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Pesan berhasil dikirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda kembali.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Gagal mengirim pesan",
        description: error.message || "Silakan coba lagi nanti.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 sm:mb-6">Hubungi Kami</h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            Siap diskusikan kebutuhan furnitur Anda? Dengan pengalaman di berbagai proyek terutama sekolah, kami ingin mendengar tentang visi Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-card rounded-2xl shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                Kirim pesan kepada kami
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Nama *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nama lengkap Anda"
                            className="bg-background border-secondary/30 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="email.anda@example.com"
                            className="bg-background border-secondary/30 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Pesan *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder="Ceritakan tentang proyek furnitur Anda, timeline yang diinginkan, dan kebutuhan spesifik lainnya..."
                            className="bg-background border-secondary/30 focus:border-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl"
                  >
                    {contactMutation.isPending ? "Mengirim..." : "Kirim Pesan"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-card rounded-2xl shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Kunjungi Workshop Kami
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Alamat</h4>
                      <p className="text-foreground/70">
                        Cilendek Timur<br />
                        Kota Bogor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telepon</h4>
                      <p className="text-foreground/70">+62 877-8241-4638</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-foreground/70">info@alfurniture.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Jam Operasional Workshop
                </h3>
                <div className="space-y-2 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-semibold">09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mt-4">
                  *Janji temu disarankan untuk konsultasi
                </p>
              </CardContent>
            </Card>

            {/* Workshop Image */}
            <Card className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="AL Furniture workshop interior"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-display font-semibold text-primary mb-2">
                  Kunjungi Workshop Kami
                </h4>
                <p className="text-foreground/70 text-sm">
                  Lihat para pengrajin kami bekerja dan jelajahi koleksi secara langsung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
