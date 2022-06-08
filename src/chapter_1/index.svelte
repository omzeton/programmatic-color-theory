<script lang="ts">
    import type { BaseColor, Types } from './types'

    const adjustHue = (val: number): number => {
        if (val < 0) {
            val += Math.ceil(-val / 360) * 360
        }
        return val % 360
    }

    const createPalettes = (baseColor: BaseColor) => {
        const targetHueSteps: { [k in Types]: number[] } = {
            analogous: [0, 30, 60],
            triadic: [0, 120, 240],
            tetradic: [0, 90, 180, 270],
            complementary: [0, 180],
            splitComplementary: [0, 150, 210]
        };

        const palettes: { [k in Types]: BaseColor } = {
            analogous: { c: 0, l: 0, h: 0, mode: 'lch' },
            complementary: { c: 0, l: 0, h: 0, mode: 'lch' },
            splitComplementary: { c: 0, l: 0, h: 0, mode: 'lch' },
            tetradic: { c: 0, l: 0, h: 0, mode: 'lch' },
            triadic: { c: 0, l: 0, h: 0, mode: 'lch' }
        }

        for (const type of Object.keys(targetHueSteps)) {
            palettes[type] = targetHueSteps[type].map((step: number) => ({
                l: baseColor.l,
                c: baseColor.c,
                h: adjustHue(baseColor.h + step),
                mode: 'lch'
            }))
        }

        return palettes
    }
</script>

<main>
    <p>Chapter 1</p>
</main>