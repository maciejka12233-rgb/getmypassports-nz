import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Root deploy (Cloudflare Pages / custom domain). For GitHub project pages set base: '/getmypassports-nz/'
export default defineConfig({
  plugins: [react()],
  base: "/",
});
