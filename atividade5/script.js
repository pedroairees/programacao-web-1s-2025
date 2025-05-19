document.getElementById("formAgendamento").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const camposObrigatorios = [
      "nome", "sobrenome", "cpf", "nascimento", "telefone",
      "cep", "endereco", "clinica", "especialidade",
      "dataConsulta", "horaConsulta"
    ];
  
    for (let id of camposObrigatorios) {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        alert(`O campo "${id}" é obrigatório.`);
        el.focus();
        return;
      }
    }
  
    const dataConsulta = new Date(document.getElementById("dataConsulta").value);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
  
    if (dataConsulta <= hoje) {
      alert("A data da consulta deve ser maior que a data atual.");
      document.getElementById("dataConsulta").focus();
      return;
    }
  
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados via fetch/AJAX ou prosseguir com o envio
  });