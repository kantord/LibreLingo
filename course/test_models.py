from django.core.exceptions import ValidationError
from snapshottest.django import TestCase
from .models import Course, Skill, Module


class SkillTests(TestCase):
    databases = '__all__'
    fixtures = ["courseData.json"]

    def setUp(self):
        self.course = Course.objects.create(
            language_name="Spanish",
            source_language_name="English",
            target_language_code="ES",
            special_characters="a b"
        )
        self.module = Module.objects.create(
            course=self.course,
            name="Basics"
        )
        self.skill = Skill.objects.create(
            module=self.module,
            name="Animals",
            image1="water1",
            image2="water2",
            image3="water3",
        )

    def test_cannot_save_with_insufficient_images(self):
        with self.assertRaises(ValidationError):
            self.skill.image1 = None
            self.skill.save()

    def test_can_save_with_no_images(self):
        try:
            self.skill.image1 = None
            self.skill.image2 = None
            self.skill.image3 = None
            self.skill.save()
        except ValidationError:
            self.fail("Couldnt save skill with no images")
