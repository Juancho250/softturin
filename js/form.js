
const $form = document.querySelector('#formspree')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault( )
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        Swal.fire({
            title: "Gracias por contactarnos, te escribiremos pronto",
            showClass: {
                popup: "animate__animated animate__fadeIn", // Animación de entrada
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut", // Animación de salida
            },
            confirmButtonColor: "#fd0000" // Color del botón de confirmación
        });         
    }
}