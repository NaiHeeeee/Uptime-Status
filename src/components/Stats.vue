<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
    <div 
      v-for="(item, index) in overviewItems" 
      :key="index"
      class="card-base animated-border animate-fade"
      :class="[item.containerClass]"
      @mouseenter="$event.target.classList.add('hovered')"
    >
      <div class="flex items-start justify-between relative">
        <div>
          <div class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ item.label }}
          </div>
          <div class="mt-2 text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span>{{ displayValues[index] }}</span><span v-if="item.unit">{{ item.unit }}</span>
          </div>
          <div class="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
            {{ item.desc }}
          </div>
        </div>
        <div class="p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Icon 
            :icon="item.icon" 
            class="w-6 h-6 transition-colors duration-200" 
            :class="item.iconColor" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const props = defineProps({
  monitors: {
    type: Array,
    default: () => []
  }
})

/**
 * 计算网站总数
 */
const total = computed(() => props.monitors.length)

/**
 * 计算正常网站数
 */
const normal = computed(() => props.monitors.filter(m => m.status === 2 || m.status === 1).length)

/**
 * 计算异常网站数
 */
const abnormal = computed(() => props.monitors.filter(m => m.status === 9 || m.status === 0).length)
const avgResponse = computed(() => {
  if (!props.monitors?.length) return 0
  const onlineMonitors = props.monitors.filter(m => 
    m.status === 2 && m.stats?.avgResponseTime > 0
  )
  if (!onlineMonitors.length) return 0
  return Math.round(
    onlineMonitors.reduce((acc, m) => acc + m.stats.avgResponseTime, 0) / onlineMonitors.length
  )
})

/**
 * 显示值
 */
const displayValues = ref([0, 0, 0, 0])

/**
 * 动画值
 */
const animateValue = (start, end, duration, index) => {
  const startTime = performance.now()
  const updateValue = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    displayValues.value[index] = Math.floor(start + (end - start) * progress)

    if (progress < 1) {
      requestAnimationFrame(updateValue)
    }
  }
  requestAnimationFrame(updateValue)
}

/**
 * 概览项
 */
const overviewItems = computed(() => [
  {
    label: t('stats.totalWebsites'),
    value: total.value,
    desc: t('stats.allWebsites'),
    icon: 'bi:check-circle',
    iconColor: 'text-emerald-500',
    containerClass: 'after:border-emerald-500/50 dark:after:border-emerald-400/50'
  },
  {
    label: t('stats.normalWebsites'),
    value: normal.value,
    desc: t('stats.accessNormal'),
    icon: 'bi:check-circle-fill',
    iconColor: 'text-green-500',
    containerClass: 'after:border-green-500/50 dark:after:border-green-400/50'
  },
  {
    label: t('stats.abnormalWebsites'),
    value: abnormal.value,
    desc: t('stats.accessAbnormal'),
    icon: 'bi:x-circle-fill',
    iconColor: 'text-red-500',
    containerClass: 'after:border-red-500/50 dark:after:border-red-400/50'
  },
  {
    label: t('stats.avgResponse'),
    value: avgResponse.value,
    unit: t('stats.unit'),
    desc: t('stats.networkLatency'),
    icon: 'bi:clock',
    iconColor: 'text-blue-500',
    containerClass: 'after:border-blue-500/50 dark:after:border-blue-400/50'
  }
])

/**
 * 监听每个值的变化
 */
watch(() => overviewItems.value.map(item => item.value), (newValues, oldValues) => {
  newValues.forEach((newVal, index) => {
    const oldVal = oldValues?.[index] ?? 0
    if (newVal !== oldVal) {
      animateValue(oldVal, newVal, 1000, index)
    }
  })
}, { immediate: true })

/**
 * 组件挂载时启动动画
 */
onMounted(() => {
  overviewItems.value.forEach((item, index) => {
    animateValue(0, item.value, 1000, index)
  })
})
</script>