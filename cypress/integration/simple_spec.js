describe('Los estudiantes login', function() {
    it('Visits los estudiantes and success at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("dt.macias@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('cuenta')
    })
})

describe('Los estudiantes sign up', function() {
    it('Visits los estudiantes and signs up', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("tatiana")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("cardenas")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("dt.macias@uniandes.edu.co")
        cy.get('.cajaSignUp').contains('Estudio una maestria').click()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.cajaSignUp').contains('Acepto los términos y condiciones y la política de privacidad.').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains("Error: Ya existe un usuario registrado con el correo 'dt.macias@uniandes.edu.co'")
    })
})

describe('Los estudiantes search success', function() {
    it('Visits los estudiantes and success at search', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('div[class="Select-placeholder"]').click().type("Mario Linares")
        cy.get('.buscador').find('div[class="Select-option-group"]').contains('profesores')
    })
})

describe('Los estudiantes search fails', function() {
    it('Visits los estudiantes and fails at search', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('div[class="Select-placeholder"]').click().type("Tatiana Cardenas")
        cy.get('.buscador').find('div[class="Select-noresults"]').contains('No se encontraron profesores ni materias')
    })
})

describe('Los estudiantes view teacher detail', function() {
    it('Visits los estudiantes and views teacher detail', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('div[class="Select-placeholder"]').click().type("Mario Linares")
        cy.get('.buscador').find('div[id="react-select-required_error_checksum--option-0"]').click()
    })
})

describe('Los estudiantes filter success', function() {
    it('Visits los estudiantes and success at filter', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.buscador').find('div[class="Select-placeholder"]').click().type("Mario Linares")
        cy.get('.buscador').find('div[id="react-select-required_error_checksum--option-0"]').click()
        cy.get('.statsProfesorDropdown').find('input[name="id:MISO4208"]').click()
        cy.get('.sobreCalificacion').find('a[class="jsx-571610088"]').contains('Pruebas Automáticas')
    })
})
