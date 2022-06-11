<script lang="ts">
    import { formatHex } from 'culori'
    import type { BaseColor, Types } from './types'

    const adjustHue = (val: number): number => {
        if (val < 0) {
            val += Math.ceil(-val / 360) * 360
        }
        return val % 360
    }

    const createPalettes = (baseColor: BaseColor) => {
        const targetHueSteps: Record<Types, number[]> = {
            analogous: [0, 30, 60],
            triadic: [0, 120, 240],
            tetradic: [0, 90, 180, 270],
            complementary: [0, 180],
            splitComplementary: [0, 150, 210]
        };

        const palettes: Record<Types, BaseColor[]> = {
            analogous: [],
            complementary: [],
            splitComplementary: [],
            tetradic: [],
            triadic: []
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

    const someBaseColor: BaseColor = {
        l: 50 + Math.random() * 10,
        c: 60 + Math.random() * 10,
        h: Math.random() * 360,
        mode: 'lch'
    }

    const palettes = createPalettes(someBaseColor)
    const triad = palettes.splitComplementary.map((colorLCH) => formatHex(colorLCH))

    console.log({
        palettes,
        triad
    })
</script>

<style>
    .chapter-two {
        width: 100%;
        height: 400px;
        border: 1px solid #000;
        padding: 60px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        font-size: 80px;
        line-height: 0;
    }

    p {
        width: 75%;
        line-height: 1;
    }

</style>

<main>
    <section class="chapter-two" style="background-color: {triad[0]};">
        <h2 style="color: {triad[1]};">Lorem ipsum</h2>
        <p style="color: {triad[2]};">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a diam vel ligula cursus fermentum. Maecenas quis eros ultricies, vestibulum erat et, consequat ipsum. Quisque varius sem eget ipsum viverra, et dictum sapien laoreet. Curabitur in lobortis orci. Duis ac orci sapien. In ac tortor at massa posuere rutrum. Pellentesque sed ex in lorem feugiat finibus et ut sem. Integer tempor sed dolor in congue. Cras ut lobortis erat. Aliquam erat volutpat. Fusce suscipit efficitur ex cursus rhoncus. Vestibulum libero orci, viverra et arcu ac, pharetra tempor neque.</p>
    </section>
</main>
