<template>
<main>
  <figure
    id="logo"
    @mouseenter="toggle"
    @mouseleave="toggle"
    @click="change"
  >
    <random-icon
      ref="logo"
      :playing="playing"
    />
  </figure>
  <h1><a href="https://github.com/Justineo/vue-awesome">Vue-Awesome</a></h1>
  <p class="desc">
    Awesome SVG icon component for Vue.js, with built-in Font Awesome icons.
  </p>
  <p class="links">
    <a href="https://www.npmjs.com/package/vue-awesome">npm</a>
    ·
    <a href="https://github.com/Justineo/vue-awesome#vue-awesome">docs</a>
    ·
    <a href="https://fontawesome.com/icons?m=free">search</a>
  </p>

  <h2>Basic</h2>
  <p><v-icon name="flag"/></p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"flag"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Scale</h2>
  <p>
    <v-icon
      name="language"
      scale="3"
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"language"</span> <span class="attr">scale</span>=<span class="val">"3"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Spin</h2>
  <p>
    <v-icon
      name="sync"
      spin
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"sync"</span> <span class="attr">spin</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Pulse</h2>
  <p>
    <v-icon
      name="spinner"
      pulse
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"spinner"</span> <span class="attr">pulse</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Flip</h2>
  <p>
    <v-icon
      name="signal"
      flip="horizontal"
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"signal"</span> <span class="attr">flip</span>=<span class="val">"horizontal"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Label</h2>
  <p><small>Accessible for screen readers, etc.</small></p>
  <p>
    <v-icon
      name="code"
      label="Source Code"
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"code"</span> <span class="attr">label</span>=<span class="val">"Source Code"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Title</h2>
  <p><small>Descriptive title support.</small></p>
  <p>
    <v-icon
      name="brands/vuejs"
      title="Vue.js"
    />
  </p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"brands/vuejs"</span> <span class="attr">title</span>=<span class="val">"Vue.js"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Stacked icons</h2>
  <p><small>Use stacked icons like in FontAwesome. Even more powerful.</small></p>
  <p>
    <v-icon
      label="No Photo"
    >
      <v-icon name="camera"/>
      <v-icon
        name="ban"
        scale="2"
        class="alert"
      />
    </v-icon>
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">label</span>=<span class="val">"No Photos"</span>&gt;
  &lt;v-icon <span class="attr">name</span>=<span class="val">"camera"</span>&gt;&lt;/v-icon&gt;
  &lt;v-icon <span class="attr">name</span>=<span class="val">"ban"</span> <span class="attr">scale</span>=<span class="val">"2"</span> <span class="attr">class</span>=<span class="val">"alert"</span>&gt;&lt;/v-icon&gt;
&lt;/v-icon&gt;</code></pre>
  </figure>

  <h2>Custom icons</h2>
  <p><small>You can register your own icons.</small></p>
  <p><v-icon name="baidu"/></p>
  <figure><pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"baidu"</span>&gt;&lt;/v-icon&gt;</code></pre></figure>

  <h2>Multi-color icons</h2>
  <p><small>Register icons in more advanced ways to unleash the full power of SVG.</small></p>
  <p><v-icon name="webpack"/> <v-icon name="vue"/> <v-icon name="html5-c"/></p>
  <p>See <a href="https://github.com/Justineo/vue-awesome#more-advanced-cases">readme</a> for more advanced usage.</p>

  <footer>
    <a href="//github.com/Justineo">@Justineo</a>
    ·
    <a href="//github.com/Justineo/vue-awesome/blob/master/LICENSE">MIT License</a>
    ·
    <a href="//github.com/Justineo/vue-awesome">View on GitHub</a>
  </footer>
</main>
</template>

<script>
import VIcon from '../src/components/Icon.vue'
import RandomIcon from './RandomIcon'
import '../src/icons'

export default {
  name: 'demo',
  components: {
    VIcon,
    RandomIcon
  },
  data () {
    return {
      playing: true
    }
  },
  methods: {
    toggle () {
      this.playing = !this.playing
    },
    change () {
      this.$refs.logo.change()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 4em 0 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}

p a {
  color: #42b983;
  font-weight: 600;
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
  transition: all 0.3s;
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

h1,
h2 {
  color: #2c3e50;
  font-weight: 300;
}

h2 {
  margin-top: 3em;
  font-size: 1.2em;
}

.desc {
  color: #7f8c8d;
}

.links {
  margin-bottom: 4em;
}

figure .fa-icon {
  display: block;
}

p small {
  font-size: 0.8em;
  color: #7f8c8d;
}

pre {
  display: inline-block;
  margin: 0;
  padding: 0.8em;
  background-color: #f9f9f9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
  text-align: left;
  line-height: 1.1;
  color: #2973b7;
}

pre,
code {
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
  border-bottom: 2px solid #42b983;
}

.alert {
  color: #c33;
  opacity: 0.8;
}

@media (max-width: 640px) {
  body {
    padding-top: 0;
    text-align: left;
  }

  #logo {
    margin: 0 auto;
    transform: scale(0.6);
  }

  #logo:hover {
    margin: -10px auto;
  }

  h1,
  p {
    padding: 0 25px;
  }

  h1 {
    border-left: 5px solid #2c3e50;
  }

  h2 {
    padding-left: 20px;
    border-left: 5px solid rgba(0, 0, 0, 0.1);
  }

  figure {
    margin: 1em 0;
  }

  pre {
    display: block;
    box-shadow: none;
    overflow-x: auto;
    font-size: 0.9em;
  }
}
</style>
