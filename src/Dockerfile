
FROM crccheck/hello-world 

EXPOSE 8000

# 启动应用
CMD ["/bin/sh" "-c" "echo \"httpd started\" && trap \"exit 0;\" TERM INT; httpd -v -p $PORT -h /www -f & wait"]
