<script lang="typescript">
  import Mascot from "../components/Mascot.svelte"
  import LicenseLogo from "../components/LicenseLogo.svelte"
  import ButtonLink from "lluis/ButtonLink.svelte"
  import Box from "lluis/Box.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
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
              <ButtonLink primary href="course/spanish-from-english">
                <Translate key="index.start_spanish_course">
                  Start learning Spanish
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="course/german-from-english">
                <Translate key="index.start_german_course">
                  Start learning German
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="course/french-from-english">
                <Translate key="index.start_french_course">
                  Start learning French
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="course/bangla-from-english">
                <Translate key="index.start_french_course">
                  Start learning Bangla
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="course/parsig-from-english">
                <Translate key="index.start_parsig_course">
                  Start learning Middle Persian
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="course/basque-from-english">
                <Translate key="index.start_parsig_course">
                  Start learning Basque
                </Translate>
              </ButtonLink>

              <ButtonLink primary href="about">
                <Translate key="index.about_librelingo">
                  About LibreLingo
                </Translate>
              </ButtonLink>

              <ButtonLink primary hidden href="/devtools">
                Development tools
              </ButtonLink>

              <ButtonLink primary href="https://librelingo.app/docs/">
                <Translate key="index.development_docs">
                  Development documentation
                </Translate>
              </ButtonLink>
              <a href="/devtools" class="is-invisible"></a>
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
