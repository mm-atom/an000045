# 解析http并保存文件

在服务中保存文件到数据库

## 配置文件

.env or .env.local

```conf
MINIO_NAME_SPACE: mmstudio
MINIO_CONFIG = {"endPoint":"127.0.0.1","port":9000,"accessKey":"mmstudio","secretKey":"Mmstudio123","useSSL":false,"region":"cn-north-1","partSize":5242880}
```
