// app/fonts.ts
import localFont from "next/font/local";

export const grato = localFont({
  src: [
    {
      path: "../public/fonts/grato-grotesk-demo-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/grato-grotesk-demo-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/grato-grotesk-demo-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/grato-grotesk-demo-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
