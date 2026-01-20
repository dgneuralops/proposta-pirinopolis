import React, { useState } from 'react';
import { Header } from './components/Header';
import { ModuleCard } from './components/ModuleCard';
import { TimelineDashboard } from './components/TimelineDashboard';
import { MODULES, PAYMENT_METHODS, PROPOSAL_INFO, RESPONSIBILITIES } from './constants';
import { ArrowRight, Download, CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedModules, setSelectedModules] = useState<string[]>(['A']);
  const [isProposalVisible, setIsProposalVisible] = useState(false);

  const toggleModule = (id: string) => {
    setSelectedModules(prev =>
      prev.includes(id)
        ? prev.filter(m => m !== id)
        : [...prev, id]
    );
  };

  const handleViewProposal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isProposalVisible) {
      setIsProposalVisible(true);
      // Allow render cycle to complete before scrolling
      setTimeout(() => {
        const modulesSection = document.getElementById('modules');
        if (modulesSection) {
          modulesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const modulesSection = document.getElementById('modules');
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Calculate Totals
  const totalSetup = MODULES
    .filter(m => selectedModules.includes(m.id))
    .reduce((acc, curr) => acc + curr.price, 0);

  const totalMonthly = MODULES
    .filter(m => selectedModules.includes(m.id) && m.monthly)
    .reduce((acc, curr) => acc + (curr.monthly || 0), 0);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-lime selection:text-brand-black">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 border-b border-white/10 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
            PROPOSTA COMERCIAL {PROPOSAL_INFO.version}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Evolução Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              {PROPOSAL_INFO.client}
            </span>
          </h1>

          <p className="text-xl text-brand-textGray max-w-2xl leading-relaxed mb-10">
            Uma solução completa unindo portal de conteúdo, monetização via assinaturas e
            inteligência artificial para automação de atendimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleViewProposal}
              className="inline-flex items-center justify-center gap-2 bg-brand-lime text-brand-black px-8 py-4 rounded-xl font-bold hover:bg-brand-limeHover transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] cursor-pointer"
            >
              Visualizar proposta <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 text-sm text-brand-textGray">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-lime" /> Validade: {PROPOSAL_INFO.validity}
              </span>
            </div>
          </div>
        </div>
      </section>

      {isProposalVisible && (
        <>
          {/* Modules Section */}
          <section id="modules" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Escopo Modular</h2>
                <p className="text-brand-textGray">Selecione os módulos abaixo para simular o investimento ideal para o seu momento.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MODULES.map(module => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isSelected={selectedModules.includes(module.id)}
                    onToggle={toggleModule}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="py-20 px-6 bg-brand-dark border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <TimelineDashboard />
            </div>
          </section>

          {/* Investment & Payment */}
          <section id="investment" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left: Calculation Summary */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Resumo do Investimento</h2>

                  <div className="bg-brand-gray rounded-2xl p-8 border border-white/10 shadow-2xl">
                    <div className="space-y-4 mb-8">
                      {MODULES.filter(m => selectedModules.includes(m.id)).map(module => (
                        <div key={module.id} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0">
                          <div>
                            <div className="text-sm text-white font-medium">{module.title}</div>
                            {module.monthly && <div className="text-xs text-brand-lime">+ {formatCurrency(module.monthly)}/mês</div>}
                          </div>
                          <div className="text-white font-mono">{formatCurrency(module.price)}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-brand-textGray">Total Setup (Único)</span>
                        <span className="text-4xl font-bold text-white tracking-tight">{formatCurrency(totalSetup)}</span>
                      </div>
                      {totalMonthly > 0 && (
                        <div className="flex justify-between items-end">
                          <span className="text-brand-textGray">Recorrência Mensal</span>
                          <span className="text-xl font-bold text-brand-lime">{formatCurrency(totalMonthly)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PAYMENT_METHODS.map((method, idx) => (
                      <div key={idx} className="p-4 bg-brand-dark rounded-xl border border-white/5">
                        <method.icon className="text-brand-lime mb-3" size={24} />
                        <h4 className="font-bold text-white mb-1">{method.title}</h4>
                        <p className="text-xs text-brand-textGray">{method.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Terms & Responsibilities */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Importante saber</h3>
                    <div className="space-y-6">
                      {RESPONSIBILITIES.map((section, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 mb-3 text-brand-lime">
                            <section.icon size={20} />
                            <h4 className="font-bold text-white">{section.title}</h4>
                          </div>
                          <ul className="space-y-2 pl-2 border-l-2 border-white/10">
                            {section.items.map((item, i) => (
                              <li key={i} className="text-sm text-brand-textGray pl-4">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-lime/10 border border-brand-lime/20 p-6 rounded-xl">
                    <div className="flex gap-3">
                      <AlertTriangle className="text-brand-lime shrink-0" />
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">Tokens de IA</h4>
                        <p className="text-xs text-brand-textGray leading-relaxed">
                          O consumo de tokens da Inteligência Artificial é variável e cobrado diretamente no cartão cadastrado, separado da mensalidade de gestão.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Footer / CTA */}
          <footer className="bg-brand-dark py-12 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-2">Neural<span className="text-brand-lime">Ops</span></div>
                <p className="text-sm text-brand-textGray">Infraestrutura de crescimento com IA</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}