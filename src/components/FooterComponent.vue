<script setup>
import IconVertexHorizontal from './icons/IconVertexHorizontal.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconYoutube from './icons/IconYoutube.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconTikTok from './icons/IconTikTok.vue'
import IconDiscord from './icons/IconDiscord.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <section>
      <div class="footer__copyright">
        <a href=""><IconVertexHorizontal /></a>

        <p>© {{ year }} VERTEX</p>
      </div>
      <div class="footer__socials">
        <h2>Find the Vertex Team on:</h2>
        <div class="footer__socials__icons">
          <a href=""><IconTwitter /></a>
          <a href=""><IconLinkedin /></a>
          <a href=""><IconTikTok /></a>
          <a href=""><IconInstagram /></a>
          <a href=""><IconYoutube /></a>
          <a href=""><IconDiscord /></a>
        </div>
      </div>
      <div class="footer__links">
        <ul>
          <li>
            <RouterLink to="/holi">Your Privacy Choices</RouterLink>
          </li>
          <li>
            <RouterLink to="/holi">Terms of Use</RouterLink>
          </li>
          <li>
            <RouterLink to="/holi">Partners</RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer__links">
        <ul>
          <li>
            <RouterLink to="/holi">Health & Safety</RouterLink>
          </li>
          <li>
            <RouterLink to="/holi">Privacy Policy</RouterLink>
          </li>
          <li>
            <RouterLink to="/holi">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </section>
    <p class="footer-msg">Made with ❤️ from <strong style="margin-left: 5px">Grupo 03</strong></p>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 2rem 0 0 0;
}
.footer svg,
.footer a {
  font-weight: bold;
  color: #4e1057;
  transition: color 0.3s ease-in;
}

.footer svg:hover,
.footer a:hover {
  color: #ff00e1;
}

.footer section {
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin: 0 auto;
  grid-gap: 1rem;
  max-width: 1080px;

  h3 {
    font-family: 'Nunito Sans', sans-serif;
  }
  h2 {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    margin-top: 0;
  }
}

ul {
  padding: 0;
}
li {
  list-style: none;
}
.footer__copyright {
  display: flex;
  flex-direction: column;
}

.footer__copyright p {
  margin: 0;
  font-weight: bold;
  color: #4e1057;
  transition: color 0.3s ease-in;
  padding-top: 1rem;
}
.footer__socials {
  display: flex;
  flex-direction: column;
}
.footer__socials__icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  svg {
    height: 25px;
    width: auto;
  }
}

.footer p strong {
  font-weight: bolder;
}
.footer__links {
  display: flex;
  justify-content: flex-end;
}

.footer__links h3 {
  margin: 0;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
}

.footer-msg {
  color: #4e1057;
  text-align: center;
  font-size: 0.8rem;
}
</style>
