import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
  {
    //params 参数要求必须有配合name  不能是path   但是 query 是不必有name
    path: "/search/:keyword?", //? 表示 params参数 可传  可不    ? 是正则匹配语法
    component: Search,
    name: "search",
  },
];
