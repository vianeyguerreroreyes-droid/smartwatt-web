export default function SmartWattLanding() {
  return (
    <div className="min-h-screen bg-[#0B1F3B] text-white overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1E5AA8]/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-10 py-6 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <img
            src="/mnt/data/LOGO SIN FONDO.png"
            alt="SmartWatt Diagnostics"
            className="w-16 h-16 object-contain drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Smart<span className="text-[#22C55E]">Watt</span>
            </h1>
            <p className="text-sm text-gray-300 tracking-[0.3em] uppercase">
              Diagnostics
            </p>
          </div>
        </div>

        <button className="bg-[#22C55E] hover:bg-[#16a34a] transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/20">
          Solicitar Demo
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#1E5AA8]/20 border border-[#1E5AA8]/40 px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
            ⚡ Inteligencia energética industrial
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Optimiza el consumo energético de tu industria
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            SmartWatt Diagnostics monitorea, analiza y detecta anomalías energéticas en tiempo real para ayudarte a reducir costos operativos, prevenir fallas eléctricas y mejorar la eficiencia industrial.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="bg-[#22C55E] hover:bg-[#16a34a] transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20">
              Ver Plataforma
            </button>

            <button className="border border-white/20 hover:border-[#FACC15] hover:bg-[#FACC15]/10 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm">
              Conocer Más
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-4xl font-black text-[#22C55E]">35%</h3>
              <p className="text-gray-300 mt-2">Reducción de desperdicio energético</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-4xl font-black text-[#FACC15]">24/7</h3>
              <p className="text-gray-300 mt-2">Monitoreo inteligente en tiempo real</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-4xl font-black text-[#EF4444]">+90%</h3>
              <p className="text-gray-300 mt-2">Detección preventiva de fallas</p>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          <div className="absolute -inset-5 bg-gradient-to-r from-[#22C55E]/20 to-[#1E5AA8]/20 blur-3xl rounded-[40px]"></div>

          <div className="relative bg-[#08162b]/90 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-400 text-sm">Consumo Total</p>
                <h3 className="text-4xl font-black">1,284 kWh</h3>
              </div>

              <div className="bg-[#22C55E]/20 text-[#22C55E] px-4 py-2 rounded-xl font-semibold border border-[#22C55E]/30">
                +12% eficiencia
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-400">Área Crítica</p>
                  <span className="text-[#EF4444] text-xl">●</span>
                </div>
                <h4 className="text-2xl font-bold">Sector B</h4>
                <p className="text-[#EF4444] mt-2">Sobrecarga detectada</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-400">Estado General</p>
                  <span className="text-[#22C55E] text-xl">●</span>
                </div>
                <h4 className="text-2xl font-bold">Óptimo</h4>
                <p className="text-[#22C55E] mt-2">Operación estable</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
              <div className="flex justify-between mb-6">
                <h4 className="text-xl font-bold">Análisis Energético</h4>
                <span className="text-[#FACC15]">Tiempo real</span>
              </div>

              <div className="flex items-end gap-4 h-48">
                <div className="bg-[#1E5AA8] w-full rounded-t-xl h-[35%]"></div>
                <div className="bg-[#22C55E] w-full rounded-t-xl h-[60%]"></div>
                <div className="bg-[#FACC15] w-full rounded-t-xl h-[80%]"></div>
                <div className="bg-[#EF4444] w-full rounded-t-xl h-[55%]"></div>
                <div className="bg-[#22C55E] w-full rounded-t-xl h-[70%]"></div>
                <div className="bg-[#1E5AA8] w-full rounded-t-xl h-[50%]"></div>
              </div>
            </div>

            <div className="bg-[#FACC15]/10 border border-[#FACC15]/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⚠️</span>
                <h4 className="font-bold text-[#FACC15]">Diagnóstico Inteligente</h4>
              </div>
              <p className="text-gray-300">
                Se detectó un comportamiento energético anormal en el área de producción. Se recomienda revisar distribución de carga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-10 pb-24">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black mb-6">
            Tecnología inteligente para industrias modernas
          </h3>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Una plataforma diseñada para automatizar el monitoreo energético, reducir riesgos eléctricos y optimizar la operación industrial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">⚡</div>
            <h4 className="text-2xl font-bold mb-4">Monitoreo Inteligente</h4>
            <p className="text-gray-300 leading-relaxed">
              Supervisa consumos energéticos, comportamiento eléctrico y rendimiento operativo en tiempo real.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">📊</div>
            <h4 className="text-2xl font-bold mb-4">Análisis Predictivo</h4>
            <p className="text-gray-300 leading-relaxed">
              Detecta anomalías, sobrecargas y patrones ineficientes antes de que generen fallas críticas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">🛡️</div>
            <h4 className="text-2xl font-bold mb-4">Diagnósticos Preventivos</h4>
            <p className="text-gray-300 leading-relaxed">
              Genera alertas automáticas y recomendaciones técnicas para mejorar la eficiencia energética.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-10 pb-24">
        <div className="bg-gradient-to-r from-[#1E5AA8]/30 to-[#22C55E]/20 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">
          <h3 className="text-5xl font-black mb-6">
            Lleva el control energético al siguiente nivel
          </h3>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            SmartWatt Diagnostics transforma datos eléctricos en decisiones inteligentes para reducir costos, prevenir riesgos y optimizar la productividad industrial.
          </p>

          <button className="bg-[#22C55E] hover:bg-[#16a34a] transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-green-500/20">
            Solicitar Presentación
          </button>
        </div>
      </section>
    </div>
  );
}
