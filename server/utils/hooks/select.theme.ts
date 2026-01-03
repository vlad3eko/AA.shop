export const setTheme = () => {
    const html = document.documentElement
    const isDark = html.getAttribute('data-theme') === 'dark'

    html.setAttribute('data-theme', isDark ? 'light' : 'dark')
}
