<template>
  <div>
    <div class="story-wrapper">
      <div class="story-block-element">
        <div class="story-block-image">
          <img src="/img/storyBlock/celebrity.png" alt="" />
        </div>
        <div class="story-block-text"></div>
      </div>
      <div class="story-block-element">
        <div class="story-block-image">
          <img src="/img/storyBlock/aboutus.png" alt="" />
        </div>
        <div class="story-block-text"></div>
      </div>
      <div class="story-block-element">
        <div class="story-block-image">
          <img src="/img/storyBlock/new.png" alt="" />
        </div>
        <div class="story-block-text"></div>
      </div>
      <div class="story-block-element">
        <div class="story-block-image">
          <img src="/img/storyBlock/hot.png" alt="" />
        </div>
        <div class="story-block-text"></div>
      </div>
      <div class="story-block-element">
        <div class="story-block-image">
          <img src="/img/storyBlock/where.png" alt="" />
        </div>
        <div class="story-block-text"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.story-wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
  max-width: 860px;
  margin: 10px auto;
  min-width: 300px;
  overflow-x: auto;
}
.story-block-image {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.story-block-image img {
  width: 90%;
}
</style>
