export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  images: string[];
  videoUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Aplicación de escritorio para administrar tareas de distintos usuarios con persistencia en SQLite, desarrollada en WPF y .NET 8.",
    longDescription:
      "Una aplicación simple pero eficiente para administrar tareas de distintos usuarios utilizando el motor de base de datos SQLite para la permanencia de los datos. Cuenta con autenticación de usuarios, dashboard interactivo, y operaciones CRUD completas.",
    tags: [".NET 8", "WPF", "SQLite", "C#", "MVVM"],
    images: [
      "/images/TaskManagerSqlite.png",
      "/images/TM-Dashboard.PNG",
      "/images/TM-EditActions.PNG",
      "/images/TM-UserAccount.PNG",
    ],
    repoUrl: "https://github.com/DanielGerardoHC/TaskManager_With_SQlite",
    docsUrl: "https://github.com/DanielGerardoHC/TaskManager_With_SQlite",
    featured: true,
  },
  {
    id: "task-manager-api",
    title: "TaskManager Service API",
    description:
      "API RESTful para operaciones CRUD sobre SQL Server, diseñada como backend del Task Manager en arquitectura cliente-servidor.",
    longDescription:
      "Una API de tipo RESTful que se encarga de manejar las operaciones CRUD a una base de datos SQL Server, con la finalidad de ser utilizada por una versión de Task Manager adaptada al patrón cliente-servidor. Desarrollada en .NET 8 con Entity Framework y documentada con Swagger.",
    tags: [".NET 8", "Entity Framework", "SQL Server", "REST API", "Swagger"],
    images: [
      "/images/TMSA-Tasks.png",
      "/images/TMSA-Users.PNG",
      "/images/TMSA-Schems.PNG",
    ],
    repoUrl: "https://github.com/DanielGerardoHC/TaskManagerServiceAPI",
    docsUrl: "https://github.com/DanielGerardoHC/TaskManagerServiceAPI",
    featured: true,
  },
  // ───────────────────────────────────────────
  // Para agregar un nuevo proyecto, copia este template:
  // ───────────────────────────────────────────
  // {
  //   id: "mi-nuevo-proyecto",
  //   title: "Nombre del Proyecto",
  //   description: "Descripción corta del proyecto.",
  //   longDescription: "Descripción detallada...",
  //   tags: ["Tech1", "Tech2"],
  //   images: ["/images/screenshot1.png", "/images/screenshot2.png"],
  //   videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  //   liveUrl: "https://mi-proyecto.com",
  //   repoUrl: "https://github.com/user/repo",
  //   docsUrl: "https://docs.mi-proyecto.com",
  //   featured: false,
  // },
];
