import { BaseLayout } from "@components/ui/layout";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { getAllCourse } from "@content/courses/fetcher";
import { useWeb3 } from "@components/providers";

export default function Home({courses}) {
  const { web3, isLoading } = useWeb3();

  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps(){
  const { data } = getAllCourse();
  return {
    props: {
      courses: data
    }
  }
}


Home.Layout = BaseLayout;