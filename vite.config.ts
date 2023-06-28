import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});

// resource users
// GET api/v1/users (list all resources) Auth
// POST api/v1/users (create resource)
// POST api/v1/reports (create resource) Auth

// GET api/v1/users/:id (get detail resources) Auth
// PUT api/v1/users/:id (update resource) Auth
// DELETE api/v1/users/:id (update resource) Auth

// POST /api/login -> token (user)

// Request header
// Authorization: Token
