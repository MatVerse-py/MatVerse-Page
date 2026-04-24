import {
  ClipboardCheck,
  Search,
  AlertTriangle,
  ShieldCheck,
  Fingerprint,
  Rocket,
  FlaskConical,
  Database,
  Upload,
  Zap,
} from 'lucide-react';

const agents = [
  { name: 'Strategic Auditor', icon: ClipboardCheck, desc: 'Audita sistemas, decisoes e afirmacoes.' },
  { name: 'Truth Engine', icon: Search, desc: 'Reconstroi fatos a partir de evidencias.' },
  { name: 'Crisis Operator', icon: AlertTriangle, desc: 'Estabiliza arquiteturas em falha.' },
  { name: 'Governance Agent', icon: ShieldCheck, desc: 'Aplica decisoes do Omega-Gate.' },
  { name: 'Forensic Agent', icon: Fingerprint, desc: 'Estrutura evidencias e cadeia de custodia.' },
  { name: 'Founder Agent', icon: Rocket, desc: 'Transforma estrategia em execucao.' },
  { name: 'Research Agent', icon: FlaskConical, desc: 'Organiza corpus cientifico e padroes de fronteira.' },
  { name: 'Memory Agent', icon: Database, desc: 'Cria e valida registros MNB.' },
  { name: 'Deployment Agent', icon: Upload, desc: 'Verifica release, build e prontidao operacional.' },
  { name: 'Pragma Gate', icon: Zap, desc: 'Converte analise no proximo movimento executavel.' },
];

export default function SkillAgents() {
  return (
    <section id="agents" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mv-900/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-accent tracking-wider mb-3">SKILLAGENTS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Extensoes Operacionais
          </h2>
          <p className="text-lg text-mv-400 leading-relaxed">
            Dez SkillAgents operam como extensoes especializadas de Cassandra.
            Cada um executa uma capacidade especifica sob governanca constitucional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className="glass rounded-xl p-5 card-hover group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-mv-800/60 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-1">{agent.name}</h3>
                    <p className="text-xs text-mv-500 leading-relaxed">{agent.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-sm text-mv-500">
            <span className="text-accent">Cassandra roteia.</span>{' '}
            <span className="text-omega">Omega-Gate governa.</span>{' '}
            <span className="text-psi">Ledger registra.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
