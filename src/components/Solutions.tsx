import { Network, AlertTriangle, Search, Lock, UserCheck } from 'lucide-react';

const solutions = [
  {
    name: 'Cassandra Colony OS',
    icon: Network,
    color: 'text-accent',
    desc: 'Governe seu ecossistema de IA, nao apenas converse com ele.',
    detail: 'Orquestracao cognitiva soberana para multi-agentes com governanca constitucional e memoria verificavel.',
  },
  {
    name: 'Symbios Crisis Operator',
    icon: AlertTriangle,
    color: 'text-omega',
    desc: 'Resposta emergencial de arquitetura para sistemas complexos.',
    detail: 'Estabilizacao de arquiteturas em falha com diagnostico, priorizacao e execucao governada.',
  },
  {
    name: 'Symbios Truth Engine',
    icon: Search,
    color: 'text-psi',
    desc: 'Envie evidencias. Receba verdade utilizavel.',
    detail: 'Reconstrucao de fatos a partir de evidencias com cadeia de custodia, hash e trilha auditavel.',
  },
  {
    name: 'Governance Layer',
    icon: Lock,
    color: 'text-omega',
    desc: 'Controle constitucional para infraestrutura de IA.',
    detail: 'Aplicacao de invariantes, gates de admissibilidade e enforcement fail-closed para agentes e automacoes.',
  },
  {
    name: 'Founder Copilot',
    icon: UserCheck,
    color: 'text-accent',
    desc: 'Seu parceiro soberano de IA para construir e escalar.',
    detail: 'Transforma estrategia de fundador em execucao operacional com decisao governada e evidencia persistente.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-accent tracking-wider mb-3">SOLUCOES DE MERCADO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Cinco Portas de Entrada
          </h2>
          <p className="text-lg text-mv-400 leading-relaxed">
            O MatVerse nao compete com chatbots. Ele fornece infraestrutura para
            inteligencia que precisa ser governada, lembrada e provada. Cada solucao
            e uma aplicacao direta da arquitetura constitucional.
          </p>
        </div>

        <div className="space-y-4">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.name}
                className="glass rounded-xl p-6 md:p-8 card-hover group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className={`w-12 h-12 rounded-xl bg-mv-800/60 flex items-center justify-center flex-shrink-0 ${sol.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">{sol.name}</h3>
                    <p className="text-mv-300 text-sm mb-2">{sol.desc}</p>
                    <p className="text-mv-500 text-sm leading-relaxed">{sol.detail}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="font-mono text-xs text-mv-600 tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
