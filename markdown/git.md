##Git、Github Pages 搭建博客基本操作
######相信每个人都想拥有一个自己的个人博客或者网站,那么Github Pages绝对是一个不错的选择,使用Git来管理自己的代码版本,如果你是一个程序猿,竟然还不知道到Git、Github,那么你肯不是一个标准的程序猿,这么有用的东西一定要先收藏起来。撸起你的袖子,Go!Go!Go! 
#####在任意目录中创建新的 本地化Git仓库，在目录中执行 git init，就可以创建一个 Git 仓库了
>$ mkdir runoob     &nbsp;&nbsp;&nbsp;//新建文件夹 runoob 
>$ cd runoob/
$ git init &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//创建新的 本地化Git仓库
#####使用 git clone 拷贝一个 Git 仓库到本地,让自己能够查看该项目，或者进行修改。如果你需要与他人合作一个项目，或者想要复制一个项目，看看代码，你就可以克隆那个项目。 执行命令：
>$ git clone [url]

![描述](https://clearself.github.io/fly/markdown/image/gitClone.png "图片描述")

######[url] 为你想要复制的项目，就可以了。
####GIT 常用命令：
>$ mkdir filename   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//新建文件夹
>$ touch filename     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//新建文件
>$ pwd   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//查看当前目录所在路径
>$ git status  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//查看文件状态
>$ git add   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加文件到暂存区
>$ git add . &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加加当前目录下所有修改或者新添加文件到暂存区

>$ git fetch origin master:temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//从远程获取最新版本到本地，使用如下命令可以在本地新建一个temp分支，并将远程origin仓库的master分支代码下载到本地temp分支


>$ git diff temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//比较本地仓库与下载的temp分支，比较本地代码与刚刚从远程下载下来的代码的区别：
>$ git merge temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//合并temp分支到本地的master分支,对比区别之后，如果觉得没有问题，可以使用如下命令进行代码合并
>$ git commit -m 'tips'   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//提交
>$ git push  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//将暂存区的文件同步到远程仓库，这一步第一次会弹出一个github的登录页登录就行
##Github Page 搭建个人博客
>步骤一：登录到Github上，新建一个repo，命名为test，勾选 initialize this repository with a README，点击create repository。

![描述](http://images2015.cnblogs.com/blog/903320/201603/903320-20160305134947346-1921005167.png "图片描述")
>步骤二：打开settings，有一个Github Pages 的设置，点击 source 中的本来的 None ，使其变成 master 分支，也就是作为部署github pages 的分支，然后点击 save。

![描述](http://images2015.cnblogs.com/blog/903320/201701/903320-20170115212404385-1979000093.png "图片描述")
>步骤三：页面刷新之后，再看 github pages 设置框处，多了一行网址，就是你的 github pages 的网址了。

![描述](http://images2015.cnblogs.com/blog/903320/201701/903320-20170115213630338-44375750.png "图片描述")

##### 可以将自己的网页上传到仓库中