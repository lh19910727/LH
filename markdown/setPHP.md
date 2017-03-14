###windows server 2008R2 x64位服务器上搭建PHP环境

#####1.安装IIS
  ``现在windows 相关的软件或组件安装越来越轻松,在些也不作多介绍,接下是重点. ``

![描述](http://img.blog.csdn.net/20160314220851985 "图片描述")

#####2.安装V11
``下载地址: http://www.microsoft.com/zh-CN/download/details.aspx?id=30679
  文件名: vcredist_x64.exe 
  注：（v11对应版本为Visual C++ Redistributable for Visual Studio 2012,要与php-VC11版本对应若这个不安装正确,或安装不正确,就一直显示是500错误)``

![描述](http://img.blog.csdn.net/20160314220938048 "图片描述")

#####3.安装CGI
 
![描述](http://img.blog.csdn.net/20160314221038822 "图片描述")

#####4.安装php
``下载地址: http://windows.php.net/download/``  
``使用IIS配置,所以下载 VC11 x64 Non Thread Safe 版本(2014-Jun-25 23:06:26)``
  ``将PHP5.5.14 解压到D:文件夹名为:php``
       ``安装:PHPManagerForIIS-1.2.0-x64.msi``
       ``下载地址: http://www.phpmanager.codeplex.com/releases/view/69115``
       ``配置PHP与CGI关联  让IIS7.5支持PHP``
      ``(1).安装phpmanager  ``
       ``(2).完装完后,重启IIS即可以看到:``

![描述](http://img.blog.csdn.net/20160314221407258 "图片描述")

``(3).双击PHP Manager 开始注册PHP路径.``
      ``选择PHP 文件中的php-cgi.exe``

![描述](http://img.blog.csdn.net/20160314221453011 "图片描述")

#####配置php.ini文件

``修改php.ini-development为php.ini``
``用记事本打开php.ini``
``做如下修改：``
``extension_dir = "D:\php\ext" #设置php模块路径``
``date.timezone = PRC #设置时区为中国时区``
``register_globals = On #开启GET数据调用``
``short_open_tag = On #php支持短标签``
``cgi.force_redirect = 0 #开启以CGI方式运行php``
``fastcgi.impersonate = 1;``
``cgi.rfc2616_headers = 1``
``以下php扩展模块，根据需要选择开启，取消前面的分号为开始相应扩展模块注（如不确定可以全部去掉）``
![描述](http://files.jb51.net/file_images/article/201303/1436.jpg "图片描述")

#####配置完后需要将php.ini复制一份放到system32目录下重启服务器

 ``此时PHP配置完成，可以写个php文件试一下
 如果出现出现“HTTP 错误 404.2 - Not Found，
 由于Web服务器上的“ISAPI和CGI限制”列表设置，
 无法提供您请求的页面”错误。如图：``

![描述](http://img1.ph.126.net/fpjBX80n5sJ7Wwic4IGlJQ==/6597216001703821191.jpg "图片描述")
#####分析可能原因：
  ``错误提示很明显，就是“ISAPI和CGI限制”的设置问题，
  修改对应的设置为“允许”即可。如果列表中没有就添加 将cgi.exe文件引进去
``
![描述](http://img5.ph.126.net/iXB7J9OPrYSfaxNuksLdzA==/6597494178144543105.jpg "图片描述")

####配置完毕

