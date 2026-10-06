export function heroAnimation(
  headingSelector: string,
  leftSelector: string,
  rightSelector: string,
  leftLeafSelector: string,
  rightLeafSelector: string,
  triggerSelector: string,
  videoSelector: string,
  videoWrapperSelector: string,
  videoRef: any,
) {
  const { $gsap, $SplitText } = useNuxtApp()
  const DISTANCE = 1
  const headingSplit = $SplitText.create(headingSelector, {
    type: 'chars',
    charsClass: 'hero-char',
  })
  const leftSplit = $SplitText.create(leftSelector, {
    type: 'words',
    wordsClass: 'left-word',
  })
  const rightSplit = $SplitText.create(rightSelector, {
    type: 'lines',
    linesClass: 'right-line',
  })

  const ctx = $gsap.context(() => {
    const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(headingSplit.chars, {
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.08,
    })
      .from(
        leftSplit.words,
        { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.08 },
        '-=0.4',
      )
      .from(
        rightSplit.lines,
        { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.1 },
        '<',
      )

    // scroll-based leaf animations
    $gsap.fromTo(
      leftLeafSelector,
      { y: 0 },
      {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerSelector,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      },
    )

    $gsap.fromTo(
      rightLeafSelector,
      { y: 0 },
      {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerSelector,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      },
    )
    $gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'top top',
          end: '+=100%', // 100vh scroll tak animation chalegi
          scrub: 1, // scroll ke saath smooth chalega
          invalidateOnRefresh: true,
          // markers: true,         // debug ke liye
          onEnter: () => videoRef.play(),
          onLeave: () => videoRef.pause(),
          onEnterBack: () => videoRef.play(),
        },
      })
      .to('#video', {
        scale: 1.1, // thora zoom
        y: () => window.innerHeight * DISTANCE, // 200vh neeche
        ease: 'none',
      })
  })

  return () => {
    ctx.revert() // also kills the ScrollTriggers created inside
    headingSplit.revert()
    leftSplit.revert()
    rightSplit.revert()
  }
}
