import Image from "next/image";
import { ScheduleButton } from "../scheduleButton";

export function WhoAmI() {
  return (
    <section className="flex items-center gap-4 justify-center h-full  max-w-7xl">
      <div className="flex w-[30%] relative aspect-[3/4] items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1654110455429-cf322b40a906"
          alt="Foto de perfil"
          width={300}
          height={300}
          className="rounded-full"
          style={{ maxWidth: 300, maxHeight: 300, objectFit: 'contain' }}
        />
      </div>
      <div className="w-[70%] p-6 flex flex-col justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="">Prazer,</h2>
            <h1 className="">Maria Paula Fatosme</h1>
          </div>

          <div className="flex flex-col gap-1 pb-4">
            <p className="text-accent">
              Atendimento on-line e presencial para adultos
            </p>
            <p className="text-accent">
              CRP 06/221859
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-justify">
          <p>
            Sou mulher, mineira, de ascendência francesa, filha de um artista plástico e de uma mineira autêntica que desenvolvia sua criatividade na cozinha.
          </p>
          <p>
            Sou psicóloga e atuo como analista junguiana.
          </p>
          <p>
            Escolhi a psicologia analítica como declaração das minhas raízes, por meio da livre expressão da fala, da arte, da cultura e do afeto.
          </p>
          <p>
            Para mim fala é cura.
          </p>
          <p>
            Arte é uma das expressões do inconsciente.
          </p>
          <p>
            Afeto é o reconhecimento dos nossos sentimentos, daquilo que nos atravessa ao longo da vida.
          </p>
          <p>
            Acredito numa análise viva que acompanhe o tempo e local em que está inserida. Por isso, entendo que a psicologia junguiana sozinha não basta, é preciso estar atento às questões sociais produzidas e a forma como elas afetam cada sujeito. E é isso o que eu trabalho para que aconteça na minha clínica: <strong>uma análise possível.</strong>
          </p>
          <div>

          </div>
        </div>
        <div>
          
        </div>
        <ScheduleButton />
      </div>
    </section >
  )
}