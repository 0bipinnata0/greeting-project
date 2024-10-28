import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    { format: "cjs", file: "./lib/index.cjs" },
    {
      format: "esm",
      file: "./lib/index.esm.js",
    },
  ],
  plugins: [
    del({ targets: "lib/*" }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
});
