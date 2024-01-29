"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import LatestCoursesCard from "./LatestCoursesCard";

export default function SwiperCarousel() {
	return (
		<div className="mt-24">
			<div>
				<p className="text-2xl">How can we help you?</p>
				<p className="text-xl">
					Since the Sabzleran educational academy is a private academy
				</p>
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
				navigation={true}
				modules={[Autoplay, Navigation]}
			>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
				<SwiperSlide>
					<LatestCoursesCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
