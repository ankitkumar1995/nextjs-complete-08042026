const TOOLS = [
  'JavaScript',
  'React',
  'Vue',
  'Svelte',
  'Preact',
  'Angular',
  'Astro',
  'Flutter',
  'Solid',
];

const DELAY = 3000;

async function generateTools(tool: any, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * delay));
  return tool;
}

async function getTools() {
  'use server';
  return TOOLS.map((tool) => generateTools(tool, DELAY));
}

export default getTools;
