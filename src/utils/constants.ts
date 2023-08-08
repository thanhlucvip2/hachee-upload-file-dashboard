import { ROLES } from "./enums";
import { Roles, Sidebar } from "./type";

export const ROUTES = {
  PRIVATE: {
    LOGIN: {
      INDEX: "login",
    },
  },
  PROTECTED: {
    HOME: {
      INDEX: "",
    },
    DASHBOARD: {
      INDEX: "dashboard",
    },
    FILE_DRIVER: {
      INDEX: "file-driver",
      DRIVER: "",
      UPLOAD: "upload",
    },
  },
  PUBLIC: {
    PAGE_NOT_FOUND: {
      INDEX: "*",
    },
  },
};

export const SIDE_BAR: Sidebar[] = [
  {
    LABEL: "Home",
    ICON: "",
    ROLE: ROLES.USER as Roles,
    ROUTES: ROUTES.PROTECTED.HOME.INDEX,
  },
  {
    LABEL: "File driver",
    ICON: "",
    ROLE: ROLES.USER as Roles,
    ROUTES: ROUTES.PROTECTED.FILE_DRIVER.INDEX,
    CHILDREN: [
      {
        LABEL: "Driver",
        ICON: "",
        ROLE: ROLES.USER as Roles,
        ROUTES: ROUTES.PROTECTED.FILE_DRIVER.DRIVER,
      },
      {
        LABEL: "Upload",
        ICON: "",
        ROLE: ROLES.ADMIN as Roles,
        ROUTES: ROUTES.PROTECTED.FILE_DRIVER.UPLOAD,
      },
    ],
  },

  {
    LABEL: "Dashboard",
    ICON: "",
    ROLE: ROLES.ADMIN as Roles,
    ROUTES: ROUTES.PROTECTED.DASHBOARD.INDEX,
  },
  {
    LABEL: "Profile",
    ICON: "",
    ROLE: ROLES.USER as Roles,
    ROUTES: ROUTES.PROTECTED.DASHBOARD.INDEX,
  },
];
