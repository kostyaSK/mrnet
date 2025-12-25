const LIGHT_COLOR = "#FF4C00";
const LIGHT_SIZE = 160;

export interface Light {
  top: number; // %
  left: number; // %
  size: number; // px
  color: string;

  city?: {
    name: string;
    people: string;

    labelPosition?: "top" | "bottom" | "left" | "right";
  };
}

export const lights: Light[] = [
  {
    top: 62,
    left: 49,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 70,
    left: 54,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 47,
    left: 94,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 42,
    left: 51,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 55,
    left: 69,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 66,
    left: 63,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 53,
    left: 62,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 37,
    left: 16,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Санкт-Петербург",
      people: "8 931 394 46 11",
    },
  },
  {
    top: 41,
    left: 30,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 47,
    left: 35,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 50,
    left: 27,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 47,
    left: 21,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 55,
    left: 15,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 31,
    left: 82,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 65,
    left: 11,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 56,
    left: 55,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 67,
    left: 41,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 59,
    left: 34,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 55,
    left: 42,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 68,
    left: 72,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 39,
    left: 73,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 53,
    left: 77,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 45,
    left: 83,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 77,
    left: 88,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 52,
    left: 18,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
  },
  {
    top: 89,
    left: 86,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Владивосток",
      people: "8 902 635 22 39",
    },
  },
  {
    top: 78,
    left: 42,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Новосибирск",
      people: "8 902 635 22 39",
    },
  },
  {
    top: 65,
    left: 5,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Краснодар",
      people: "8 993 307 01 77",
    },
  },
  {
    top: 64,
    left: 28,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Екатеринбург",
      people: "8 902 635 22 39",
    },
  },
  {
    top: 67,
    left: 27,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Челябинск",
      people: "8 922 636 86 06",

      labelPosition: "bottom",
    },
  },
  {
    top: 58,
    left: 21,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Казань",
      people: "8 904 769 96 54",
    },
  },
  {
    top: 48,
    left: 14,
    size: LIGHT_SIZE,
    color: LIGHT_COLOR,
    city: {
      name: "Москва",
      people: "8 800 600 35 38",
    },
  },
];
