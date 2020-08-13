# 一周年表白

> 马上谈恋爱一周年了，简单制作了一个Demo，希望给她带来不一样的浪漫

</br>
</br>


### 效果预览

![image](http://qiniu.hejueting.cn/github/loveOneYearAnniversary.gif)

</br>
</br>


### 配置项

> demo文件夹中有一个config.js配置文件，可以自行配置。也可以clone下来直接修改源码 ~

```javascript
const CONFIG = {
    // 数字翻牌
    number: {
        start: 0,          // 起始值
        end: 365,          // 结束值
        interval: 10,      // 翻牌时间间隔（值越大，翻牌更新速度越慢）
        speed: 0.01,       // 翻牌速度，取值0-1（值越大，速度越快）
    },
    // 桃心
    heart: {
        inInterval: 3,     // 桃心从无到有放大的时间，单位秒
        rate: 2,           // 桃心跳动的频率（值越大，频率越慢）
    },
    // 第一页滞留时间，单位秒（从数字翻牌结束后开始计算）
    firstPageStayInterval: 2,
    // 第一页离开动画时间，单位秒
    firstPageOutInterval: 5,
    // 打字
    typing: {
        // 内容
        content: `
            轻轻的的我走了
            </br>正如我轻轻的来
            </br>我轻轻的招手
            </br>作别西天的云彩
            </br>
            </br>那河畔的金柳
            </br>是夕阳中的新娘
            </br>波光里的艳影
            </br>在我的心头荡漾
            </br>
            </br>软泥上的青荇
            </br>油油的在水底招摇
            </br>在康河的柔波里
            </br>我甘心做一条水草
            </br>
            </br>那榆荫下的一潭
            </br>不是清泉，是天上虹
            </br>揉碎在浮藻间
        `,
        // 速率
        typeSpeed: 100
    }
}
```