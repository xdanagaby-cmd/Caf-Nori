/* Leitor simples de .env local; nenhuma dependência necessária. */
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
export function config(){let raw='';try{raw=readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'.env'),'utf8')}catch{return}for(const line of raw.split(/\r?\n/)){if(!line.trim()||line.trim().startsWith('#'))continue;const m=line.match(/^\s*([A-Za-z_][\w]*)\s*=\s*(.*)\s*$/);if(!m)continue;let value=m[2].trim();if((value.startsWith('"')&&value.endsWith('"'))||(value.startsWith("'")&&value.endsWith("'")))value=value.slice(1,-1);if(!process.env[m[1]])process.env[m[1]]=value}}
