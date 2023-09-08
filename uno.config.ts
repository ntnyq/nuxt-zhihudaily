import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        color: 'inherit',
      },
    }),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
})
