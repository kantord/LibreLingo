<script lang="typescript">
  import Mascot from "../components/Mascot.svelte"
  import LicenseLogo from "../components/LicenseLogo.svelte"
  import Button from "lluis/Button.svelte"
  import Box from "lluis/Box.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Hidden from "lluis/Hidden.svelte"
  import Title from "lluis/Title.svelte"
  import Footer from "lluis/Footer.svelte"
  import { _ } from "svelte-i18n"
  import Translate from "../Translate.svelte"
  import NavBar from "../components/NavBar.svelte"
</script>

<svelte:head>
  <title>{$_("meta.title")}</title>
  <meta name="description" content="{$_('index.meta.description')}" />
</svelte:head>

<NavBar />

<main class="main-content home-hero" role="main">
  <div class="home-hero__bg-shape home-hero__bg-shape--back">
    <img src="/images/home-background-shape-back.svg" />
  </div>
  <div class="home-hero__bg-shape home-hero__bg-shape--front">
    <img src="/images/home-background-shape-front.svg" />
  </div>
  <div class="layout-container home-hero__content">
    <Columns>
      <Column size="8" centered>
        <div class="home-hero__intro">
          <div class="intro__mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
          <h2 class="intro__description">A community-driven <b class="text-highlight">language-learning platform</b></h2>
        </div>
      </Column>
    </Columns>
    <Columns>
      <Column size="8" centered>
        <Hidden>
          <Box> 
            <div class="home-hero__language-selector">
              <div class="language-selector__label">
                <label><b>Choose a language to study</b></label>
              </div>
              <div class="language-selector__dropdown">
                <span class="language-selector__flag"><a href="/"><img src="/images/flag-spanish.png" alt="Flag"></a></span> <a href="/course/test">Spanish</a>
              </div>
              <Button style="accent" size="medium" href="/course/test">
                Go!
              </Button>
            </div>
          </Box>
        </Hidden>
        <div class="home-hero__language-buttons">
          <div class="buttonset buttonset--wrap">
            <Button style="primary" size="large" href="course/spanish-from-english">
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
            </Hidden>
          </div>
        </div>
      </Column> 
    </Columns>
  </div>
</main>

<Footer>
  <div class="layout-container">
    <div class="main-footer__content">
      <a href="about">
        <Translate key="index.about_librelingo">
          About LibreLingo
        </Translate>
      </a>
      <Hidden>
        <Button style="primary" href="/devtools">
          Development tools
        </Button>
      </Hidden>
      <a href="https://librelingo.app/docs/">
        <Translate key="index.development_docs_english_only">
          Development documentation
        </Translate>
      </a>
      <div class="home__license-icon">
        <LicenseLogo />
      </div>
    </div>
  </div>
</Footer>