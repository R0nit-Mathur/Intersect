import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('eval-out');
fs.mkdirSync(OUT, { recursive: true });

async function createPageAdapter() {
  return {
    goto: async (u) => {
      await gotoUrl(u);
      await wait(3);
    },
    evaluate: async (fn, ...args) => {
      const code = `(${fn.toString()})(${args.map(a => JSON.stringify(a)).join(',')})`;
      return await js(code);
    },
    reload: async () => {
      await js(`location.reload()`);
      await wait(2);
    },
    waitForLoadState: async () => {
      await wait(1);
    },
    waitForTimeout: async (ms) => {
      await wait(Math.max(0.2, ms / 1000));
    },
    info: async () => {
      const p = await pageInfo();
      return { w: p.w || 1440, h: p.h || 900 };
    },
    screenshot: async () => {
      return true;
    }
  };
}

async function main() {
  await useOrCreateTaskSpace('reverse bymonolog.com');
  const pageAdapter = await createPageAdapter();

  const { evalProbe } = await import(path.resolve('.agents/skills/clone-website/tools/eval-probe.js'));

  cliLog('Probing original site: https://bymonolog.com ...');
  const origSummary = await evalProbe({ page: pageAdapter, browser: {} }, {
    url: 'https://bymonolog.com/',
    outPath: path.join(OUT, 'original.json'),
    screenshotPath: path.join(OUT, 'original-full.png')
  });
  cliLog('Original probe finished: ' + JSON.stringify(origSummary));

  cliLog('Probing clone site: http://localhost:3000 ...');
  const cloneSummary = await evalProbe({ page: pageAdapter, browser: {} }, {
    url: 'http://localhost:3000/',
    outPath: path.join(OUT, 'clone.json'),
    screenshotPath: path.join(OUT, 'clone-full.png')
  });
  cliLog('Clone probe finished: ' + JSON.stringify(cloneSummary));

  cliLog('Benchmark probes completed successfully!');
  process.exit(0);
}

main().catch(err => {
  cliLog('Benchmark error: ' + err.stack);
  process.exit(1);
});
