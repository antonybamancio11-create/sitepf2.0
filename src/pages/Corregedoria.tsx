
import React from 'react'
import { motion } from 'framer-motion'
import {Scale, ExternalLink, MessageSquare, Shield, FileText, Users, AlertTriangle, CheckCircle} from 'lucide-react'
import toast from 'react-hot-toast'

const Corregedoria: React.FC = () => {
  const handleDiscordRedirect = () => {
    toast.success('Redirecionando para o canal da Corregedoria...')
    // Aqui você pode adicionar o link real do Discord
    window.open('https://discord.gg/seu-canal-corregedoria', '_blank')
  }

  const services = [
    {
      title: 'Denúncias Anônimas',
      description: 'Canal seguro para reportar irregularidades de forma confidencial.',
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Consultas Éticas',
      description: 'Orientações sobre procedimentos e questões éticas institucionais.',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Acompanhamento de Processos',
      description: 'Verificação do andamento de processos disciplinares.',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Ouvidoria Interna',
      description: 'Canal direto para sugestões e melhorias institucionais.',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const principles = [
    'Transparência em todos os processos',
    'Imparcialidade nas investigações',
    'Confidencialidade garantida',
    'Celeridade processual',
    'Respeito aos direitos fundamentais',
    'Responsabilização adequada'
  ]

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 mb-16">
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
                <Scale className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Corregedoria
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Promovendo transparência, integridade e responsabilidade institucional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Órgão de Controle Interno
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Corregedoria da Polícia Federal é responsável por assegurar o cumprimento das normas éticas e legais, 
            investigando irregularidades e promovendo a transparência institucional.
          </p>
        </motion.div>

        {/* Discord Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center mb-16 shadow-xl"
        >
          <MessageSquare className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Canal de Atendimento</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Abra um ticket em nosso canal oficial para denúncias, consultas ou solicitações relacionadas à Corregedoria
          </p>
          <button
            onClick={handleDiscordRedirect}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 inline-flex items-center group text-lg"
          >
            <MessageSquare className="mr-3 h-6 w-6" />
            Abrir Ticket no Discord
            <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-indigo-200 text-sm mt-4">
            Atendimento 24h • Confidencialidade garantida
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Princípios da Corregedoria
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nossa atuação é pautada por princípios sólidos que garantem a efetividade e legitimidade de nossos processos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{principle}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-blue-900 text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Compromisso com a Transparência</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            A Corregedoria da Polícia Federal trabalha incansavelmente para manter os mais altos padrões éticos 
            e garantir que nossa instituição continue sendo um exemplo de integridade e profissionalismo.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-blue-200">Atendimento Contínuo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Confidencial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-blue-200">Tolerância à Corrupção</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Corregedoria
