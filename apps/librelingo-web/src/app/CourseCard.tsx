import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Course } from "@/data/course"
import Link from "next/link"


type Props = {
  course: Course
}

export default function CourseCard(props: Props) {
  const { course } = props
  const coursePageUrl = `/${course.uiLanguage}/courses/${course.languageCode}`

  return (<Card>
    <CardHeader>
      <CardTitle>{course.languageName}</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Button asChild><Link href={coursePageUrl}>Learn</Link></Button>
    </CardFooter>
  </Card>)
}
