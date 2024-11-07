import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        let parsedValue;
        try {
          parsedValue = JSON.parse(savedValue);
        } catch (error) {
          console.error("Failed to parse JSON from localStorage", error);
          parsedValue = null;
        }
        if (parsedValue) {
          setSelf(parsedValue);
          // 초기 로드 시 font-size 설정
          document.documentElement.style.setProperty(
            "font-size",
            `${parsedValue.elFontSize}px`
          );
        }
      }

      onSet((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        // font-size 변경 시 동기화
        document.documentElement.style.setProperty(
          "font-size",
          `${newValue.elFontSize}px`
        );
      });

      const handleStorageChange = (event) => {
        if (event.key === key) {
          const newValue =
            event.newValue != null ? JSON.parse(event.newValue) : null;
          setSelf(newValue);
          if (newValue) {
            document.documentElement.style.setProperty(
              "font-size",
              `${newValue.elFontSize}px`
            );
          }
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  };

export const settingsState = atom({
  key: "settingsState",
  default: { theme: "light", elFontSize: 16, resolution: 1 },
  effects_UNSTABLE: [localStorageEffect("settings")],
});
