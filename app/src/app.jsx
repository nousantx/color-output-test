import { useLayoutEffect } from 'preact/hooks'
import { init, createConfig } from '@nousantx/tenoxui-styler'
import { allColors } from '../../dist/index.esm.js'

const colors = Object.keys(allColors)

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export function App() {
  useLayoutEffect(() => {
    init({ config: createConfig({ color: allColors }) })
  }, [])

  return (
    <main class="p-2rem">
      <div
        className="mt-2rem bg-red flex flex-w-wrap gap-4rem"
        child="
          (.color__title): fs-1.5rem fw-500 [tn]-capitalize;
          (.color__wrapper): mt-12px pl-1rem flex flex-w-wrap;
          (.color__wrapper-shades): flex flex-col;
          (.color__shade-count): mt-6px fs-12px text-neutral-700;
          (.color__box): mt-8px ml--1rem box-56px br-1rem shadow-md;
        "
      >
        {colors.map((color) => (
          <div key={color} class="color">
            <h2 class="color__title">{color}</h2>
            <div class="color__wrapper">
              {shades.map((shade) => (
                <div key={shade} class="color__wrapper-shades">
                  <div
                    class={`color__box bg-${color}-${shade}`}
                    title={`bg-${color}-${shade}`}
                  ></div>
                  <span class="color__shade-count">{shade}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
