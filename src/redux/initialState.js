import { icons } from "../assets";
import CommandLineApp from "../comps/CommandLineApp";
import FileExplorerApp from "../comps/FileExplorerApp";
import SettingsApp from "../comps/SettingsApp";
import { WIN_FEATURES } from "../const/winSize";
import { newActiveWindow } from "./feat/desktopSlice";

const initialState = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "지금 김현우 개발자에게 메시지를 보내보세요!"
        );
        window.open(
          `https://wa.me/+821025863069?text=${textMessage}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 28,
      height: 28,
      onClick: () => {
        window.open(
          "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=32229226&qvt=0&query=%EA%B9%80%ED%98%84%EC%9A%B0%20IT%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 28,
      height: 28,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
  ],
  shortcutApps: [
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=32229226&qvt=0&query=%EA%B9%80%ED%98%84%EC%9A%B0%20IT%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "GitHub",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://github.com/madeffort", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "LinkedIn",
      icon: icons.apps.linkedin,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://linkedin.com/in/madeffort",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 35,
      height: 35,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "지금 김현우 개발자에게 메시지를 보내보세요!"
        );
        window.open(
          `https://wa.me/+821025863069?text=${textMessage}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Command Prompt",
      icon: icons.apps.winCMD,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },
    // {
    //   name: "Windows Defender",
    //   icon: icons.apps.winDefender,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "Mail",
      icon: icons.apps.winMail,
      width: 35,
      height: 35,
      onClick: () => (window.location.href = "mailto:madeffort0903@gmail.com"),
    },
    // {
    //   name: "Search",
    //   icon: icons.apps.winSearch,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
    // {
    //   name: "Trash Full",
    //   icon: icons.apps.winTrashFull,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
  ],
};

export default initialState;
