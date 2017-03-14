###nodejs 笔记
#####1、url 进入node环境查看url相关方法：
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl.png "图片描述")
#####url.parse(https://clearself.github.io/fly/markdown/image/nodeUrl.png,true) 将地址转换成一个对象,如果第二个参数为true,那么解析出的query,是对象，否者为字符串，
如果第三个参数为true,这可以解析无协议的地址。
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl1.png "图片描述")
#####url.format({}) 将一个合法对象转换成一个地址，与url.parse()相反
#####url.resolve() 将一个完整地址的两个部分拼接成完整地址
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl2.png "图片描述")
#####2、querystring (查询字符串)
#####querystring.stringify(obj[, sep[, eq[, options]]])
>参数一：要序列化成一个 URL 查询字符串的对象。
>参数二：用于界定查询字符串中的键值对的子字符串。默认为 '&'。
>参数三：用于界定查询字符串中的键与值的子字符串。默认为 '='。
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl3.png "图片描述")

#####querystring.parse(str[, sep[, eq[, options]]])
>参数一：要解析的 URL 查询字符串。
>参数二：用于界定查询字符串中的键值对的子字符串。默认为 '&'。
>参数三：用于界定查询字符串中的键与值的子字符串。默认为 '='。
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl4.png "图片描述")
#####querystring.escape(str)方法对给定的 str 执行 URL 百分号编码。
>>querystring.escape() 方法是供 querystring.stringify() 使用的，且通常不被直接使用。 它之所以对外开放，是为了在需要时可以通过给 querystring.escape 赋值一个函数来重写编码的实现。
![描述](https://clearself.github.io/fly/markdown/image/nodeUrl5.png "图片描述")
querystring.unescape(str) 反转义

