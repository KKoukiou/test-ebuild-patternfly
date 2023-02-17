import esbuild from "esbuild";

const context = await esbuild.context({
    bundle: true,
    entryPoints: ["./test.jsx"],
    external: ['*.woff', '*.woff2', '*.jpg', '*.svg', '../../assets*'],
    loader: { ".js": "jsx" },
    outdir: "./dist",
    target: ['es2020'],
});

await context.rebuild()
context.dispose();
