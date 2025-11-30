// 获取DOM元素
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

// 添加待办事项
addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">删除</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
        bindDeleteEvent(li.querySelector('.delete-btn'));
    }
});

// 输入框回车添加
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

// 删除单个待办
function bindDeleteEvent(btn) {
    btn.addEventListener('click', () => btn.parentElement.remove());
}

// 初始化已有待办的删除事件
document.querySelectorAll('.delete-btn').forEach(btn => bindDeleteEvent(btn));

// 清空所有待办
clearAllBtn.addEventListener('click', () => todoList.innerHTML = '');