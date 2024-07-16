import WaffleThumbnail from "@/assets/images/image-waffle-thumbnail.jpg";
import CremeBruleeThumbnail from "@/assets/images/image-creme-brulee-thumbnail.jpg";
import MacaronThumbnail from "@/assets/images/image-macaron-thumbnail.jpg";
import TiramisuThumbnail from "@/assets/images/image-tiramisu-thumbnail.jpg";
import BaklavaThumbnail from "@/assets/images/image-baklava-thumbnail.jpg";
import MeringueThumbnail from "@/assets/images/image-meringue-thumbnail.jpg";
import CakeThumbnail from "@/assets/images/image-cake-thumbnail.jpg";
import BrownieThumbnail from "@/assets/images/image-brownie-thumbnail.jpg";
import PannaCottaThumbnail from "@/assets/images/image-panna-cotta-thumbnail.jpg";

import WaffleMobile from "@/assets/images/image-waffle-mobile.jpg";
import CremeBruleeMobile from "@/assets/images/image-creme-brulee-mobile.jpg";
import MacaronMobile from "@/assets/images/image-macaron-mobile.jpg";
import TiramisuMobile from "@/assets/images/image-tiramisu-mobile.jpg";
import BaklavaMobile from "@/assets/images/image-baklava-mobile.jpg";
import MeringueMobile from "@/assets/images/image-meringue-mobile.jpg";
import CakeMobile from "@/assets/images/image-cake-mobile.jpg";
import BrownieMobile from "@/assets/images/image-brownie-mobile.jpg";
import PannaCottaMobile from "@/assets/images/image-panna-cotta-mobile.jpg";

import WaffleTablet from "@/assets/images/image-waffle-tablet.jpg";
import CremeBruleeTablet from "@/assets/images/image-creme-brulee-tablet.jpg";
import MacaronTablet from "@/assets/images/image-macaron-tablet.jpg";
import TiramisuTablet from "@/assets/images/image-tiramisu-tablet.jpg";
import BaklavaTablet from "@/assets/images/image-baklava-tablet.jpg";
import MeringueTablet from "@/assets/images/image-meringue-tablet.jpg";
import CakeTablet from "@/assets/images/image-cake-tablet.jpg";
import BrownieTablet from "@/assets/images/image-brownie-tablet.jpg";
import PannaCottaTablet from "@/assets/images/image-panna-cotta-tablet.jpg";

import WaffleDesktop from "@/assets/images/image-waffle-desktop.jpg";
import CremeBruleeDesktop from "@/assets/images/image-creme-brulee-desktop.jpg";
import MacaronDesktop from "@/assets/images/image-macaron-desktop.jpg";
import TiramisuDesktop from "@/assets/images/image-tiramisu-desktop.jpg";
import BaklavaDesktop from "@/assets/images/image-baklava-desktop.jpg";
import MeringueDesktop from "@/assets/images/image-meringue-desktop.jpg";
import CakeDesktop from "@/assets/images/image-cake-desktop.jpg";
import BrownieDesktop from "@/assets/images/image-brownie-desktop.jpg";
import PannaCottaDesktop from "@/assets/images/image-panna-cotta-desktop.jpg";

const items = [
	{
		name: "Waffle with Berries",
		category: "Waffle",
		price: 6.5,
		image: {
			thumbnail: WaffleThumbnail,
			mobile: WaffleMobile,
			tablet: WaffleTablet,
			desktop: WaffleDesktop,
		},
	},
	{
		name: "Vanilla Bean Crème Brûlée",
		category: "Crème Brûlée",
		price: 7.0,
		image: {
			thumbnail: CremeBruleeThumbnail,
			mobile: CremeBruleeMobile,
			tablet: CremeBruleeTablet,
			desktop: CremeBruleeDesktop,
		},
	},
	{
		name: "Macaron Mix of Five",
		category: "Macaron",
		price: 8.0,
		image: {
			thumbnail: MacaronThumbnail,
			mobile: MacaronMobile,
			tablet: MacaronTablet,
			desktop: MacaronDesktop,
		},
	},
	{
		name: "Classic Tiramisu",
		category: "Tiramisu",
		price: 5.5,
		image: {
			thumbnail: TiramisuThumbnail,
			mobile: TiramisuMobile,
			tablet: TiramisuTablet,
			desktop: TiramisuDesktop,
		},
	},
	{
		name: "Pistachio Baklava",
		category: "Baklava",
		price: 4.0,
		image: {
			thumbnail: BaklavaThumbnail,
			mobile: BaklavaMobile,
			tablet: BaklavaTablet,
			desktop: BaklavaDesktop,
		},
	},
	{
		name: "Lemon Meringue Pie",
		category: "Pie",
		price: 5.0,
		image: {
			thumbnail: MeringueThumbnail,
			mobile: MeringueMobile,
			tablet: MeringueTablet,
			desktop: MeringueDesktop,
		},
	},
	{
		name: "Red Velvet Cake",
		category: "Cake",
		price: 4.5,
		image: {
			thumbnail: CakeThumbnail,
			mobile: CakeMobile,
			tablet: CakeTablet,
			desktop: CakeDesktop,
		},
	},
	{
		name: "Salted Caramel Brownie",
		category: "Brownie",
		price: 4.5,
		image: {
			thumbnail: BrownieThumbnail,
			mobile: BrownieMobile,
			tablet: BrownieTablet,
			desktop: BrownieDesktop,
		},
	},
	{
		name: "Vanilla Panna Cotta",
		category: "Panna Cotta",
		price: 6.5,
		image: {
			thumbnail: PannaCottaThumbnail,
			mobile: PannaCottaMobile,
			tablet: PannaCottaTablet,
			desktop: PannaCottaDesktop,
		},
	},
];

type Item = (typeof items)[number];

export type { Item };
export { items };
