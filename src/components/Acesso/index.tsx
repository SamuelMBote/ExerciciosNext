import React from 'react';
import fs from 'fs/promises';
const Acesso = async () => {
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf-8');
  const data = await fs.readFile('acesso.txt', 'utf-8');
  return (
    <div>
      <div>
        {data
          .split(' ')
          .reverse()
          .map((date) => {
            return (
              <p key={date}>
                {new Date(Number(date)).toLocaleString('pt-BR', {})}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Acesso;
