<script lang="ts">
  import Button from "$lib/lluis/Button.svelte"
  import Hidden from "$lib/lluis/Hidden.svelte"
  import Footer from "$lib/lluis/Footer.svelte"
  import Hero from "$lib/lluis/Hero/index.svelte"
  import Stack from "$lib/lluis/Stack.svelte"
  import Heading from "$lib/lluis/Heading.svelte"
  import Page from "$lib/lluis/Page.svelte"
  import { _ } from "svelte-i18n"
  import Translate from "$lib/Translate.svelte"
  // import NewMascot from "$lib/components/NewMascot.svelte"

  // import NavBar from "../components/NewNavBar.svelte"
</script>

<svelte:head>
  <title>{$_("meta.title")}</title>
  <meta name="description" content={$_("index.meta.description")} />
</svelte:head>

<main class="main-content">
  <Page>
    <Hero>
      <Stack direction="column" spacing="m" fullHeight justify="center">
        <Stack spacing="m" direction="column" directionDesktop="row">
          <Stack shrink={4}>
            <!-- <NewMascot shadow={false} glow={true} /> -->
          </Stack>
          <Stack direction="column" justify="center" shrink={2}>
            <Heading level={1}>
              <Translate key="index.subtitle">
                A community-driven language-learning platform
              </Translate>
            </Heading>
          </Stack>
        </Stack>
        <Stack justify="center">
          <Button
            style="primary"
            size="large"
            href="course/spanish-from-english"
          >
            <Translate key="index.start_spanish_course">
              Start learning Spanish
            </Translate>
          </Button>
        </Stack>
      </Stack>

      <Hidden>
        <Button style="primary" href="course/german-from-english">
          Start learning German
        </Button>

        <Button style="primary" href="course/french-from-english">
          Start learning French
        </Button>

        <Button style="primary" href="course/bangla-from-english">
          Start learning Bangla
        </Button>

        <Button style="primary" href="course/parsig-from-english">
          Start learning Middle Persian
        </Button>

        <Button style="primary" href="course/basque-from-english">
          Start learning Basque
        </Button>

        <Button style="primary" href="course/ladino-from-english">
          Start learning Ladino (for English speakers)
        </Button>

        <Button style="primary" href="course/ladino-from-hebrew">
          Start learning Ladino (for Hebrew speakers)
        </Button>

        <Button style="primary" href="course/ladino-from-spanish">
          Start learning Ladino (for Spanish speakers)
        </Button>

        <Button style="primary" href="course/houma-from-english">
          Start learning Houma (for English speakers)
        </Button>
      </Hidden>
    </Hero>
    <Footer />
  </Page>
</main>
