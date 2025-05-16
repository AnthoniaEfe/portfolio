import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';



gsap.registerPlugin(Observer, SplitText);

const sectionsData = [
  {
    heading: 'Scroll down',
    image:
      'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=75&w=1920',
  },
  {
    heading: 'Animated with GSAP',
    image:
      'https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=75&w=1920',
  },
  {
    heading: 'GreenSock',
    image:
      'https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=75&w=1920',
  },
  {
    heading: 'Animation platform',
    image:
      'https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=75&w=1920',
  },
  {
    heading: 'Keep scrolling',
    image:
      'https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=75&w=1920',
  },
];

export default function AnimatedSections() {
  const sectionRefs = useRef([]);
  const bgRefs = useRef([]);
  const headingRefs = useRef([]);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const splitHeadings = useRef([]);
  const currentIndex = useRef(-1);
  const animating = useRef(false);

  const wrap = gsap.utils.wrap(0, sectionsData.length);

  useEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      gsap.set(outerRefs.current[i], { yPercent: 100 });
      gsap.set(innerRefs.current[i], { yPercent: -100 });
    });

    splitHeadings.current = headingRefs.current.map(
      heading => new SplitText(heading, { type: 'chars,words,lines', linesClass: 'clip-text' })
    );

    const gotoSection = (index, direction) => {
      index = wrap(index);
      animating.current = true;

      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => (animating.current = false),
      });

      if (currentIndex.current >= 0) {
        gsap.set(sectionRefs.current[currentIndex.current], { zIndex: 0 });
        tl.to(bgRefs.current[currentIndex.current], { yPercent: -15 * dFactor })
          .set(sectionRefs.current[currentIndex.current], { autoAlpha: 0 });
      }

      gsap.set(sectionRefs.current[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        { yPercent: i => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(bgRefs.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          splitHeadings.current[index].chars,
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2',
            stagger: { each: 0.02, from: 'random' },
          },
          0.2
        );

      currentIndex.current = index;
    };

    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp: () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, [wrap]);

  return (
    <div className="relative h-screen w-screen overflow-hidden font-cormorant uppercase text-white">
      <header className="absolute z-50 flex h-28 w-full items-center justify-between px-10 font-bebas text-sm tracking-widest">
        <div>Animated Sections</div>
        <a href="https://codepen.io/BrianCross/pen/PoWapLP" className="text-white">
          Original By Brian
        </a>
      </header>

      {sectionsData.map((section, i) => (
        <section
          key={i}
          ref={el => (sectionRefs.current[i] = el)}
          className="absolute top-0 h-screen w-screen opacity-0"
        >
          <div
            ref={el => (outerRefs.current[i] = el)}
            className="h-full w-full overflow-hidden"
          >
            <div
              ref={el => (innerRefs.current[i] = el)}
              className="h-full w-full overflow-hidden"
            >
              <div
                ref={el => (bgRefs.current[i] = el)}
                className="relative flex h-full w-full items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%), url(${section.image})`,
                }}
              >
                <h2
                  ref={el => (headingRefs.current[i] = el)}
                  className="section-heading z-10 w-[90vw] max-w-[1200px] text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-widest text-gray-200"
                >
                  {section.heading}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
