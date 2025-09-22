import React from 'react'
import { motion } from 'framer-motion'
import {BookOpen, Clock, Users, Target, Shield, Eye, UserCheck, FileText, Radio} from 'lucide-react'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Curso de Códigos Operacionais',
      description: 'Aprenda os códigos Q essenciais para comunicação operacional da Polícia Federal.',
      duration: '24 horas',
      participants: '30 vagas',
      level: 'Básico',
      icon: Radio,
      color: 'bg-blue-500',
      materialCount: '15 materiais',
      content: {
        topics: [
          {
            title: 'Códigos Q - Comunicação Básica',
            items: [
              'QAP - Na escuta / Pronto para receber mensagem',
              'QTH - Localização atual',
              'QRA - Nome ou identificação',
              'QSL - Entendido / Afirmativo',
              'QSM - Repetir a última mensagem',
              'QSO - Comunicação / Áudio',
              'QTI - Indo em direção ao local',
              'QRR - Reforço / Apoio imediato',
              'QTU - Ocupado no momento'
            ]
          },
          {
            title: 'Código Q - Patrulhamento',
            items: [
              'CÓD-P 0 - QAP CENTRAL, UNIDADE (seu carro) INICIANDO CÓDIGO 0, QUALQUER QRR OU QRU LANÇAR QTH NA REDE, QSL?',
              'CÓD-P 1 - QAP CENTRAL, UNIDADE (seu carro) INICANDO ABORDAGEM DE CÓDIGO 1 EM UM (carro abordado), QSL?',
              'CÓD-P 2 - QAP CENTRAL, UNIDADE (seu carro) INICANDO ABORDAGEM DE CÓDIGO 2 EM UM (carro abordado), o mesmo está com atitude suspeita, QSL?',
              'CÓD-P 3 - QAP CENTRAL, UNIDADE (seu carro) INICANDO ABORDAGEM DE CÓDIGO 3 EM UM (carro abordado), o mesmo possivelmente está armado e com mais indivíduos no carro, solicito apoio no meu QTH, QSL?',
              'CÓD-P 6 - QAP CENTRAL, UNIDADE (seu carro) INICANDO CÓDIGO 6 NO MEU QTH, ESTAMOS OUVINDO MUITOS DISPAROS NAS PROXIMIDADES, QSL?'
            ]
          },
          {
            title: 'Regras Importantes',
            items: [
              'Sempre que for modular na rádio, certifique-se de que não irá interromper ninguém',
              'Sempre mantenha o QTH atualizado durante o patrulhamento',
              'Utilize modulação clara e objetiva no código Q',
              'NUNCA interromper a modulação da viatura primária durante um acompanhamento'
            ]
          }
        ]
      },
      features: [
        'Códigos Q essenciais',
        'Comunicação operacional',
        'Protocolos de rádio',
        'Simulações práticas'
      ]
    },
    {
      id: 2,
      title: 'Curso de Procedimentos de Acompanhamento Tático',
      description: 'Técnicas especializadas de acompanhamento e monitoramento para operações de campo.',
      duration: '40 horas',
      participants: '20 vagas',
      level: 'Intermediário',
      icon: Eye,
      color: 'bg-green-500',
      materialCount: '18 materiais',
      content: {
        topics: [
          {
            title: 'Procedimentos Básicos de Acompanhamento',
            items: [
              'VIATURA PRIMÁRIA - Apenas a viatura primária (primeira a chegar) tem autorização para modular na rádio durante o acompanhamento',
              'VIATURA SECUNDÁRIA - Viaturas de apoio devem manter silêncio total na rádio, apenas escutando as instruções da primária',
              'DISTÂNCIA SEGURA - Manter distância da viatura primária para não comprometer o acompanhamento',
              'COMUNICAÇÃO - Comunicação entre viaturas de apoio deve ser feita apenas por sinais visuais ou gestos',
              'NÃO INTERFERIR - Jamais interferir na abordagem da viatura primária sem solicitação',
              'AGUARDAR COMUNICAÇÃO - Aguardar instruções da viatura primária antes de qualquer ação',
              'EMERGÊNCIA - Apenas em caso de emergência extrema a viatura secundária pode modular na rádio'
            ]
          },
          {
            title: 'Regras de Engajamento',
            items: [
              'REGRA IMPORTANTE - NUNCA interromper a modulação da viatura primária durante um acompanhamento',
              'DISCIPLINA - Manter disciplina total na rádio - somente a primária fala, as demais apenas escutam durante acompanhamento',
              'COORDENAÇÃO - Trabalhar em equipe de forma coordenada, seguindo sempre as instruções da viatura primária'
            ]
          }
        ]
      },
      features: [
        'Técnicas de acompanhamento',
        'Coordenação de equipes',
        'Comunicação tática',
        'Protocolos operacionais'
      ]
    },
    {
      id: 3,
      title: 'Curso de Procedimentos de Abordagem',
      description: 'Técnicas especializadas de abordagem por código de risco e procedimentos de segurança.',
      duration: '60 horas',
      participants: '15 vagas',
      level: 'Avançado',
      icon: Shield,
      color: 'bg-red-500',
      materialCount: '22 materiais',
      content: {
        topics: [
          {
            title: 'Procedimentos de Abordagem por Código',
            items: [
              'CÓDIGO 1 (BAIXO RISCO) - Abordagens de rotina - NÃO realizar revista, apenas verificação visual e checagem de documentos se necessário',
              'CÓDIGO 2 (MÉDIO RISCO) - Suspeita fundada - PODE realizar revista e checagem completa de documentos',
              'CÓDIGO 3 (ALTO RISCO) - Indivíduo armado/perigoso - DEVE realizar revista completa, solicitar apoio e manter máxima segurança'
            ]
          },
          {
            title: 'Conduta Profissional em Abordagem',
            items: [
              'REVISTA - SEXO OPOSTO - É TERMINANTEMENTE PROIBIDO realizar revista em pessoa do sexo oposto. Sempre solicitar agente do mesmo sexo do abordado',
              'TRATAMENTO RESPEITOSO - Manter sempre postura respeitosa e profissional, tratando o cidadão com dignidade independente da situação',
              'USO DA FORÇA - Usar apenas a força necessária e proporcional à resistência oferecida',
              'ABORDAGEM - É totalmente proibido abordar sozinho, sempre esteja com outro policial na viatura',
              'SEGURANÇA - Manter sempre a segurança própria e dos demais'
            ]
          },
          {
            title: 'Procedimentos de Revista',
            items: [
              'HOMEM REVISTANDO HOMEM - Procedimento padrão - revista completa',
              'MULHER REVISTANDO MULHER - Procedimento padrão - revista completa',
              'HOMEM revistar MULHER - PROIBIDO - Solicitar agente feminina para revista',
              'MULHER revistar HOMEM - PROIBIDO - Solicitar agente masculino para revista',
              'AUSÊNCIA DE AGENTE DO MESMO SEXO - Realizar o método da caixa ou encaminhar para DP'
            ]
          }
        ]
      },
      features: [
        'Abordagem por código de risco',
        'Procedimentos de revista',
        'Uso progressivo da força',
        'Conduta profissional'
      ]
    },
    {
      id: 4,
      title: 'Curso de Operações Especiais',
      description: 'Treinamento avançado em operações especiais e situações de alto risco.',
      duration: '80 horas',
      participants: '12 vagas',
      level: 'Avançado',
      icon: Target,
      color: 'bg-purple-500',
      materialCount: '25 materiais',
      content: {
        topics: [
          {
            title: 'Planejamento Operacional',
            items: [
              'Análise de risco e avaliação de ameaças',
              'Definição de objetivos e metas operacionais',
              'Distribuição de recursos humanos e materiais',
              'Estabelecimento de pontos de controle e comunicação'
            ]
          },
          {
            title: 'Execução Tática',
            items: [
              'Coordenação de equipes especializadas',
              'Técnicas de entrada e controle de ambiente',
              'Uso de equipamentos táticos especiais',
              'Protocolos de segurança em situações de risco'
            ]
          },
          {
            title: 'Pós-Operação',
            items: [
              'Relatórios operacionais detalhados',
              'Análise de resultados e lições aprendidas',
              'Manutenção de evidências e documentação',
              'Debriefing e avaliação de desempenho'
            ]
          }
        ]
      },
      features: [
        'Operações táticas especiais',
        'Coordenação de equipes',
        'Equipamentos especializados',
        'Análise pós-operação'
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
            Material de Capacitação
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Acesse todo o material de capacitação operacional da Polícia Federal
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-900">Portal de Capacitação PF</h2>
            </div>
            <p className="text-blue-700">
              Nossos materiais são desenvolvidos por especialistas e seguem os protocolos oficiais da Polícia Federal, 
              preparando nossos agentes para as operações do dia a dia.
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
                    {selectedCourse === course.id ? 'Ocultar Material' : 'Acessar Material de Capacitação'}
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
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Material de Capacitação Detalhado</h4>
                    <div className="space-y-6">
                      {course.content.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-3">{topic.title}</h5>
                          <ul className="space-y-2">
                            {topic.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm font-mono">{item}</span>
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
          <h2 className="text-3xl font-bold mb-4">Acesso aos Materiais de Capacitação</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <UserCheck className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Agente Ativo</h3>
              <p className="text-blue-100 text-sm">Estar em atividade na Polícia Federal</p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Material Oficial</h3>
              <p className="text-blue-100 text-sm">Conteúdo baseado em protocolos oficiais da PF</p>
            </div>
            <div>
              <FileText className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Capacitação Contínua</h3>
              <p className="text-blue-100 text-sm">Material sempre atualizado conforme novas diretrizes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Courses