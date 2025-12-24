'use client';

import { useEffect, useRef, useState } from 'react';

export default function Circle() {
  const ref = useRef<SVGSVGElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={visible ? 'isVisible' : ''}
      xmlns='http://www.w3.org/2000/svg'
      width='672'
      height='672'
      fill='none'
      viewBox='0 0 672 672'
    >
      <g clipPath='url(#a)'>
        <path
          className='p p1'
          stroke='#8DFD1B'
          d='M336 385.5c27.338 0 49.5-22.162 49.5-49.5s-22.162-49.5-49.5-49.5-49.5 22.162-49.5 49.5 22.162 49.5 49.5 49.5Z'
        />
        <path
          className='p p2'
          stroke='#8DFD1B'
          d='M336.5 415.5c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z'
        />
        <path
          className='p p3'
          stroke='#8DFD1B'
          strokeOpacity='.75'
          d='M335.605 464.71c71.303 0 129.105-57.802 129.105-129.105S406.908 206.5 335.605 206.5 206.5 264.302 206.5 335.605 264.302 464.71 335.605 464.71Z'
        />
        <path
          className='p p4'
          stroke='#8DFD1B'
          strokeOpacity='.5'
          d='M335.664 543.828c114.966 0 208.164-93.198 208.164-208.164S450.63 127.5 335.664 127.5 127.5 220.698 127.5 335.664s93.198 208.164 208.164 208.164Z'
        />
      </g>

      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h672v672H0z' />
        </clipPath>
      </defs>

      <style>{`
        .p {
            transform-box: fill-box;
            transform-origin: center;
            animation: bass 1.1s infinite;
            animation-play-state: paused;   /* ← ключ */
            opacity: 0.4;
        }

        .isVisible .p {
          animation-play-state: running;
        }

        .p1 { animation-delay: 0s; }
        .p2 { animation-delay: 0.08s; }
        .p3 { animation-delay: 0.16s; }
        .p4 { animation-delay: 0.24s; }

        @keyframes bass {
          0% { transform: scale(1); opacity: 0.4; }
          12% { transform: scale(1.08); opacity: 1; }
          22% { transform: scale(0.97); opacity: 0.85; }
          32% { transform: scale(1.04); }
          82% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.4; }
        }

        @media (max-width: 1024px) {
          .p {
            animation: none !important;
          }
        }
      `}</style>
    </svg>
  );
}
