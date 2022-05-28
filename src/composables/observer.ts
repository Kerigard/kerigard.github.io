import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export const useIntersectionObserver = (vnode: Ref<Element | undefined>) => {
  const isIntersecting = ref(false)
  const isIntersectingOnce = ref(false)

  const observer = new IntersectionObserver(([node]) => {
    isIntersecting.value = node.isIntersecting

    if (!isIntersectingOnce.value && node.isIntersecting) {
      isIntersectingOnce.value = true
    }
  })

  watch(
    vnode,
    (val, old) => {
      if (old) {
        observer.unobserve(old)
      }
      if (val) {
        observer.observe(val)
      }
    },
    { immediate: true },
  )

  return { isIntersecting, isIntersectingOnce }
}
