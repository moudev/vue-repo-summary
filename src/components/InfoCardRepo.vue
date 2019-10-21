<template>
  <div class="card-info">
    <div
      class="card-info__no-data"
      v-if="loading"
    >
      Loading data...
    </div>
    <div
      class="card-info__container"
      @click="updateRepoSelected"
      v-else-if="objectKeys > 0"
    >
      <div class="card-info__media">
        <img
          :src="repo.owner.avatar_url"
          :alt="repo.owner.login"
          class="card-info__image"
        />
      </div>
      <div class="card-info__information">
        <h3 class="card-info__title">
          {{repo.name}}
        </h3>
        <div class="card-info__details">
          <span class="card-info__starts">
            <i class="fa fa-star"></i>
            {{repo.stargazers_count}}
          </span>
          <span class="card-info__website">
            <i class="fa fa-mouse-pointer"></i>
            {{repo.homepage}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rep: {
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    updateRepoSelected() {
      this.$emit('updateRepoSelected', this.rep)
    },
  },
  data() {
    return {
      loading: true,
      objectKeys: 0,
      repo: {},
    }
  },
  mounted() {
    this.objectKeys = Object.keys(this.rep).length
    if (this.objectKeys > 0) {
      this.repo = this.rep
      this.loading = false
    }
  },
}
</script>
<style>
.card-info{
  display: flex;
  justify-content: center;
  margin: 0px 25px 25px 25px;
  flex: 1;
  cursor: pointer;
}

.card-info__container{
  padding: 25px;
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  width: 100%;
}

.card-info__image {
  width: 20%;
}

.card-info__title
{
  margin: 0px;
}

.card-info__details
{
  display: flex;
  justify-content: space-evenly;
}
</style>
