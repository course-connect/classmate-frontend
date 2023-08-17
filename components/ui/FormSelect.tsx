import React, { FC, useState, useRef, useEffect } from "react";

import { Controller, useFormContext } from "react-hook-form";

import useOutsideAlerter from "../../hooks/useOutsideAlerter";

import Image from "next/image";

import Fuse from "fuse.js";

type InputProps = {
	type?: "select" | "local-search" | "database-search";
	searchType?: "school" | "course";
	name: string;
	label: string;
	backgroundColor: string;
	setValue: any;
	getValues: any;
	children?: any;
	rules: Record<string, unknown>;
};

const FormSelect: FC<InputProps> = ({
	name,
	label,
	rules,
	type = "select",
	setValue,
	getValues,
	children,
	backgroundColor,
}) => {
	const [localSearchValue, setLocalSearchValue] = useState("");
	const [localSearchResults, setLocalSearchresults] = useState([]);

	const [moveLabel, setMoveLabel] = useState(false);
	const [inputFocused, setInputFocused] = useState(false);
	const [changeLabelColor, setChangeLabelColor] = useState(false);
	const labelRef = useRef();
	const { control } = useFormContext();
	const selectRef = useRef();
	const searchRef = useRef();

	useOutsideAlerter((e) => {
		setChangeLabelColor(false);

		const searchInputClicked = e.target.closest("#local-search-input");
		if (!searchInputClicked) {
			const selectedOption = e.target.dataset.value;
			const currentOption = getValues(name);
			if (selectedOption && selectedOption != currentOption) {
				setValue(name, selectedOption);
			} else if (!currentOption) {
				setMoveLabel(false);
			}

			setInputFocused(false);
		}
	}, selectRef);

	const hanldeInputClick = (e) => {
		if (!moveLabel) {
			setMoveLabel(true);
		}

		if (!inputFocused) {
			setChangeLabelColor(true);
			setInputFocused(true);
		} else {
			const currentValue = getValues(name);
			if (!currentValue) {
				setMoveLabel(false);
			}
			setChangeLabelColor(false);
			setInputFocused(false);
			e.target.blur();
		}
	};

	const handleSelectBlur = () => {
		setChangeLabelColor(false);
	};

	const handleLocalSearchChange = (e) => {
		setLocalSearchValue(e.target.value);
	};

	const getDefaultLocalSearchResults = () => {
		return children.map((child) => {
			return {
				item: child,
			};
		});
	};

	const getLocalSearchResults = () => {
		const options = {
			includeScore: true,
			keys: ["props.text"],
		};

		const fuse = new Fuse(children, options);

		return fuse.search(localSearchValue);
	};

	const handleKeyDown = () => {
		searchRef.current.focus();
	};

	useEffect(() => {
		if (type === "local-search") {
			if (!localSearchValue) {
				const results = getDefaultLocalSearchResults();
				setLocalSearchresults(results);
			} else {
				const results = getLocalSearchResults();
				setLocalSearchresults(results);
			}
		}
	}, [localSearchValue]);

	useEffect(() => {
		if (!inputFocused) {
			setTimeout(() => {
				setLocalSearchValue("");
			}, 100);
		}
	}, [inputFocused]);

	// Database Search
	const [databaseSearchValue, setDatabaseSearchValue] = useState("");

	const handleDatabseSearchChange = (e) => {
		console.log("searching database");
		setDatabaseSearchValue(e.target.value);
	};

	useEffect(() => {
		if (type === "database-search") {
			console.log("rendering database search");
		}
	}, []);

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="relative flex w-full items-center">
					<span
						ref={labelRef}
						className={`font-classmate pointer-events-none absolute left-[18px] px-1 text-base text-classmate-green-7 transition-all duration-200 ${backgroundColor} ${
							moveLabel ? "-translate-y-[29px] text-sm" : ""
						}`}>
						<p
							className={`whitespace-nowrap ${
								changeLabelColor ? "text-classmate-gold-1" : ""
							} ${error ? "!text-classmate-error-red" : ""}`}>
							{label}
						</p>
					</span>

					<input
						ref={selectRef}
						onMouseDown={(e) => hanldeInputClick(e)}
						onKeyDown={handleKeyDown}
						onBlur={handleSelectBlur}
						onChange={onChange}
						value={value || ""}
						className={`font-classmate w-full cursor-pointer rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-4 text-classmate-green-7 placeholder-classmate-green-7 caret-transparent hover:border-classmate-gray-1 ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
								: `${
										inputFocused ? "outline-classmate-gold-1" : "outline-none"
								  }`
						}`}
					/>

					<Image
						style={{
							filter:
								"invert(33%) sepia(8%) saturate(1099%) hue-rotate(65deg) brightness(97%) contrast(20%)",
						}}
						src="./caret.svg"
						alt="caret"
						height={12}
						width={12}
						className={`pointer-events-none absolute right-3 transition-all ${
							inputFocused ? "rotate-180" : ""
						}`}
					/>

					<div
						className={`absolute top-[58px] flex w-full origin-top cursor-pointer flex-col gap-2 rounded-lg bg-classmate-tan-2 p-4 shadow-xl transition-all  ${
							inputFocused
								? "pointer-events-auto scale-100 opacity-100"
								: "pointer-events-none scale-75 opacity-0"
						} }`}>
						{type === "select" && children}
						{type === "local-search" && (
							<>
								<div
									id="local-search-input"
									className="mb-2 flex overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
									<Image
										src="./search.svg"
										width={20}
										height={20}
										alt=""
										className="mx-3"
									/>
									<input
										ref={searchRef}
										value={localSearchValue}
										onChange={(e) => handleLocalSearchChange(e)}
										placeholder="Search"
										defaultValue=""
										type="text"
										className={`font-classmate z-10 h-10 w-full bg-transparent text-classmate-green-7 placeholder-classmate-green-7 outline-none`}
									/>
								</div>
								{localSearchResults.map(({ item }) => item)}
							</>
						)}
						{type === "database-search" && (
							<>
								<div
									id="local-search-input"
									className="mb-2 flex overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
									<Image
										src="./search.svg"
										width={20}
										height={20}
										alt=""
										className="mx-3"
									/>
									<input
										ref={searchRef}
										value={databaseSearchValue || ""}
										onChange={(e) => handleDatabseSearchChange(e)}
										placeholder="Search"
										type="text"
										className={`font-classmate z-10 h-10 w-full bg-transparent text-classmate-green-7 placeholder-classmate-green-7 outline-none`}
									/>
								</div>
								{/* {localSearchResults.map(({ item }) => item)} */}
							</>
						)}
					</div>
				</div>
			)}
		/>
	);
};

export default FormSelect;
