<template>
  <div class="external_link_container">
    <div class="external_link_prize_text">
      <div class="prize_amount">{{ $t(prizeKey) }}</div>
      <div class="prize_description">{{ $t(descriptionKey) }}</div>
    </div>
    <a @click="handleClick" class="external_link_button">
      <div class="external_link_btn">{{ $t(ctaKey) }}</div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface DefaultPromoProps {
  externalLink: {
    url: string
    localeKey: string
  }
  prizeKey: string
  descriptionKey: string
  ctaKey: string
  userCurrency?: string
}

const props = defineProps<DefaultPromoProps>()

const emit = defineEmits<{
  (event: 'go-to-external-link', url: string): void
}>()

function handleClick(): void {
  emit('go-to-external-link', props.externalLink.url)
}
</script>

// Стили для DefaultPromo в файле styles.scss
