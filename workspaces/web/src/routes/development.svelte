<script lang="typescript">
  import NavBar from "../components/NavBar"
  import Mascot from "../components/Mascot"
  import TwitterButton from "../components/TwitterButton"
  import GitHubButton from "../components/GitHubButton"
  import Column from "lluis/Column"
  import Columns from "lluis/Columns"
  import { _ } from "svelte-i18n"

  import shuffle from "lodash.shuffle"

  const API_URL =
    "https://api.github.com/repos/kantord/LibreLingo/issues?per_page=100"
  let issues = null

  if (process.browser === true) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        issues = shuffle(res)
          .filter(
            ({ state, pull_request, labels }) =>
              state === "open" && !pull_request && labels.length !== 0
          )
          .slice(0, 10)
      })
      .catch(() => (issues = []))
  }
</script>

<svelte:head>
  <title>LibreLingo - Development</title>
  <meta name="description" content="{$_('development.meta.description')}" />
</svelte:head>

{#if issues === null}
  <div class="pageloader is-active"><span class="title">LibreLingo</span></div>
{/if}

<section class="hero is-primary">
  <div class="hero-head">
    <NavBar />
  </div>
  <div class="hero-body">
    <div class="container">
      <div class="columns project-introduction">
        <Column size="1/3">
          <h1 class="title"><img src="images/logo.svg" alt="LibreLingo" /></h1>
        </Column>
        <Column>
          <h2 class="subtitle">{$_('index.subtitle')}</h2>
          <div class="buttons">
            <a
              class="button is-primary is-inverted is-outlined"
              href="course/spanish-from-english">
              {$_('index.start_spanish_course')}
            </a>
            <a
              class="button is-primary is-inverted is-outlined is-hidden"
              href="course/german-from-english">
              {$_('index.start_german_course')}
            </a>
            <a class="button is-primary is-inverted is-outlined" href="about">
              {$_('index.about_librelingo')}
            </a>
            <TwitterButton />
          </div>
        </Column>
      </div>
    </div>

    <div class="container">
      <h2 class="is-size-2 is-size-3-mobile">Recent major new features</h2>

      <Columns>
        <Column size="1/4">
          <div class="mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
        </Column>

        <Column>
          <div class="is-centered-both-ways">
            <div>
              <h3 class="is-size-3 is-size-4-mobile">
                A new mascot designed by
                <a
                  href="https://carolinedelesalle.com/"
                  target="_blank"
                  class="link">
                  Caroline Delesalle
                </a>
              </h3>
              <p>
                <a
                  href="https://github.com/kantord/LibreLingo/issues/367"
                  class="link">
                  Want to help naming it?
                </a>
              </p>
            </div>
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <div class=" has-text-centered is-centered-both-ways">
            <h3 class="is-size-3">Spaced repetition</h3>
          </div>
        </Column>

        <Column sizeTablet="1/3">
          <img
            src="images/screenshot-spaced-repetition.png"
            alt=""
            class="screenshot" />
        </Column>
      </Columns>

      <Columns reversed>
        <Column sizeTablet="1/3">
          <img
            src="images/screenshot-chips-challenge.png"
            alt=""
            class="screenshot" />
        </Column>

        <Column>
          <div class="has-text-centered is-centered-both-ways">
            <h3 class="is-size-3">Practice word order</h3>
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <div class="has-text-centered is-centered-both-ways">
            <h3 class="is-size-3">Course editor</h3>
          </div>
        </Column>

        <Column sizeTablet="1/3">
          <img
            src="images/screenshot-course-editor.png"
            alt=""
            class="screenshot" />
        </Column>
      </Columns>

      <Columns reversed="">
        <Column sizeTablet="1/3">
          <img
            src="images/screenshot-dictionary.png"
            alt=""
            class="screenshot" />
        </Column>

        <Column>
          <div class="has-text-centered is-centered-both-ways">
            <h3 class="is-size-3">Built-in mini-dictionary</h3>
          </div>
        </Column>
      </Columns>

      <div class="development-progress">
        <h3 class="is-size-3">Progress towards alpha release</h3>
        <progress class="progress is-medium is-info" value="75" max="100">
          45%
        </progress>
      </div>

      <div class="buttons buttons-bottom">
        <a
          class="button is-primary is-inverted is-outlined"
          href="https://librelingo.readthedocs.io/en/latest/">
          Development documentation
        </a>
        <GitHubButton size="default" />
        <TwitterButton />
      </div>
    </div>
  </div>
</section>

{#if issues !== null && issues.length}
  <section class="section">
    <div class="container">
      <h3 class="is-size-3">
        Looking for a challange? Check out these issues:
      </h3>
      <div class="columns is-multiline">
        {#each issues as { title, html_url, labels }}
          <div class="column is-one-third">
            <a href="{html_url}">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">{title}</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <div class="tags">
                      {#each labels as { name, color }}
                        <div
                          class="tag"
                          style="{`background-color: #${color}`}">
                          {name}
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
                <footer class="card-footer">
                  <div class="card-footer-item">Contribute to this issue</div>
                </footer>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style type="text/scss">
  @import "../variables";

  .card {
    background: white;
  }

  .tag {
    color: $white;
    text-shadow: 1px 1px 0 $black;
  }

  .title img {
    height: 3em;
  }

  .project-introduction {
    margin-bottom: 4em;
  }

  h2 {
    margin-bottom: 1em;
  }

  h3 {
    margin-bottom: 1em;
  }

  .screenshot {
    box-shadow: 0 0 2em #ffffff42;
  }

  .is-centered-both-ways {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .development-progress {
    margin-top: 4em;
    margin-bottom: 4em;
  }

  .hero {
    padding-bottom: 5em;
    min-height: 100vh;

    .link {
      color: $white;
      text-decoration: underline;
      text-decoration-style: dotted;
    }
  }

  @include until($tablet) {
    .mascot {
      width: 45%;
      margin: auto;
    }

    .columns {
      margin-bottom: 6em;
    }
  }

  @include from($tablet) {
    .buttons-bottom {
      margin-top: 6em;
    }
  }
</style>
