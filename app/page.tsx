"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Linkedin, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Identidade Visual Moderna",
    category: "Branding",
    description: "Sistema completo de identidade visual para startup de tecnologia",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "UI/UX Design",
    description: "Interface intuitiva para aplicativo de entrega de comida",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 3,
    title: "E-commerce Fashion",
    category: "Web Design",
    description: "Plataforma de vendas online com foco na experiência do usuário",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    category: "UI Design",
    description: "Interface para visualização de dados e métricas empresariais",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 5,
    title: "Campanha Digital",
    category: "Design Gráfico",
    description: "Peças visuais para campanha de marketing digital",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 6,
    title: "Sistema de Design",
    category: "Design System",
    description: "Biblioteca de componentes para produto digital",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-gray-50/80 backdrop-blur-md z-50 border-b border-gray-200/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium text-gray-900">
            Victor Vieira
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sobre
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Portfólio
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.p
              className="text-gray-600 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Olá, eu sou
            </motion.p>
            <motion.h1
              className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Victor Vieira
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-gray-700 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Designer Gráfico & UI/UX
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transformo ideias em experiências visuais memoráveis. Especializado em criar identidades visuais
              autênticas e interfaces digitais que conectam marcas aos seus usuários de forma significativa e
              impactante.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full group"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">Sobre mim</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Com mais de 5 anos de experiência em design, desenvolvo soluções visuais que equilibram estética e
                  funcionalidade. Minha abordagem combina pesquisa, estratégia e criatividade para entregar resultados
                  que realmente fazem a diferença.
                </p>
                <p>
                  Especializo-me em <strong className="text-gray-900">Design Gráfico</strong>,
                  <strong className="text-gray-900"> Branding</strong> e
                  <strong className="text-gray-900"> UI/UX Design</strong>, sempre buscando criar experiências que sejam
                  tanto belas quanto intuitivas.
                </p>
                <p>Acredito que o bom design é invisível – ele simplesmente funciona, conecta e inspira.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">Projetos Selecionados</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma curadoria dos meus trabalhos mais recentes, explorando diferentes áreas do design e suas
              possibilidades criativas.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp} className="group">
                <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-gray-900 hover:text-gray-700 group/btn"
                    >
                      Ver mais
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">Vamos conversar?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e colaborações. Entre em contato para discutirmos como posso ajudar a
              dar vida às suas ideias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-medium text-gray-900 mb-6">Redes Sociais</h4>
              <div className="space-y-4">
                <Link
                  href="https://linkedin.com/in/victorvieira"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Link>
                <Link
                  href="https://instagram.com/victorvieira"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <Instagram className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Instagram
                </Link>
                <Link
                  href="https://behance.net/vctrvieira"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <ExternalLink className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Behance
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-medium text-gray-900 mb-6">Envie uma mensagem</h4>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Seu nome" className="border-gray-200 focus:border-gray-400 rounded-lg" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu email"
                    className="border-gray-200 focus:border-gray-400 rounded-lg"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    rows={4}
                    className="border-gray-200 focus:border-gray-400 rounded-lg resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
                  Enviar mensagem
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Victor Vieira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
