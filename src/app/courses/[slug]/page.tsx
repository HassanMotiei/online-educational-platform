import coursesData from "@/app/coursesData";

export default async function Page({ params }: { params: { slug: string } }) {
	let mainCourseData = await coursesData.find(
		(course) => course.id === parseInt(params.slug)
	);
	if (mainCourseData) {
		return <div>{mainCourseData.desc}</div>;
	} else {
		return <div>No data found</div>;
	}
}
