'use client'
import Image from 'next/image'
import Slideshow from './Slideshow'
import { useState } from 'react'


//Todo: Fotografias a cores
//Todo: Imagens da nossa história iguais (chatgpt)
//Todo: Imagem lateral mais estreita para mobile


export default function Home() {

  const [formStatus, setFormStatus] = useState< 'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showPlusOneName, setShowPlusOneName] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name'),
      attending: data.get('attending'),
      plusOne: data.get('plusOne'),
      plusOneName: data.get('plusOneName') || '',
      dietary: data.get('dietary'),
    }

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar resposta');
      }

      setFormStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background side images */}
      <div className="fixed top-0 left-0 w-1/10 md:w-1/6 lg:w-1/5 h-full bg-white">
        <Image
          src="/IMG_1908-Photoroom.png"
          alt="Left Background"
          fill
          className="object-cover"
          priority
          style={{ objectPosition: "left",  }}
        />
      </div>

      <div className="fixed top-0 right-0 w-1/10 md:w-1/6 lg:w-1/5 h-full bg-white">
        <Image
          src="/IMG_1908-Photoroom.png"
          alt="Right Background"
          fill
          className="object-cover"
          priority
          style={{ objectPosition: "right",  }}
        />
      </div>
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-8 w-full max-w-5xl flex justify-center">
        <Slideshow />
      </div>

      {/* The Wedding Section */}
      <section className="my-8 w-full max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold text-center">Maria e Sebastião</h1>
        <h2 className="mb-4 text-3xl font-bold text-center">18 de Abril 2026</h2>


        {/* Texto Introdutório */}
        <div className={"flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-10 mb-10 px-4 md:w-3/4 md:px-8 "}>
        <p className="mb-8 text-center text-slate-700">
          Olá a todos!
          Este é o nosso  oficial do casamento — a central de operações onde encontram tudo o que precisam para o grande dia.
          Prometemos que não há testes surpresa nem dress code secreto (só muita festa, gargalhadas e talvez uns passos de dança duvidosos).
        </p>
        </div>

        {/* Our Story Section */}
        <section className="my-8 w-full max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">A Nossa História</h2>
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8">
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
      </section>

      <h2 className="mb-6 text-3xl font-bold text-center">Cerimónia e Recepção</h2>
        <section className="my-8 w-full max-w-2xl flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full">
            {/* Ceremony Card */}
            <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden w-[220px] md:w-[400px]">
              <div className="w-full h-32 md:h-40 relative">
                <Image
                  src="/igreja.jpg"
                  alt="Igreja de São Quintino"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="w-full flex flex-col justify-center p-4 gap-2">
                <h3 className="text-xl font-bold mb-1">Cerimónia</h3>
                <div className="text-base mb-1">18 de Abril de 2026, 14:30h</div>
                <div className="text-base font-semibold mb-2">Igreja de São Quintino</div>
                <a
                  href="https://maps.app.goo.gl/NdTXTuaLWozQAL5NA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-orange-300 text-white font-bold shadow hover:bg-orange-500 transition-colors text-sm"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            {/* Reception Card */}
            <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden w-[220px] md:w-[400px]">
              <div className="w-full h-32 md:h-40 relative">
                <Image
                  src="/quinta.jpg"
                  alt="Quinta Nova do Hespanhol"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="w-full flex flex-col justify-center p-4 gap-2">
                <h3 className="text-xl font-bold mb-1">Recepção</h3>
                <div className="text-base mb-1">18 de Abril de 2026</div>
                <div className="text-base font-semibold mb-2">Quinta Nova do Hespanhol</div>
                <a
                  href="https://maps.app.goo.gl/NF5n9PTDRVYd7aN29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-orange-300 text-white font-bold shadow hover:bg-orange-500 transition-colors text-sm"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

      <h2 className="mb-6 text-3xl font-bold text-center">Onde ficar</h2>
        <section className="my-8 w-full max-w-2xl flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full">
            {/* Hotel 1 */}
            <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden w-[220px] md:w-[400px]">
              <div className="w-full h-32 md:h-40 relative">
                <Image
                  src="/hotelCampoReal.jpg"
                  alt="Hotel Dolce CampoReal"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="w-full flex flex-col justify-center p-4 gap-2">
                <h3 className="text-xl font-bold mb-1">Hotel Dolce CampoReal</h3>
                <div className="text-base font-semibold mb-2">15% de desconto ao indicar o nome dos noivos</div>
              </div>
            </div>
            {/* Hotel 2 */}
            <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden w-[220px] md:w-[400px]">
              <div className="w-full h-32 md:h-40 relative">
                <Image
                  src="/hotelStay.jpg"
                  alt="Stay Hotel Torres Vedras Centro"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="w-full flex flex-col justify-center p-4 gap-2">
                <h3 className="text-xl font-bold mb-1">Stay Hotel</h3>
                <div className="text-base font-semibold mb-2">15% de desconto ao indicar o nome dos noivos</div>
              </div>
            </div>
          </div>
        </section>

      {/* FAQs */}
      <section className="my-8 w-full max-w-2xl flex justify-center flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Perguntas Frequentes</h2>
        <div className={"flex flex-col items-start justify-center w-full max-w-3xl mx-auto mt-10 mb-10 px-4 md:w-3/4 md:px-8 "}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Dresscode?</h3>
          <p className="text-slate-700">
            Fato escuro
          </p>
        </div>
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
        </div>
      </section>

      {/* RSVP Section */}
      <section className="my-8 w-full max-w-2xl flex justify-center flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Confirmação de Presença (RSVP)</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
          <input name={"name"} type="text" placeholder="Nome" className="rounded border p-2" required />
          <select name={"attending"} className="rounded border p-2" required>
            <option value="">Vai comparecer?</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <select
            name={"plusOne"}
            className="rounded border p-2"
            required
            onChange={(e) => setShowPlusOneName(e.target.value === 'yes')}
          >
            <option value="">Vem acompanhado(a)?</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          {showPlusOneName && (
            <input
              name={"plusOneName"}
              type="text"
              placeholder="Nome do acompanhante"
              className="rounded border p-2"
              required
            />
          )}
          <input name={"dietary"} type="text" placeholder="Restrições alimentares" className="rounded border p-2" />
          <button type="submit" className="rounded bg-orange-600 p-2 font-bold text-white">
            Enviar
          </button>
        </form>

        {formStatus === 'submitting' && <p className="mt-4 text-blue-600">A enviar...</p>}
        {formStatus === 'success' && <p className="mt-4 text-green-600">Obrigado pela confirmação!</p>}
        {formStatus === 'error' && <p className="mt-4 text-red-600">Ocorreu um erro. Por favor, tente novamente.</p>}
      </section>

      {/* Registry / Gifts Section */}
      <section className="my-8 w-full max-w-2xl  flex justify-center flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Presentes</h2>
        <p>
          <strong>Contribuição para lua de mel</strong>{' '}
          <a href="#" className="text-pink-600 underline">
            <ul className={"my-4"}>
                <li>IBAN: PT50 0023 0000 45729440023 94</li>
            </ul>
          </a>
        </p>
        <p>
          <strong>Nota:</strong> A vossa presença é o melhor presente!
        </p>
      </section>

      {/* Gallery Section (optional) */}
      <section className="my-8 w-full max-w-2xl flex justify-center flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Galeria</h2>
        <p className="mt-4">Após o casamento, partilhe as suas fotos connosco!</p>
      </section>
    </main>
    </div>
  )
}