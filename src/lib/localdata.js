import { promises as fs } from 'fs';

export async function getLocalData() {
  const file = await fs.readFile(process.cwd() + '/src/json/data.json', 'utf8');
  const data = JSON.parse(file);

  return data
}