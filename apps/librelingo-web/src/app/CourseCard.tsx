import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Course } from "./page"


type Props = {
  course: Course
}

export default function CourseCard(props: Props) {
  const { course } = props
  const coursePageUrl = `/${course.source.code}/course/${course.target.code}`

  return (<Card>
    <CardHeader>
      <CardTitle>{course.target.name}</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Button asChild><Link href={coursePageUrl}>Go to course</Link></Button>
    </CardFooter>
  </Card>)
}
