import Link from "next/link";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="text-center mt-10">
				<form>
					<h1 className="text-[#E9E9E9]">SIGN IN</h1>
					<div>
						<input
							type={"text"}
							className="bg-[#282D3B] text-[#98A0B5] rounded-[18px] px-10 py-3 my-3 text-sm"
							placeholder="Email address"
						/>
					</div>
					<div>
						<input
							type={"password"}
							className="bg-[#282D3B] text-[#98A0B5] rounded-[18px] px-10 py-3 my-3 text-sm"
							placeholder="Password"
						/>
					</div>
					<div>
						<button className="text-[#F9F9F9] bg-redColour shadow-redShadow px-24 py-4 my-3 rounded-2xl">
							SIGN IN
						</button>
					</div>
					<div>
						<Link
							href={"/"}
							className="text-[#98A0B5] font-sans underline-offset-2"
						>
							Forget Password?
						</Link>
					</div>
					<div>
						<button className="text-[#98A0B5] border-[#98A0B5] border-2 rounded-[18px] py-4 px-8 my-7">
							REGISTER
						</button>
					</div>
					<div className="text-[#98A0B5]">
						<p className="text-sm font-sans">
							Hanc ego assentior cum a philosophis compluribus permulta
							dicantur.
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
