import { Layout, ShoppingCart, Bot, FileText, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { ModuleItem, TimelinePhase, TermItem } from './types';

export const PROPOSAL_INFO = {
  client: "PIRINOPOLIS.COM",
  project: "Novo Portal Institucional + E-commerce + IA",
  date: "22/12/2025",
  version: "1.0",
  validity: "7 dias"
};

export const MODULES: ModuleItem[] = [
  {
    id: 'A',
    title: 'Módulo A: Portal de Notícias + Templates',
    price: 10850,
    description: 'Portal moderno, rápido e administrável com base para expansão.',
    icon: Layout,
    isOptional: false,
    required: true,
    features: [
      'Home com estrutura editorial e destaques',
      'Páginas de matéria com leitura otimizada e SEO básico',
      'Listagens por editoria (Cidade, Turismo, Cultura)',
      'Busca interna e componentes padrão (Menu, Rodapé)',
      'Painel administrativo (CMS) para gestão de conteúdo',
      '3 Templates Reutilizáveis (Institucional, Oferta, Contato)',
      'BÔNUS: Design UI completo e Identidade Visual'
    ]
  },
  {
    id: 'B',
    title: 'Módulo B: E-commerce de Assinaturas',
    price: 9600,
    description: 'Sistema completo para monetização via assinaturas recorrentes.',
    icon: ShoppingCart,
    isOptional: true,
    features: [
      'Estrutura de planos (Mensal/Anual, Níveis)',
      'Checkout transparente (Mercado Pago, Stripe, etc.)',
      'Área do assinante (Login, Status, Gestão)',
      'Regras de acesso a conteúdo exclusivo',
      'Páginas de Planos, Checkout e Minha Conta',
      'Testes de transação e renovação'
    ]
  },
  {
    id: 'C',
    title: 'Módulo C: Agente de IA Inteligente',
    price: 9770,
    monthly: 2500,
    description: 'Automação de atendimento e suporte 24/7 integrado ao portal.',
    icon: Bot,
    isOptional: true,
    features: [
      'Definição de personalidade e tom de voz',
      'Base de conhecimento (FAQ, Serviços, Suporte)',
      'Widget de chat integrado ao site',
      'Fluxos inteligentes (Dúvidas, Planos, Transbordo humano)',
      'Monitoramento e evolução contínua (Mensal)',
      'Suporte técnico à infraestrutura lógica'
    ]
  }
];

export const TIMELINE_DATA: TimelinePhase[] = [
  { id: 1, name: 'Kickoff e Estratégia', days: 'Dias 1-5', startDay: 1, endDay: 5, description: 'Reunião inicial, mapa do site e coleta de insumos.' },
  { id: 2, name: 'Layout/UX + IDV', days: 'Dias 6-18', startDay: 6, endDay: 18, description: 'Wireframes, design visual do portal e templates.' },
  { id: 3, name: 'Desenv. Portal (Front)', days: 'Dias 19-60', startDay: 19, endDay: 60, description: 'Desenvolvimento contínuo em paralelo com demais demandas.' },
  { id: 4, name: 'E-commerce Assinaturas', days: 'Dias 39-60', startDay: 39, endDay: 60, description: 'Integração de pagamentos e área do assinante.' },
  { id: 5, name: 'Setup Agente IA', days: 'Dias 45-60', startDay: 45, endDay: 60, description: 'Treinamento da base, fluxos e widget.' },
  { id: 6, name: 'QA e Entrega', days: 'Dias 57-60', startDay: 57, endDay: 60, description: 'Testes finais, treinamento e publicação.' },
];

export const PAYMENT_METHODS = [
  {
    title: "À Vista (PIX)",
    description: "50% de entrada no aceite + 50% na entrega final.",
    icon: FileText
  },
  {
    title: "Cartão de Crédito",
    description: "Em até 10x sem juros. Possibilidade de usar 2 cartões.",
    icon: CreditCard
  }
];

export const RESPONSIBILITIES: TermItem[] = [
  {
    title: "Responsabilidades do Cliente",
    icon: Clock,
    items: [
      "Disponibilizar hospedagem, domínio e acessos técnicos.",
      "Enviar manual da marca e identidade visual.",
      "Definir precificação e regras dos planos de assinatura.",
      "Criar contas nos gateways de pagamento.",
      "Para IA: Cadastrar cartão para consumo de tokens."
    ]
  },
  {
    title: "Escopo e Limitações",
    icon: CheckCircle,
    items: [
      "Incluso até 3 rodadas de ajustes no layout.",
      "Conteúdo deve ser inserido pelo cliente (baseado nos modelos).",
      "Não inclui gestão de tráfego ou criação de artes recorrentes.",
      "Hospedagem não inclusa no valor do projeto."
    ]
  }
];