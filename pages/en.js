import Head from "next/head";

export default function En() {
  return (
    <div id="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        />

        <style>
          {`
main {
  display: block;
  margin: 0 auto;
  max-width: 680px;
  padding: 40px 15px;
  overflow-wrap: break-word;
}

a {
  text-decoration: underline;
  color: #457287;
}

a:hover {
  color: #69cdb5;
}

p {
  margin-bottom: 10px;
}

ul li {
  list-style-position: inside;
  list-style-type: initial;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.4rem;
  --typography-spacing-vertical: 1.5rem;
}

h3 {
  --font-size: 1.3rem;
  --typography-spacing-vertical: 1.5rem;
}

h4 {
  --font-size: 1.22rem;
  --typography-spacing-vertical: 1.5rem;
}

ul ul {
  margin-left: 1.5rem;
}

*::selection {
  background-color: #4affd834;
}
          `}
        </style>
      </Head>
      <main>
        <h2 id="aboutus">About Us</h2>

        <p>
          Disfactory – save the farmlands by open source technology and
          crowdsourcing (2021)
          <a href="https://english.cw.com.tw/article/article.action?id=2982">
            https://english.cw.com.tw/article/article.action?id=2982
          </a>
        </p>

        <p>Webpages of Disfactory (All in Mandarin)</p>

        <ul>
          <li>
            About Page:
            <a href="https://about.disfactory.tw/">
              https://about.disfactory.tw/
            </a>
          </li>

          <li>
            Map reporting platform:
            <a href="https://disfactory.tw/">https://disfactory.tw/</a>
          </li>

          <li>
            Satellite image mini-game campaign:
            <a href="https://spot.disfactory.tw/">
              https://spot.disfactory.tw/
            </a>
          </li>
        </ul>

        <h2 id="opensourcecommunity">Open source community</h2>

        <ul>
          <li>
            GitHub:
            <a href="https://github.com/Disfactory">
              https://github.com/Disfactory
            </a>
            <ul>
              <li>Disfactory</li>

              <ul>
                <li>
                  Disfactory
                  <a href="https://github.com/Disfactory/Disfactory">backend</a>
                </li>

                <li>
                  Disfactory
                  <a href="https://github.com/Disfactory/frontend">frontend</a>
                </li>
              </ul>

              <li>SpotDiff</li>

              <ul>
                <li>
                  <a href="https://github.com/Disfactory/SpotDiff">SpotDiff</a>
                  backend (All English)
                </li>

                <li>
                  <a href="https://github.com/Disfactory/SpotDiffFrontend">
                    SpotDiffFrontend
                  </a>
                </li>
              </ul>
            </ul>
          </li>

          <li>
            Figma:
            <a href="https://www.figma.com/file/dFuJKpdDcmHNDqdj1011Zo/Disfactory_UI_design_2021?node-id=0%3A1">
              https://www.figma.com/file/dFuJKpdDcmHNDqdj1011Zo/Disfactory_UI_design_2021?node-id=0%3A1
            </a>
          </li>

          <li>
            Collaborative notes (Mandarin):
            <a href="https://g0v.hackmd.io/@disfactory/home">
              https://g0v.hackmd.io/@disfactory/home
            </a>
          </li>
        </ul>

        <h2 id="sharing">Sharing</h2>

        <ul>
          <li>
            Disfactory collaboration model
            <a href="https://youtu.be/Q0A6MbP3a0w">
              https://youtu.be/Q0A6MbP3a0w
            </a>
          </li>

          <li>
            Disfactory project building, sharing with activists in Southeast
            Asia and Oceania
            <a href="https://docs.google.com/presentation/d/1hB2CULtytz2sUAI6ld2j9qdM11SJcorWFb8dFwJwixA/edit">
              https://docs.google.com/presentation/d/1hB2CULtytz2sUAI6ld2j9qdM11SJcorWFb8dFwJwixA/edit
            </a>
          </li>

          <li>
            20221018_ Innovation for Democracy Café
            <a href="https://docs.google.com/presentation/d/1bb_2ODwZjOCG1_W_DMOeY4PYh6IsUTnt/edit#slide=id.g16c5d42de50_0_24">
              https://docs.google.com/presentation/d/1bb_2ODwZjOCG1_W_DMOeY4PYh6IsUTnt/edit#slide=id.g16c5d42de50_0_24
            </a>
          </li>

          <li>
            20220806_Pollution and Tech Activism
            <a href="https://docs.google.com/presentation/d/1tmUL0GBw2ERUdU-TgU_KXA64jvMp9dys/edit#slide=id.p1">
              https://docs.google.com/presentation/d/1tmUL0GBw2ERUdU-TgU_KXA64jvMp9dys/edit#slide=id.p1
            </a>
          </li>
        </ul>

        <h2 id="contactus">Contact Us</h2>

        <ul>
          <li>
            Email: <a href="mailto:hi@disfactory">hi@disfactory</a>
          </li>

          <li>
            Slack:
            <ul>
              <li>
                Go to <a href="https://join.g0v.tw">https://join.g0v.tw</a>
              </li>

              <li>Join the g0v Slack</li>

              <li>Join #disfactory channel</li>

              <li>Introduce yourself!</li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  );
}
