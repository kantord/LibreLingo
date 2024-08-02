import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { CourseDetail, Module } from '@/data/course'
import Link from 'next/link'

type Props = {
    course: CourseDetail
    module: Module
}

export default function ModuleCard({ course, module }: Props) {
    const coursePageUrl = `/${course.sourceLanguage.code}/courses/${course.targetLanguage.code}/courses/${module.slug}`

    return (
        <Card>
            <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={coursePageUrl}>Learn</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
