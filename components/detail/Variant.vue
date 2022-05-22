<template>
  <div class="variant">
    <div class="variant-header">
      <h2>Variant</h2>
    </div>
    <div class="divider" />
    <div
      v-for="(variant, variantIndex) in variance"
      :key="variantIndex"
    >
      <div class="variant-title">
        {{ variant.title }}:
      </div>
      <div class="variant-item-wrapper">
        <div
          v-for="(
            item, variantItemIdx
          ) in variant.items"
          :key="variantItemIdx"
          class="variant-items"
          :class="[
            ...selectedItem(
              variant,
              variantItemIdx
            ),
            ...availibilty(item.inStock)
          ]"
          @click="
            setSelectedVariant(
              variant,
              variantItemIdx
            )
          "
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductVariant',
  data() {
    return {
      variance: [
        {
          id: 1,
          title: 'Size',
          items: [
            {
              text: '60%',
              inStock: true
            }
          ]
        },
        {
          id: 2,
          title: 'Color',
          items: [
            {
              text: 'White',
              inStock: true
            },
            {
              text: 'Black',
              inStock: false
            }
          ]
        }
      ],
      selectedVariant: []
    }
  },
  methods: {
    availibilty(inStock) {
      return inStock ? [''] : ['disable']
    },
    selectedItem(variant, itemIndex) {
      return this.selectedVariant.find(
        selected =>
          selected.id === variant.id &&
          selected.value === itemIndex
      )
        ? 'active'
        : ''
    },
    setSelectedVariant(variant, itemIndex) {
      if (!variant.items[itemIndex].inStock) {
        return
      }
      const selectedVariant =
        this.selectedVariant.find(
          selected => selected.id === variant.id
        )
      if (selectedVariant) {
        if (selectedVariant.value === itemIndex) {
          selectedVariant.value = -1
        } else {
          selectedVariant.value = itemIndex
        }
      } else {
        this.selectedVariant.push({
          id: variant.id,
          value: itemIndex
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.variant {
  display: block;
  width: 100%;
  & &-header {
    padding: 0 10px;
    margin: 0 0 10px 0;
  }
  & &-title {
    padding: 0 10px;
    margin: 0 0 6px 0;
    font-weight: 800;
    font-size: 1rem;
  }
  & &-item-wrapper {
    display: inline-flex;
    flex-flow: wrap;
    padding: 0 10px;
    gap: 10px;
  }
  & &-items {
    cursor: pointer;
    background: rgba(
      $color: #eb515177,
      $alpha: 0.5
    );
    padding: 5px 10px;
    border-radius: 8px;
    color: rgb(51, 51, 51);
    border: 2px solid rgba(255, 255, 255, 0);
    margin-bottom: 10px;
    &.active {
      border: 2px solid rgb(92, 92, 92);
    }
    &.disable {
      background: rgba(
        $color: #7c7c7c77,
        $alpha: 0.5
      );
      color: rgb(54, 54, 54);
      text-decoration: line-through;
    }
  }
}
@media only screen and (min-width: 768px) {
  .variant-header {
    display: none;
  }
  .variant {
    .divider {
      display: none;
    }
  }
}
</style>
