import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import accountSearch from "./accountSearch";

export const story = () => createElement("c-accountSearch", { is: accountSearch });
