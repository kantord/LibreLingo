# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['ExportSkillTest::test_export_skill_correct_output_format 1'] = [
    {
        'formInTargetLanguage': '¡Buen provecho!',
        'group': '2f4f49b572',
        'id': 'fa83044ce0',
        'meaningInSourceLanguage': 'Enjoy your meal',
        'priority': 0,
        'type': 'options'
    }
]

snapshots['CourseDataTest::test_correct_output_format 1'] = {
    'languageCode': 'ES',
    'languageName': 'Spanish',
    'modules': [
        {
            'skills': [
                {
                    'imageSet': [
                        'water1',
                        'water2',
                        'water3'
                    ],
                    'practiceHref': 'animals',
                    'summary': [
                    ],
                    'title': 'Animals'
                }
            ],
            'title': 'Basics'
        }
    ],
    'specialCharacters': [
        'a',
        'b'
    ]
}
