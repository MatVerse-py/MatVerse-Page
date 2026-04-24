export default function Footer() {
  return (
    <footer className="border-t border-mv-800/50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <span className="font-mono text-accent text-xs font-semibold">M</span>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">MatVerse</span>
          </div>

          <p className="font-mono text-xs text-mv-600 text-center">
            Atlas legisla &middot; Cassandra comunica &middot; Omega-Gate governa &middot; ACOA adapta &middot; MNB lembra &middot; Ledger prova &middot; Symbios opera
          </p>

          <p className="text-xs text-mv-600">
            &copy; {new Date().getFullYear()} MatVerse
          </p>
        </div>
      </div>
    </footer>
  );
}
