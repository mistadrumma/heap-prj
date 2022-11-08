<template>
  <div class="card mb-5" >
    <header class="card-header">
      <figure class="image is-24x24 mt-3 ml-3">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <p class="card-header-title">
        Маркетинг
        <span class="subtitle is-6 pl-1">RobberNoetic</span>
      </p>
      <button class="card-header-icon" aria-label="more options">
        <b-icon
          pack="fas"
          icon="ellipsis-vertical"
          size="is-small">
        </b-icon>
      </button>
    </header>
    <div class="card-content">
      <p class="title is-4 mb-3" >
        <a class="has-text-dark" @click.prevent="openPost(id)">
        {{title}}
        </a>
      </p>
      <p>
        <a class="has-text-dark" @click.prevent="openPost(id)">
          {{body}}
        </a>
      </p>
    </div>
    <div class="card-image">
      <a class="has-text-dark" @click.prevent="openPost(id)">
        <b-image
          src="https://leonardo.osnova.io/92f6789c-a503-5b47-a918-2301de3c94e3/-/preview/1100/-/format/webp/"
          alt="A random image"
          ratio="6by4"
        ></b-image>
      </a>
    </div>
    <div class="content-footer">
      <div class="content-footer__item">
        <div class="comment_counter">
          <a href="#" class="comment_counter_count has-text-grey-light">
            <span class="comment_counter_ico">
              <b-icon
                pack="fas"
                icon="comment"
                size="is-medium">
              </b-icon>
            </span>
            <span class="comment_counter_counter_value">1</span>
          </a>
        </div>
        </div>
      <div class="content-footer__item">
          <div class="bookmarks has-text-grey-light">
              <span class="bookmarks_ico">
                <b-icon
                  pack="fas"
                  icon="bookmark"
                  size="is-medium">
                </b-icon>
              </span>
          </div>
        </div>
      <div class="content-footer__item">
        <div class="share has-text-grey-light">
            <span class="share_ico">
              <b-icon
                pack="fas"
                icon="share"
                size="is-medium">
              </b-icon>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  methods: {
    openPost(id) {
      this.$router.push('/posts/' + id)
    }
  },
}

</script>
<style scoped lang="scss">


// Общие стили для всех компонента .content-footer (подвал поста)
.content-footer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  .content-footer__item {
    display: flex;
    align-items: center;
    .comment_counter {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      .comment_counter_count {
        display: flex;
        align-items: center;
        text-decoration: none;
        .comment_counter_ico {
          margin-right: 0.25rem;
        }
        .comment_counter_counter_value {
          font-size: 0.75rem;
        }
      }
      .comment_counter_ico {
        margin-right: 0.5rem;


      }
      .comment_counter_counter_value {
        font-size: 0.75rem;
        font-weight: 700;
        text-align: center;
      }
    }
    .bookmarks {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      text-decoration: none;
      .bookmarks_ico {
        margin-right: 0.5rem;
      }
    }
    .share {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      text-decoration: none;
      .share_ico {
        margin-right: 0.5rem;
      }
    }
  }
}






</style>
