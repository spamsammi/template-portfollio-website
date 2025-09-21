// Utility functions for image imports using Vite's import.meta.glob

export function getImageByNameOrFirst(images: Record<string, { default: string }>, name?: string): string | undefined {
if (name) {
    const entry = Object.entries(images).find(([path]) => path.includes(name));
    if (entry) return entry[1].default;
}
return Object.values(images)[0]?.default;
}
