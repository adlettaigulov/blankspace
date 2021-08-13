<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title"><slot name="header"></slot></h4>

              <span aria-hidden="true" @click="$emit('close')"
                ><i class="icon icon-close" data-feather="x"></i
              ></span>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {},
  data() {
    return {};
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-header {
  border-bottom: 0;
}
.product-size,
.product-color,
.product-material {
  text-align: left;
}
.modal-body {
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}
.modal-title {
  font-weight: bold;
}
.modal-footer {
  border-top: 0;
}
.modal-content {
  padding: 15px;
  border-radius: 0;
  border: none;
}
.icon-close {
  cursor: pointer;
  margin-top: -5px;
}
</style>
