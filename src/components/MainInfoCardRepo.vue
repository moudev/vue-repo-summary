<template>
  <div class="main-card-info">
    <div
      class="main-card-info__no-data"
      v-if="loading"
    >
      Loading data...
    </div>
    <div class="main-card-info__container" v-else-if="objectKeys > 0">
      <div class="main-card-info__media">
        <img
          :src="repo.owner.avatar_url"
          :alt="repo.owner.login"
          class="main-card-info__image"
        />
      </div>
      <div class="main-card-info__information">
        <h3 class="main-card-info__title">
          {{repo.name}}
        </h3>
        <span class="main-card-info__description">
          {{repo.description}}
        </span>
        <div class="main-card-info__details">
          <span class="main-card-info__starts">
            <i class="fa fa-star"></i>
            {{repo.stargazers_count}}
          </span>
          <span class="main-card-info__forks">
            <i class="fa fa-share-alt-square"></i>
            {{repo.forks}}
          </span>
          <span class="main-card-info__website">
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
    repository: {
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      loading: true,
      objectKeys: 0,
      repo: {},
    }
  },
  watch: {
    repository() {
      this.objectKeys = Object.keys(this.repository).length
      this.repo = this.repository
      this.loading = false
    },
  },
}
</script>
<style>
.main-card-info{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.main-card-info__container{
  padding: 25px;
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  width: 35%;
}

.main-card-info__image {
  width: 35%;
}

.main-card-info__title
{
  margin: 0px;
  font-size: 1.5em;
}

.main-card-info__description
{
  display: inline-block;
  width: 75%;
  margin-bottom: 25px;
}

.main-card-info__details
{
  display: flex;
  justify-content: space-evenly;
}
</style>
