import React from 'react';

function GC1F_3() {
	const [ active, setActive ] = React.useState(false);
	const myDesk = React.useRef();
	const handleClick = (evt) => {
		const deskElement = myDesk.current;
		const deskCoordinates = deskElement.getBoundingClientRect();
		console.log(evt.clientX, deskCoordinates.left);
		if (
			deskCoordinates.left < evt.clientX &&
			deskCoordinates.right > evt.clientX &&
			(deskCoordinates.top < evt.clientY && deskCoordinates.bottom > evt.clientY)
		) {
			console.log(true);
			setActive(!active);
		} else console.log(false);
	};
	React.useEffect(() => {
		window.addEventListener('click', handleClick, true);
		return () => {
			window.removeEventListener('click', handleClick, true);
		};
	}, );

	return (
	<g ref={myDesk} id="prefix__shape871-1059" transform="translate(432.141 -379.125)">
        <path fill={active ? "lightgreen" : "white"}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.24}
          d="M0 757.2h54.281V792H0z" />
        <text x={18.47} y={772.2} className="prefix__st20">
          {"John"}
          <tspan x={19.8} dy="1.2em" className="prefix__st25">
            {"Doe"}
          </tspan>
        </text>
      </g>
	);
}

export default GC1F_3;