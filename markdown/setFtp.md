
###windows server 2008R2 搭建ftp环境


#####初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。以下为搭建步骤：

#####1 、添加 FTP 发布服务：
`` a)、打开服务器管理“开始——管理工具——服务器管理——角色”添加Web服务器(IIS)角色安装ftp服务。``

![描述](http://img0.tuicool.com/uaM7fm.jpg!web "图片描述")

![描述](http://img2.tuicool.com/UnaUfy.jpg!web "图片描述")

``b)在选择服务器角色页面勾选 “Web 服务器 (IIS)” ，下一步：``

![描述](http://img2.tuicool.com/yuIJFr.jpg!web "图片描述")

``c)web 服务器简介及相关注意事项：``

![描述](http://img2.tuicool.com/YrumAz.jpg!web "图片描述")

``d) 、在角色服务界面勾选 ”FTP 服务器 ” 及附属选项：``

![描述](http://img0.tuicool.com/ZjUfMv.jpg!web "图片描述")

``摘要信息确认``

![描述](http://img2.tuicool.com/qaAzqye.jpg!web "图片描述")

``e) 、在角色服务界面勾选 ”FTP 服务器 ” 及附属选项：``

![描述](http://img1.tuicool.com/z6rAjq6.jpg!web "图片描述")

#####2、添加 FTP 站点：


![描述](http://img2.tuicool.com/mQVNBj.jpg!web "图片描述")

#####3、添加站点及路径信息：注（ftp文件上传目录）

``填写FTP站点名称（随便起个名称），并选择共享的文件夹。``

![描述](http://img2.tuicool.com/mmEnqeY.jpg!web "图片描述")

#####4、绑定IP和SSL设置

``IP不填默认为所有IP都可以访问，此步由于没有SSL证书所以选择无。``

![描述](http://images.cnitblog.com/blog/604780/201411/241443332626680.png "图片描述")

#####5、添加ftp用户

``打开服务器管理器----配置-----本地用户和组------用户，在其中添加用户，用于ftp``

![描述](http://images.cnitblog.com/blog/604780/201411/241436275749697.png "图片描述")

#####6、给用户添加权限

``指定用户ftpUser为在服务管理器——配置——用户,右键添加用户所创建的用户(包含设置ftp上传密码，用户名等)``

![描述](http://images.cnitblog.com/blog/604780/201411/241444123712465.png "图片描述")

#####点击完成即完成了ftp站点的建立。

``接下来可以再客户机中进行验证，看是否可以访问ftp文件，截图如下：``

![描述](http://images.cnitblog.com/blog/604780/201411/241447459493150.png "图片描述")