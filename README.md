# 30Javacript-
<h2>2017.8.8</h2>
<p>Day15主要是localStorageS的练习：HTML5中有两种在客户端中存储数据的新方法：<br>
 localStorage--没有时间限制的数据存储，sessionStorage--针对一个session的数据存储。
 两种在练习中用到的方法：<br>
 Storage.setItem(keyName,keyValue),接受一个键名和值作为参数，将会把键名添加到存储中，如果键名已经存在则更新对应的值。<br>
 storage.getItem(keyName),接受一个键名作为参数，并返回对应键名的值。<br>
 1.向ul中添加li：<code>platesList.innerHTML=plates.map((plate,i)=>{...}).jion('')</code>
 2.this.reset(),数据输入完成后清空input的内容
 3.<code>const item={
      text,
      done:false
 }</code>text是text=text的Es6中的省略写法；
 4.e.preventDefault()，阻止默认事件的触发，防止在提交后页面自己刷新；
 5.<code>// 在关闭浏览器之后清除缓存
    window.onbeforeunload = function (e) {
      localStorage.removeItem('items');
      // let confirmationMessage = "\o/";
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      // return confirmationMessage; // 如果有返回值的话，就会弹出确认框。
 };</code>
</p>
<p>Day14练习主要是关于数组和对象的复制方法，首先是数组：<code>const team2 = players.slice();const team3 = [].concat(players);const team4 = [...players];const team5 = Array.from(players);</code>对象：<code>const dev = Object.assign({}, wes);const dev2 = JSON.parse(JSON.stringify(wes));</code><br>
  对于这几种方法进行总结：<br>
  1.concat()方法用于连接两个或多个数组，该方法不会改变原来的数组。arrayObject.concat(arrayX,arryX...)<br>
  2.Object.asssign()用于将所有可枚举的属性值从一个或多个源的对象复制到目标对象，返回目标对象。Object.assign(target,..sources)<br>
  3.JSON.stringify()将js对象转换为JSON对象，JSON.parse()将JSON对象转换为js对象</p>
<h2>2017.8.7</h2>
<p>在Day13练习中，在监听事件中用到了debounce，这样做的目的是避免每次滚动都触发事件，从而减少js成本。<br>
  1.设置图片何时出现，合适消失，需要先在脑海中有个大概的印象，有一个自己的预想效果图，然后再通过window.innerHeight, window.scollY, obj.offsetTop, obj.height等进行设置合适的函数达到想要的效果。<br>
2.box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。假如需要并排放置两个带边框的框，可通过将 box-sizing 设置为 "border-box"。这可令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。<br>
3.tansform属性下的，translateX,scale(num),可分别改变图片位置和大小，实行一定的动画效果。</p>
<h2>2017.8.3</h2>
<p>Day11是一个关于视频播放的练习，在之前我只做过相关的CSS练习，这次正好把脚本也配上了。这中间主要是video标签的使用，video的属性和方法从字面上就可以很清晰的理解它的作用。在这里我也记录一些我学到的内容：<br>
  1.<a href="http://www.w3school.com.cn/jsref/dom_obj_video.asp">video标签的方法与属性</a>，网上记录很清楚，且没什么难点。<br>
  2.DOM的textContent属性：设置或返回制定的节点的文本内容，以及他的所有后代<br>
  3.flex-basis属性，设置灵活盒子的长度<br>
  4.这里又用到dataset,这个用法很值得借鉴</p>
<h2>2017.8.2</h2>
<p>Day8的练习非常有意思，之前在学习js的时候都跳过canvas部分，这次也找了相关知识系统的学习了一下。但是要做出更多效果还需要日后的其他练习。下面就将自己的整理的canvas知识搬上来：<br>
1.canvas标签，定义图形，只是图形容器，必须用脚本来绘制图形。
<ul>相关属性：
  <li>width、height分别设置canvas的宽和高</li>
  <li>getContext()方法可返回一个对象</li>
  <li>strokeStyle,设置笔触颜色\渐变、模式</li>
 </ul>
 <ul>线条样式
   <li>lineCap:设置结束端样式 butt|round|square</li>
   <li>lineJoin:设置两条线相交时，所创的拐角类型 bevel|round|miter</li>
   <li>lineWidth:设置当前线条宽度</li>
  </ul>
  <ul>路径：
    <li>beginPath:起始一条路径，或重置当前路径</li>
    <li>moveTo():把路径移动到画布中的指定位置，不创建线条</li>
    <li>lineTo():添加一个新点，然后在画布中创建从该点到最后指定点线条</li>
    <li>绘制已定义的路径</li>
  </ul>
  2.颜色表示HSL（H,S,L)H色调（0~360），S饱和度（0~100%），L亮度（0~100%）</p>
  <p>在day9的例子中，主要是console的用法，这对调试具有很大的帮助，所以我也将在网上找到的知识点罗列出来：<br>
  1.console.assert(exp,mes)对输入的表达式exp进行判断，为true时不执行在控制台输出mes<br>
  2.console.conut([mes]),统计函数被执行的次数<br>
  3.console.dir(obj|dom),可以详细的查看对象的方法，将dom节点以dom树的结构进行输出<br>
  4.consolr.group([sign])/console.groipCollapsed([sign]) ... console.groupEnd()。将打印的信息以组的形式显示出来<br>
  5.console.time(name)...console.timeEnd(name)。console.time(name)表示几时开始，console.timeEnd(name)表示计时结束，这两个方法配合使用可以用来统计执行某个函数所用的时间。
</p>
<h2>2017.8.1</h2>
>p>这一章Day6的练习有很多有用的知识点，是我觉得在开发中会经常用到的，虽然之前有接触过但是还是很有多地方有些模糊，通过这次的练习也更深一步的巩固了我这方面的知识。下面就把我记下来的知识点分享下：<br>
1.RegExp对象，表示正则表达式。Regexp(pattern,attributes),参数pattern是一个字符串，指定了正则表达式的模式或其他正则表达式；attribute：i（对大小写不敏感），g（全局），m（执行多行匹配）。正则表达式是一个难点，只有熟练才能掌握，记下一个方便查找<a href="http://www.jb51.net/shouce/jquery1.82/regexp.html">正则表达式</a>的网站。<br>
2.fetch(input, init).then(function(response) { ... })的使用;<br>
<code>fetch(endpoint)
  .then(blob=>blob.json())
  .then(data=>cities.push(...data))</code>;</p><br>
<p>接着把Day7的例子也练习了一遍，里面是几种简单常用到的属性方法，因为很简单所以不再赘述了。</p>
<h2>2017.7.31</h2>
<p>今天一直在纠结reduce的用法，在网上找了很多但发现大家的例子都很简单，还是无法帮助我理解这一点，不管怎样现在先记下来。这次的练习都是一些数组的操作，因为才看过《jQuery inAction》，所以对数组还是比较清晰的，不过依然有一些不清楚的地方，现在把这些解决了和未解决的问题先一起放上来：<br>
 1.arryBoject.sort(sortBy)用于数组元素进行排序，sortBy，为可选参数，规定排序，必须为函数。在这次的练习中，都巧妙地利用了return -1 or 1 来达到理想的排序效果。<br>
 <i>const ordered=inventors.sort((a,b)=>a.year>=b.year?1:-1);</i><br>
 2.arry.reduce(function(total,currentValue,currentIndex,arr),initialValue).接受一个函数作为累加器，数组中的每一个值从左到右开始缩减，最后计算成一个值。<br>
 <code>const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportation = data.reduce(function(obj,item){
      if(!obj[item]){
        obj[item]=0;
      }
        obj[item]++;
        return obj;
  },{})</code><br>这个地方我还是不太明白，多看看书吧~</p><br>
  <p>今天又做了一个Day5，这章练习的话我觉得js已经不是重点，而是display:flex的灵活运用了，我之前联系网页制作时几乎没用过flex，所以说这份练习对我来说就是全新的。也记录下一些比较有用的知识：</p><br>
<p> 1.针对 Flex items 的特性（Children)</P>
<ul><li>flex-growth：伸展值</li>
<li>flex-shrink：可接受的压缩值</li>
<li>flex-basis：元素默认的尺寸值</li>
<li>flex：以上三个值按顺序的缩写</li></ul>
<p>2.针对 Flex container 的特性（Parent）</p>
<ul><li>display: flex：将这个元素设置成弹性盒子</li>
<li>flex-direction：主轴方向,row：横向column,：纵向</li>
<li>justify-content：沿主轴的的对齐方式</li>
<li>align-items：沿侧轴的对齐方式</li>
<li>align-content：子元素中文本沿侧轴的对齐方式（只有一行时无效）</li></ul>

<h2>2017.7.30</h2>
<p>今天在学习的时候，无意间看到了别人做的30Days的学习记录，看了之后我的疑问基本都很快解决了。不过我觉得在看之前我得有自己思考，我得自己尝试调试去感受新的知识，而不不是依赖别人的经验，虽然确实能学到很多东西。同样，还是要分享一些所学所得：<br>
1.CSS中的伪类，:root选择器，匹配文档根元素，常用于声明全局CSS变量<br>
2.使用CSS变量实现改变CSS参数。用到了CSS variable，命名为：--变量名，应用为：var(--XXX)<br>
  <i>padding:var(--spacing)</i><br>
3.HTML5中的自定义数据属性及访问方法。HTML5可为元素添加非标准的自定义属性，只需要加上‘data-'前缀，可通过dataset属性来访问这些值。<br>
  <i>input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px"<br></i>
  <i>const suffix=this.dataset.sizing||''</i><br>
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
