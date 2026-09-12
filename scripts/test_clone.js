async function run() {
  await useOrCreateTaskSpace('reverse bymonolog.com');
  await openOrReuseTab('http://localhost:3000', { wait: true, timeout: 30 });
  await wait(2500);

  const check = await js(`(() => {
    const canvases = Array.from(document.querySelectorAll('canvas')).map(c => ({
      id: c.id,
      className: c.className,
      parent: c.parentElement?.tagName + '.' + c.parentElement?.className,
      w: c.width,
      h: c.height
    }));
    
    return {
      title: document.title,
      scrollHeight: document.body.scrollHeight,
      hasThree: typeof window.THREE !== 'undefined',
      hasGSAP: typeof window.gsap !== 'undefined',
      hasLenis: typeof window.Lenis !== 'undefined',
      hasBarba: typeof window.barba !== 'undefined',
      canvasesCount: canvases.length,
      canvases,
      animationsCount: document.getAnimations({ subtree: true }).length,
      audioLoaded: typeof window.Howl !== 'undefined'
    };
  })()`);

  cliLog('RESULT:' + JSON.stringify(check, null, 2));
  process.exit(0);
}
run().catch(err => {
  cliLog('ERROR:' + err.stack);
  process.exit(1);
});
