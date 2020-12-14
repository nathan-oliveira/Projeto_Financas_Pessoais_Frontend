<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Metas" id="metasBreadcrumbItem" />
    </Breadcrumb>
  </section>
</template>

<script>
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Metas",
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
};
</script>
