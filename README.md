# novel-generate-cli

generate novel from some website to file.

# Example

# Installation

```
npm install novel-generate-cli
#or
yarn add novel-generate-cli
```

# API

## common

Property | Description | Type | Default | Required | Range | Command |
---------|----------|---------|----------|---------|---------|---------|
source | the data's source | String | "mbwxs" | true | mbwxs | -sr |
filename | the output file 's name | String | "novel" | false | - | -fn |
filetype | the output file 's type | String | ".txt" | false | .txt | -ft |
threadnumber | the number of thread | Number | 1 | false | - | -tn |

## mbwxs

Property | Description | Type | Default | Required | Range | Command |
---------|----------|---------|----------|---------|---------|---------|
bookid | the id of book | Number | - | true | - | -bi |
startchapter | start chapter | Number | 1 | false | - | -sc |
endchapter | end chapter | Number | - | true | - | -ec |
pageperchapter | page per chapter | Number | 2 | false | - | -pc |
retrytimes | retry when failure | Number | 3 | false | - | -rt |
sleeptimes | every request's delay time (ms) | Number | 500 | false | - | -st|

# How to use it

《我，白衣剑仙，你们叫我莽金刚》
最后一章url为:https://www.mbwxs.com/info/12425/311_2.html

那么bookid为12425, 每章2页, 则pc为2, 终章为311章

```
novel-generate-cli generate -sr mbwxs -fn 白衣剑仙 -tn 12 -bi 12425 -ec 311
```

执行此命令即可自动生成《白衣剑仙.txt》

# update
