# projx

> 项目采用分支开发

![](http://img3.tbcdn.cn/tfscom/TB1uj81GVXXXXXCXVXXVZ8dFXXX)

## 启动

安装依赖

```
tnpm install
```

安装[mongodb](https://www.mongodb.org/downloads) ,mac的可以找 九神 要,下载有的大的

 * 比如 下载后，放在了/usr/local/var/mongodb

 * vim ~/.bashrc
 * 添加
 * export MONGO=/usr/local/var/mongodb
 * export PATH=$MONGO/bin:$PATH

 * 到projx项目目录下，删除 ./data/db/mongod.lock 文件, 不删除会导致lock，连接失败

启动

```
brew services stop mongodb
brew services start mongodb
sh run.sh
```

或者 

```
mongod --dbpath data/db &
npm start

```

## 成功界面

![](http://img3.tbcdn.cn/tfscom/TB1KW0QGVXXXXbSXXXXVZ8dFXXX)


## 其它
* 在config里面，有ip, port等的配置，需要修改的别忘了修改

## mongo文档
* click [here](http://docs.mongodb.org/manual/tutorial/getting-started/#getting-started-create-documents)
