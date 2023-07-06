<template>
  <div id="app">
    <header>
      <title>Fitrah Rahmadanu</title>
      <nav>
        <ul>
          <li v-for="(route, index) in routes" :key="index">
            <router-link :to="route.path" exact-active-class="active">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routes: [
        { path: '/', name: 'Weather' },
        { path: '/location', name: 'Location' },
        { path: '/stopwatch', name: 'Stopwatch' },
        { path: '/tictactoe', name: 'Tic Tac Toe' },
        { path: '/photo', name: 'Photo' },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
}

header {
  background: #ff5622d7;
  padding: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #ff9100;
}

.active {
  font-weight: bold;
  color: white;
  background-color: #ff9100;
}
</style>
