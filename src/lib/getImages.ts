/* Vite cannot have variables for glob pattern, so to use this function, you will to get images like so:
* Example:
*  const images import.meta.glob('../images/logo/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
* Then pass the images to this function.
*/
export function getImageByNameOrFirst(images: Record<string, { default: string }>, name?: string): string | undefined {
if (name) {
    const entry = Object.entries(images).find(([path]) => path.includes(name));
    if (entry) return entry[1].default;
}
return Object.values(images)[0]?.default;
}
