const STORE_NAME = 'to_do_list';
export default {
  fetch:function () {
    return JSON.parse(localStorage.getItem(STORE_NAME)) || [];
  },
  save:function (items) {
    window.localStorage.setItem(STORE_NAME,JSON.stringify(items)||'[]');
  }
}
