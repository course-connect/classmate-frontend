export default interface heroSearchTwoInterface {
	loading: boolean;
	results: any[]; // Change "any" to the actual type of results
	type: string;
	filters: {
		professor: {
			filter_value: string | null;
			filter_text: string | null;
		};
		department: {
			filter_value: string | null;
			filter_text: string | null;
		};
		school: {
			filter_value: string | null;
			filter_text: string | null;
		};
		score: {
			filter_value: string | null;
			filter_text: string | null;
		};
		difficulty: {
			filter_value: string | null;
			filter_text: string | null;
		};
		reviews: {
			filter_value: string | null;
			filter_text: string | null;
		};
		course: {
			filter_value: string | null;
			filter_text: string | null;
		};
	};
}
