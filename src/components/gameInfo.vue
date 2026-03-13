<template>
  <div class="game_info_container" :class="{ 'no-background': externalLink }">
    <!-- Стандартные элементы отображаются только если нет external_link -->
    <template v-if="!externalLink">
      <img class="game_info_thumb" :src="thumb" alt="" />
      <div class="game_text_column">
        <div class="game_name">{{ name }}</div>
        <a @click="$emit('go-to-provider', provider_link)">
          <div class="game_provider">{{ provider }}</div>
        </a>
      </div>

      <a v-if="!isDemoDisabled || isUserLogedIn" @click="$emit('play-game', gameId)">
        <div class="game_play_button">{{ buttonText }}</div>
      </a>

      <a
        v-else
        @click="
          $emit(
            'go-to-external-link',
            '/registration?utm_source=site&utm_medium=reels&utm_campaign=trends'
          )
        "
      >
        <div class="game_play_button">{{ signUpButton }}</div>
      </a>
    </template>

    <!--
      Рендер промо-блока: компонент выбирается по localeKey через promoRegistry.
      Если localeKey не найден, используется DefaultPromo.
    -->
    <component
      v-else-if="promoConfig"
      :is="promoConfig.component"
      :external-link="externalLink"
      :prize-key="promoConfig.prizeKey"
      :description-key="promoConfig.descriptionKey"
      :cta-key="promoConfig.ctaKey"
      :user-currency="userCurrency"
      @go-to-external-link="$emit('go-to-external-link', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WinterPromo from './WinterPromo.vue'
import DefaultPromo from './DefaultPromo.vue'

/**
 * Пропсы от родителя (App.vue).
 * userCurrency — ISO-4217 код валюты, уже распарсенный из query.
 */
interface GameInfoProps {
  thumb: string
  provider_link: string
  name: string
  provider: string
  gameId: string
  buttonText: string
  noDemo?: boolean
  isUserLogedIn: boolean
  signUpButton: string
  externalLink?: { url: string; localeKey: string } // если есть → рендерим промо
  userCurrency?: string // напр. 'USD', 'EUR'
}

/** Конфиг промо. Расширяется добавлением новых записей в promoRegistry. */
interface PromoConfig {
  component: any
  prizeKey: string
  descriptionKey: string
  ctaKey: string
}

const props = defineProps<GameInfoProps>()

const isDemoDisabled = computed(() => Boolean(props.noDemo))

// Реестр промо-компонентов: выбор по localeKey.
// Для добавления нового промо добавь запись в promoRegistry ниже.
const promoRegistry: Record<string, PromoConfig> = {
  winter_promo: {
    component: WinterPromo,
    prizeKey: 'winter_promo_link_prize',
    descriptionKey: 'winter_promo_description',
    ctaKey: 'winter_promo_link_text',
  },
  default: {
    component: DefaultPromo,
    prizeKey: 'external_link_prize',
    descriptionKey: 'external_link_description',
    ctaKey: 'external_link_button',
  },
}

// Активное промо. Если externalLink не задан — промо не показываем.
const promoConfig = computed(() => {
  if (!props.externalLink) return null
  return promoRegistry[props.externalLink.localeKey] ?? promoRegistry.default
})
</script>
