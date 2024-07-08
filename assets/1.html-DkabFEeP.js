import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,o as r,a as e}from"./app-1nEvzKFA.js";const i={},I=e('<h1 id="附魔-本文内容搬运自-minecraft-wiki" tabindex="-1"><a class="header-anchor" href="#附魔-本文内容搬运自-minecraft-wiki"><span>附魔（本文内容搬运自 Minecraft Wiki）</span></a></h1><p>本文章介绍的是 Minecraft 中的游戏机制。</p><p>“在 Minecraft 里附魔是什么原理？嗯，你打开一本魔法书，随便挑一个咒语，自己都不怎么知道是干嘛用的。这就是魔法！” ——<strong>Notch</strong></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E9%99%84%E9%AD%94%E7%94%A8%E5%93%81">1 附魔用品</a></li><li><a href="#%E9%99%84%E9%AD%94%E9%80%94%E5%BE%84">2 附魔途径</a><ul><li><a href="#%E9%99%84%E9%AD%94%E5%8F%B0">2.1 附魔台</a><ul><li><a href="#%E5%B9%B2%E9%A2%84%E9%99%84%E9%AD%94%E9%80%89%E9%A1%B9">2.1.1 干预附魔选项</a></li></ul></li><li><a href="#%E9%93%81%E7%A0%A7%E7%BB%93%E5%90%88">2.2 铁砧结合</a></li><li><a href="#%E9%99%84%E9%AD%94%E4%B9%A6">2.3 附魔书</a></li></ul></li><li><a href="#%E9%AD%94%E5%92%92%E6%A6%82%E8%BF%B0">3 魔咒概述</a><ul><li><a href="#%E5%AE%9D%E8%97%8F%E5%9E%8B%E9%AD%94%E5%92%92">3.1 宝藏型魔咒</a></li><li><a href="#%E9%AD%94%E5%92%92%E7%9A%84%E9%80%82%E7%94%A8%E6%80%A7">3.2 魔咒的适用性</a><ul><li><a href="#%E6%89%8B%E6%8C%81%E7%89%A9%E5%93%81%E9%AD%94%E5%92%92">3.2.1 手持物品魔咒</a></li><li><a href="#%E7%9B%94%E7%94%B2%E4%BD%8D%E7%89%A9%E5%93%81%E9%AD%94%E5%92%92">3.2.2 盔甲位物品魔咒</a></li></ul></li></ul></li><li><a href="#%E6%95%B0%E6%8D%AE%E5%80%BC">4 数据值</a><ul><li><a href="#%E7%89%A9%E5%93%81%E6%95%B0%E6%8D%AE%E5%80%BC">4.1 物品数据值</a></li></ul></li></ul><p><strong>附魔（Enchanting）<strong>是为盔甲、工具、武器以及书添加</strong>魔咒（Enchantments）<strong>的游戏机制，这些魔咒可以添加或增强物品的特殊能力和效果，并赋予其</strong>光效（Glint）</strong>。</p><h2 id="附魔用品" tabindex="-1"><a class="header-anchor" href="#附魔用品"><span>附魔用品</span></a></h2><p>名称</p><p>图标</p><p>用途</p><p>附魔台</p><p>附魔物品。</p><p>书架</p><p>增加附魔台给出的魔咒等级。</p><p>青金石</p><p>附魔台附魔所需的消耗品。</p><p>铁砧</p><p>合并已附魔的物品（工具，盔甲或武器），或将附魔书的魔咒应用到物品上，或在保留原有魔咒的同时修复物品。</p><p>砂轮</p><p>用于移除物品上所有非诅咒魔咒（返还少量经验）或修复物品（不返还经验）。</p><p>附魔书</p><p>可以通过铁砧与其他物品结合来给物品添加特定魔咒。</p><h3 id="附魔途径" tabindex="-1"><a class="header-anchor" href="#附魔途径"><span>附魔途径</span></a></h3><p>生存模式中存在 3 种为物品附魔的方法：</p><ul><li>通过附魔台：消耗经验值和青金石附魔物品。只有未被附魔的物品才可以使用这种方法。注意这样消耗的经验是以级为单位的，虽然在 3000 级和 30 级附魔消耗的都是一样的级数，但是因为前者升级比后者需要多得多的经验，所以附魔在更低级别时会划算许多。</li><li>通过铁砧：结合物品和附魔书来附魔，此方法也会消耗经验。</li><li>通过铁砧：结合物品相同、魔咒不同的两个物品，来将二者魔咒集中在单个物品之中。</li></ul><p>除此之外，另外存在几种获取已附魔物品的方法：</p><ul><li>生物途径：与某些生物交互来获取附魔物品。 <ul><li>通过村民：使用绿宝石与其交易来获得附魔物品。</li><li>通过钓鱼：有概率钓到附魔物品。</li><li>通过猪灵：使用金锭与其以物易物有机会获得附有灵魂疾行魔咒的铁靴或附魔书。</li><li>通过杀死持附魔物品的生物（包括僵尸、灾厄村民、骷髅、僵尸猪灵和猪灵）：若它们持有附魔物品，那么将其杀死后有概率掉落。</li></ul></li><li>箱子战利品途径：搜寻末地城、沉船、埋藏的宝藏、废弃矿井、地牢、林地府邸等结构中的箱子。 <ul><li>通过搜寻堡垒遗迹中的箱子有机会获得灵魂疾行附魔书、附有灵魂疾行或其他魔咒的金靴子。</li><li>通过搜寻废弃传送门中的箱子有机会获得附魔金质装备和金质工具。</li></ul></li></ul><p>多人游戏或服务器中的管理员，或开启作弊模式的单人世界玩家，也可以通过 /enchant 等命令为物品附魔。在[Java 版]中，使用 /give 获得的物品所附魔咒在不叠加的情况下最高等级为 2147483647（实际显示最高 255，但当等级大于 255 时，将显示 255 而非命令中指定的等级）。在创造模式中，可以使用铁砧和附魔书附魔物品，并且不消耗经验。附魔书能够在创造模式物品栏中找到，各个等级、每种魔咒的书相互独立，可以使用搜索框查找。</p><h3 id="附魔台" tabindex="-1"><a class="header-anchor" href="#附魔台"><span>附魔台</span></a></h3><p>主条目：附魔机制</p><p>要附魔物品，首先使用附魔台，然后将物品和 1-3 块青金石放入附魔界面的输入槽位中。放下物品后，界面右侧便会显示 3 个随机选项。每个选项内出现的神秘文字对附魔没有任何影响；悬停在一个选项上会显示将要附上的魔咒的其中一个。只有在某个选项的经验等级需求小于或等于玩家目前等级、青金石需求量小于或等于玩家已放置数量时，玩家才能选择这个选项。每个选项会为物品附上一系列随机魔咒，具体取决于该选项需求的经验等级（譬如，等级为 1 的附魔选项可以为一把镐附上“效率 I”魔咒）；实际消耗的经验等级和青金石数量不会产生任何影响。</p><p>经验等级需求影响魔咒的数量、种类和等级，更高的经验等级一般会给予更多以及更强的魔咒。尽管如此，随机性的影响仍然很大。譬如，即使是最高级的 30 级附魔选项仍然可能只得到单独的效率 III 或时运 II。</p><p>要增加附魔等级，需要将书架放在附魔台旁边，中间需要空一格空气。为了获得前面提到的 30 级附魔，需要将 15 个书架放在附魔台周围。更多细节另见附魔机制页面。</p><p>将一本书附魔将得到一本附魔书，对书本身没有任何加成，但可以有效“储存”魔咒，并在以后通过铁砧为物品附魔。</p><p>与铁砧不同的是，创造模式下使用附魔台仍然消耗经验等级。不过，当玩家没有足够的经验等级时，附魔台只会将其扣至 0 级，且视为等级足够而继续正常附魔。</p><h4 id="干预附魔选项" tabindex="-1"><a class="header-anchor" href="#干预附魔选项"><span>干预附魔选项</span></a></h4><p>可能的附魔选项只取决于玩家当前的附魔随机种子、待附魔物品的类型和材质，以及附魔等级（1-30）。将待附魔物品取出并重新放入、用其他物品反复置换待附魔物品、将待附魔物品换成另外一个相同类型和材质的物品、更换或移动附魔台（保持书架数量一致）、在保持书架数量不变的情况下更改书架排布，这些操作都不会影响可能的附魔选项。</p><p>增减或遮挡书架而更改附魔等级能够更改显示出的附魔选项，但不会改变可能的附魔选项；在书架数量与修改前一致的其他附魔台上可以找回原来的附魔选项。某个特定等级的特定附魔选项（随机种子相同、物品相同）在界面上显示的位置的确会有所变化，但除了资源消耗的差别外，并不会变得“更好”或“更坏”。</p><p>对任意物品进行任意等级的附魔都会改变玩家的附魔随机种子，从而改变所有物品在所有附魔等级上的附魔选项。因此，如果针对某个工具没有称心如意的附魔选项，可以消耗 1 块青金石和 1 级经验等级随便附魔一本书或另一个工具来刷新附魔选项。</p><p>注意，可以使用伪随机控制技术以达到定向附魔。附魔台的“?”选项包含的可能附魔选项储存于游戏内存中，可以读取游戏内存预览当前全部的附魔选项可能。</p><h3 id="铁砧结合" tabindex="-1"><a class="header-anchor" href="#铁砧结合"><span>铁砧结合</span></a></h3><p>主条目：铁砧机制</p><p>铁砧可以用于结合两个相同物品的魔咒，并牺牲其中一个物品来修复另外一个。两个物品的类型必须完全相同（例如，铁镐和钻石镐不能合并），而且能结合的魔咒以及一次性能做的修改也有限制。</p><p>要结合物品，玩家应将目标物品放入铁砧内的第一个物品槽位，然后将要牺牲的物品放入第二个槽位内。若可以合并，则附有魔咒的成品与需要消耗的经验等级会一同出现在输出槽位处（经验等级字体为绿色代表玩家拥有足够的经验等级，红色则代表不够）。要完成附魔，玩家只需把成品取出，经验等级同时被扣减。</p><p>经验等级的消耗取决于魔咒，附魔物品的等级越高消耗越多。若目标物品同时也被修复，则消耗量还会更多。与此同时，玩家还可以消耗经验更改目标物品名称。除此之外，所消耗的附加经验是基于之前对铁砧的使用而累加的（累积的附加经验消耗将在物品使用砂轮后归零）。在生存模式中，一次性在铁砧上做的修改费用限制在 39 级，如果费用高于 39 级，铁砧将拒绝对其修改，并显示“过于昂贵”（但也许可以通过先修补物品后结合魔咒来避免）。</p><h3 id="附魔书" tabindex="-1"><a class="header-anchor" href="#附魔书"><span>附魔书</span></a></h3><p>主条目：附魔书</p><p>附魔书可以通过在附魔台对书附魔获得，也可以在世界中生成的箱子中、用绿宝石向图书管理员村民收购和钓鱼获得。附魔书可以载有多个不同类型的魔咒，但只有对待附魔物品有效的魔咒才会附魔上去。例如，一本附魔书可能同时载有“水下呼吸”和“力量”魔咒，但如果这本书应用在弓上，水下呼吸魔咒就会丢失；如果应用在头盔上，力量魔咒就会丢失。</p><p>附魔书中的魔咒通过铁砧来附到物品身上。这种方法可以实现一些附魔台做不到的附魔操作。例如，将“荆棘”魔咒附到靴子上。</p><p>在Java 版中，创造模式下附魔书可以为任何物品附上任意魔咒。例如，将一根木棍附上击退 II，但相互排斥的魔咒仍然无法共存。</p><p>使用附魔书来获得同样的魔咒所需要的经验消耗要比结合物品少得多，这是因为制作附魔书本身也需要消耗经验等级；但这仍然是一笔额外开支，而且直接附魔物品有机会同时得到多个魔咒。附魔书的最大优势在于可以将针对某类工具的魔咒囤积起来日后使用，而且可以进行<strong>受控</strong>的魔咒组合。例如，“精准采集”附魔书可以为斧、镐或锹附魔，玩家可以随意选择将该附魔书用在哪一种工具上。</p><hr><h2 id="所有附魔以及位置见表格" tabindex="-1"><a class="header-anchor" href="#所有附魔以及位置见表格"><span><strong>所有附魔以及位置见表格</strong></span></a></h2><table><thead><tr><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th><th>*</th></tr></thead><tbody><tr><td>名称</td><td>最高等级</td><td>附魔作用说明</td><td>权限重</td><td>位置号码+等级（如非最高需要填写）</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>水下速掘</td><td></td><td>加快水下挖掘速度</td><td>2</td><td>3-10</td><td>3-10 3-12</td><td>3-12 4-10</td><td>10-10</td><td>10-10 12-8</td><td>12-8</td><td></td></tr><tr><td>肢节杀手</td><td>V</td><td>对节肢生物造成额外伤害</td><td>5</td><td>9-7</td><td>6-3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>爆炸保护</td><td>IV</td><td>减少爆炸伤害</td><td>2</td><td>7-4</td><td>7-4</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>引雷</td><td></td><td>在雨天召唤闪电攻击生物，仅在雷暴时生效</td><td>1</td><td>8-10</td><td>10-4</td><td>10-4 3-3</td><td>3-3</td><td></td><td></td><td></td></tr><tr><td>绑定诅咒</td><td></td><td>被期望物品穿在接下来无法完成，玩家创造模式则不受此影响</td><td>1</td><td>3-11</td><td>3-11</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>消失诅咒</td><td></td><td>被诅咒物品会在玩家死亡时消失</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>深海探索者</td><td>III</td><td>增加水下行走速度</td><td>2</td><td>7-3</td><td>7-3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>效率</td><td>V</td><td>加快施工速度</td><td>10</td><td>10 7-1-IV</td><td>7-1-IV</td><td>4-2</td><td>4-2 4-9</td><td>11-8</td><td>11-8</td><td></td></tr><tr><td>落败缓冲</td><td>IV</td><td>减少跌落伤害</td><td>5</td><td>8-4</td><td>8-4 8-9</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>梦幻附加</td><td>II</td><td>让目标着火</td><td>2</td><td>12-7</td><td>12-7 12-12</td><td>11-3</td><td>11-3</td><td></td><td></td><td></td></tr><tr><td>火焰保护</td><td>IV</td><td>减少火焰伤害</td><td>5</td><td>4-1</td><td>4-1 3-2</td><td>3-2</td><td></td><td></td><td></td><td></td></tr><tr><td>火矢</td><td></td><td>使射出的箭矢使目标着火</td><td>2</td><td>5-4</td><td>5-4 8-7</td><td>7-1</td><td>7-1 9-1</td><td>9-1 3-12</td><td>3-12</td><td></td></tr><tr><td>时运</td><td>III</td><td>增加计时数量或计时概率</td><td>2</td><td>9-6</td><td>3-9</td><td>3-9 11-1</td><td>11-1</td><td></td><td></td><td></td></tr><tr><td>冰霜行者</td><td>II</td><td>使在水上行走的地方结冰</td><td>2</td><td>8-3</td><td>10-5</td><td>10-5 11-2</td><td>11-2 3-6</td><td>3-6</td><td></td><td></td></tr><tr><td>优势</td><td>V</td><td>对水生生物造成额外伤害</td><td>2</td><td>5-8</td><td>8-1-IV</td><td>8-1-IV</td><td>9-5</td><td></td><td></td><td></td></tr><tr><td>无限</td><td></td><td>射箭时不会消耗普通箭矢</td><td>1</td><td>3-10</td><td>3-10 4-2</td><td>4-2 9-2</td><td>9-2 7-6</td><td>5-12</td><td>5-12</td><td></td></tr><tr><td>击退</td><td>II</td><td>增加击退距离</td><td>5</td><td>8-12</td><td>10-11</td><td>3-6</td><td>3-6</td><td></td><td></td><td></td></tr><tr><td>抢夺</td><td>III</td><td>增加生物计数物的数量或发生率</td><td>2</td><td>3-8</td><td>3-8 5-2</td><td>5-2 8-11</td><td>9-9</td><td>10-10</td><td>10-10</td><td></td></tr><tr><td>忠诚</td><td>III</td><td>使掷出后的三叉戟返回，魔咒等级评估，三叉戟返回所需时间越短</td><td>5</td><td>7-10</td><td>9-6</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>海之眷顾</td><td>III</td><td>增加钓鱼时间获得宝藏的概率</td><td>2</td><td>4-11</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>饵钓</td><td>III</td><td>减少钓鱼所需的时间</td><td>2</td><td>7-11</td><td>8-3</td><td>9-9</td><td></td><td></td><td></td><td></td></tr><tr><td>经验修复</td><td></td><td>吸取获得的修复工具的耐久度的经验</td><td>2</td><td>7-6</td><td>9-12</td><td>9-8</td><td>9-10</td><td>10-8</td><td>10-8 6-7</td><td>5-2</td></tr><tr><td>定时射击</td><td></td><td>消耗科研箭以射出三只箭矢</td><td>3</td><td>7-7</td><td>7-7 9-1</td><td>9-1 9-3</td><td></td><td></td><td></td><td></td></tr><tr><td>喉咙</td><td>IV</td><td>使箭矢穿越多个实体</td><td>10</td><td>10</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>实力</td><td>V</td><td>增加弓箭伤害</td><td>10</td><td>10 3-11</td><td>3-11 5-5</td><td>5-5</td><td></td><td></td><td></td><td></td></tr><tr><td>射弹物保护</td><td>IV</td><td>减少弹射物伤害</td><td>5</td><td>8-8</td><td>8-9</td><td>10-6</td><td>10-6</td><td></td><td></td><td></td></tr><tr><td>保护</td><td>IV</td><td>减少大部分伤害</td><td>10</td><td>10 7-2</td><td>7-2 9-11</td><td>6-7</td><td></td><td></td><td></td><td></td></tr><tr><td>冲击</td><td>II</td><td>增加弓箭的击退距离</td><td>2</td><td>7-5</td><td>7-5</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>快速装填</td><td>III</td><td>减少弩的填装时间</td><td>5</td><td>8-2</td><td>8-2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>水下呼吸</td><td>III</td><td>延长水下呼吸时间</td><td>2</td><td>9-12</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>激流</td><td>III</td><td>将玩家向三叉戟的方向发射，仅在水中或下雨中生效</td><td>2</td><td>7-9</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>锋利</td><td>V</td><td>增加近战攻击伤害</td><td>10</td><td>10 5-1</td><td>5-1 11-9</td><td>11-9</td><td></td><td></td><td></td><td></td></tr><tr><td>精准采集</td><td></td><td>被开采的方块本身</td><td>1</td><td>7-8</td><td>7-10</td><td>8-12</td><td>9-10</td><td>3-9</td><td>3-9 4-9</td><td>6-8</td></tr><tr><td>亡灵杀手</td><td>V</td><td>对亡灵生物造成额外伤害</td><td>5</td><td>10-1-IV</td><td>10-1-IV</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>灵魂疾行</td><td>III</td><td>增加玩家在灵魂沙和灵魂土上的移动速度</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>迅捷潜行</td><td>III</td><td>提高玩家潜行时的移动速度 。1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>横扫之刃</td><td>III</td><td>增加横扫攻击伤害</td><td>2</td><td>3-7</td><td>3-7 3-10</td><td>3-10</td><td></td><td></td><td></td><td></td></tr><tr><td>荆棘</td><td>III</td><td>给予攻击者伤害</td><td>1</td><td>8-6</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>耐久</td><td>III</td><td>减少物品掉耐久的</td><td>5</td><td>7-5</td><td>7-5 9-1</td><td>9-1 10-12</td><td>11-12</td><td></td><td></td><td></td></tr><tr><td>敏捷</td><td>III</td><td>战利品入背包</td><td></td><td>4-10</td><td>12-8</td><td>12-8 7-2</td><td>7-2</td><td></td><td></td><td></td></tr><tr><td>自动上钩</td><td>III</td><td>咬一口就上钩（钓鱼用）</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>火炬</td><td>III</td><td>箭落地的地方有一把火把</td><td></td><td>9-8</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>箱子搬运大师</td><td>III</td><td>搬运箱的时候东西不退回（低配潜影箱）</td><td></td><td>9-11</td><td>9-7</td><td>10-9</td><td>10-9 5-5</td><td>5-5</td><td></td><td></td></tr><tr><td>村庄卫士</td><td>V</td><td>打掠夺者加伤害，满级+2.5</td><td></td><td>8-4-IV</td><td>8-4-IV</td><td>9-6</td><td></td><td></td><td></td><td></td></tr><tr><td>经验猎人</td><td>V</td><td>增加经验获取，满级+250%</td><td></td><td>3-8</td><td>3-8 7-5-III</td><td>7-5-III</td><td>12-12</td><td>11-9</td><td>11-9</td><td></td></tr><tr><td>宝藏</td><td>IV</td><td>概率获得宝藏，IV时26%概率获得</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>超级开采</td><td>V</td><td>挖掘时有概率爆炸，IV时80%概率</td><td></td><td>10-4</td><td>10-4</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>宽恕</td><td>III</td><td>击杀时有概率掉落刷怪蛋，III时14%概率</td><td></td><td>3-6</td><td>3-6 10-5-I</td><td>10-5-I</td><td></td><td></td><td></td><td></td></tr><tr><td>烈焰行者</td><td>III</td><td>可以在岩浆上行走</td><td></td><td>5-11-II</td><td>4-9</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>神之触手</td><td>V</td><td>挖掘时可获得刷怪笼，V时60%概率</td><td></td><td>7-1</td><td>7-1 10-1</td><td>10-1</td><td></td><td></td><td></td><td></td></tr><tr><td>龙息弓</td><td>III</td><td>射出的箭龙息，III时25%概率15s半径5</td><td></td><td>9-4</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>圣光</td><td>V</td><td>直接近距离治疗，II时36%发生率，V时60%</td><td></td><td>8-4-IV</td><td>8-4-IV</td><td>9-3</td><td>11-10</td><td>11-10 12-8</td><td>12-8</td><td></td></tr><tr><td>冰盾</td><td>III</td><td>攻击时有75%概率冻结对手给与Slow III效果</td><td></td><td>8-8</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>制造动力</td><td>三</td><td>100%反伤,I时50%，III时10%（个人错觉了）</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>雷神箭</td><td>III</td><td>召唤闪电,III时25%概率</td><td></td><td>5-11</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>万磁王</td><td></td><td>附近物品自动吸入背包</td><td></td><td>10-11</td><td>5-12</td><td>5-12 12-8</td><td>12-8</td><td></td><td></td><td></td></tr><tr><td>幸运矿工</td><td>V</td><td>V时挖矿有65%概率获得+250%经验</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>灵跃</td><td>III</td><td>装备时，获得Jump III</td><td></td><td>8-4</td><td>8-4 8-12</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>恶魂弓</td><td>III</td><td>射出去的箭变火球</td><td></td><td>8-3</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>飞毛腿</td><td>III</td><td>准备时，获得速度 III</td><td></td><td>3-6</td><td>3-6</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>嗜血杀戮</td><td>V</td><td>每损失0.5生命+5%伤害（最高200%）</td><td></td><td>10-6</td><td>10-6 11-2</td><td>11-2</td><td></td><td></td><td></td><td></td></tr><tr><td>河流掌控者</td><td>V</td><td>V时，鱼竿推送距离五倍</td><td></td><td>3-12</td><td>3-12 4-12</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>丰富的捕捞经验</td><td>IV</td><td>给予+100%钓鱼经验</td><td></td><td>9-3-IV</td><td>9-3-IV</td><td>4-1-IV</td><td>4-1-IV</td><td></td><td></td><td></td></tr><tr><td>下界杀手</td><td>V</td><td>V时对下界生物+2.5伤害</td><td></td><td>6-8</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>狙击手</td><td>V</td><td>III时弹射物速度+160%,V时+200%</td><td></td><td>10-5-IV</td><td>10-5-IV</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>防火墙</td><td>三</td><td>III时，被攻击时有45%概率点燃对手7.5s</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>毒箭</td><td>三</td><td>III时，射箭有40%概率自带中毒效果5.5s</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>刽子手</td><td>四</td><td>III时10.25%概率，IV时12%概率获得头</td><td></td><td>10-11-I</td><td>10-11-I</td><td>3-3</td><td>3-3</td><td></td><td></td><td></td></tr><tr><td>熔炼</td><td>V</td><td>V时，挖掘时有75%概率自动熔炼矿石</td><td></td><td>11-3</td><td>11-3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>末影弓</td><td></td><td>射出去的箭会变成末影珍珠</td><td></td><td>5-8</td><td>10-12</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>凋零弓</td><td>III</td><td>射出去的弓箭带来零效果，III时4.75s</td><td></td><td>4-9</td><td>3-2</td><td>3-2</td><td></td><td></td><td></td><td></td></tr><tr><td>急迫</td><td>III</td><td>装备后获得对应急等级</td><td></td><td>3-11-II</td><td>3-11-II</td><td>5-5</td><td>5-5 7-10</td><td></td><td></td><td></td></tr><tr><td>雷神</td><td>III</td><td>攻击时有概率召唤闪电</td><td></td><td>4-2-II</td><td>5-5-I</td><td>5-5-I</td><td>4-3-II</td><td>5-7</td><td>5-7</td><td></td></tr><tr><td>村庄卫士</td><td>V</td><td>对掠夺者额外增伤，V时额外2.5伤害</td><td></td><td>4-2</td><td>4-2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>双掣子</td><td>III</td><td>获得物品* 2，III时30%概率</td><td></td><td>5-4</td><td>5-4 6-7-II</td><td>6-7-II</td><td></td><td></td><td></td><td></td></tr><tr><td>暗夜行者</td><td></td><td>夜视</td><td></td><td>5-4</td><td>5-4 9-4</td><td>10-9</td><td>10-9</td><td></td><td></td><td></td></tr><tr><td>超级开采</td><td>V</td><td>挖矿和箱子的时候附带爆炸，V时100%概率</td><td></td><td>8-1IV</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>重拳出击</td><td>V</td><td>攻击时有概率双倍伤害，IV时7.2%概率</td><td></td><td>8-1-IV</td><td>8-1-IV</td><td>9-2-IV</td><td>9-2-IV</td><td>10-4-IV</td><td>10-4-IV</td><td></td></tr><tr><td>盾构机</td><td>III</td><td>挖矿时能多挖两格</td><td></td><td>8-3</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>熔炼</td><td>V</td><td>挖矿自动熔炼，IV时65%概率</td><td></td><td>8-7-IV</td><td>8-7-IV</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>火箭</td><td>V</td><td>攻击时有参考送上天，III时7%概率</td><td></td><td>8-11-III</td><td>8-11-III</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>宝藏</td><td>V</td><td>有概率获得宝藏，V时30%概率</td><td></td><td>9-8</td><td>7-10</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>饱食</td><td>III</td><td>自动回复饱食度</td><td></td><td>9-6-II</td><td>6-7</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>海王</td><td></td><td>海王，海里无限呼吸</td><td></td><td>9-2</td><td>9-2 6-3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>石化</td><td>III</td><td>损伤时获得石化效果，III时为100%概率</td><td></td><td>3-1</td><td>3-1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>矿脉矿工</td><td>III</td><td>一次开采几个矿物，III时为9个</td><td></td><td>7-6-I</td><td>7-6-I</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>自我毁灭</td><td>III</td><td>死亡时自爆，III时为50%</td><td></td><td>7-6-I</td><td>7-6-I</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>自动补种</td><td></td><td>锄头自动补种</td><td></td><td>5-5</td><td>5-5 3-6</td><td>3-6 10-9</td><td>10-9</td><td></td><td></td><td></td></tr><tr><td>TNT 射手♂</td><td>III</td><td>射出3.5s爆炸的TNT，III时为12.5%概率</td><td></td><td>4-3</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><hr><h3 id="宝藏型魔咒" tabindex="-1"><a class="header-anchor" href="#宝藏型魔咒"><span>宝藏型魔咒</span></a></h3><p>宝藏型魔咒是无法从附魔台获取的魔咒。若要将这些魔咒应用到玩家预期的物品上，唯一的方式是获取拥有这些魔咒的物品，并使用铁砧来进行物品合并。不同的宝藏型魔咒有不同的获取方式：</p><p>经验修补、冰霜行者、绑定诅咒、消失诅咒</p><ul><li>交易以获取具有宝藏型魔咒的工具或附魔书。图书管理员提供的具有宝藏型魔咒的附魔书，相较于其会提供的其他附魔书，价格会增加一倍。</li><li>钓鱼时的附魔书有可能具有宝藏型魔咒。</li><li>一部分战利品箱会包含有机会出现这些宝藏型魔咒的物品或附魔书。</li></ul><p>灵魂疾行</p><ul><li>进行以物易物有机会得到具有灵魂疾行的附魔书或铁靴子。</li><li>探索堡垒遗迹的战利品箱有机会找到灵魂疾行附魔书。</li></ul><p>迅捷潜行</p><ul><li>探索远古城市的战利品箱有机会找到具有迅捷潜行的附魔书。</li></ul><h3 id="魔咒的适用性" tabindex="-1"><a class="header-anchor" href="#魔咒的适用性"><span>魔咒的适用性</span></a></h3><p>参见：不兼容魔咒</p><p>以下表格列出了玩家在生存模式中可以合理获得的魔咒。既可应用于手持物品又可应用于盔甲位物品的魔咒会同时出现在 2 个表格中。</p><ul><li>附魔台图标 表示该物品可以在生存模式中通过附魔台正常获得。</li><li>铁砧图标 表示该物品<strong>无法</strong>在生存模式中通过附魔台正常获得（附魔台永远不会为物品提供此魔咒），但可以通过其他方式附魔（例如，使用铁砧将物品与附魔书或另一附魔物品合并）。</li></ul><h2 id="手持物品魔咒" tabindex="-1"><a class="header-anchor" href="#手持物品魔咒"><span>手持物品魔咒</span></a></h2><p>魔咒（最高等级）</p><p>剑</p><p>斧</p><p>镐</p><p>锹</p><p>剪刀</p><p>弓</p><p>钓鱼竿</p><p>锄</p><p>胡萝卜钓竿</p><p>诡异菌钓竿</p><p>刷子</p><p>三叉戟</p><p>弩</p><p>指南针</p><p>追溯指针</p><p><a href="/zh/wiki/%E8%8A%82%E8%82%A2%E6%9D%80%E6%89%8B" title="节肢杀手">节肢杀手</a>（V）</p><p><a href="/zh/wiki/%E5%BC%95%E9%9B%B7" title="引雷">引雷</a>（I）</p><p><a href="/zh/wiki/%E6%B6%88%E5%A4%B1%E8%AF%85%E5%92%92" title="消失诅咒">消失诅咒</a>（I）</p><p><a href="/zh/wiki/%E6%95%88%E7%8E%87" title="效率">效率</a>（V）</p><p><a href="/zh/wiki/%E7%81%AB%E7%84%B0%E9%99%84%E5%8A%A0" title="火焰附加">火焰附加</a>（II）</p><p><a href="/zh/wiki/%E7%81%AB%E7%9F%A2" title="火矢">火矢</a>（I）</p><p><a href="/zh/wiki/%E6%97%B6%E8%BF%90" title="时运">时运</a>（III）</p><p><a href="/zh/wiki/%E7%A9%BF%E5%88%BA" title="穿刺">穿刺</a>（V）</p><p><a href="/zh/wiki/%E6%97%A0%E9%99%90" title="无限">无限</a>（I）</p><p><a href="/zh/wiki/%E5%87%BB%E9%80%80" title="击退">击退</a>（II）</p><p><a href="/zh/wiki/%E6%8A%A2%E5%A4%BA" title="抢夺">抢夺</a>（III）</p><p><a href="/zh/wiki/%E5%BF%A0%E8%AF%9A" title="忠诚">忠诚</a>（III）</p><p><a href="/zh/wiki/%E6%B5%B7%E4%B9%8B%E7%9C%B7%E9%A1%BE" title="海之眷顾">海之眷顾</a>（III）</p><p><a href="/zh/wiki/%E9%A5%B5%E9%92%93" title="饵钓">饵钓</a>（III）</p><p><a href="/zh/wiki/%E7%BB%8F%E9%AA%8C%E4%BF%AE%E8%A1%A5" title="经验修补">经验修补</a>（I）</p><p><a href="/zh/wiki/%E5%A4%9A%E9%87%8D%E5%B0%84%E5%87%BB" title="多重射击">多重射击</a>（I）</p><p><a href="/zh/wiki/%E7%A9%BF%E9%80%8F" title="穿透">穿透</a>（IV）</p><p><a href="/zh/wiki/%E5%8A%9B%E9%87%8F%EF%BC%88%E9%AD%94%E5%92%92%EF%BC%89" title="力量（魔咒）">力量</a>（V）</p><p><a href="/zh/wiki/%E5%86%B2%E5%87%BB" title="冲击">冲击</a>（II）</p><p><a href="/zh/wiki/%E5%BF%AB%E9%80%9F%E8%A3%85%E5%A1%AB" title="快速装填">快速装填</a>（III）</p><p><a href="/zh/wiki/%E6%BF%80%E6%B5%81" title="激流">激流</a>（III）</p><p><a href="/zh/wiki/%E9%94%8B%E5%88%A9" title="锋利">锋利</a>（V）</p><p><a href="/zh/wiki/%E7%B2%BE%E5%87%86%E9%87%87%E9%9B%86" title="精准采集">精准采集</a>（I）</p><p><a href="/zh/wiki/%E4%BA%A1%E7%81%B5%E6%9D%80%E6%89%8B" title="亡灵杀手">亡灵杀手</a>（V）</p><p><a href="/zh/wiki/%E6%A8%AA%E6%89%AB%E4%B9%8B%E5%88%83" title="横扫之刃">横扫之刃</a>（III）</p><p><a href="/zh/wiki/%E8%80%90%E4%B9%85" title="耐久">耐久</a>（III）</p><h3 id="盔甲位物品魔咒" tabindex="-1"><a class="header-anchor" href="#盔甲位物品魔咒"><span>盔甲位物品魔咒</span></a></h3><p>魔咒（最高等级）</p><p>头盔</p><p>海龟壳</p><p>胸甲</p><p>护腿</p><p>靴子</p><p>鞘翅</p><p>南瓜</p><p>生物头颅</p><p><a href="/zh/wiki/%E6%B0%B4%E4%B8%8B%E9%80%9F%E6%8E%98" title="水下速掘">水下速掘</a>（I）</p><p><a href="/zh/wiki/%E7%88%86%E7%82%B8%E4%BF%9D%E6%8A%A4" title="爆炸保护">爆炸保护</a>（IV）</p><p><a href="/zh/wiki/%E7%BB%91%E5%AE%9A%E8%AF%85%E5%92%92" title="绑定诅咒">绑定诅咒</a>（I）</p><p><a href="/zh/wiki/%E6%B6%88%E5%A4%B1%E8%AF%85%E5%92%92" title="消失诅咒">消失诅咒</a>（I）</p><p><a href="/zh/wiki/%E6%B7%B1%E6%B5%B7%E6%8E%A2%E7%B4%A2%E8%80%85" title="深海探索者">深海探索者</a>（III）</p><p><a href="/zh/wiki/%E6%91%94%E8%90%BD%E7%BC%93%E5%86%B2" title="摔落缓冲">摔落缓冲</a>（IV）</p><p><a href="/zh/wiki/%E7%81%AB%E7%84%B0%E4%BF%9D%E6%8A%A4" title="火焰保护">火焰保护</a>（IV）</p><p><a href="/zh/wiki/%E5%86%B0%E9%9C%9C%E8%A1%8C%E8%80%85" title="冰霜行者">冰霜行者</a>（II）</p><p><a href="/zh/wiki/%E7%BB%8F%E9%AA%8C%E4%BF%AE%E8%A1%A5" title="经验修补">经验修补</a>（I）</p><p><a href="/zh/wiki/%E5%BC%B9%E5%B0%84%E7%89%A9%E4%BF%9D%E6%8A%A4" title="弹射物保护">弹射物保护</a>（IV）</p><p><a href="/zh/wiki/%E4%BF%9D%E6%8A%A4" title="保护">保护</a>（IV）</p><p><a href="/zh/wiki/%E6%B0%B4%E4%B8%8B%E5%91%BC%E5%90%B8%EF%BC%88%E9%AD%94%E5%92%92%EF%BC%89" title="水下呼吸（魔咒）">水下呼吸</a>（III）</p><p><a href="/zh/wiki/%E8%8D%86%E6%A3%98" title="荆棘">荆棘</a>（III）</p><p><a href="/zh/wiki/%E8%80%90%E4%B9%85" title="耐久">耐久</a>（III）</p><p><a href="/zh/wiki/%E7%81%B5%E9%AD%82%E7%96%BE%E8%A1%8C" title="灵魂疾行">灵魂疾行</a>（III）</p><p><a href="/zh/wiki/%E8%BF%85%E6%8D%B7%E6%BD%9C%E8%A1%8C" title="迅捷潜行">迅捷潜行</a>（III）</p>',136),a=[I];function p(l,h){return r(),d("div",null,a)}const s=t(i,[["render",p],["__file","1.html.vue"]]),B=JSON.parse('{"path":"/help/game/fwq/1.html","title":"附魔","lang":"zh-CN","frontmatter":{"title":"附魔","icon":"fa-solid fa-book-tanakh","order":1,"author":"猫咪","date":"2023-09-26T00:00:00.000Z","category":["附魔教程"],"tag":["附魔"],"sticky":true,"star":true,"description":"附魔（本文内容搬运自 Minecraft Wiki） 本文章介绍的是 Minecraft 中的游戏机制。 “在 Minecraft 里附魔是什么原理？嗯，你打开一本魔法书，随便挑一个咒语，自己都不怎么知道是干嘛用的。这就是魔法！” ——Notch 目录 1 附魔用品 2 附魔途径 2.1 附魔台 2.1.1 干预附魔选项 2.2 铁砧结合 2.3 附魔...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/help/game/fwq/1.html"}],["meta",{"property":"og:site_name","content":"LittleSheep Minecraft Wiki"}],["meta",{"property":"og:title","content":"附魔"}],["meta",{"property":"og:description","content":"附魔（本文内容搬运自 Minecraft Wiki） 本文章介绍的是 Minecraft 中的游戏机制。 “在 Minecraft 里附魔是什么原理？嗯，你打开一本魔法书，随便挑一个咒语，自己都不怎么知道是干嘛用的。这就是魔法！” ——Notch 目录 1 附魔用品 2 附魔途径 2.1 附魔台 2.1.1 干预附魔选项 2.2 铁砧结合 2.3 附魔..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T10:55:18.000Z"}],["meta",{"property":"article:author","content":"猫咪"}],["meta",{"property":"article:tag","content":"附魔"}],["meta",{"property":"article:published_time","content":"2023-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-08T10:55:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"附魔\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-08T10:55:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"猫咪\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"附魔用品","slug":"附魔用品","link":"#附魔用品","children":[{"level":3,"title":"附魔途径","slug":"附魔途径","link":"#附魔途径","children":[]},{"level":3,"title":"附魔台","slug":"附魔台","link":"#附魔台","children":[]},{"level":3,"title":"铁砧结合","slug":"铁砧结合","link":"#铁砧结合","children":[]},{"level":3,"title":"附魔书","slug":"附魔书","link":"#附魔书","children":[]}]},{"level":2,"title":"所有附魔以及位置见表格","slug":"所有附魔以及位置见表格","link":"#所有附魔以及位置见表格","children":[{"level":3,"title":"宝藏型魔咒","slug":"宝藏型魔咒","link":"#宝藏型魔咒","children":[]},{"level":3,"title":"魔咒的适用性","slug":"魔咒的适用性","link":"#魔咒的适用性","children":[]}]},{"level":2,"title":"手持物品魔咒","slug":"手持物品魔咒","link":"#手持物品魔咒","children":[{"level":3,"title":"盔甲位物品魔咒","slug":"盔甲位物品魔咒","link":"#盔甲位物品魔咒","children":[]}]}],"git":{"createdTime":1695731265000,"updatedTime":1720436118000,"contributors":[{"name":"znc15","email":"jimmybandass21@gmail.com","commits":1}]},"readingTime":{"minutes":21.27,"words":6381},"filePathRelative":"help/game/fwq/1.md","localizedDate":"2023年9月26日","autoDesc":true}');export{s as comp,B as data};
