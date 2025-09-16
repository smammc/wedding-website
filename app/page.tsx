'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  // Countdown logic
  // Remove weddingDate from here
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const weddingDate = new Date('2026-04-18T15:00:00')
    const timer = setInterval(() => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((diff / (1000 * 60)) % 60)
        const seconds = Math.floor((diff / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-8 w-full max-w-3xl">
        <Image
          src="/MeS-1.jpeg"
          alt="Hero"
          width={1200}
          height={600}
          className="h-[400px] w-full rounded-xl object-cover"
          priority
        />
      </div>
      <div className="mb-12 max-w-2xl text-center">
        <h1 className="mb-2 text-5xl font-bold">Maria e Sebastião</h1>
        <p className="mb-4 text-2xl text-slate-700">18 de Abril de 2026</p>
        <div className="mb-6">
          <span className="text-xl font-medium">Contagem decrescente:</span>
          <div className="mt-2 text-2xl font-bold text-pink-600">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Nossa História</h2>
        <p className="mb-2">
          Como nos conhecemos:{' '}
          <span className="text-slate-700">[Conte aqui como se conheceram]</span>
        </p>
        <p className="mb-2">
          Pedido de casamento: <span className="text-slate-700">[Conte o pedido]</span>
        </p>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Linha do tempo</h3>
          <ul className="list-inside list-disc text-slate-700">
            <li>Primeiro encontro</li>
            <li>Primeira viagem</li>
            <li>Outros marcos divertidos</li>
          </ul>
        </div>
        <div className="flex justify-center gap-4">
          {/* Adicione fotos pessoais aqui */}
          <Image src="/MeS-1.jpeg" alt="Foto 1" width={120} height={80} className="rounded" />
          {/* <Image src="/MeS-2.JPG" alt="Foto 2" width={120} height={80} className="rounded" /> */}
        </div>
      </section>

      {/* The Wedding Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">O Casamento</h2>
        <p>
          <strong>Quando & Onde:</strong> 18 de Abril de 2026 15:00h, Igreja de São Quintino, Lisboa
        </p>
        <div className="my-2">
          <iframe
            width="700"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=700&amp;height=300&amp;hl=en&amp;q=Igreja%20S%C3%A3o%20Quintino%20+(Igreja%20de%20S%C3%A3o%20Quintino)&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Mapa Igreja de São Quintino"
            style={{ border: 0, width: '100%', maxWidth: 700, height: 300 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <p>
          <strong>Recepção:</strong> Quinta do Hespanhol, 18:00
        </p>
        <div className="my-2">
          <iframe
            width="700"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=700&amp;height=300&amp;hl=en&amp;q=Quinta%20Nova,%20Carreiras%202565-136%20Carvoeira%20(Torres%20Vedras)%20%20+(Quinta%20Nova%20de%20Hespanhol)&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Mapa Quinta Nova de Hespanhol"
            style={{ border: 0, width: '100%', maxWidth: 700, height: 300 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <p>
          <strong>Dress code:</strong> Formal
        </p>
        <p>
          <strong>Nota sobre o tempo:</strong> Primavera, pode estar ameno.
        </p>
        <p>
          <strong>Estacionamento:</strong> Disponível na quinta. Transporte: Uber, táxi, comboio.
        </p>
      </section>

      {/* Schedule Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Programa</h2>
        <ul className="list-inside list-disc text-slate-700">
          <li>Cerimónia: 15:00</li>
          <li>Cocktail: 16:00</li>
          <li>Jantar: 18:00</li>
          <li>Festa e dança: 20:00</li>
          <li>Brunch (opcional): 12:00 no dia seguinte</li>
        </ul>
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

      {/* Travel & Stay Section */}
      <section className="mb-12 w-full max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Viagem & Estadia</h2>
        <p>
          <strong>Hotéis recomendados:</strong> Hotel Central (código: CASAMENTO2026), Hotel Lisboa
        </p>
        <p>
          <strong>Transportes:</strong> Aeroporto de Lisboa, comboio, táxi, Uber.
        </p>
        <p>
          <strong>Dicas locais:</strong> Pastéis de nata, miradouros, museus.
        </p>
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
        <div className="flex flex-wrap justify-center gap-4">
          {/* Adicione fotos de noivado, infância, casal, etc. */}
          <Image
            src="/MeS-1.jpeg"
            alt="Foto de noivado"
            width={120}
            height={80}
            className="rounded"
          />
        </div>
        <p className="mt-4">Após o casamento, partilhe as suas fotos connosco!</p>
      </section>
    </main>
  )
}
