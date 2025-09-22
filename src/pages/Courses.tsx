
import React from 'react'
import { motion } from 'framer-motion'
import {BookOpen, Clock, Users, Target, Shield, Eye, Building, UserCheck, FileText} from 'lucide-react'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Curso de Modulação',
      description: 'Técnicas avançadas de modulação de voz e comunicação estratégica para operações especiais.',
      duration: '40 horas',
      participants: '25 vagas',
      level: 'Intermediário',
      icon: Target,
      color: 'bg-blue-500',
      materialCount: '12 materiais',
      content: {
        topics: [
          {
            title: 'Fundamentos da Modulação Vocal',
            items: [
              'Controle respiratório e projeção vocal',
              'Variação de tom e ritmo para diferentes situações',
              'Técnicas de disfarce vocal para operações encobertas',
              'Modulação emocional - transmitir calma, autoridade ou urgência'
            ]
          },
          {
            title: 'Comunicação Tática',
            items: [
              'Códigos e sinais para comunicação discreta',
              'Uso de rádio em operações - clareza e brevidade',
              'Comunicação sob pressão em situações de risco',
              'Coordenação de equipes através de comandos vocais'
            ]
          },
          {
            title: 'Técnicas de Interrogatório',
            items: [
              'Modulação para estabelecer rapport com suspeitos',
              'Variação vocal para detectar mentiras',
              'Técnicas de persuasão através da voz',
              'Manutenção do controle psicológico durante interrogatórios'
            ]
          }
        ]
      },
      features: [
        'Técnicas de modulação vocal',
        'Comunicação em operações',
        'Psicologia da comunicação',
        'Prática em simuladores'
      ]
    },
    {
      id: 2,
      title: 'Curso de Acompanhamento',
      description: 'Metodologias de acompanhamento e monitoramento para investigações e operações de campo.',
      duration: '60 horas',
      participants: '20 vagas',
      level: 'Avançado',
      icon: Eye,
      color: 'bg-green-500',
      materialCount: '18 materiais',
      content: {
        topics: [
          {
            title: 'Técnicas de Vigilância Urbana',
            items: [
              'Acompanhamento a pé em ambientes urbanos',
              'Uso de veículos para seguimento discreto',
              'Técnicas de camuflagem e disfarce',
              'Posicionamento estratégico para observação'
            ]
          },
          {
            title: 'Tecnologia e Equipamentos',
            items: [
              'Uso de câmeras e dispositivos de gravação',
              'Rastreamento GPS e monitoramento eletrônico',
              'Comunicação segura durante operações',
              'Análise de padrões de movimento e comportamento'
            ]
          },
          {
            title: 'Documentação e Relatórios',
            items: [
              'Registro detalhado de atividades observadas',
              'Fotografia e vídeo como evidência',
              'Elaboração de relatórios operacionais',
              'Manutenção da cadeia de custódia de evidências'
            ]
          }
        ]
      },
      features: [
        'Técnicas de vigilância',
        'Uso de tecnologia de monitoramento',
        'Análise comportamental',
        'Relatórios operacionais'
      ]
    },
    {
      id: 3,
      title: 'Curso Prisional',
      description: 'Gestão e segurança em ambientes prisionais, com foco em procedimentos e protocolos específicos.',
      duration: '80 horas',
      participants: '30 vagas',
      level: 'Básico',
      icon: Building,
      color: 'bg-orange-500',
      materialCount: '24 materiais',
      content: {
        topics: [
          {
            title: 'Administração Penitenciária',
            items: [
              'Processamento e classificação de detentos',
              'Gestão de celas e distribuição de prisioneiros',
              'Controle de visitas e correspondência',
              'Manutenção de registros e documentação prisional'
            ]
          },
          {
            title: 'Segurança e Disciplina',
            items: [
              'Protocolos de revista e busca',
              'Prevenção de fugas e motins',
              'Uso progressivo da força em ambiente prisional',
              'Isolamento disciplinar e medidas corretivas'
            ]
          },
          {
            title: 'Reabilitação e Programas',
            items: [
              'Programas de trabalho e educação para detentos',
              'Acompanhamento psicológico e social',
              'Preparação para reintegração social',
              'Mediação de conflitos entre prisioneiros'
            ]
          }
        ]
      },
      features: [
        'Segurança prisional',
        'Gestão de detentos',
        'Protocolos de emergência',
        'Direitos humanos'
      ]
    },
    {
      id: 4,
      title: 'Curso de Abordagem',
      description: 'Técnicas especializadas de abordagem tática e procedimentos de segurança em campo.',
      duration: '50 horas',
      participants: '15 vagas',
      level: 'Avançado',
      icon: Shield,
      color: 'bg-red-500',
      materialCount: '15 materiais',
      content: {
        topics: [
          {
            title: 'Abordagem Tática Veicular',
            items: [
              'Técnicas de parada de veículos suspeitos',
              'Posicionamento seguro durante abordagens',
              'Extração de ocupantes de forma controlada',
              'Busca veicular e apreensão de evidências'
            ]
          },
          {
            title: 'Abordagem a Pé',
            items: [
              'Aproximação e identificação de suspeitos',
              'Técnicas de imobilização e contenção',
              'Revista pessoal e busca por armas/drogas',
              'Uso de algemas e equipamentos de contenção'
            ]
          },
          {
            title: 'Situações de Alto Risco',
            items: [
              'Abordagem em locais com reféns',
              'Coordenação com unidades táticas especiais',
              'Negociação e desescalação de conflitos',
              'Primeiros socorros em situações de emergência'
            ]
          }
        ]
      },
      features: [
        'Abordagem tática',
        'Uso progressivo da força',
        'Técnicas de contenção',
        'Primeiros socorros'
      ]
    }
  ]

  const [selectedCourse, setSelectedCourse] = React.useState<number | null>(null)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico':
        return 'bg-green-100 text-green-800'
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avançado':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleAccessContent = (courseId: number) => {
    setSelectedCourse(selectedCourse === courseId ? null : courseId)
  }

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Material de Estudo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Acesse todo o material de estudo e recursos de capacitação da Polícia Federal
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-900">Portal de Capacitação PF</h2>
            </div>
            <p className="text-blue-700">
              Nossos materiais são desenvolvidos por especialistas e seguem os mais altos padrões de qualidade, 
              preparando nossos agentes para os desafios da segurança pública moderna.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`${course.color} p-3 rounded-lg`}>
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="text-sm">{course.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FileText className="h-5 w-5 mr-2" />
                    <span className="text-sm">{course.materialCount}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Conteúdo Disponível:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <UserCheck className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleAccessContent(course.id)}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>
                    {selectedCourse === course.id ? 'Ocultar Material' : 'Acessar Material de Estudo'}
                  </span>
                </button>

                {/* Expanded Content */}
                {selectedCourse === course.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 border-t pt-6"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Material de Estudo Detalhado</h4>
                    <div className="space-y-6">
                      {course.content.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-3">{topic.title}</h5>
                          <ul className="space-y-2">
                            {topic.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Acesso aos Materiais</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <UserCheck className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Agente Ativo</h3>
              <p className="text-blue-100 text-sm">Estar em atividade na Polícia Federal</p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Material Atualizado</h3>
              <p className="text-blue-100 text-sm">Conteúdo sempre atualizado e revisado</p>
            </div>
            <div>
              <FileText className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Acesso Completo</h3>
              <p className="text-blue-100 text-sm">Todo material disponível em formato digital</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Courses
