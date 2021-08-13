<template>
  <div class="col-md-6 col-sm-12 product">
    <div class="card col-md-12">
      <div class="row g-0">
        <div
          class="product-background-image col-md-4"
          :style="{
            backgroundImage:
              'url(' + '/images/products/' + productData.image[0] + ')',
          }"
        ></div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="product-name">
              {{ productData.name }}
            </h4>

            <div class="product-choose row">
              <!-- <div class="product-gender">
                <p>Пол</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.gender"
                    value="Мужская"
                    :disabled="isDisabled"
                    checked
                  />
                  <label class="form-check-label">Мужская</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.gender"
                    value="Женская"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">Женская</label>
                </div>
              </div> -->

              <div class="product-size col-md-6">
                <p>Размер</p>
                <!-- <div
                  class="form-check form-check-inline"
                  v-for="(size, index) in productData.sizes.filter(
                    (x) => x !== undefined
                  )"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    value="this.size"
                  />
                  <label class="form-check-label">{{ size }}</label>
                </div> -->

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.size"
                    value="XS"
                    :disabled="isDisabled"
                    checked
                  />
                  <label class="form-check-label">XS</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.size"
                    value="M"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">M</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.size"
                    value="L"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">L</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.size"
                    value="XL"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">XL</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.size"
                    value="XXL"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">XXL</label>
                </div>
              </div>
              <div class="product-color col-md-6">
                <p>Цвет</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.color"
                    value="Белый"
                    checked
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">Белый</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="productData.color"
                    value="Черный"
                    :disabled="isDisabled"
                  />
                  <label class="form-check-label">Черный</label>
                </div>
                <!-- <div
                  class="form-check form-check-inline"
                  v-for="(color, index) in productData.colors.filter(
                    (x) => x !== undefined
                  )"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="size"
                    value="size"
                  />
                  <label class="form-check-label">{{ color }}</label>
                </div> -->
              </div>
            </div>

            <h2 class="product-price text-muted">
              {{ productData.price }} тг.
            </h2>

            <p class="product-details">
              <span @click="showModal = true">Подробнее</span>
            </p>
            <div
              class="add-to-cart d-grid gap-2 d-md-flex justify-content-md-end"
            >
              <button
                v-if="productData.available"
                class="btn btn-outline-dark"
                @click="addToCart"
              >
                В корзину
              </button>
              <button v-else class="btn btn-outline-dark btn-disabled" disabled>
                Нет в наличии
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Модальное окно-->
      <Modal v-if="showModal" @close="showModal = false" @addToCart="addToCart">
        <template v-slot:header>
          {{ productData.name }}
        </template>
        <template v-slot:body>
          <div class="product-image">
            <a
              :href="'/images/products/' + productData.image[0]"
              target="_blank"
            >
              <img
                class="img-fluid"
                :src="'/images/products/' + productData.image[0]"
                alt=""
            /></a>
          </div>
          <p class="product-description">
            {{ productData.description }}
          </p>
          <h2 class="product-price text-muted">{{ productData.price }} тг.</h2>
          <div class="product-choose row">
            <div class="product-size col-md-6 col-sm-12">
              <p>Размер</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.size"
                  value="XS"
                  :disabled="isDisabled"
                  checked
                />
                <label class="form-check-label">XS</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.size"
                  value="M"
                  :disabled="isDisabled"
                />
                <label class="form-check-label">M</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.size"
                  value="L"
                  :disabled="isDisabled"
                />
                <label class="form-check-label">L</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.size"
                  value="XL"
                  :disabled="isDisabled"
                />
                <label class="form-check-label">XL</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.size"
                  value="XXL"
                  :disabled="isDisabled"
                />
                <label class="form-check-label">XXL</label>
              </div>
            </div>
            <div class="product-color col-md-6 col-sm-12">
              <p>Цвет</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.color"
                  value="Белый"
                  :disabled="isDisabled"
                  checked
                />
                <label class="form-check-label">Белый</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="productData.color"
                  value="Черный"
                  :disabled="isDisabled"
                />
                <label class="form-check-label">Черный</label>
              </div>
            </div>
          </div>
          <div class="product-material">
            <p><strong>Материал:</strong> {{ productData.material }}</p>
          </div>
        </template>
        <template v-slot:footer>
          <button
            v-if="productData.available"
            class="btn btn-outline-dark"
            @click="addToCart"
          >
            В корзину
          </button>
          <button v-else class="btn btn-outline-dark btn-disabled" disabled>
            Нет в наличии
          </button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<!-- props - это то, что мы получаем от родителя (в нашем случае объект, по умолчанию пустой объект -->
<script>
import Modal from '../Widget/Modal.vue';
export default {
  name: 'Product',
  components: {
    Modal,
  },
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      showModal: false,
      isDisabled: false,
    };
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    },
  },
  watch: {},
  mounted() {
    if (this.productData.available === false) {
      this.isDisabled = true;
    }
  },
};
</script>

<style>
.product {
  max-width: 560px;
  margin-bottom: 25px;
}
.product-name {
  font-weight: bold;
  padding-top: 15px;
}
.product-description {
  text-align: justify;
  padding-top: 25px;
}
.product-background-image {
  background-size: cover;
  background-position: center center;
}
.product-price {
  font-weight: bold;
  padding-top: 5px;
}
.product-collection {
  padding-top: 25px;
}
.product-size p,
.product-color p,
.product-gender p {
  font-weight: bold;
  margin-bottom: 0;
}
.product-availability {
  text-align: right;
  margin: 0;
}
.product-choose {
  padding: 15px 0;
}
.product-details {
  padding-top: 15px;
}
.product-details span {
  cursor: pointer;
  font-weight: bold;
}
.card {
  padding: 0;
  border: 1px solid #f5f5f5;
  border-radius: 0;
}
.card-body {
  text-align: left;
  padding: 30px;
}
.form-check-input {
  cursor: pointer;
}
.icon-check {
  width: 18px;
  height: 18px;
  margin-top: -3px;
}
.icon-info {
  width: 20px !important;
  height: 20px !important;
  margin-top: -5px;
  cursor: pointer;
}
</style>
