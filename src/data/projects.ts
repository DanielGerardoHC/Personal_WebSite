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
    id: "sentinel-os",
    title: "SentinelOS",
    description:
      "Firewall de Próxima Generación (NGFW) basado en zonas, construido sobre Debian 13 y escrito en Go para ofrecer control perimetral avanzado con procesamiento concurrente de alta velocidad.",
    longDescription:
      "SentinelOS es un NGFW diseñado para entornos de red críticos. Desarrollado sobre la arquitectura de Debian 13 y programado íntegramente en Go, aprovecha la concurrencia nativa del lenguaje para garantizar tiempos de respuesta mínimos en la inspección de tráfico. Integra Suricata IPS para detección y prevención de intrusiones en tiempo real, proporcionando seguridad perimetral, monitorización activa y gestión eficiente del tráfico de red.",
    tags: ["Go", "Debian 13", "Suricata IPS", "NGFW", "Networking", "Linux"],
    images: [
    ],
    liveUrl: "https://sentinelos.sentinelapps.net/",
    repoUrl: "#",
    docsUrl: "https://sentinelos.sentinelapps.net/",
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
