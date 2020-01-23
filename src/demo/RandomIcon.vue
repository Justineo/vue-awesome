<template>
  <v-icon :name="name" scale="4" />
</template>

<script>
import VIcon from "../components/Icon.vue";
import "../icons";
const keys = Object.keys(VIcon.icons);

function randomIcon() {
  return keys[Math.floor(Math.random() * keys.length)];
}

export default {
  name: "random-icon",
  components: {
    VIcon
  },
  props: {
    playing: Boolean
  },
  data() {
    return {
      name: randomIcon()
    };
  },
  mounted() {
    setInterval(() => {
      if (this.playing) {
        this.change();
      }
    }, 200);
  },
  methods: {
    change() {
      this.name = randomIcon();
    },
    toggle: function() {
      this.playing = !this.playing;
    }
  }
};
</script>
