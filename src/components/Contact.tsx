import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ email, name: name || null, organization: org || null });

    if (dbError) {
      if (dbError.code === '23505') {
        setError('Este email ja esta registrado.');
      } else {
        setError('Erro ao registrar. Tente novamente.');
      }
      setLoading(false);
      return;
    }

    setDone(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="font-mono text-sm text-accent tracking-wider mb-3">CONTATO</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Acesse o MatVerse
            </h2>
            <p className="text-lg text-mv-400 leading-relaxed mb-8">
              Nao e um chatbot. E uma infraestrutura de inteligencia verificavel.
              Se voce precisa governar decisoes, preservar evidencia ou operar
              sistemas complexos com coerencia, o MatVerse e para voce.
            </p>

            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <p className="font-mono text-xs text-mv-500 mb-1">POSICAO DE MERCADO</p>
                <p className="text-sm text-mv-300">
                  AI Governance &middot; Decision Intelligence &middot; LegalTech &middot;
                  Agent Infrastructure &middot; Enterprise Architecture
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="font-mono text-xs text-mv-500 mb-1">DIFERENCIAL</p>
                <p className="text-sm text-mv-300">
                  IA + governanca + memoria verificavel + prova causal + execucao operacional
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-8">
            {done ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Registrado</h3>
                <p className="text-mv-400 text-sm">
                  Voce sera notificado quando o acesso estiver disponivel.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-mv-400 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-mv-800/60 border border-mv-700/50 text-white placeholder-mv-600 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-mv-400 mb-1.5">Nome</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-mv-800/60 border border-mv-700/50 text-white placeholder-mv-600 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm text-mv-400 mb-1.5">Organizacao</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-mv-800/60 border border-mv-700/50 text-white placeholder-mv-600 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                    placeholder="Empresa ou projeto"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-mv-950 font-semibold hover:bg-accent-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-mv-950/30 border-t-mv-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar Acesso
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
