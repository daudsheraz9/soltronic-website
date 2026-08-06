import fs from 'fs';

const globalsCssPath = 'src/app/globals.css';
let css = fs.readFileSync(globalsCssPath, 'utf8');

// Replace @import "tailwindcss" with v3 directives
css = css.replace('@import "tailwindcss";', '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');

// Extract @theme block
const themeMatch = css.match(/@theme \{([\s\S]*?)\}/);
if (!themeMatch) {
  console.log('No @theme found');
  process.exit(1);
}

const themeContent = themeMatch[1];
const lines = themeContent.split('\n').map(l => l.trim()).filter(l => l && l.startsWith('--'));

const colors = {};
const spacing = {};
const fontFamily = {};
const fontSize = {};
const borderRadius = {};
const boxShadow = {};

let rootVars = ':root {\n';

lines.forEach(line => {
  rootVars += `  ${line}\n`;
  const parts = line.split(':');
  const name = parts[0].trim();
  const val = parts.slice(1).join(':').replace(';', '').trim();

  const varName = name.replace('--', '');

  if (name.startsWith('--color-')) {
    colors[name.replace('--color-', '')] = `var(${name})`;
  } else if (name.startsWith('--spacing-')) {
    spacing[name.replace('--spacing-', '')] = `var(${name})`;
  } else if (name.startsWith('--font-')) {
    fontFamily[name.replace('--font-', '')] = `var(${name})`;
  } else if (name.startsWith('--text-') && !name.includes('--')) {
    // --text-label-md: 14px;
    // --text-label-md--line-height: 20px;
    // We will group these later, for now just capture base size
    fontSize[name.replace('--text-', '')] = [`var(${name})`, {
      lineHeight: `var(${name}--line-height, normal)`,
      letterSpacing: `var(${name}--letter-spacing, normal)`,
      fontWeight: `var(${name}--font-weight, normal)`
    }];
  } else if (name.startsWith('--radius-')) {
    let key = name.replace('--radius-', '');
    if (key === 'DEFAULT') key = 'DEFAULT';
    borderRadius[key] = `var(${name})`;
  } else if (name.startsWith('--shadow-')) {
    boxShadow[name.replace('--shadow-', '')] = `var(${name})`;
  }
});

rootVars += '}\n';

css = css.replace(/@theme \{[\s\S]*?\}/, rootVars);
fs.writeFileSync(globalsCssPath, css);

const tailwindConfig = `import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 6)},
      spacing: ${JSON.stringify(spacing, null, 6)},
      fontFamily: ${JSON.stringify(fontFamily, null, 6)},
      fontSize: ${JSON.stringify(fontSize, null, 6)},
      borderRadius: ${JSON.stringify(borderRadius, null, 6)},
      boxShadow: ${JSON.stringify(boxShadow, null, 6)}
    },
  },
  plugins: [],
}
export default config
`;

fs.writeFileSync('tailwind.config.ts', tailwindConfig);
console.log('Successfully generated tailwind.config.ts and globals.css');
