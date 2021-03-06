# wechat_devtools

https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html 微信开发者工具 Linux 版
旧版本请访问 https://github.com/BruceZhang1993/wechat_web_devtools

## 安装运行  

### 安装 git lfs 插件
  https://git-lfs.github.com/  
  
### Clone 项目文件  
  ```
  git clone https://github.com/BruceZhang1993/wechat_devtools.git
  cd wechat_devtools
  git lfs install
  git lfs fetch <branch>
  git checkout <branch> # 根据设备架构选择 x86/x64 分支
  ```
  All Done.  
  
### 检查依赖
  ```
  ldd ./wechat_devtools
  ```
  
### 运行
  ```
  ./wechat_devtools
  ```
  
### 微信小程序调试 Workarounds

#### 安装 Wine
  https://www.winehq.org/download
  
#### 给 exe 文件设置二进制权限
  ```
  (sudo) su
  echo ":DOSWin:M::MZ::/usr/bin/wine:" >> /proc/sys/fs/binfmt_misc/register
  ```
  ##### 使上面的设置永久生效
  ```
  Root 权限编辑 /etc/tmpfiles.d/enable-exe.conf
  # 复制下方一行内容到文件并保存
  w /proc/sys/fs/binfmt_misc/register - - - - :DOSWin:M::MZ::/usr/bin/wine:
  ```
