<template>
  <div class="final_popup_container">
        <div class="final_popup_title">{{ title }}</div>
        <div class="final_popup_subtitle">{{ subtitle }}</div>
        <div class="final_popup_button">
            <button @click="$emit('rewatch-trends')">{{ buttonText }}</button>
        </div>
        <div class="evaluation_block"
        v-if="showEvaluationBlock"
        >
            <div class="evaluation_block_title">{{ evaluationTitle }}</div>
            <div 
              class="evaluation_block_smiles">
              <img 
                class="evaluation_block_smiles_item" 
                src="/smiles/bad.webp" 
                @click="onFeedbackValuated(':(')" 
                alt="smile"
              >
              <img 
                class="evaluation_block_smiles_item" 
                src="/smiles/good.webp" 
                @click="onFeedbackValuated(':)')" 
                alt="smile"
              >
              <img 
                class="evaluation_block_smiles_item" 
                src="/smiles/amaizing.webp" 
                @click="onFeedbackValuated('<3')" 
                alt="smile"
              >
            </div>
            
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import { sendReelsFeedbackValuated } from './parentMessages'

interface GameInfoProps {
  title: string
  subtitle: string
  buttonText: string
  evaluationTitle: string
}

const props = defineProps<GameInfoProps>()

const showEvaluationBlock = ref(true)

function onFeedbackValuated(feedback: string) {
  sendReelsFeedbackValuated("", "", "", "", feedback)
  showEvaluationBlock.value = false
  localStorage.setItem('evaluationBlockShown', 'true')
}

// onMounted(() => {
//   const evaluationBlockShown = localStorage.getItem('evaluationBlockShown')
//   if (evaluationBlockShown) {
//     showEvaluationBlock.value = false
//   }
// })
</script>

<style scoped>
.final_popup_container {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
}

.final_popup_title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%;
  color: #F7F7F7;
  font-family: "Sora", system-ui;
  font-optical-sizing: auto;
  text-align: center;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.final_popup_subtitle {
  margin-top: 7px;
  font-size: 16px;
  font-weight: 400;
  color: #B6BDCC;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: "Sora", system-ui;
  font-optical-sizing: auto;
  text-align: center;
  position: relative;
  width: 100%;
}

.final_popup_button {
  font-family: "Sora", system-ui;
  font-optical-sizing: auto;
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 100%;
    height: 50px;
    background-color: #00EDA6;
    color: #110E1B;
    height: 40px;
    padding: 8px 16px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    line-height: 150%;
    font-family: "Sora", system-ui;
    font-optical-sizing: auto;
  }
  button:hover {
    background-color: #01d394;
  }
}

.evaluation_block {
  position: relative;
  width: 100%;
  background-color: #30284C;
  border-radius: 16px;
  margin-top: 20px;
}
.evaluation_block_title {
  font-size: 16px;
  font-weight: 700;
  color: #B6BDCC;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: "Sora", system-ui;
  font-optical-sizing: auto;
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 15px;
}

.evaluation_block_smiles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-bottom: 20px;
  padding-top: 10px;
} 

.evaluation_block_smiles_item {
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
}

</style>
