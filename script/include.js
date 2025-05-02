document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-include]').forEach(el => {
        const file = el.getAttribute("data-include");
        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error(`Error al cargar ${file}`);
                return res.text();
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(err => {
                el.innerHTML = `<p style="color:red;">No se pudo cargar ${file}</p>`;
                console.error(err);
            });
    });
});
