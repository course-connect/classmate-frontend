import HomepageHeading from "../components/HomepageHeading";
import ClassmateButton from "../components/ClassmateButton";
import Image from "next/image";
import googleLogo from "../public/google.png";
import appleLogo from "../public/apple.png";
import facebookLogo from "../public/facebook.png";
import Link from "next/link";

export default function SignUpOrSignIn({ form, heading, subheading, variant }) {
	return (
		<div className="section-padding flex w-full justify-center bg-classmate-tan-1 py-[60px]">
			<div className="flex w-full max-w-[420px] flex-col items-center justify-center rounded-2xl bg-classmate-tan-2 px-10 py-12 shadow-xl sm:max-w-[520px] sm:p-[68px]">
				<HomepageHeading
					headingStyles="text-2xl xl:text-[40px]"
					lineStyles="xl:top-14">
					{heading}
				</HomepageHeading>
				<p className="font-classmate mt-6 max-w-[280px] text-center text-classmate-green-6 sm:mt-8 sm:max-w-[340px]">
					{subheading}
				</p>
				{form}
				<div className="flex w-full flex-col items-center gap-6 sm:gap-9">
					<p className="font-classmate relative flex w-[180px] items-center justify-center text-classmate-green-6">
						<span className="absolute left-0 h-[2px] w-6 rounded-lg bg-classmate-green-7"></span>
						{`Or Sign ${variant === "signup" ? "up" : "in"} with`}
						<span className="absolute right-0 h-[2px] w-6 rounded-lg bg-classmate-green-7"></span>
					</p>

					<div className="flex w-full flex-col gap-2 xs:flex-row">
						<ClassmateButton
							variant="outlined"
							size="small-full"
							styles="border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10">
							<Image
								src={googleLogo}
								width={0}
								height={0}
								className="mr-2 h-3 w-3 sm:h-5 sm:w-5"
								alt="google logo"
							/>
							Google
						</ClassmateButton>
						<ClassmateButton
							variant="outlined"
							size="small-full"
							styles="border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10">
							<Image
								src={appleLogo}
								width={0}
								height={0}
								className="mr-2 h-3 w-[10px] sm:h-5 sm:w-[17px]"
								alt="apple logo"
							/>
							Apple
						</ClassmateButton>
						<ClassmateButton
							variant="outlined"
							size="small-full"
							styles="border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10">
							<Image
								src={facebookLogo}
								width={0}
								height={0}
								className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
								alt="facebook logo"
							/>
							Facebook
						</ClassmateButton>
					</div>
					{variant === "signin" && (
						<p className="font-classmate mt-4 text-classmate-green-6">
							Don't have an account?&nbsp;
							<Link href="/signup" className="text-classmate-green-1 underline">
								Sign Up
							</Link>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
