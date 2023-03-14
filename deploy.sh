#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# git init
git add -A
git commit -m '版本更新'        
git push -f git@github.com:engineer-cv/vite_blog.git main

cd doc/.vitepress/dist
# 如果是发布到自定义域名
echo 'www.coderwm.com' > CNAME

git init
git add -A
git commit -m '版本更新'
git push -f git@github.com:engineer-cv/engineer-cv.github.io.git master
# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:AirHua-byte/AirHua-byte.github.io.git main

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages
# git push -f git@github.com:lyk19990226/lyk-blog.github.io.git master:gh-pages



# git init
# git add README.md
# git commit -m "first commit"
# git branch -M master
# git remote add origin https://github.com/lyk19990226/lyk-blog.github.io.git
# git push -u origin master