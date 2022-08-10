<script>
  import Title from "lluis/Title.svelte"
  import NavBar from "../../components/NavBar.svelte"
  import courses from "../../../../../config/courses.json"
</script>

<NavBar />

<Title size={2}>Developer tools</Title>
<Title size={3}>Courses</Title>

<ul>
  {#each courses as course}
    {#if course.devtoolsEnabled}
      <li>
        <a href={`course-tools-legacy/${course.paths.jsonFolder}/`}>
          {course.paths.jsonFolder}
        </a>
      </li>
    {:else}
      <li>
        {course.paths.jsonFolder} (Devtools disabled)
      </li>
    {/if}
  {/each}
</ul>
