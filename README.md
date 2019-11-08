# bootstrap-vue-loading

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Usage

- Define a loading object in data:

```javascript
data() {
  return {
    loading: {},
  }
}
```
- Invoke loading page:

`this.loading = this.$loading()`

- Close loading page:

`this.loading.close()`
