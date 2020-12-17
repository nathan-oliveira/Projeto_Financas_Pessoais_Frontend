<template>
  <form class="form">
    <MensagemErro />
    <div class="form-group col-6 col-right">
      <label>Descrição:</label>
      <input
        type="text"
        placeholder="Descrição da meta"
      />
    </div>
    <div class="col-12">
      <div class="form-group col-7 col-right">
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Descrição da meta"
        />
      </div>
      <div class="form-group col-3">
        <label>Tipo:</label>
        <select>
          <option value="receita">receita</option>
          <option value="despesa">despesa</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
import MensagemErro from "@/components/layouts/MensagemErro.vue";

export default {
  name: "metasCadastrar",
  components: {
    MensagemErro,
  }
};
</script>
