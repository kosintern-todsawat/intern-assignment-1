const Navar = () => {
	return (
		<navbar>
			<div className="grid grid-rows-3 grid-flow-col border-b-2">
				<div className="row-span-3 border-r-2">Logo</div>
				<div className="px-10 row-span-2 col-span-2 flex items-center border-b-2">
					<span className="text-redColour text-xl">MARKETPLACE_</span>
					<div className="ml-auto flex items-center">
						<p className="text-white">Image</p>
						<button className="bg-redColour text-white shadow-redShadow px-12 py-3 rounded-2xl">
							BACK
						</button>
					</div>
				</div>
				<div className="w-full">
					<ul className="text-[#98A0B5] flex">
						<li className="px-10 py-4 border-r-2">NAKA MARKET</li>
						<li className="px-10 py-4 border-r-2">P2P MARKET</li>
						<li className="px-10 py-4 border-r-2">NAKAVERSE MAP</li>
					</ul>
				</div>
			</div>
		</navbar>
	);
};

export default Navar;
