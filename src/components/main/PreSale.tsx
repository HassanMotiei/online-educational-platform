"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import Card from "./Card";

export default function PreSale() {
	return (
		<div className="mt-24">
			<div>
				<p className="text-2xl">Pre-sale</p>
				<p className="text-xl">Courses to be held</p>
			</div>
			<Swiper
				className="w-full h-full mt-10"
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
