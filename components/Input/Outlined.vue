<template>
  <input
    class="input-outlined"
    type="text"
    :placeholder="placeholder"
    :value="input_value"
    @input="onChange"
    maxlength="18"
  />
</template>

<script>
export default {
  props: {
    placeholder: String,
    val: String,
    phone: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const input_value = ref(props.val);
    const onChange = (e) => {
      if (props.phone) {
        let text = String(e.target.value).replaceAll(/[\D]+/gi, "");
        let new_text = "+";

        if (text.length > 11) {
          new_text +=
            text.substring(0, 1) +
            " (" +
            text.substring(1, 4) +
            ") " +
            text.substring(4, 7) +
            "-" +
            text.substring(7, 9) +
            "-" +
            text.substring(9, 11);
        } else if (text.length > 9) {
          new_text +=
            text.substring(0, 1) +
            " (" +
            text.substring(1, 4) +
            ") " +
            text.substring(4, 7) +
            "-" +
            text.substring(7, 9) +
            "-" +
            text.substring(9);
        } else if (text.length > 7) {
          new_text +=
            text.substring(0, 1) +
            " (" +
            text.substring(1, 4) +
            ") " +
            text.substring(4, 7) +
            "-" +
            text.substring(7);
        } else if (text.length > 4) {
          new_text +=
            text.substring(0, 1) +
            " (" +
            text.substring(1, 4) +
            ") " +
            text.substring(4, 7);
        } else if (text.length > 1) {
          new_text += text.substring(0, 1) + " (" + text.substring(1, 4);
        }

        input_value.value = new_text;
      }
    };
    return {
      placeholder: props.placeholder,
      input_value,
      phone: props.phone,
      onChange,
    };
  },
};
</script>

<style scoped>
.input-outlined {
  border-color: #636363;
  min-height: 36px;
  border-radius: 10px;
  color: black;
  line-height: 19px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}
.input-outlined:focus {
  border-color: #636363;
  outline: none;
}
</style>
