<script>
  import NavBar from "../components/NavBar"
  import Mascot from "../components/Mascot"
  import LicenseLogo from "../components/LicenseLogo"
  import { _ } from "svelte-i18n"
</script>

<svelte:head>
  <title>LibreLingo - Development</title>
</svelte:head>

<section class="hero is-primary is-bold">
  <div class="hero-head">
    <NavBar />
  </div>
  <div class="container">
    <div class="columns project-introduction">
      <div class="column is-one-third">
        <h1 class="title">
          <img src="images/logo.svg" alt="LibreLingo" />
        </h1>
      </div>
      <div class="column">

        <h2 class="subtitle">{$_('index.subtitle')}</h2>
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
      </div>
    </div>

    <div class="container">
      <h2 class="is-size-2">Recent major new features</h2>

      <div class="columns">
        <div class="column is-one-quarter">
          <div class="mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
        </div>

        <div class="column is-centered-both-ways">
          <div>
            <h3 class="is-size-3">
              A new mascot designed by
              <a href="https://carolinedelesalle.com/" target="_blank">
                Caroline Delesalle
              </a>
            </h3>
            <p>
              <a href="https://github.com/kantord/LibreLingo/issues/367">
                Want to help naming it?
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column has-text-centered is-centered-both-ways">
          <h3 class="is-size-3">Spaced repetition</h3>
        </div>

        <div class="column is-one-third">
          <img
            src="images/screenshot-spaced-repetition.png"
            alt=""
            class="screenshot" />
        </div>
      </div>

      <div class="columns">
        <div class="column is-one-third">
          <div class="mascot">
            <img
              src="images/screenshot-chips-challenge.png"
              alt=""
              class="screenshot" />
          </div>
        </div>

        <div class="column is-centered-both-ways">
          <h3 class="is-size-3">Practice word order</h3>
        </div>
      </div>

      <div class="columns">
        <div class="column has-text-centered is-centered-both-ways">
          <h3 class="is-size-3">Course editor</h3>
        </div>

        <div class="column is-one-third">
          <img
            src="images/screenshot-course-editor.png"
            alt=""
            class="screenshot" />
        </div>
      </div>

      <div class="development-progress">
        <h3 class="is-size-4">Progress towards alpha release</h3>
        <progress class="progress is-medium is-info" value="75" max="100">
          45%
        </progress>
      </div>

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

  .project-introduction {
    margin-bottom: 4em;
  }

  h2 {
    margin-bottom: 1em;
  }

  .screenshot {
    box-shadow: 0 0 2em #ffffff42;
  }

  .is-centered-both-ways {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .development-progress {
    margin-top: 4em;

    h3 {
      margin-bottom: 1em;
    }
  }

  .hero {
    padding-bottom: 10em;
    min-height: 100vh;

    a:not(.button) {
      color: $white;
      text-decoration: underline;
      text-decoration-style: dotted;
    }
  }

  .hero {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2341809e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"),
      linear-gradient(
        141deg,
        $blue 0%,
        $blue 40%,
        adjust-color($blue, $red: -20%) 81%,
        adjust-color($blue, $red: +40%) 100%
      ) !important;
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
