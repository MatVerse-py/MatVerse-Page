import { ArrowRight } from 'lucide-react';

const flowSteps = [
  { id: 'input', label: 'Input', desc: 'Informacao bruta', color: 'text-mv-300' },
  { id: 'atlas', label: 'Atlas', desc: 'Define leis e invariantes', color: 'text-omega' },
  { id: 'cassandra', label: 'Cassandra', desc: 'Interpreta e roteia', color: 'text-accent' },
  { id: 'omega', label: 'Omega-Gate', desc: 'Decide admissibilidade', color: 'text-omega' },
  { id: 'bodies', label: 'Body-D/A/X', desc: 'Decisao, administracao, execucao', color: 'text-psi' },
  { id: 'mnb', label: 'MNB', desc: 'Memoria verificavel', color: 'text-accent' },
  { id: 'ledger', label: 'Ledger', desc: 'Prova causal', color: 'text-psi' },
  { id: 'evidence', label: 'Evidencia', desc: 'Resultado auditavel', color: 'text-white' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-accent tracking-wider mb-3">ARQUITETURA</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Runtime Constitucional
          </h2>
          <p className="text-lg text-mv-400 leading-relaxed">
            O MatVerse e organizado como um runtime constitucional. A informacao entra como
            input bruto. Atlas define as leis. Cassandra interpreta e estrutura. O sistema
            converte esse input em memoria verificavel. Omega-Gate avalia admissibilidade.
            Body-D, Body-A e Body-X separam decisao, administracao e execucao. Ledger
            preserva a trilha causal.
          </p>
        </div>

        {/* Flow visualization */}
        <div className="glass rounded-2xl p-8 md:p-10">
          <p className="font-mono text-xs text-mv-500 mb-8 tracking-wider">FLUXO CONSTITUCIONAL</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {flowSteps.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center gap-2 min-w-[80px] md:min-w-[100px]">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl glass flex items-center justify-center ${step.color}`}>
                    <span className="font-mono text-xs font-semibold">{step.label}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-mv-500 text-center leading-tight">
                    {step.desc}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-mv-600 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Triad highlight */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-6 border-l-2 border-l-omega glow-omega">
            <p className="font-mono text-sm text-omega mb-1">Atlas</p>
            <p className="text-sm text-mv-300">Legisla. Define leis, invariantes e fronteiras do organismo.</p>
          </div>
          <div className="glass rounded-xl p-6 border-l-2 border-l-accent glow-accent">
            <p className="font-mono text-sm text-accent mb-1">Cassandra</p>
            <p className="text-sm text-mv-300">Comunica. Traduz estado em trajetoria operacional compreensivel.</p>
          </div>
          <div className="glass rounded-xl p-6 border-l-2 border-l-omega glow-omega">
            <p className="font-mono text-sm text-omega mb-1">Omega-Gate</p>
            <p className="text-sm text-mv-300">Governa. Decide se a trajetoria e admissivel sob as leis de Atlas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
