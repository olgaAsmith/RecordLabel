export default function Pulse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="672"
      height="672"
      fill="none"
      viewBox="0 0 672 672"
    >
      <g clipPath="url(#a)">
        <path
          className="p p1"
          pathLength="1"
          stroke="#8DFD1B"
          d="M336 385.5c27.338 0 49.5-22.162 49.5-49.5s-22.162-49.5-49.5-49.5-49.5 22.162-49.5 49.5 22.162 49.5 49.5 49.5Z"
        />
        <path
          className="p p2"
          pathLength="1"
          stroke="#8DFD1B"
          d="M336.5 415.5c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z"
        />
        <path
          className="p p3"
          pathLength="1"
          stroke="#8DFD1B"
          strokeOpacity=".75"
          d="M335.605 464.71c71.303 0 129.105-57.802 129.105-129.105S406.908 206.5 335.605 206.5 206.5 264.302 206.5 335.605 264.302 464.71 335.605 464.71Z"
        />
        <path
          className="p p4"
          pathLength="1"
          stroke="#8DFD1B"
          strokeOpacity=".5"
          d="M335.664 543.828c114.966 0 208.164-93.198 208.164-208.164S450.63 127.5 335.664 127.5 127.5 220.698 127.5 335.664s93.198 208.164 208.164 208.164Z"
        />
        <path
          className="p p5"
          pathLength="1"
          stroke="#8DFD1B"
          strokeOpacity=".25"
          d="M335.951 671.402c185.264 0 335.451-150.187 335.451-335.451S521.215.5 335.951.5.5 150.687.5 335.951s150.187 335.451 335.451 335.451Z"
        />
      </g>

      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h672v672H0z" />
        </clipPath>
      </defs>

      <style>{`
        .p {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: draw 1s ease forwards;
        }

        .p1 { animation-delay: 0.1s; }
        .p2 { animation-delay: 0.4s; }
        .p3 { animation-delay: 0.7s; }
        .p4 { animation-delay: 1.0s; }
        .p5 { animation-delay: 1.3s; }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
