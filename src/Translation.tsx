
export const translator = {

    isEnglish: true,

    toggleLanguage: () => {
        translator.isEnglish = !translator.isEnglish;
        return translator.isEnglish;
    },

    getText: () => {
        return translator.isEnglish ? {
            translation: translator.englishText,
        } : {
            translation: translator.spanishText,
        }
    },

    englishText: {
        navbar: {
            work: "Work",
            education: "Education",
            resume: "Resume",
        },
        workCards: [
            {
                title: "Amazon Trends",
                description: "API for analizing trending products in Amazon.",
                image: "webScraper.png",
            },
            {
                title: "Reading Network",
                description: "Platform for sharing book reviews, connecting readers, tracking your progress and more!",
                image: "readappUser.png",
            },
            {
                title: "Database Management",
                description: "App for administrating efficiently your local databases.",
                image: "fileManager.png",
            },
        ]
    },
    
    spanishText: {
        navbar: {
            work: "Trabajo",
            education: "Formación",
            resume: "Currículum",
        },
        workCards: [
            {
                title: "Tendencias de Amazon",
                description: "API para analizar tendencias en productos de Amazon.",
                image: "webScraper.png",
            },
            {
                title: "Red de Lectura",
                description: "Platforma para compartir reseñas, conectar lectores, registrar tu progreso y mucho más!",
                image: "readappUser.png",
            },
            {
                title: "Gestión de Bases de Datos",
                description: "App para administrar eficientemente bases de datos locales.",
                image: "fileManager.png",
            },
        ]
    },
}