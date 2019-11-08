import BLoading from "@/components/BLoading/BLoading";
import Vue from 'vue'

let LoadingConstructor = Vue.extend(BLoading);

let seed = 1;
let index = 2000;

const install = () => {
  Object.defineProperty(Vue.prototype, '$loading', {
    get() {
      let id = 'loading' + seed++;
      return options => {
        let instance = new LoadingConstructor({
          propsData: options
        });
        index++;
        instance.id = id;
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        instance.vm.$el.style.zIndex = index;
        return instance.vm;
      }
    }
  })
};

export default install
