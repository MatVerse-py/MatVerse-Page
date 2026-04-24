import { Shield, Cpu, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,212,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Governance badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-omega animate-pulse-slow" />
          <span className="font-mono text-xs text-omega tracking-wider">
            OMEGA 0.833 &middot; CONDICIONAL
          </span>
          <span className="text-mv-400 text-xs">|</span>
          <span className="font-mono text-xs text-psi tracking-wider">
            PSI 0.91
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
          <span className="text-white">Mat</span>
          <span className="text-gradient-accent">Verse</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-mv-200 font-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Infraestrutura de Inteligencia Verificavel
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-mv-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Governe sistemas complexos com inteligencia verificavel. O MatVerse transforma
          informacao, decisoes e caos operacional em execucao governada, memoria causal
          e evidencia auditavel.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#architecture"
            className="px-8 py-3.5 rounded-xl bg-accent text-mv-950 font-semibold hover:bg-accent-light transition-all glow-accent"
          >
            Explorar Arquitetura
          </a>
          <a
            href="#solutions"
            className="px-8 py-3.5 rounded-xl glass text-mv-200 font-medium hover:border-accent/40 transition-all"
          >
            Ver Solucoes
          </a>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-xl p-5 card-hover">
            <Shield className="w-5 h-5 text-omega mb-2" />
            <p className="font-mono text-sm text-omega">CONDICIONAL</p>
            <p className="text-xs text-mv-400 mt-1">Gate de evidencia ativo</p>
          </div>
          <div className="glass rounded-xl p-5 card-hover">
            <Cpu className="w-5 h-5 text-accent mb-2" />
            <p className="font-mono text-sm text-accent">5 Solucoes</p>
            <p className="text-xs text-mv-400 mt-1">10 SkillAgents ativos</p>
          </div>
          <div className="glass rounded-xl p-5 card-hover">
            <BookOpen className="w-5 h-5 text-psi mb-2" />
            <p className="font-mono text-sm text-psi">8 Entidades</p>
            <p className="text-xs text-mv-400 mt-1">Coerencia 0.91</p>
          </div>
        </div>
      </div>
    </section>
  );
}
