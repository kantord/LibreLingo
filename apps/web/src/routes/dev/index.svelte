<script>
import Title from "lluis/Title.svelte"
import NavBar from "../../components/NavBar.svelte"
import courses from "../../../../../config/courses.json"

</script>

<NavBar />

<Title size="{2}">Developer tools</Title>
<Title size="{3}">Courses</Title>

<ul>
	{#each courses as course}
  <li>
    <a href="{`course-tools-legacy/ladino-from-english/`}">
      {course.tdir}
    </a>
  </li>
	{/each}
</ul>


