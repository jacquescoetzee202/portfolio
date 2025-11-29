import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

const ReactCompilerConfig = {
  logger: {
    logEvent(filename: string, event: { kind: 'CompileSuccess' | 'CompileError' }) {
      if (event.kind === 'CompileSuccess') {
        console.log('Compiled:', filename);
      }
    }
  }
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
});
