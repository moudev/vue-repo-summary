<template>
  <div id="app">
    <div class="main-repository">
      <MainInfoCardRepo :repository="repo" />
    </div>
    <div class="repositories">
      <InfoCardRepo
        v-for="rep in repositoriesData"
        :rep="rep"
        :key="rep.id"
        @updateRepoSelected="updateRepoSelected"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MainInfoCardRepo from './components/MainInfoCardRepo.vue'
import InfoCardRepo from './components/InfoCardRepo.vue'

export default {
  name: 'app',
  components: {
    MainInfoCardRepo,
    InfoCardRepo,
  },
  data() {
    return {
      repositoriesList: [
        'vuejs/vue',
        'facebook/react',
        'sveltejs/svelte',
        'angular/angular.js',
      ],
      repositoriesData: [],
      repo: {},
      dataLoaded: false,
    };
  },
  methods: {
    getInfoRepos() {
      const promises = this.repositoriesList.map(async (repository) => (
        axios.get(`https://api.github.com/repos/${repository}`)
      ))
      Promise.all(promises)
        .then((values) => {
          this.repositoriesData = values.map((p) => p.data)
          // eslint-disable-next-line
          this.repo = this.repositoriesData[0]
        })
        .catch(() => [])
    },
    updateRepoSelected(rep) {
      this.repo = rep
    },
  },
  created() {
    this.getInfoRepos()
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.repositories {
  display: flex;
  justify-content: space-around;
}
</style>
