document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bootScreen = document.getElementById('bootScreen');
  const site = document.getElementById('site');
  const bootLog = document.getElementById('bootLog');

  const revealTargets = document.querySelectorAll('.rung, .project');

  function revealAllInstantly() {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  function setUpScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => observer.observe(el));
  }

  // Skip the boot animation entirely if the user prefers reduced motion
  if (reduceMotion) {
    if (bootScreen) bootScreen.style.display = 'none';
    site.classList.add('visible');
    revealAllInstantly();
    return;
  }

  setUpScrollReveal();

  const bootLines = [
    '> INITIALIZING SAAD.SYS ...',
    '> MOUNTING PROJECTS [4/4] ... OK',
    '> PHOSPHOR DISPLAY ... ONLINE',
    '> READY'
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentText = '';

  function finishBoot() {
    setTimeout(() => {
      bootScreen.classList.add('boot-done');
      site.classList.add('visible');
      setTimeout(() => {
        if (bootScreen && bootScreen.parentNode) {
          bootScreen.parentNode.removeChild(bootScreen);
        }
      }, 600);
    }, 400);
  }

  function typeNextChar() {
    if (lineIndex >= bootLines.length) {
      finishBoot();
      return;
    }

    const line = bootLines[lineIndex];

    if (charIndex < line.length) {
      currentText += line[charIndex];
      bootLog.textContent = currentText;
      charIndex += 1;
      setTimeout(typeNextChar, 16);
    } else {
      currentText += '\n';
      lineIndex += 1;
      charIndex = 0;
      setTimeout(typeNextChar, 140);
    }
  }

  typeNextChar();
});