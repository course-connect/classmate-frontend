import ClassmateButton from "./ClassmateButton";

export default function JoinTodaySection() {
	return (
		<section className="section-padding bg-classmate-tan-1">
			<div className="xl:gap-22 flex flex-col  items-center  justify-center px-10 py-12 sm:flex-row sm:gap-12 xl:py-16 2xl:px-16 3xl:gap-28">
				<p className="font-classmate flex max-w-[280px] text-center  text-classmate-green-1 sm:max-w-none sm:text-left sm:text-lg md:text-xl lg:text-2xl ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-2 sm:mt-0 lg:flex-row xl:gap-8">
					<ClassmateButton
						size="md"
						styles="bg-classmate-green-2 text-classmate-tan-1 hover:!bg-classmate-hover-green-2">
						Join Today
					</ClassmateButton>
					<ClassmateButton
						size="md"
						variant="outlined"
						styles="border-classmate-green-2 text-classmate-green-2 hover:!bg-classmate-hover-tan-1">
						Contact Us
					</ClassmateButton>
				</div>
			</div>
		</section>
	);
}
