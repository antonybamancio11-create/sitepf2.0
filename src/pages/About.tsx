
import React from 'react'
import { motion } from 'framer-motion'
import {Shield, Star, Award, Users, Target, Globe, Crown, Briefcase, Medal} from 'lucide-react'

const About: React.FC = () => {
  const leaders = [
    {
      name: 'Bigode',
      position: 'Diretor-Geral',
      description: 'Líder experiente com vasta experiência em operações estratégicas e gestão institucional.',
      icon: Crown,
      color: 'bg-yellow-500'
    },
    {
      name: 'Jhon Paiva',
      position: 'Diretor de Operações',
      description: 'Especialista em coordenação operacional e desenvolvimento de estratégias de segurança.',
      icon: Briefcase,
      color: 'bg-blue-500'
    },
    {
      name: 'PHX',
      position: 'Diretor de Inteligência',
      description: 'Responsável pelas operações de inteligência e análise estratégica da instituição.',
      icon: Medal,
      color: 'bg-green-500'
    }
  ]

  const values = [
    {
      title: 'Integridade',
      description: 'Atuamos com transparência e ética em todas as nossas ações.',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Excelência',
      description: 'Buscamos constantemente a melhoria e a qualidade em nossos serviços.',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Compromisso',
      description: 'Dedicação total à proteção da sociedade e defesa da lei.',
      icon: Target,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Inovação',
      description: 'Utilizamos tecnologia e métodos modernos para maior eficiência.',
      icon: Globe,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const achievements = [
    { label: 'Anos de Tradição', value: '80+' },
    { label: 'Operações Bem-sucedidas', value: '10.000+' },
    { label: 'Agentes Capacitados', value: '15.000+' },
    { label: 'Prêmios Internacionais', value: '25+' }
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
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a Polícia Federal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Uma instituição sólida, comprometida com a segurança pública e a defesa dos interesses nacionais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nossa Liderança
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais que lideram a Polícia Federal com experiência e dedicação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
            >
              <div className={`${leader.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <leader.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">{leader.position}</p>
              <p className="text-gray-600 leading-relaxed">{leader.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa identidade institucional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nossos Números
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados que demonstram nosso compromisso e eficiência
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">{achievement.value}</div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Nossa Missão</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                "Proteger a sociedade brasileira através da investigação e repressão aos crimes contra a ordem política e social, 
                mantendo a segurança das fronteiras e garantindo a soberania nacional com integridade, profissionalismo e 
                compromisso com a justiça."
              </p>
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-lg font-semibold">Excelência em Segurança Pública</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
