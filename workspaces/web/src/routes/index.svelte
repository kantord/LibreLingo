<script>
  import Mascot from "../components/Mascot"
  import LicenseLogo from "../components/LicenseLogo"
  import Button from "lluis/Button"
  import Box from "lluis/Box"
  import Column from "lluis/Column"
  import Columns from "lluis/Columns"
  import { _ } from "svelte-i18n"
</script>

<svelte:head>
  <title>{$_('meta.title')}</title>
  <meta name="description" content="{$_('index.meta.description')}"/>
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
            <h1 class="title">LibreLingo</h1>
            <h2 class="subtitle">{$_('index.subtitle')}</h2>
            <div class="buttons">
              <Button primary href="course/spanish-from-english">
                {$_('index.start_spanish_course')}
              </Button>

              <Button primary hidden href="course/german-from-english">
                {$_('index.start_german_course')}
              </Button>

              <Button primary href="about">
                {$_('index.about_librelingo')}
              </Button>

              <Button primary href="development">Development progress</Button>
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

<style>
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
