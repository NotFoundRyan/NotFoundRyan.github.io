/*
 * Redefine theme main entry point
 *
 * @package: @redefinejs\theme
 * @author:  Ryan Chen
 * @link:    https://github.com/NotFoundRyan/hexo-theme-redefine
 */
import * as utils from './utils/index.js';
import * as tools from './tools/index.js';
import theme from './config/theme.js';

export const main = {
  themeInfo: {
    theme: `Redefine v${theme.version}`,
    author: "Ryan Chen",
    repository: "https://github.com/NotFoundRyan/hexo-theme-redefine",
  },
  localStorageKey: "REDEFINE-THEME-STATUS",
  styleStatus: {
    isExpandPageWidth: false,
    isDark: theme.colors.default_mode && theme.colors.default_mode === "dark",
    fontSizeLevel: 0,
    isOpenPageAside: true,
  },
  printThemeInfo: () => {
    console.log(
      `      ______ __  __  ______  __    __  ______                       \r\n     \/__  _\/\ \_\ \/\  ___\/\ "-.\/  \/\  ___\                      \r\n     \\/_\/\ \\ \  __ \ \  __\\ \ \-.\/\ \ \  __\                      \r\n        \ \_\\ \_\ \_\ \_____\ \_\ \ \_\ \_____\                    \r\n         \\/_\/ \\/_\/\/_\/_____\/_\/  \\/_\/\/_____\                    \r\n                                                               \r\n ______  ______  _____   ______  ______ __  __   __  ______    \r\n\/\  == \\/\  ___\/\  __-.\/\  ___\/\  ___\/\ \\/\ "-.\ \\/\  ___\   \r\n\\ \  __<\\ \  __\\ \ \/\ \ \  __\\ \  __\ \ \ \ \-.  \ \  __\   \r\n \ \_\ \_\ \_____\ \____-\ \_____\ \_\  \ \_\ \_\\"\_\ \_____\ \r\n  \\/_\/ \/_\/_____\/____\/ \/_____\/\/   \\/_\/\/\/_\/\/\/_____\r\n                                                               \r\n  Github: https:\/\/github.com\/NotFoundRyan\/hexo-theme-redefine`,
    ); // console log message
  },
  setStyleStatus: () => {
    localStorage.setItem(
      main.localStorageKey,
      JSON.stringify(main.styleStatus),
    );
  },
  getStyleStatus: () => {
    let temp = localStorage.getItem(main.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in main.styleStatus) {
        main.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  },
  setStyleStatusToDefault: () => {
    localStorage.setItem(
      main.localStorageKey,
      JSON.stringify({
        isDark: theme.colors.default_mode && theme.colors.default_mode === "dark",
        fontSizeLevel: 0,
        isExpandPageWidth: false,
        isOpenPageAside: true,
      }),
    );
    main.getStyleStatus();
  },
  init: () => {
    main.printThemeInfo();
    main.getStyleStatus();
    utils.init();
    tools.init();
  },
};

// Initialize theme when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main.init);
} else {
  main.init();
}