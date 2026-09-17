import { spawn } from "node:child_process";

const PORT = process.env.PORT || 3001;

console.log(`Iniciando DomiFast API en el puerto ${PORT}...`);

const servidor = spawn(
  "npx",
  [
    "json-server",
    "db.json",
    "--port",
    String(PORT),
    "--host",
    "0.0.0.0"
  ],
  {
    stdio: "inherit",
    shell: true
  }
);

servidor.on("error", (error) => {
  console.error(
    "Error al iniciar JSON Server:",
    error
  );
});

servidor.on("close", (codigo) => {
  console.log(
    `JSON Server finalizado con código: ${codigo}`
  );
});