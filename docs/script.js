 // 获取按钮和侧边栏元素
 const toggleButton = document.getElementById('toggle-sidebar');
 const sidebar = document.getElementById('sidebar');

 // 添加点击事件监听器
 toggleButton.addEventListener('click', () => {
     sidebar.classList.toggle('collapsed'); // 切换收起状态
 });