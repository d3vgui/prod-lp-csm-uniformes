document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(this);

    const nome = data.get("nome").trim();
    const email = data.get("email").trim();
    const celular = data.get("celular").trim();
    const empresa = data.get("empresa").trim();
    const tipo = data.get("tipo");
    const quantidade = data.get("quantidade");
    const mensagem = data.get("mensagem").trim();

    const textoWhats = `Olá, CSM Uniformes!

Meu nome é ${nome}, vim através do site e gostaria de mais informações.

E‑mail: ${email}
Telefone/WhatsApp: ${celular}
Nome da empresa: ${empresa}
Tipo de uniforme: ${tipo}
Quantidade: ${quantidade}

Mensagem:
${mensagem}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=5511951160940&text=${encodeURIComponent(
      textoWhats
    )}`;

    window.open(whatsappURL, "_blank");
  });