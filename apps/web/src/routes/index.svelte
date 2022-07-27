<script lang="typescript">
  import Mascot from "../components/Mascot.svelte"
  import LicenseLogo from "../components/LicenseLogo.svelte"
  import Button from "lluis/Button.svelte"
  import Box from "lluis/Box.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Hidden from "lluis/Hidden.svelte"
  import Title from "lluis/Title.svelte"
  import { _ } from "svelte-i18n"
  import Translate from "../Translate.svelte"
</script>

<svelte:head>
  <title>{$_("meta.title")}</title>
  <meta name="description" content="{$_('index.meta.description')}" />
</svelte:head>

<section class="hero is-bold is-fullheight">
  <div class="hero-body">
    <div class="container">
      <Columns>
        <Column size="1/4">
          <div class="mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
        </Column>
        <Column>
          <Box>
            <Title>LibreLingo</Title>
            <h2 class="subtitle">
              <Translate key="index.subtitle">
                an experiment to create a community driven language-learning
                platform
              </Translate>
            </h2>
            <div class="buttons">
              <Button style="primary" href="course/spanish-from-english">
                <Translate key="index.start_spanish_course">
                  Start learning Spanish
                </Translate>
              </Button>

              <Hidden>
                <Button style="primary" href="course/german-from-english">
                  <Translate key="index.start_german_course">
                    Start learning German
                  </Translate>
                </Button>

                <Button style="primary" href="course/french-from-english">
                  <Translate key="index.start_french_course">
                    Start learning French
                  </Translate>
                </Button>

                <Button style="primary" href="course/bangla-from-english">
                  <Translate key="index.start_french_course">
                    Start learning Bangla
                  </Translate>
                </Button>

                <Button style="primary" href="course/parsig-from-english">
                  <Translate key="index.start_parsig_course">
                    Start learning Middle Persian
                  </Translate>
                </Button>

                <Button style="primary" href="course/basque-from-english">
                  <Translate key="index.start_parsig_course">
                    Start learning Basque
                  </Translate>
                </Button>

                <Button style="primary" href="course/ladino-from-english">
                  <Translate key="index.start_ladino_course">
                    Start learning Ladino (for English speakers)
                  </Translate>
                </Button>

                <Button style="primary" href="course/ladino-from-hebrew">
                  <Translate key="index.start_ladino_course">
                    Start learning Ladino (for Hebrew speakers)
                  </Translate>
                </Button>

                <Button style="primary" href="course/ladino-from-spanish">
                  <Translate key="index.start_ladino_course">
                    Start learning Ladino (for Spanish speakers)
                  </Translate>
                </Button>

                <Button style="primary" href="course/houma-from-english">
                  <Translate key="index.start_houma_course">
                    Start learning Houma (for English speakers)
                  </Translate>
                </Button>

                <Button style="primary" href="course/brazilian-portuguese-from-english">
                  <Translate key="index.start_brazilian_portuguese_course">
                    Start learning Brazilian Portuguese (for English speakers)
                  </Translate>
                </Button>

                <Button style="primary" href="course/neolatin-from-english">
                  <Translate key="index.start_neolatin-from-english">
                    Start learning Neolatin (for English speakers)
                  </Translate>
                </Button>
              </Hidden>
              <Button style="primary" href="about">
                <Translate key="index.about_librelingo">
                  About LibreLingo
                </Translate>
              </Button>

              <Hidden>
                <Button style="primary" href="/devtools">
                  Development tools
                </Button>
              </Hidden>

              <Button style="primary" href="https://librelingo.app/docs/">
                <Translate key="index.development_docs_english_only">
                  Development documentation
                </Translate>
              </Button>
            </div>
          </Box>
        </Column>
      </Columns>
    </div>
  </div>
</section>

<div class="license">
  <LicenseLogo />
</div>

<style type="text/scss">
  @import "../variables";

  .title img {
    height: 3em;
  }

  .hero {
    background-color: $primary;
  }

  .license {
    position: absolute;
    right: 1em;
    bottom: 1em;
  }

  @include until($tablet) {
    .mascot {
      width: 45%;
      margin: auto;
      margin-top: -3em;
    }
  }
</style>
