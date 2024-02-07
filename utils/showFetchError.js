import { message } from "ant-design-vue";

export default (response) => {
  if (!response.ok) {
    if (Array.isArray(response._data)) {
      response._data.forEach((element) => {
        message.error(element);
      });
    } else if (typeof response._data === "object") {
      for (const [key, value] of Object.entries(response._data)) {
        if (Array.isArray(value)) {
          value.forEach((el) => {
            if (typeof el === "string") message.error(el);
          });
        } else if (typeof value === "string") {
          message.error(value);
        }
      }
    }
  }
};
