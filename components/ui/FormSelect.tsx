import React, { FC, useState, useRef, useEffect } from "react";

// Project components
import FormSelectOptions from "./FormSelectOptions";

// Project hooks
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

// Next.js components
import Image from "next/image";

// Fuzzy search
import Fuse from "fuse.js";

// React hook form
import { Controller, useFormContext } from "react-hook-form";

// Redux
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import {
	setFormSearchType,
	search,
} from "../../redux/form-search/formSearchActions";

type InputProps = {
	type?: "select" | "local-search" | "database-search";
	size: "sm" | "lg";
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
	size = "lg",
	label,
	rules,
	type = "select",
	searchType,
	setValue,
	getValues,
	children,
	backgroundColor,
}) => {
	const { control } = useFormContext();

	const [moveLabel, setMoveLabel] = useState(false);
	const [inputFocused, setInputFocused] = useState(false);
	const [changeLabelColor, setChangeLabelColor] = useState(false);

	const labelRef = useRef();
	const selectRef = useRef();
	const searchRef = useRef();

	const dispatch = useAppDispatch();

	const handleSelectBlur = () => {
		setChangeLabelColor(false);
		selectRef.current.blur();
	};

	// Select
	const [selectOptionsWithProps, setSelectOptionsWithProps] = useState([]);

	const addProps = (children) => {
		return children.map((child) => {
			return React.cloneElement(child, {
				selected: child.props.text.toString() === getValues(name),
				selectName: name,
			});
		});
	};

	useEffect(() => {
		if (type === "select") {
			const optionsWithProps = addProps(children);
			setSelectOptionsWithProps(optionsWithProps);
		}
	}, [getValues(name)]);

	// Local search
	const [localSearchValue, setLocalSearchValue] = useState("");
	const [localSearchResults, setLocalSearchResults] = useState([]);

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

	const handleKeyDown = (e) => {
		if (type !== "select") {
			searchRef.current.focus();
		} else {
			e.preventDefault();
		}
	};

	useEffect(() => {
		if (type === "local-search") {
			if (!localSearchValue) {
				const results = getDefaultLocalSearchResults().map(({ item }) => item);
				setLocalSearchResults(addProps(results));
			} else {
				const results = getLocalSearchResults().map(({ item }) => item);
				setLocalSearchResults(addProps(results));
			}
		}
	}, [localSearchValue, getValues(name)]);

	// Database Search
	const formSearch = useSelector((state) => state.formSearch);
	const [databaseSearchValue, setDatabaseSearchValue] = useState("");

	const handleDatabaseSearchChange = (e) => {
		setDatabaseSearchValue(e.target.value);
		dispatch(search(e.target.value));
	};

	useOutsideAlerter((e) => {
		setChangeLabelColor(false);
		const searchInputClicked = e.target.closest("#local-search-input");
		const selectName = e.target.dataset.selectname;
		const selectedOption = e.target.dataset.value;
		if (!searchInputClicked) {
			const currentOption = getValues(name);
			if (
				selectedOption &&
				name === selectName &&
				selectedOption != currentOption
			) {
				setValue(selectName, selectedOption);
			} else if (!currentOption) {
				setMoveLabel(false);
			}

			setInputFocused(false);
		}
	}, selectRef);

	const hanldeInputClick = (e) => {
		if (type === "database-search" && !inputFocused && !databaseSearchValue) {
			dispatch(setFormSearchType(searchType));
			dispatch(search(""));
		}

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

	useEffect(() => {
		if (!inputFocused) {
			setTimeout(() => {
				if (type === "local-search") {
					setLocalSearchValue("");
				} else if (type === "database-search") {
					setDatabaseSearchValue("");
				}
			}, 100);
		}
	}, [inputFocused]);

	const labelTranslate =
		size === "lg" ? "-translate-y-[29px]" : "-translate-y-[25px]";

	const dropDownOffset = size === "lg" ? "top-[58px]" : "top-[50px]";

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
							moveLabel ? `${labelTranslate} text-sm` : ""
						}`}>
						<p
							className={`whitespace-nowrap ${
								changeLabelColor ? "text-classmate-gold-1" : ""
							} ${error ? "!text-classmate-error-red" : ""}`}>
							{label}
						</p>
					</span>
					<input
						id={name}
						data-selectname={name}
						ref={selectRef}
						onMouseDown={(e) => hanldeInputClick(e)}
						onKeyDown={(e) => handleKeyDown(e)}
						onBlur={handleSelectBlur}
						onChange={onChange}
						value={value || ""}
						className={`font-classmate w-full cursor-pointer rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4  text-classmate-green-7 placeholder-classmate-green-7 caret-transparent hover:border-classmate-gray-1 ${
							size === "sm" ? "py-3" : "py-4"
						} ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
								: `${
										inputFocused ? "outline-classmate-gold-1" : "outline-none"
								  }`
						}`}
					/>
					<div
						className={`pointer-events-none absolute right-1 flex h-8 w-8 items-center justify-center bg-classmate-tan-2 `}>
						<Image
							style={{
								filter:
									"invert(33%) sepia(8%) saturate(1099%) hue-rotate(65deg) brightness(97%) contrast(20%)",
							}}
							src="./caret.svg"
							alt="caret"
							height={12}
							width={12}
							className={`transition-all ${inputFocused ? "rotate-180" : ""}`}
						/>
					</div>

					<div
						className={`absolute z-10 flex max-h-[300px] w-full origin-top cursor-pointer flex-col gap-2 overflow-y-auto rounded-lg bg-classmate-tan-2 p-4 shadow-xl transition-all ${dropDownOffset} ${
							inputFocused
								? "pointer-events-auto scale-100 opacity-100"
								: "pointer-events-none scale-75 opacity-0"
						} }`}>
						{type === "select" && (
							<div className="flex flex-col gap-2">
								{selectOptionsWithProps}
							</div>
						)}
						{type === "local-search" && (
							<>
								<div
									id="local-search-input"
									className="mb-2 flex min-h-[40px] overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
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
								<div className="flex flex-col gap-2">{localSearchResults}</div>
							</>
						)}
						{type === "database-search" && (
							<>
								<div
									id="local-search-input"
									className="mb-2 flex min-h-[40px] overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
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
										onChange={(e) => handleDatabaseSearchChange(e)}
										placeholder="Search"
										type="text"
										className={`font-classmate z-10 h-10 w-full bg-transparent text-classmate-green-7 placeholder-classmate-green-7 outline-none`}
									/>
								</div>
								<div className="flex flex-col gap-2">
									{formSearch.results.map(({ data }, index) => {
										return searchType === "school" ? (
											<FormSelectOptions
												key={index}
												icon="./graduation-cap.svg"
												text={data.school_name}
												selected={data.school_name === getValues(name)}
												selectName={name}
											/>
										) : (
											<FormSelectOptions
												key={index}
												icon="./book-solid.svg"
												text={data.school_name}
												selected={data.school_name === getValues(name)}
												selectName={name}
											/>
										);
									})}
								</div>
							</>
						)}
					</div>
				</div>
			)}
		/>
	);
};

export default FormSelect;
