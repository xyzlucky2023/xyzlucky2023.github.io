<template>
  <h2>{{ $t("message.msg1") }}</h2>
  <br><br>
  <h3>{{ $t("message.msg2") }}</h3>
  <br><br>
  <h3>
    {{ $t("message.msg3") }}<br>
    {{ $t("message.msg4") }}<br>
    {{ $t("message.msg5") }}<br><br>
    <a href="https://apps.apple.com/app/id6444668239" text-color="red">{{ $t("message.lucky") }}</a>
    {{ $t("message.msg6") }}
  </h3>
<div class="content">
  <div class="scroll">
    <div class="item">
    <img class="screen" src="@/assets/screen_en.png"/>
  </div>
  </div>
</div>
</template>

<style scoped>
a {
  color: #e25822;
}

.screen {
  display: flex;
  padding: 20px;
  max-height: 450px;
}

.info {
  display: flex;
  width: 180px;
  padding-bottom: 20px;
}

.item {
  display: block;
  place-content: center;
  margin-right: 2rem;
}

.content {
  margin-top: 30px;
}

.scroll {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100%;
}
  
</style>
