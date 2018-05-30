@ECHO off

call java -jar swagger-codegen-cli-2.3.1.jar generate -i ../../docs/api-design/api.yaml -l javascript -o ../../src/api-client -c ./javascript.config

