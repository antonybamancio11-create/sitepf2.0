
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Shield, Users, BookOpen, Award, ArrowRight, Target, Scale, Globe} from 'lucide-react'

const Home: React.FC = () => {
  const stats = [
    { label: 'Agentes Ativos', value: '15.000+', icon: Users },
    { label: 'Cursos Oferecidos', value: '50+', icon: BookOpen },
    { label: 'Operações Anuais', value: '2.500+', icon: Target },
    { label: 'Estados Atendidos', value: '27', icon: Globe },
  ]

  const highlights = [
    {
      title: 'Formação Especializada',
      description: 'Cursos de alta qualidade para capacitação profissional em diversas áreas.',
      icon: BookOpen,
      link: '/cursos',
    },
    {
      title: 'Transparência',
      description: 'Corregedoria atuante para garantir a integridade e transparência institucional.',
      icon: Scale,
      link: '/corregedoria',
    },
    {
      title: 'Excelência Operacional',
      description: 'Compromisso com a segurança pública e proteção da sociedade brasileira.',
      icon: Award,
      link: '/sobre',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Polícia Federal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Protegendo a sociedade brasileira com excelência, integridade e compromisso com a justiça
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cursos"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Nossos Cursos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Conheça a PF
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-900" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Pilares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os valores e princípios que norteiam nossa atuação em defesa da sociedade brasileira
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <highlight.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{highlight.description}</p>
                <Link
                  to={highlight.link}
                  className="text-blue-900 font-semibold hover:text-blue-700 flex items-center group"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Junte-se à Nossa Missão
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Faça parte de uma instituição comprometida com a segurança e justiça do Brasil
            </p>
            <Link
              to="/cursos"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center group"
            >
              Comece Sua Formação
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
