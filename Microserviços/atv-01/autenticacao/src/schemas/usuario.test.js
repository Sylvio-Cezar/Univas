const usuarioSchema = require("./usuario")

test("Usuário válido", () => {
    const usuario = {
        nome: "Nome",
        email: "valido@gmail.com",
        senha: "123456"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(true)
})

test("Usuário inválido (nome -> Campo obrigatório)", () => {
    const usuario = {
        email: "valido@gmail.com",
        senha: "123456"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.nome?._errors).toContain("Campo obrigatório")
})

test("Usuário inválido (nome -> Mínimo 3 caracteres)", () => {
    const usuario = {
        nome: "No",
        email: "valido@gmail.com",
        senha: "123456"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.nome?._errors).toContain("Mínimo 3 caracteres")
})

test("Usuário inválido (email -> Campo obrigatório)", () => {
    const usuario = {
        nome: "Nome",
        senha: "123456"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.email?._errors).toContain("Campo obrigatório")
})

test("Usuário inválido (email)", () => {
    const usuario = {
        nome: "Nome",
        email: "invalidogmail.com",
        senha: "123456"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.email?._errors).toContain("Email inválido")
})

test("Usuário inválido (senha -> Campo obrigatório)", () => {
    const usuario = {
        nome: "Nome",
        email: "valido@gmail.com"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.senha?._errors).toContain("Campo obrigatório")
})

test("Usuário inválido (senha -> Mínimo 6 caracteres)", () => {
    const usuario = {
        nome: "Nome",
        email: "valido@gmail.com",
        senha: "123"
    }

    const resultado = usuarioSchema.safeParse(usuario)
    expect(resultado.success).toBe(false)

    const erros = resultado.error.format();
    expect(erros.senha?._errors).toContain("Mínimo 6 caracteres")
})