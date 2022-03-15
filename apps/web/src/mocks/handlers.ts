import { rest } from "msw"
import ExampleGistResponse from "./__fixtures__/example-gist-response.json"
import { default as ExampleCourseDataFile } from "../courses/test/courseData.json"
import gistsConfig from "../../../../config/gists.json"


export const handlers = [
  // Handles a GET /tasks request
  rest.get(
    `${gistsConfig.baseURL}/2428349a05d81f96b2311c2749ea5c6d`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          ...ExampleGistResponse,
          files: {
            ...ExampleGistResponse.files,
            "librelingo___courseData.json": {
              filename: "librelingo___courseData.json",
              language: "typescript",
              raw_url:
                "https://gist.githubusercontent.com/asdf/2428349a05d81f96b2311c2749ea5c6d/raw/f9f8b9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f/librelingo___courseData.ts",
              size: 5,
              type: "text/plain",
              truncated: false,
              content: JSON.stringify(ExampleCourseDataFile),
            },
          },
        })
      )
    }
  ),

  rest.get("*", (req, res, ctx) => {
    throw new Error(
      `Unhandled request: ${req.url}. All requests must be mocked in ${__filename}`
    )
  }),
]
