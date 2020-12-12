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
