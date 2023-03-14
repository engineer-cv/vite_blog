<script setup>
import { onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

onMounted(() => {
  if (typeof window !== undefined) {
    var s_div = document.createElement("div"); // 创建节点
    s_div.setAttribute("id", "gitalk-page-container"); // 设置id
    document.querySelector(".content-container").appendChild(s_div); // querySelector的节点可自己根据自己想加载的地方设置
    var gitment = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: "engineer-cv", // GitHub repository 所有者
      repo: "vite_blog", // GitHub repository
      clientID: "de0e2b49db65295e67e8", // 自己的clientID
      clientSecret: "8dd6a716626b90a33aa8985c8949b88e8d0a650c", // 自己的clientSecret
      admin: ["engineer-cv"], // GitHub repository 所有者
      labels: ["Gitalk"], // GitHub issue 的标签
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    });
    gitment.render("gitalk-page-container");
  }
});
</script>
