<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Dashboard" asset="Painel de Controle" />
    </Breadcrumb>
    <div class="card-financeiros">
      <div class="card">
        <div class="card-body card-receita">
          <div class="card-info">
            <h1 class="card-title">R$: 20.000,21</h1>
            <p class="card-subtitle">18/12/2020</p>
          </div>
          <div class="card-logo">
            <i class="fas fa-donate"></i>
          </div>
        </div>
        <div class="card-footer card-receita-footer">
          <p class="card-footer-title">Receita</p>
          <i class="fa fa-arrow-circle-right"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-body card-despesa">
          <div class="card-info">
            <h1 class="card-title">R$: 20.000,21</h1>
            <p class="card-subtitle">18/12/2020</p>
          </div>
          <div class="card-logo">
            <i class="fas fa-donate"></i>
          </div>
        </div>
        <div class="card-footer card-despesa-footer">
          <p class="card-footer-title">Despesa</p>
          <i class="fa fa-arrow-circle-right"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-body card-total">
          <div class="card-info">
            <h1 class="card-title">R$: 20.000,21</h1>
            <p class="card-subtitle">18/12/2020</p>
          </div>
          <div class="card-logo">
            <i class="fas fa-donate"></i>
          </div>
        </div>
        <div class="card-footer card-total-footer">
          <p class="card-footer-title">Total</p>
          <i class="fa fa-arrow-circle-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Home",
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
};
</script>

<style scoped>
.card {
  width: 32%;
}

.card-financeiros,
.card-receita,
.card-despesa,
.card-total {
  display: flex;
  justify-content: space-between;
}

.card-body {
  padding: 15px 10px;
}

.card-receita {
  background-color: #00c0ef !important;
}

.card-despesa {
  background-color: #dd4b39 !important;
}

.card-total {
  background-color: #00a65a !important;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-footer i {
  color: rgb(255 255 255 / 50%);
}

.card-receita-footer {
  background: #00a7d0;
}

.card-despesa-footer {
  background: #c54535;
}

.card-total-footer {
  background: #009651;
}

.card-footer-title {
  color: #fff;
  padding: 2px 0;
  margin: 0 5px;
}

.card-logo i {
  font-size: 5em;
  color: rgba(0,0,0,0.15);
}

/* .card-footer-title i */

.card-title {
  font-size: 1.9em;
  font-weight: bold;
  color: #fff;
}

.card-subtitle {
  margin-top: 10px;
  font-size: .8em;
  color: #fff;
}
</style>
