import _ from 'lodash';

const subscriptions = {};

const Store = {
  data: { todos: [] },

  get(type) {
    if (typeof this.data[type] === 'undefined') {
      throw new Error('Invalid data type');
    }

    return this.data[type];
  },

  load(dataString) {
    let data = null;

    try {
      data = JSON.parse(dataString);
    } catch (e) {
      return;
    }

    _.each(this.data, (_value, type) => { this.data[type] = data[type] || []; });
  },

  save() {
    localStorage.setItem('store', JSON.stringify(this.data));
  },

  set(type, value) {
    if (typeof this.data[type] === 'undefined') {
      throw new Error('Invalid data type');
    }

    this.data[type] = value;

    this.update(type);
  },

  subscribe(type, component) {
    if (!subscriptions[type]) subscriptions[type] = [];

    subscriptions[type].push(component);

    this.updateComponent(type, component);
  },

  unsubscribe(type, component) {
    if (!subscriptions[type]) {
      return;
    }

    subscriptions[type] = _.reject(subscriptions[type], c => component === c);
  },

  update(type) {
    _.each(subscriptions[type], component => this.updateComponent(type, component));
    this.save();
  },

  updateComponent(type, component) {
    const updateState = {};
    updateState[type] = this.data[type];

    component.setState(updateState);
  },
};

Store.load(localStorage.store);

export default Store;
