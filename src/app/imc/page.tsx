'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
type IMC = {
  peso: string | number;
  altura: string | number;
  resultado: string | number;
};
const PageIMC = () => {
  const [imc, setIMC] = React.useState<IMC>({
    altura: 0,
    peso: 0,
    resultado: 0,
  });

  return (
    <section className="container mx-auto">
      <h1>Cálculo de IMC</h1>
      <p>Indice de Massa Corporal = peso/altura*altura</p>
      <p>Insira seus dados que calculamos pra voce</p>
      <div className="flex gap-2">
        <Input
          type="number"
          label="Peso"
          id="peso"
          value={imc.peso}
          onChange={({ currentTarget: { id, value } }) => {
            setIMC({ ...imc, [id]: value });
          }}
        />
        <Input
          id="altura"
          type="number"
          label="Altura"
          value={imc.altura}
          onChange={({ currentTarget: { id, value } }) => {
            setIMC({ ...imc, [id]: value });
          }}
        />
      </div>
      <Button
        onClick={(e) => {
          setIMC({
            ...imc,
            resultado:
              Number(imc.peso) / (Number(imc.altura) * Number(imc.altura)),
          });
        }}
      >
        Calcular
      </Button>
      <p>Seu IMC = {imc.resultado}</p>
    </section>
  );
};

export default PageIMC;
