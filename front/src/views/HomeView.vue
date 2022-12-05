<template>
  <div class="home">
    <div class="" v-for="item in items" :key="item.id">
      {{item.properties['TITLE'].title[0]?.plain_text}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getDatabases().then((res: any) => { this.items = res.results; console.log(res); });
  },
  computed: {
    ...mapState({ databases: 'databases' }),
  },
  methods: {
    ...mapActions({
      getDatabases: 'getDatabases',
    }),
  },
});
</script>
