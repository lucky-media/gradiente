import "@fontsource/syne/400.css";
import "@fontsource/syne/500.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/dm-sans";
import Alpine from "alpinejs";
import { Demo } from "./alpine/Demo";
import resize from "@alpinejs/resize";
import collapse from "@alpinejs/collapse";

Alpine.plugin(resize);
Alpine.plugin(collapse);

window.Alpine = Alpine;

Alpine.data("demo", Demo);

Alpine.start();
