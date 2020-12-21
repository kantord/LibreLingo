<script lang="typescript">
  import Mascot from "../components/Mascot"
  import LicenseLogo from "../components/LicenseLogo"
  import Button from "lluis/Button"
  import Box from "lluis/Box"
  import Column from "lluis/Column"
  import Columns from "lluis/Columns"
  import Title from "lluis/Title"
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
            <Title class="title">LibreLingo</Title>
            <h2 class="subtitle">
              <Translate key="index.subtitle">
                an experiment to create a community driven language-learning
                platform
              </Translate>
            </h2>
            <div class="buttons">
              <Button primary href="course/spanish-from-english">
                <Translate key="index.start_spanish_course">
                  Start learning Spanish
                </Translate>
              </Button>

              <Button primary hidden href="course/german-from-english">
                <Translate key="index.start_german_course">
                  Start learning German
                </Translate>
              </Button>

              <Button primary href="about">
                <Translate key="index.about_librelingo">
                  About LibreLingo
                </Translate>
              </Button>

              <Button primary href="development">
                <Translate key="index.development_progress">
                  About LibreLingo
                </Translate>
              </Button>
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
