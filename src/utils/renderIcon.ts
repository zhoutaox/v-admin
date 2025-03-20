import { NIcon } from 'naive-ui'
import { h } from 'vue'
export function renderIcon(icon: string) {
  return () => {
    icon = icon.startsWith('bs-icon-') ? icon : 'bs-icon-' + icon
    return h(NIcon, null, {
      default: () =>
        h(
          'svg',
          {
            'aria-hidden': 'true',
            style: {
              width: '0.9em',
              height: '0.9em',
            },
          },
          [h('use', { 'xlink:href': '#' + icon })],
        ),
    })
  }
}
