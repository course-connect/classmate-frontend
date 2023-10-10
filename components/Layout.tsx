import Navbar from "./Navbar";
import Footer from "./Footer";
import SnackBar from "./ui/SnackBar/SnackBar";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
	const account = useSelector((state) => state.account);

	return (
		<>
			<Navbar />
			{children}
			<Footer />
			{account.snackBar.text && <SnackBar />}
		</>
	);
}
