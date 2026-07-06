// orval.config.ts
import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "http://localhost:3000/swagger-json",
    },
    output: {
      mode: "split",
      target: "./src/api/hooks.tsx",
      schemas: "./src/api/models",
      operationSchemas: "./src/api/operation-types",
      client: "react-query",
      // 👇 Настройка базового URL
      baseUrl: {
        runtime: "env.backendUrl",
        imports: [
          {
            name: "env",
            importPath: "@/config/env",
          },
        ],
      },
    },
  },
});
