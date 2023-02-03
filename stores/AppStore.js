import { defineStore } from "pinia";
export const useAppStore = defineStore("AppStore", {
  state: () => {
    return {
      randomColor: "#ff0000",
      justification: "justify-center",
    };
  },
  actions: {
    fetchRandomColor() {
      const arrColors = ["#FF4143", "#FF9C04", "#07AD1B", "#2D7EF0", "#8922CB"];
      this.randomColor =
        arrColors[Math.floor(Math.random() * arrColors.length)];
    },
    setJustification(j) {
      if (
        j === "justify-center" ||
        j === "justify-end" ||
        j === "justify-start"
      ) {
        this.justification = j;
      }
    },
  },
});
