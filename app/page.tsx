'use client'
import Image from 'next/image'
import Slideshow from './Slideshow'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-8 w-full max-w-5xl">
        <Slideshow />
      </div>

      {/* The Wedding Section */}
      <section className="mb-12 w-full max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold text-center">Maria e Sebastião</h1>
        <h2 className="mb-4 text-3xl font-bold text-center">18 de Abril 2026</h2>


        {/* Texto Introdutório */}
        <p className="mb-8 text-center text-slate-700">
          Olá a todos!
          Este é o nosso  oficial do casamento — a central de operações onde encontram tudo o que precisam para o grande dia.
          Prometemos que não há testes surpresa nem dress code secreto (só muita festa, gargalhadas e talvez uns passos de dança duvidosos).
        </p>

        {/* Our Story Section */}
        <section className="mb-12 w-full max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">A Nossa História</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Conhecemos */}
            <div className="flex flex-col items-center text-center flex-1 relative">
              <div className="w-24 h-24 mb-2 relative rounded-full overflow-hidden bg-white shadow-md border-2 border-[#F6E7C1]">
                <Image
                  src="/meet.png"
                  alt="Quando nos conhecemos"
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center', scale: '1' }}
                />
              </div>
              <div className="text-xl font-semibold mb-1">Conhecemo-nos em...</div>
              <div className="text-lg text-slate-700">Julho 2022</div>
            </div>
            {/* Namoro */}
            <div className="flex flex-col items-center text-center flex-1 relative">
              <div className="w-24 h-24 mb-2 relative rounded-full overflow-hidden bg-white shadow-md border-2 border-[#F6E7C1]">
                <Image
                  src="/date.jpeg"
                  alt="Começamos a namorar"
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'bottom', scale: '2' }}
                />
              </div>
              <div className="text-xl font-semibold mb-1">Começamos a namorar em...</div>
              <div className="text-lg text-slate-700">Agosto 2022</div>
            </div>
            {/* Pedido */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-24 h-24 mb-2 relative rounded-full overflow-hidden bg-white shadow-md">
                <Image
                  src="/propose.jpeg"
                  alt="Pedido de casamento"
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'right', scale: '1.2' }}
                />
              </div>
              <div className="text-xl font-semibold mb-1">O SIM em...</div>
              <div className="text-lg text-slate-700">Junho 2025</div>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Ceremony Card */}
          <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
            <div className="w-full h-56 md:h-64 relative">
              <Image
                src="/igreja.jpg"
                alt="Igreja de São Quintino"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="w-full flex flex-col justify-center p-6 gap-2">
              <h3 className="text-2xl font-bold mb-1">Cerimónia</h3>
              <div className="text-lg mb-1">18 de Abril de 2026, 15:00h</div>
              <div className="text-lg font-semibold mb-2">Igreja de São Quintino</div>
              <a
                href="https://maps.app.goo.gl/NdTXTuaLWozQAL5NA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-teal-400 text-white font-bold shadow hover:bg-teal-500 transition-colors text-base"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
          {/* Reception Card */}
          <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
            <div className="w-full h-56 md:h-64 relative">
              <Image
                src="/quinta.jpg"
                alt="Quinta Nova do Hespanhol"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="w-full flex flex-col justify-center p-6 gap-2">
              <h3 className="text-2xl font-bold mb-1">Recepção</h3>
              <div className="text-lg mb-1">18 de Abril de 2026, 17:00h</div>
              <div className="text-lg font-semibold mb-2">Quinta Nova do Hespanhol</div>
              <a
                href="https://maps.app.goo.gl/NF5n9PTDRVYd7aN29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-teal-400 text-white font-bold shadow hover:bg-teal-500 transition-colors text-base"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold italic">Timeline</h2>
        <ul className="list-inside list-disc text-slate-700">
          <li>15:00 - Cerimónia na Igreja de São Quintino</li>
          <li>16:30 - Cocktail na Quinta Nova do Hespanhol</li>
          <li>18:00 - Jantar e Festas</li>
          <li>22:00 - Corte do Bolo e Brinde</li>
          <li>23:00 - Festa Continua!</li>
        </ul>
      </section>

      {/* Where to stay */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Onde Ficar</h2>
        <p className="text-slate-700">
          Recomendamos os seguintes hotéis próximos:
        </p>
        <ul className="list-inside list-disc text-slate-700">
          <li>Hotel Central - Código: CASAMENTO2026</li>
          <li>Hotel Lisboa</li>
          <li>Airbnb na área de Lisboa</li>
        </ul>
      </section>

      {/* Attaire */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Traje</h2>
        <p className="text-slate-700">
          O traje para o casamento é formal. Sugerimos:
        </p>
        <ul className="list-inside list-disc text-slate-700">
          <li>Homens: Fato escuro, camisa, gravata e sapatos formais.</li>
          <li>Mulheres: Vestido de cocktail ou vestido longo.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Perguntas Frequentes</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Há estacionamento disponível?</h3>
          <p className="text-slate-700">
            Sim, há estacionamento gratuito na Quinta Nova do Hespanhol.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">O que fazer em caso de alergias alimentares?</h3>
          <p className="text-slate-700">
            Por favor, indique quaisquer restrições alimentares no formulário de RSVP.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Há transporte entre a igreja e a quinta?</h3>
          <p className="text-slate-700">
            Sim, haverá transporte disponível para os convidados entre a igreja e a quinta.
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Confirmação de Presença (RSVP)</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nome(s)" className="rounded border p-2" required />
          <select className="rounded border p-2" required>
            <option value="">Vai comparecer?</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <input type="text" placeholder="Restrições alimentares" className="rounded border p-2" />
          <input
            type="text"
            placeholder="Pedido de música (opcional)"
            className="rounded border p-2"
          />
          <button type="submit" className="rounded bg-pink-600 p-2 font-bold text-white">
            Enviar
          </button>
        </form>
      </section>

      {/* Registry / Gifts Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Presentes</h2>
        <p>
          <strong>Lista de presentes:</strong>{' '}
          <a href="#" className="text-pink-600 underline">
            Ver lista
          </a>
        </p>
        <p>
          <strong>Fundo lua de mel:</strong>{' '}
          <a href="#" className="text-pink-600 underline">
            Contribuir
          </a>
        </p>
        <p>
          <strong>Nota:</strong> A vossa presença é o melhor presente!
        </p>
      </section>

      {/* Gallery Section (optional) */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Galeria</h2>
        <p className="mt-4">Após o casamento, partilhe as suas fotos connosco!</p>
      </section>
    </main>
  )
}
