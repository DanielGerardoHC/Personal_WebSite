export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  /** Icono/logo del proyecto, mostrado junto al título */
  icon?: string;
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
      "SentinelOS es un NGFW diseñado para entornos de red críticos. Desarrollado sobre la arquitectura de Debian 13 y programado íntegramente en Go, aprovecha la concurrencia nativa del lenguaje para garantizar tiempos de respuesta mínimos en la inspección de tráfico. Integra Suricata IPS para detección y prevención de intrusiones en tiempo real, proporcionando seguridad perimetral, monitorización activa y gestión eficiente del tráfico de red. Está especializado en el análisis de redes SCADA industriales, el análisis de paquetes y la seguridad de PLC en entornos de producción.",
    tags: ["Go", "Debian 13", "Suricata IPS", "NGFW", "SCADA / OT", "Networking", "Linux"],
    images: [
    ],
    liveUrl: "https://sentinelos.sentinelapps.net/",
    repoUrl: "#",
    docsUrl: "https://sentinelos.sentinelapps.net/",
    featured: true,
  },
  {
    id: "mascota-segura-sv",
    title: "MascotaSeguraSV",
    description:
      "Aplicación móvil nativa para Android que ayuda a encontrar mascotas perdidas con el apoyo de una comunidad conectada, mediante reportes con ubicación GPS exacta.",
    longDescription:
      "MascotaSeguraSV es la aplicación diseñada para ayudarte a encontrar a tu mascota perdida con el apoyo de toda una comunidad conectada. Registra a tus mascotas, reporta extravíos con ubicación GPS exacta y permite que otros usuarios te notifiquen si la ven. Desarrollada nativamente para Android en Java, incorpora generación de volantes, reporte de avistamientos y seguimiento en tiempo real de la ubicación mediante dispositivos IoT (GPS) con cobertura global. Ganadora de la Expo Mobile Solutions de ITCA-FEPADE y publicada en Google Play Store.",
    tags: ["Java", "Android", "GPS / IoT", "Google Maps", "Play Store"],
    icon: "/images/MascotaSeguraSv-icon.png",
    images: ["/images/MascotaSeguraSv-playstore.png"],
    liveUrl: "https://mascotasegurasv.sentinelapps.net/",
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
