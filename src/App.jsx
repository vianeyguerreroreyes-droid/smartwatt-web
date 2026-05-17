export default function App() {
  return (
    <div className="bg-[#0B1F3B] text-white min-h-screen overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1F3B]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SmartWatt Logo"
            className="h-10 md:h-12 w-auto"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-white">
              SmartWatt
            </h1>
            <p className="text-xs text-[#A7F3D0] tracking-widest">
              DIAGNOSTICS
            </p>
          </div>
        </div>

        <div className="flex gap-4">
  <a
    href="#informacion"
    className="bg-[#22C55E] hover:bg-[#16a34a] transition px-4 md:px-6 py-2 rounded-xl text-sm md:text-base font-semibold shadow-lg"
  >
    Conocer más
  </a>

  <a
    href="#descarga"
    className="border border-white/20 hover:border-[#22C55E] hover:bg-white/5 transition px-4 md:px-6 py-2 rounded-xl text-sm md:text-base font-semibold"
  >
    Descargar
  </a>
</div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1E5AA8]/20 border border-[#1E5AA8] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
              <span className="text-sm text-[#A7F3D0]">
                Inteligencia energética industrial
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Optimiza el
              <span className="text-[#22C55E]"> consumo energético </span>
              de tu industria
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              SmartWatt Diagnostics monitorea, analiza y detecta anomalías
              energéticas en tiempo real para ayudarte a reducir costos,
              prevenir fallas eléctricas y mejorar la eficiencia industrial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#informacion"
                className="bg-[#22C55E] hover:bg-[#16a34a] transition px-8 py-4 rounded-2xl font-bold shadow-xl text-center"
              >
                Ver Plataforma
              </a>

              <a
                href="#beneficios"
                className="border border-white/20 hover:border-[#22C55E] hover:bg-white/5 transition px-8 py-4 rounded-2xl font-semibold text-center"
              >
                Conocer Más
              </a>
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#22C55E]/20 blur-3xl rounded-full"></div>

            <div className="relative bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-400">Consumo Total</p>
                  <h2 className="text-3xl font-bold">1,284 kWh</h2>
                </div>

                <div className="bg-[#22C55E]/20 text-[#22C55E] px-3 py-1 rounded-full text-sm font-semibold">
                  +12% eficiencia
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1F2937] p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm">Área Crítica</p>
                  <h3 className="text-xl font-bold mt-2">Sector B</h3>
                  <p className="text-[#EF4444] text-sm mt-1">
                    Sobrecarga detectada
                  </p>
                </div>

                <div className="bg-[#1F2937] p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm">Estado General</p>
                  <h3 className="text-xl font-bold mt-2">Óptimo</h3>
                  <p className="text-[#22C55E] text-sm mt-1">
                    Operación estable
                  </p>
                </div>
              </div>

              <div className="bg-[#1F2937] p-5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Análisis Energético</h3>
                  <span className="text-[#FACC15] text-sm">Tiempo real</span>
                </div>

                <div className="flex items-end gap-3 h-40">
                  <div className="bg-[#1E5AA8] rounded-t-xl w-full h-16"></div>
                  <div className="bg-[#22C55E] rounded-t-xl w-full h-24"></div>
                  <div className="bg-[#FACC15] rounded-t-xl w-full h-32"></div>
                  <div className="bg-[#EF4444] rounded-t-xl w-full h-20"></div>
                  <div className="bg-[#22C55E] rounded-t-xl w-full h-28"></div>
                  <div className="bg-[#1E5AA8] rounded-t-xl w-full h-18"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section
        id="informacion"
        className="py-24 px-6 md:px-16 bg-[#111827]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Tecnología diseñada para la industria moderna
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Nuestra plataforma utiliza monitoreo inteligente, análisis de
              datos y diagnósticos automatizados para detectar anomalías
              eléctricas antes de que se conviertan en problemas críticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl">
              <div className="bg-[#1E5AA8]/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">Monitoreo Inteligente</h3>

              <p className="text-gray-400 leading-relaxed">
                Visualiza el consumo energético en tiempo real y detecta patrones
                anormales automáticamente.
              </p>
            </div>

            <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl">
              <div className="bg-[#22C55E]/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📊
              </div>

              <h3 className="text-2xl font-bold mb-4">Optimización</h3>

              <p className="text-gray-400 leading-relaxed">
                Reduce desperdicios energéticos y mejora la eficiencia operativa
                mediante análisis avanzados.
              </p>
            </div>

            <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl">
              <div className="bg-[#FACC15]/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🚨
              </div>

              <h3 className="text-2xl font-bold mb-4">Alertas Predictivas</h3>

              <p className="text-gray-400 leading-relaxed">
                Recibe alertas antes de fallas críticas para evitar sobrecargas,
                pérdidas y tiempos muertos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Beneficios reales para tu empresa
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Ahorro energético
                  </h3>
                  <p className="text-gray-400">
                    Disminuye costos operativos identificando áreas de consumo
                    excesivo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Prevención de fallas
                  </h3>
                  <p className="text-gray-400">
                    Detecta anomalías eléctricas antes de que provoquen daños.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Reportes automáticos
                  </h3>
                  <p className="text-gray-400">
                    Genera análisis visuales para mejorar la toma de decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E5AA8] to-[#22C55E] p-[1px] rounded-3xl shadow-2xl">
            <div className="bg-[#111827] rounded-3xl p-10 h-full">
              <h3 className="text-3xl font-bold mb-6">
                SmartWatt Diagnostics
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Una solución tecnológica diseñada para industrias modernas que
                buscan eficiencia, estabilidad y control energético.
              </p>

              <a
                href="#desarrolladores"
                className="inline-block bg-[#22C55E] hover:bg-[#16a34a] transition px-8 py-4 rounded-2xl font-bold shadow-lg"
              >
                Desarrolladores
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section
        id="desarrolladores"
        className="py-24 px-6 md:px-16 bg-[#111827]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Equipo de Desarrollo
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Profesionales responsables del diseño, desarrollo y optimización
              de SmartWatt Diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#1E5AA8]/20 border border-[#1E5AA8]/40 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-[#A7F3D0]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Vianey Guerrero Reyes
              </h3>

              <div className="space-y-3 text-gray-300 text-lg">
                <p>Ingeniero de Requisitos</p>
                <p>Programador</p>
                <p>Ingeniero de pruebas</p>
              </div>
            </div>

            <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-[#A7F3D0]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Diego Martinez Morales
              </h3>

              <div className="space-y-3 text-gray-300 text-lg">
                <p>Diseñador de software</p>
                <p>Arquitecto de software</p>
                <p>Responsable de desarrollo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Descarga */}
<section
  id="descarga"
  className="py-24 px-6 md:px-16 bg-[#111827]"
>
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Descargar SmartWatt Diagnostics
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Descarga el sistema completo en formato ZIP e instala la
        plataforma de monitoreo energético en tu equipo.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Panel descarga */}
      <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-10 shadow-2xl">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/20 flex items-center justify-center text-3xl">
            📦
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              SMARTWATT.zip
            </h3>

            <p className="text-gray-400">
              Sistema completo listo para ejecutar
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-8">
          El paquete incluye el sistema SmartWatt Diagnostics,
          base de datos, backend, frontend y archivo ejecutable
          preparado para funcionar automáticamente.
        </p>

        <a
          href="/SMARTWATT.zip"
          download
          className="inline-block bg-[#22C55E] hover:bg-[#16a34a] transition px-8 py-4 rounded-2xl font-bold shadow-lg"
        >
          Descargar Sistema
        </a>
      </div>

      {/* Instrucciones */}
      <div className="bg-[#0B1F3B] border border-white/10 rounded-3xl p-10 shadow-2xl">

        <h3 className="text-3xl font-bold mb-8">
          Instrucciones de instalación
        </h3>

        <div className="space-y-6 text-gray-300">

          <div className="flex gap-4">
            <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
              1
            </div>

            <p>
              Descarga el archivo SMARTWATT.zip desde el botón de descarga.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
              2
            </div>

            <p>
              Extrae el contenido del archivo ZIP en cualquier carpeta.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
              3
            </div>

            <p>
              Abre la carpeta extraída y ejecuta el archivo .exe del sistema.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#22C55E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
              4
            </div>

            <p>
              El sistema abrirá automáticamente la plataforma en el navegador.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-16 text-center text-gray-400">
        <p>
          © 2026 SmartWatt Diagnostics — Tecnología para eficiencia energética
          industrial.
        </p>
      </footer>
    </div>
  )
}
