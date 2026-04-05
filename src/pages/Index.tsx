import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import artistImg from "@/assets/artist.jpeg";
import tattoo1 from "@/assets/tattoo1.jpeg";
import tattoo2 from "@/assets/tattoo2.jpeg";
import tattoo3 from "@/assets/tattoo3.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Index = () => {
  const tattoos = [
    { src: tattoo1, title: "Indígena & Lobo" },
    { src: tattoo2, title: "Cristo Redentor" },
    { src: tattoo3, title: "Águia & Relógio" },
  ];

  const locations = [
    { city: "Taquarana", state: "AL" },
    { city: "Arapiraca", state: "AL" },
    { city: "Maceió", state: "AL" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-xl md:text-2xl font-bold text-gradient-gold tracking-widest">
            MARX TATTOO
          </h1>
          <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wider">
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">SOBRE</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">PORTFÓLIO</a>
            <a href="#locais" className="text-muted-foreground hover:text-primary transition-colors">LOCAIS</a>
            <a
              href="https://wa.me/5582999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold hover:bg-gold-light transition-colors text-xs tracking-widest"
            >
              AGENDAR
            </a>
          </div>
          <a
            href="https://wa.me/5582999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-sm font-semibold text-xs tracking-widest"
          >
            AGENDAR
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] mb-4">ARTE NA PELE</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-gold">MARX</span>
              <br />
              <span className="text-foreground">TATTOO</span>
            </h2>
            <div className="h-[2px] w-24 line-gold mb-6" />
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-md mb-8">
              Transformando ideias em arte permanente. Especialista em realismo preto e cinza, 
              criando tatuagens únicas que contam sua história.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5582999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-float inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-display font-semibold tracking-widest text-sm hover:bg-gold-light transition-all hover:shadow-[0_0_30px_hsl(38,70%,50%,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                ENTRAR EM CONTATO
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-96">
              {/* Outer golden glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-light via-primary to-gold-dark rounded-lg opacity-30 blur-2xl animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-br from-gold-light via-primary to-gold-dark rounded-sm opacity-50 blur-md" />
              {/* Gold border frame */}
              <div className="absolute -inset-[3px] bg-gradient-to-br from-gold-light via-primary to-gold-dark rounded-sm" />
              <img
                src={artistImg}
                alt="Marx - Tatuador profissional"
                className="relative rounded-sm w-full aspect-[3/4] object-cover object-top glow-gold-strong"
              />
              <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-sm text-primary tracking-widest">ARTISTA</p>
                <p className="font-display text-2xl font-bold text-foreground">MARX</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* About */}
      <section id="sobre" className="py-24 bg-gradient-section relative">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] mb-3">CONHEÇA</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              SOBRE O ARTISTA
            </h2>
            <div className="h-[2px] w-16 line-gold mx-auto mb-8" />
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Com paixão pela arte e dedicação em cada traço, Marx Tattoo transforma 
              conceitos em obras de arte vivas. Especializado em realismo preto e cinza, 
              cada tatuagem é tratada como uma peça única — do esboço ao resultado final. 
              A excelência técnica e o compromisso com a higiene e segurança garantem 
              uma experiência profissional em cada sessão.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Tatuagens" },
              { number: "3", label: "Cidades" },
              { number: "100%", label: "Dedicação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground font-body text-sm tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] mb-3">GALERIA</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              MEUS TRABALHOS
            </h2>
            <div className="h-[2px] w-16 line-gold mx-auto mb-6" />
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Cada peça é única, feita com dedicação e atenção aos detalhes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tattoos.map((tattoo, i) => (
              <motion.div
                key={tattoo.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group relative overflow-hidden rounded-sm glow-gold"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-light/30 via-primary/20 to-gold-dark/30 rounded-sm z-0" />
                <div className="relative z-10 m-[1px] rounded-sm overflow-hidden bg-card">
                  <img
                    src={tattoo.src}
                    alt={tattoo.title}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="font-display text-lg font-bold text-foreground">{tattoo.title}</p>
                      <p className="text-primary text-sm font-body tracking-wider">Realismo P&B</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Locations */}
      <section id="locais" className="py-24 bg-gradient-section relative">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] mb-3">ATENDIMENTO</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              ONDE ME ENCONTRAR
            </h2>
            <div className="h-[2px] w-16 line-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{loc.city}</h3>
                <p className="text-muted-foreground font-body text-sm tracking-wider">{loc.state}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              PRONTO PARA SUA PRÓXIMA TATTOO?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-10">
              Entre em contato e vamos transformar sua ideia em arte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5582999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-float inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-sm font-display font-semibold tracking-widest text-sm hover:bg-gold-light transition-all hover:shadow-[0_0_40px_hsl(38,70%,50%,0.3)]"
              >
                <Phone className="w-5 h-5" />
                WHATSAPP
              </a>
              <a
                href="https://instagram.com/marxtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-float-delay inline-flex items-center justify-center gap-3 border border-primary text-primary px-10 py-4 rounded-sm font-display font-semibold tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
                INSTAGRAM
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-lg text-gradient-gold tracking-widest mb-2">MARX TATTOO</p>
          <p className="text-muted-foreground font-body text-sm">
            Taquarana · Arapiraca · Maceió — Alagoas
          </p>
          <p className="text-muted-foreground/50 font-body text-xs mt-4">
            © 2026 Marx Tattoo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
