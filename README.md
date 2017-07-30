# 30Javacript-
<h2>2017.2.30</h2>
<p>今天在学习的时候，无意间看到了别人做的30Days的学习记录，看了之后我的疑问基本都很快解决了。不过我觉得在看之前我得有自己思考，我得自己尝试调试去感受新的知识，而不不是依赖别人的经验，虽然确实能学到很多东西。同样，还是要分享一些所学所得：<br>
1.CSS中的伪类，:root选择器，匹配文档根元素，常用于声明全局CSS变量<br>
2.使用CSS变量实现改变CSS参数。用到了CSS variable，命名为：--变量名，应用为：var(--XXX)<br>
  <i>padding:var(--spacing)</i><br>
3.HTML5中的自定义数据属性及访问方法。HTML5可为元素添加非标准的自定义属性，只需要加上‘data-'前缀，可通过dataset属性来访问这些值。<br>
  <i>input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px"<br></i>
  <i>const suffix=this.dataset.sizing||''</i>
4.模板字符串，在之前的两节练习中也出现过模板字符串，还需多加练习使用<i>(`--${this.name}`</i><br>
5.(还有一个不太清楚的地方先记下来） <i>document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)</i>
</p>
 
<h2>2017.7.29</h2>
<p>今天完成了Day2的练习，相比昨天轻松很多，但依旧有很多不太清晰的地方：<br>
  1.首先来说CSS中的两个属性，第一个是transform属性。我也找了一些相关的属性效果，方便以后用到的时候更直观一些，<a href="http://www.w3school.com.cn/example/css3/demo_css3_transform-origin_3D.html">transform-origin 属性演示</a>;<a href="http://www.w3school.com.cn/example/css3/demo_css3_transform.html">transform: rotate属性演示</a>;<a href="http://www.w3school.com.cn/example/css3/demo_css3_transform-origin.html">transform-origin 属性演示2</a>。transform-origin允许改变被转换的元素的位置。<br>
  <i>transform-origin: 100%</i>;<br>
  <i>transform: rotate(90deg)</i>;<br>
  2.第二个是transition属性，是一个简写属性，用于设置4个过渡属性：transition-propery,transition-duration,transition-timing-function,transition-delay。其中的ransition-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n)，n值可控制动画速度，需要自己调试。<br>
  <i>transition: all 0.05s</i>;<br>
  3. CSS的transorm属性的js表达，<i>hourHand.style.transform=`rotate(${hourDegree}deg)`</i>;
<h2>2017.7.28</h2>
<p>今天开始Javascript的30Days练习，遇到了很多问题，现在把他们都记下来：<br>
  1.tansitionend事件：在CSS完成过渡后触发<br>
  2.Array.from()从一个类似数组或迭代的对象中创建一个新的数组 <i>const keys=Array.from(document.querySelectorAll('.key')) </i><br>
  3.querySelector/querrySelectorAll 获取DOM节点的方法 <i>const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)</i><br>
  (后面这两项还不太清楚用法）<br>
  4.<i>PropertyName e.propertyName!='transform'</i><br>
  5. <i>keys.forEach(key=>key.add...</i><br>
  </p>
