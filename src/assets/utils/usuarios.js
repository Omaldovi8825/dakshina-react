class RolUsario {
    constructor(id, nombre, secciones){
        this.id = id
        this.nombre = nombre
        this.secciones = secciones
    }
}

class AccionUsuario {
    constructor( id, titulo, link, icon){
        this.id = id
        this.titulo = titulo
        this.link = link
        this.icon = icon
    }
}

class Usuario {
    constructor( id, nombre, apellidos, email, password, rol ){
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.password = password
        this.rol = rol
    }
}

const REGISTRO_USUARIO = new AccionUsuario( 1, 'Registrar usuario', '/usuarios/registro', 'bi-person-add')
const SOLCIITUD_PRESUPUESTO = new AccionUsuario( 2, 'Solicitud de presupuesto', '/solicitudes/presupuestos/registro', 'bi-ui-checks' )
const SOLCIITUDES = new AccionUsuario( 3, 'Solicitudes', '/solicitudes/presupuestos', 'bi-ui-radios' )
const REGISTRO_ASIMILADOS = new AccionUsuario( 4, 'Registro asimilados', '/asimilados/registro', 'bi-person-bounding-box' )

const SUPER_USUARIO = new RolUsario( 1, 'SUPER_USUARIO', [ REGISTRO_USUARIO, SOLCIITUD_PRESUPUESTO, SOLCIITUDES, REGISTRO_ASIMILADOS ])
const ADMINISTRADOR = new RolUsario( 2, 'ADMINISTRADOR', [ SOLCIITUD_PRESUPUESTO, REGISTRO_ASIMILADOS ])

const usuarios = [
    new Usuario( 1, 'Isabel', 'Flores', 'iflores@dakshina.org.mx', '123', SUPER_USUARIO ),
    new Usuario( 2, 'Omar', 'Maldonado', 'omar.maldo.vi@gmail.com', '123', ADMINISTRADOR )
]

export { usuarios }