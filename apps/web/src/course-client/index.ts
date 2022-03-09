export const get_course = async ({ courseName }: { courseName: string }) => {
  const { modules, languageName, repositoryURL } = await import(
    `../courses/${courseName}/courseData.json`
  )

  return { courseName, modules, languageName, repositoryURL }
};
