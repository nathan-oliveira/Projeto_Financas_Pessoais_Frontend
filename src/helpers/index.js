export function serialize(obj) {
  let queryString = "";

  Object.keys(obj).forEach((key) => {
    queryString += `&${key}=${obj[key]}`;
  });

  return queryString;
}

export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];

    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
  return object;
}

export function paginate(state) {
  const from = state.page * state.perPage - state.perPage;
  const to = state.page * state.perPage;
  return state.posts.slice(from, to);
}

export function numeroPreco(valor) {
  valor = Number(valor);

  if (!Number.isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  return "";
}

export function soNumeros(v) {
  return v.replace(/\D/g, "");
}

export function telefone(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
  v = v.replace(/(\d{4})(\d)/, "$1 - $2");
  return v;
}

export function cpf(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
}

export function cep(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,3})$/, "$1-$2");
  return v;
}

export function cnpj(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/^(\d{2}).(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/.(\d{3})(\d)/, ".$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v;
}

export function dataAtualFormatada() {
  const data = new Date();
  const dia = data.getDate().toString();
  const diaF = (dia.length === 1) ? `0${dia}` : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = (mes.length === 1) ? `0${mes}` : mes;
  const anoF = data.getFullYear();

  return `${diaF}/${mesF}/${anoF}`;
}

export function formatMoney(v) {
  v = v.replace(/\D/g, '');
  v = (v / 100).toFixed(2);
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return v;
}

export function revertMoney(v) {
  v = v.replaceAll('.', "");
  v = v.replaceAll(',', ".");

  return v;
}

export const swalDeleteQuestion = {
  title: "Você tem certeza?",
  text: "Não poderá reverter á operação!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "Não. Retornar!",
  confirmButtonText: "Sim. Prosseguir!",
};

export const swalDeleteOk = {
  title: "Deletado!",
  text: "Operação realizado com sucesso!",
  icon: "success",
  showConfirmButton: false,
  timer: 1500,
};
