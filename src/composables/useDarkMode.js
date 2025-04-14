import { ref, onMounted, watch } from "vue";

export function useDarkMode() {
  const isDark = ref(localStorage.getItem("theme") === "dark" || false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  onMounted(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      isDark.value = true;
    }
  });

  return { isDark, toggleTheme };
}
