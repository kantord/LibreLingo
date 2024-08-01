import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Course, Module } from '@/data/course'
import Link from 'next/link'

type Props = {
    module: Module
}

export default function ModuleCard(props: Props) {
    const { module } = props
    //const coursePageUrl = `/${course.uiLanguage}/courses/${course.languageCode}`

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
                    <Link href={""}>Learn</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
