import {
  Scale,
  Brain,
  ShieldCheck,
  RefreshCw,
  Database,
  FileCheck,
  Cpu,
} from 'lucide-react';

const entities = [
  {
    name: 'MatVerse',
    icon: Scale,
    color: 'text-white',
    border: 'border-white/20',
    role: 'Constituicao',
    desc: 'Kernel constitucional e enquadramento institucional. O campo onde inteligencia, memoria, decisao e prova sao organizadas.',
  },
  {
    name: 'Atlas',
    icon: Scale,
    color: 'text-omega',
    border: 'border-omega/20',
    role: 'Legislacao',
    desc: 'Camada soberana que define leis, invariantes e fronteiras. Atlas nao executa, nao conversa, nao improvisa. Define o campo de legitimidade.',
  },
  {
    name: 'Cassandra',
    icon: Brain,
    color: 'text-accent',
    border: 'border-accent/20',
    role: 'Comunicacao',
    desc: 'Ponte semantica entre leis, estados e acoes. Traduz intencao humana em trajetoria operacional. Mediadora cognitiva do sistema.',
  },
  {
    name: 'Omega-Gate',
    icon: ShieldCheck,
    color: 'text-omega',
    border: 'border-omega/20',
    role: 'Admissibilidade',
    desc: 'Mecanismo constitucional que decide e aplica admissibilidade. Emite PASS, CONDICIONAL ou BLOCK. Fail-closed por design.',
  },
  {
    name: 'ACOA',
    icon: RefreshCw,
    color: 'text-psi',
    border: 'border-psi/20',
    role: 'Adaptacao',
    desc: 'Regime de governanca viva. Autopoiese, antifragilidade e evolucao sob invariantes. Como o organismo evolui sem se corromper.',
  },
  {
    name: 'MNB',
    icon: Database,
    color: 'text-accent',
    border: 'border-accent/20',
    role: 'Memoria',
    desc: 'Unidade minima de memoria verificavel. Transforma informacao em registro rastreavel com coerencia, custo, tempo e hash.',
  },
  {
    name: 'Ledger',
    icon: FileCheck,
    color: 'text-psi',
    border: 'border-psi/20',
    role: 'Prova',
    desc: 'Persistencia causal, replay e trilha de evidencia. Registra linhagem e garante auditoria. Prova que algo aconteceu.',
  },
  {
    name: 'Symbios',
    icon: Cpu,
    color: 'text-accent',
    border: 'border-accent/20',
    role: 'Operacao',
    desc: 'Superficie operacional e de produto. OS e o organismo. OSX e a experiencia do organismo. Runtime, execucao, interface.',
  },
];

export default function Entities() {
  return (
    <section id="entities" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mv-900/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-sm text-accent tracking-wider mb-3">ENTIDADES CANONICAS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Anatomia do Organismo
          </h2>
          <p className="text-lg text-mv-400 leading-relaxed">
            Oito entidades formam o corpo do MatVerse. Cada uma com funcao unica,
            responsabilidade clara e interface definida. Juntas, constituem uma
            infraestrutura de inteligencia verificavel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entities.map((entity) => {
            const Icon = entity.icon;
            return (
              <div
                key={entity.name}
                className={`glass rounded-xl p-6 card-hover border-l-2 ${entity.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-mv-800/60 flex items-center justify-center flex-shrink-0 ${entity.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-semibold text-lg ${entity.color}`}>{entity.name}</h3>
                      <span className="font-mono text-[10px] text-mv-500 uppercase tracking-widest">
                        {entity.role}
                      </span>
                    </div>
                    <p className="text-sm text-mv-400 leading-relaxed">{entity.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Canonical phrase */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm md:text-base text-mv-500 tracking-wide">
            <span className="text-omega">Atlas legisla.</span>{' '}
            <span className="text-accent">Cassandra comunica.</span>{' '}
            <span className="text-omega">Omega-Gate governa.</span>{' '}
            <span className="text-psi">ACOA adapta.</span>{' '}
            <span className="text-accent">MNB lembra.</span>{' '}
            <span className="text-psi">Ledger prova.</span>{' '}
            <span className="text-accent">Symbios opera.</span>{' '}
            <span className="text-mv-300">OSX torna visivel.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
