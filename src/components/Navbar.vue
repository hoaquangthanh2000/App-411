
<script>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div id="navbar">
        <h1 class="nav-title ">About room 411</h1>
        <div class="nav-content">
            <ul>
                <li><router-link class="nav-link" to="/content1">Water exchange list</router-link></li>
                <li><router-link class="nav-link" to="/">List of cleaning toilets</router-link></li>
                <li><router-link class="nav-link" to="/">Member 411</router-link></li>
            </ul>
        </div>
    </div>
  <RouterView />
</template>

<style>
#navbar{
    width: 100%;
    height: 150px;
    background-color: #000;
}
.nav-title{
    color: rgb(200, 28, 28);
}
.nav-content{
}
.nav-content ul{
    display: flex;
    justify-content: space-around;
}
.nav-content ul li .nav-link{
    text-decoration: none;
    color: rgb(81, 17, 232);
}
.nav-content ul li{
    display: inline-block;
    color: blue;
    padding: 10px;
    font-size: 22px;
    cursor: pointer;
}
.nav-content ul li:hover{
    background-color: azure;
    color: #000;
    border-radius: 4px;
}
</style>