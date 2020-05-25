# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['CourseDataTest::test_correct_output_format 1'] = {
    'languageCode': 'ES',
    'languageName': 'Spanish',
    'modules': [
        {
            'skills': [
                {
                    'id': '569673478a3d',
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

snapshots['CourseDataTest::test_correct_output_format_only_phrases 1'] = {
    'languageCode': 'ES',
    'languageName': 'Spanish',
    'modules': [
        {
            'skills': [
                {
                    'id': '569673478a3d',
                    'imageSet': [
                        'water1',
                        'water2',
                        'water3'
                    ],
                    'practiceHref': 'animals',
                    'summary': [
                        'Pan, por favor',
                        'Agua, por favor',
                        'Vamos a la playa',
                        'Gracias'
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
