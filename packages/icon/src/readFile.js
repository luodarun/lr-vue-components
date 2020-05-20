const fs = require("fs-extra");
fs.readFile("./iconfont.js", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data = String(data);
    var index = data.indexOf('<symbol id="icon-'); // 字符出现的位置
    var index2 = data.indexOf("viewBox="); // 字符出现的位置
    while (index !== -1) {
      console.log(index); // 打印字符串出现的位置
      fs.appendFile(
        "./test.txt",
        `<span>
        <lr-icon name="${data.substring(
          index + 17,
          index2 - 2
        )}" :size="32"></lr-icon>
        <span class="name">${data.substring(index + 17, index2 - 2)}</span>
        </span>\n`,
        err2 => {
          if (err2 != null) {
            console.log(err2); // 打印错误信息
            return; // 阻止程序继续向下执行
          }
          console.log("文件内容写入成功");
        }
      );
      index = data.indexOf('<symbol id="icon-', index + 1); // 从字符串出现的位置的下一位置开始继续查找
      index2 = data.indexOf("viewBox=", index2 + 1);
    }
  }
});
