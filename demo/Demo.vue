<template>
  <figure id="logo" @mouseenter="toggle" @mouseleave="toggle" @click="change" :title="logo"><icon :name="logo" scale="4"></icon></figure>
  <h1><a href="https://github.com/Justineo/vue-awesome">Vue-Awesome</a></h1>
  <p class="desc">Font Awesome component for Vue.js, using inline SVG.</p>

  <h2>Basic</h2>
  <p><icon name="flag"></icon></p>
  <figure><pre><code>&lt;icon <span class="attr">name</span>=<span class="val">"flag"</span>&gt;&lt;/icon&gt;</code></pre></figure>

  <h2>Scale</h2>
  <p><icon name="language" scale="3"></icon></p>
  <figure><pre><code>&lt;icon <span class="attr">name</span>=<span class="val">"language"</span> <span class="attr">scale</span>=<span class="val">"3"</span>&gt;&lt;/icon&gt;</code></pre></figure>

  <h2>Spin</h2>
  <p><icon name="refresh" spin></icon></p>
  <figure><pre><code>&lt;icon <span class="attr">name</span>=<span class="val">"refresh"</span> <span class="attr">spin</span>&gt;&lt;/icon&gt;</code></pre></figure>

  <h2>Flip</h2>
  <p><icon name="signal" flip="horizontal"></icon></p>
  <figure><pre><code>&lt;icon <span class="attr">name</span>=<span class="val">"signal"</span> <span class="attr">flip</span>=<span class="val">"horizontal"</span>&gt;&lt;/icon&gt;</code></pre></figure>

  <h2>Label</h2>
  <p><small>Accessible for screen readers, etc.</small></p>
  <p><icon name="code" label="Source Code"></icon></p>
  <figure><pre><code>&lt;icon <span class="attr">name</span>=<span class="val">"code"</span> <span class="attr">label</span>=<span class="val">"Source Code"</span>&gt;&lt;/icon&gt;</code></pre></figure>

  <footer>
    <a href="//github.com/Justineo">@Justineo</a>|<a href="//github.com/Justineo/vue-awesome/blob/master/LICENSE">MIT License</a>|<a href="//github.com/Justineo/vue-awesome">View on GitHub</a>
  </footer>
</template>

<style>
body {
  margin: 0;
  padding: 4em 0 0;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  color: #666;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}

#logo {
  display: block;
  width: 120px;
  height: 120px;
  margin: 20px auto 40px;
  padding: 20px;
  position: relative;
  border-radius: 50%;
  background-color: #35495e;
  color: #41b883;
  cursor: pointer;
  user-select: none;
  transition: all .3s;
}

#logo:hover {
  margin: 10px auto 30px;
  padding: 30px;
  background-color: #41b883;
  color: #35495e;
}

#logo .fa-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  margin-bottom: 1em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

h1, h2 {
  color: #2c3e50;
  font-weight: 300;
}

h2 {
  margin-top: 2em;
  font-size: 1.2em;
}

.desc {
  margin-bottom: 4em;
  color: #7f8c8d;
}

figure .fa-icon {
  display: block;
}

p small {
  font-size: 0.8em;
  color: #7f8c8d;
}

p .fa-icon {
  vertical-align: middle;
}

pre {
  display: inline-block;
  padding: 0.8em;
  background-color: #f9f9f9;
  box-shadow: 0 1px 2px rgba(0,0,0,0.125);
  line-height: 1.1;
  color: #2973b7;
}

pre, code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}

pre code {
  font-size: 0.8em;
}

.attr {
  color: #e96900;
}

.val {
  color: #42b983;
}

footer {
  margin: 5em 0 3em;
  font-size: 0.5em;
  vertical-align: middle;
}

footer a {
  display: inline-block;
  margin: 0 5px;
  padding: 3px 0 6px;
  color: #7f8c8d;
  font-size: 2em;
  text-decoration: none;
}

footer a:hover {
  padding-bottom: 3px;
  border-bottom: 3px solid #42b983;
}
</style>

<script>
import icons from '../src/assets/icons';
const keys = Object.keys(icons);

function randomIcon() {
  return keys[Math.floor(Math.random() * keys.length)];
}

export default {
  data: function () {
    return {
      logo: randomIcon(),
      running: true
    }
  },
  methods: {
    change: function () {
      this.logo = randomIcon()
    },
    toggle: function () {
      this.running = !this.running
    }
  },
  ready: function () {
    setInterval(() => {
      if (this.running) {
        this.change()
      }
    }, 200)
  }
}
</script>
