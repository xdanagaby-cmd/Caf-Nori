import { timingSafeEqual } from 'node:crypto';

export function autorizado(req) {
  const usuario = process.env.REN_USER;
  const senha = process.env.REN_PASSWORD;
  if (!usuario || !senha) return false;

  const cabecalho = req.headers.authorization || '';
  if (!cabecalho.startsWith('Basic ')) return false;

  const recebido = Buffer.from(
    cabecalho.slice(6), 'base64'
  ).toString('utf8');

  const esperado = `${usuario}:${senha}`;
  const a = Buffer.from(recebido);
  const b = Buffer.from(esperado);

  return a.length === b.length && timingSafeEqual(a, b);
}
