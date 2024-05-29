import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Course = {
  source: string
  target: string
  deploy: boolean
  inProduction: boolean
  devtoolsEnabled: boolean
  repositoryURL: string
  url: string
}

type Props = {
  course: Course
}

export default function CourseCard(props: Props) {
  const { course } = props
return (<Card>
  <CardHeader>
    <CardTitle>{course.target}</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
      <Button>Go to course</Button>
  </CardFooter>
</Card>)
}
