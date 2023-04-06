$(document).ready(myApp)


function myApp() {

    // Carrega a págine inicial.
    loadpage('user')

}

// Carrega uma página.
// O caminho final de página é passado como parâmentro da função
function loadpage(page) {



    // Monta os caminhos para os componentes da página solicitadas
    const path = {
        html: `/pages/${page}/index.html`,
        css: `/pages/${page}/index.css`,
        js: `/pages/${page}/index.js`,

    }

    $.get(path.html)
        .done((data) => {
            $('main').html(data)
            })
            .fail((error) => {
             loadpage('e404')
})
}