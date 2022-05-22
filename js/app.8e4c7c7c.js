(function(){"use strict";var t={7074:function(t,a,r){var e=r(8935),s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"page-container"},[r("header",{staticClass:"header"},[r("div",{staticClass:"header__wrapper container"},[r("span",{staticClass:"header__info"},[t._v("Каталог")]),t._m(0),r("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),t.isCartLoading?r("BasePreloader",{staticClass:"header__loader"}):r("CartIndicator")],1)]),r("router-view"),r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer__wrapper container"},[t._m(1),r("ul",{staticClass:"footer__social social"},[r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{"aria-label":"Вконтакте",href:"#"}},[r("svg",{attrs:{fill:"currentColor",height:"11",width:"20"}},[r("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{"aria-label":"Инстаграм",href:"#"}},[r("svg",{attrs:{fill:"currentColor",height:"17",width:"17"}},[r("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{"aria-label":"Facebook",href:"#"}},[r("svg",{attrs:{fill:"currentColor",height:"17",width:"17"}},[r("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{"aria-label":"Twitter",href:"#"}},[r("svg",{attrs:{fill:"currentColor",height:"14",width:"17"}},[r("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{"aria-label":"Telegram",href:"#"}},[r("svg",{attrs:{fill:"currentColor",height:"17",width:"19"}},[r("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),r("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(2),r("span",{staticClass:"footer__copyright"},[t._v(" © 2020 Технозавррр ")])])])],1)},o=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("a",{staticClass:"header__logo",attrs:{href:"#"}},[r("img",{attrs:{alt:"Логотип интернет магазина Технозавррр",height:"33",src:"img/svg/logo-tech.svg",width:"190"}})])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ul",{staticClass:"footer__links"},[r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),r("li",[r("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ul",{staticClass:"footer__data"},[r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#",rel:"noopener",target:"_blank",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#",rel:"noopener",target:"_blank",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}],i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("router-link",{staticClass:"header__cart",attrs:{to:{name:"cart"},"aria-label":"Корзина с товарами"}},[r("svg",{attrs:{fill:"currentColor",height:"21",width:"30"}},[r("use",{attrs:{"xlink:href":"#icon-cart"}})]),r("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v(t._s(t.$store.state.cartProducts.length))])])},c=[],n={},l=n,u=r(1001),d=(0,u.Z)(l,i,c,!1,null,"213fa615",null),_=d.exports,m=r(4665),p=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"loading"},[r("svg",{staticStyle:{margin:"auto","background-image":"none",display:"block","shape-rendering":"auto"},attrs:{preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"50",cy:"50",fill:"none",r:"28",stroke:"#9efe02","stroke-dasharray":"43.982297150257104 43.982297150257104","stroke-linecap":"round","stroke-width":"7"}},[r("animateTransform",{attrs:{attributeName:"transform",dur:"0.9900990099009901s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"}})],1),r("circle",{attrs:{cx:"50",cy:"50",fill:"none",r:"20",stroke:"#272727","stroke-dasharray":"31.41592653589793 31.41592653589793","stroke-dashoffset":"31.41592653589793","stroke-linecap":"round","stroke-width":"7"}},[r("animateTransform",{attrs:{attributeName:"transform",dur:"0.9900990099009901s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;-360 50 50"}})],1)])])},f=[],h={},C=h,g=(0,u.Z)(C,p,f,!1,null,"6b73a665",null),v=g.exports,b={computed:{...(0,m.rn)({isCartLoading:"isCartLoading"})},components:{BasePreloader:v,CartIndicator:_},methods:{...(0,m.nv)(["loadCart"]),...(0,m.OI)(["updateUserAccessKey"])},created(){const t=localStorage.getItem("userAccessKey");t&&this.updateUserAccessKey(t),this.loadCart()}},P=b,y=(0,u.Z)(P,s,o,!1,null,"3cf631ce",null),k=y.exports,w=r(2809),A=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("main",{staticClass:"content container"},[t._m(0),r("div",{staticClass:"content__catalog"},[r("ProductFilter",{attrs:{"category-id":t.filterCategoryId,color:t.filterColor,"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo},on:{"update:categoryId":function(a){t.filterCategoryId=a},"update:category-id":function(a){t.filterCategoryId=a},"update:color":function(a){t.filterColor=a},"update:priceFrom":function(a){t.filterPriceFrom=a},"update:price-from":function(a){t.filterPriceFrom=a},"update:priceTo":function(a){t.filterPriceTo=a},"update:price-to":function(a){t.filterPriceTo=a}}}),r("section",{staticClass:"catalog"},[t.isProductLoading?r("BasePreloader"):t.hasErrorLoading?r("BaseErrorLoading",{attrs:{descr:"Произошла ошибка при загрузке товаров!"},on:{"load-again":t.loadProducts}}):t._e(),r("ProductList",{attrs:{products:t.products}}),r("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)])},x=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content__top content__top--catalog"},[r("h1",{staticClass:"content__title"},[t._v(" Каталог ")]),r("span",{staticClass:"content__info"},[t._v(" 152 товара ")])])}],T=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ul",{staticClass:"catalog__pagination pagination"},[r("li",{staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{"aria-label":"Предыдущая страница",href:"#"},on:{click:function(a){a.preventDefault(),1!==t.page&&t.paginate(t.page-1)}}},[r("svg",{attrs:{fill:"currentColor",height:"14",width:"8"}},[r("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(a){return r("li",{key:a,staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link",class:{"pagination__link--current":a===t.page},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.paginate(a)}}},[t._v(" "+t._s(a)+" ")])])})),r("li",{staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{"aria-label":"Следующая страница",href:"#"},on:{click:function(a){a.preventDefault(),t.page!==t.pages&&t.paginate(t.page+1)}}},[r("svg",{attrs:{fill:"currentColor",height:"14",width:"8"}},[r("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},E=[],L={model:{prop:"page",event:"paginate"},props:["page","perPage","count"],computed:{pages(){return Math.ceil(this.count/this.perPage)}},methods:{paginate(t){this.$emit("paginate",t)}}},$=L,I=(0,u.Z)($,T,E,!1,null,"4133ba24",null),D=I.exports,B=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return r("ProductItem",{key:t.id,attrs:{product:t}})})),1)},F=[],N=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("li",{staticClass:"catalog__item"},[r("router-link",{staticClass:"catalog__pic",attrs:{to:{name:"product",params:{id:t.product.id}}}},[r("img",{attrs:{alt:t.product.title,src:t.product.image}})]),r("h3",{staticClass:"catalog__title"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product.title))])]),r("span",{staticClass:"catalog__price"},[t._v(t._s(t._f("formatNumber")(t.product.price))+" ₽")]),r("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.colorValue,expression:"colorValue"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:a.id,checked:t._q(t.colorValue,a.id)},on:{change:function(r){t.colorValue=a.id}}}),r("span",{staticClass:"colors__value",style:{backgroundColor:a.code}})])])})),0)],1)},Z=[];const K=t=>Intl.NumberFormat("ru-RU").format(t);var S={data(){return{colorValue:this.product.colors[0].id}},props:["product"],filters:{formatNumber:K}},O=S,V=(0,u.Z)(O,N,Z,!1,null,"285cf74a",null),U=V.exports,q={props:["products"],components:{ProductItem:U}},M=q,j=(0,u.Z)(M,B,F,!1,null,"f55abb18",null),G=j.exports,W=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("aside",{staticClass:"filter"},[r("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),r("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цена")]),r("label",{staticClass:"form__label form__label--price"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{name:"min-price",type:"text"},domProps:{value:t.currentPriceFrom},on:{input:function(a){a.target.composing||(t.currentPriceFrom=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}}),r("span",{staticClass:"form__value"},[t._v("От")])]),r("label",{staticClass:"form__label form__label--price"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{name:"max-price",type:"text"},domProps:{value:t.currentPriceTo},on:{input:function(a){a.target.composing||(t.currentPriceTo=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}}),r("span",{staticClass:"form__value"},[t._v("До")])])]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Категория")]),r("label",{staticClass:"form__label form__label--select"},[r("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{name:"category"},on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(a){var r="_value"in a?a._value:a.value;return t._n(r)}));t.currentCategoryId=a.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(a){return r("option",{key:a.id,domProps:{value:a.id}},[t._v(t._s(a.title))])}))],2)])]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цвет")]),r("ul",{staticClass:"colors"},[r("li",{staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio",value:"none"},domProps:{checked:t._q(t.currentColor,"none")},on:{change:function(a){t.currentColor="none"}}}),r("span",{staticClass:"colors__value",staticStyle:{background:"url('img/empty-filter.png') center/contain"}})])]),t._l(t.colors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:a.id,checked:t._q(t.currentColor,a.id)},on:{change:function(r){t.currentColor=a.id}}}),r("span",{staticClass:"colors__value",style:{backgroundColor:a.code}})])])}))],2)]),r("button",{staticClass:"filter__submit button button--primary",attrs:{type:"submit"}},[t._v(" Применить ")]),r("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:t.reset}},[t._v(" Сбросить ")])])])},H=[],z=r(6166),R=r.n(z);const Q="https://vue-study.skillbox.cc/api",X=t=>R().get(`${Q}/products`,{params:t}),Y=t=>R().get(`${Q}/products/${t}`),J=()=>R().get(`${Q}/colors`),tt=()=>R().get(`${Q}/productCategories`);var at={data(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColor:"none",categoriesData:[],colorsData:[]}},props:["priceFrom","priceTo","categoryId","color"],computed:{categories(){return this.categoriesData?this.categoriesData.items:[]},colors(){return this.colorsData?this.colorsData.items:[]}},methods:{submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:color",this.currentColor)},reset(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:color","none")},async loadCategories(){const{data:t}=await tt();this.categoriesData=t},async loadColors(){const{data:t}=await J();this.colorsData=t}},watch:{priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},color(t){this.currentColor=t}},created(){this.loadCategories(),this.loadColors()}},rt=at,et=(0,u.Z)(rt,W,H,!1,null,"cc342538",null),st=et.exports,ot=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"error"},[r("span",{staticClass:"error__descr"},[t._v(t._s(t.descr))]),r("button",{staticClass:"button button--primary",attrs:{type:"button"},on:{click:t.loadAgain}},[t._v("Попробовать еще раз")])])},it=[],ct={props:["descr"],methods:{loadAgain(){this.$emit("load-again")}}},nt=ct,lt=(0,u.Z)(nt,ot,it,!1,null,"f7512bf0",null),ut=lt.exports,dt={data(){return{page:1,productsPerPage:6,filterPriceFrom:0,filterPriceTo:0,filterCategoryId:0,filterColor:"none",productsData:null,isProductLoading:!1,hasErrorLoading:!1}},components:{BaseErrorLoading:ut,BasePreloader:v,ProductList:G,BasePagination:D,ProductFilter:st},computed:{products(){return this.productsData?this.productsData.items.map((t=>({...t,image:t.image.file.url}))):[]},countProducts(){return this.productsData?this.productsData.pagination.total:0}},methods:{loadProducts(){this.isProductLoading=!0,this.hasErrorLoading=!1,clearTimeout(this.loadProductsTimer),this.loadProductsTimer=setTimeout((async()=>{try{const{data:t}=await X({page:this.page,limit:this.productsPerPage,categoryId:this.filterCategoryId,minPrice:this.filterPriceFrom,maxPrice:this.filterPriceTo,colorId:this.filterColor});this.productsData=t}catch(t){this.hasErrorLoading=!0}finally{this.isProductLoading=!1}}),1e3)}},watch:{page(){this.loadProducts()},filterPriceFrom(){this.loadProducts()},filterPriceTo(){this.loadProducts()},filterCategoryId(){this.loadProducts()},filterColor(){this.loadProducts()}},created(){this.loadProducts()}},_t=dt,mt=(0,u.Z)(_t,A,x,!1,null,"b9f3b52e",null),pt=mt.exports,ft=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("main",{staticClass:"content container"},[t.isProductLoading?r("BasePreloader"):t.hasErrorLoading?r("BaseErrorLoading",{attrs:{descr:"Не удалось загрузить товар"},on:{"load-again":t.loadProduct}}):r("div",[r("div",{staticClass:"content__top"},[r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v("Каталог")])],1),r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(t._s(t.category.title))])],1),r("li",{staticClass:"breadcrumbs__item"},[r("span",{staticClass:"breadcrumbs__link"},[t._v(t._s(t.product.title))])])])]),r("section",{staticClass:"item"},[r("div",{staticClass:"item__pics pics"},[r("div",{staticClass:"pics__wrapper"},[r("img",{attrs:{alt:t.product.title,src:t.product.image,height:"570",width:"570"}})])]),r("div",{staticClass:"item__info"},[r("span",{staticClass:"item__code"},[t._v("Артикул: "+t._s(t.product.id))]),r("h2",{staticClass:"item__title"},[t._v(" "+t._s(t.product.title)+" ")]),r("div",{staticClass:"item__form"},[r("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.addToCart.apply(null,arguments)}}},[r("b",{staticClass:"item__price"},[t._v(" "+t._s(t._f("formatNumber")(t.product.price))+" ₽ ")]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цвет:")]),r("ul",{staticClass:"colors"},t._l(t.product.colors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.colorValue,expression:"colorValue"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:a.id,checked:t._q(t.colorValue,a.id)},on:{change:function(r){t.colorValue=a.id}}}),r("span",{staticClass:"colors__value",style:{backgroundColor:a.code}})])])})),0)]),r("div",{staticClass:"item__row"},[r("BaseCounter",{attrs:{amount:t.productAmount},on:{"update:amount":function(a){t.productAmount=a}}}),r("button",{staticClass:"button button--primary",attrs:{disabled:t.isProductAddSending,type:"submit"}},[t.isProductAddSending?r("BasePreloader",{staticClass:"button__loader"}):r("span",[t._v("В корзину")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isProductAdded,expression:"isProductAdded"}],staticClass:"complete"},[r("span",{staticClass:"complete__icon"},[t._v("✓")]),r("span",{staticClass:"complete__descr"},[t._v("Добавлено")])])],1)])])]),r("div",{staticClass:"item__desc"},[r("ul",{staticClass:"tabs"},[r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link tabs__link--current"},[t._v(" Описание ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Характеристики ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Гарантия ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Оплата и доставка ")])])]),r("div",{staticClass:"item__content"},[r("p",[t._v(" Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS"),r("br"),t._v(" Синхронизация со смартфоном"),r("br"),t._v(" Связь по Bluetooth Smart, ANT+ и Wi-Fi"),r("br"),t._v(" Поддержка сторонних приложений"),r("br")]),r("a",{attrs:{href:"#"}},[t._v(" Все характеристики ")]),r("h3",[t._v("Что это?")]),r("p",[t._v("Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои велотренировки, сделав их максимально эффективными. Wahoo ELEMNT BOLT GPS синхронизируется с датчиками по ANT+, объединяя полученную с них информацию. Данные отображаются на дисплее, а также сохраняются на смартфоне. При этом на мобильное устройство можно установить как фирменное приложение, так и различные приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение, принимая сигнал с целого комплекса спутников. Эта информация позволяет смотреть уже преодоленные маршруты и планировать новые велопрогулки.")]),r("h3",[t._v("Дизайн")]),r("p",[t._v("Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют всего 74,6 x 47,3 x 22,1 мм. что не превышает габариты смартфона. Корпус гаджета выполнен из черного пластика. На обращенной к пользователю стороне расположен дисплей диагональю 56 мм. На дисплей выводятся координаты и скорость, а также полученная со смартфона и синхронизированных датчиков информация: интенсивность, скорость вращения педалей, пульс и т.д. (датчики не входят в комплект поставки). Корпус велокомпьютера имеет степень защиты от влаги IPX7. Это означает, что устройство не боится пыли, а также выдерживает кратковременное (до 30 минут) погружение в воду на глубину не более 1 метра.")])])])])])],1)},ht=[];const Ct=t=>new Promise((a=>{setTimeout((()=>a()),t)}));var gt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"form__counter"},[r("button",{attrs:{disabled:t.amount<=1,"aria-label":"Убрать один товар",type:"button"},on:{click:function(a){return t.changeAmount(1,"minus")}}},[r("svg",{attrs:{fill:"currentColor",height:"12",width:"12"}},[r("use",{attrs:{"xlink:href":"#icon-minus"}})])]),r("input",{attrs:{type:"text"},domProps:{value:t.amount},on:{change:function(a){return t.changeAmount(+a.target.value)}}}),r("button",{attrs:{"aria-label":"Добавить один товар",type:"button"},on:{click:function(a){return t.changeAmount(1,"plus")}}},[r("svg",{attrs:{fill:"currentColor",height:"12",width:"12"}},[r("use",{attrs:{"xlink:href":"#icon-plus"}})])])])},vt=[],bt={props:["amount"],methods:{changeAmount(t,a){a||this.$emit("update:amount",this.amount+t),"plus"===a&&this.$emit("update:amount",this.amount+t),"minus"===a&&this.$emit("update:amount",this.amount+t)}}},Pt=bt,yt=(0,u.Z)(Pt,gt,vt,!1,null,"c7856e04",null),kt=yt.exports,wt={components:{BaseErrorLoading:ut,BasePreloader:v,BaseCounter:kt},data(){return{productAmount:1,productData:null,isProductLoading:!1,hasErrorLoading:!1,isProductAdded:!1,isProductAddSending:!1,colorValue:null}},computed:{product(){return{...this.productData,image:this.productData?.image.file.url}},category(){return this.productData.category},color:{get(){return this.colorValue},set(t){this.colorValue=t}}},methods:{...(0,m.nv)(["addProductToCart"]),addToCart(){this.isProductAdded=!1,this.isProductAddSending=!0,this.addProductToCart({productId:this.product.id,amount:this.productAmount}).then((()=>{this.isProductAdded=!0,this.isProductAddSending=!1,setTimeout((()=>{this.isProductAdded=!1}),2e3)}))},async loadProduct(){this.isProductLoading=!0,this.hasErrorLoading=!1,await Ct(2e3);try{const{data:t}=await Y(this.$route.params.id);this.productData=t,this.colorValue=t.colors[0].id}catch(t){this.hasErrorLoading=!0}finally{this.isProductLoading=!1}}},filters:{formatNumber:K},watch:{"$route.params.id":{handler(){this.loadProduct()},immediate:!0}}},At=wt,xt=(0,u.Z)(At,ft,ht,!1,null,"06ffbf9d",null),Tt=xt.exports,Et=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("h1",[t._v("Страница не найдена")])},Lt=[],$t={},It=$t,Dt=(0,u.Z)(It,Et,Lt,!1,null,"e20b79e0",null),Bt=Dt.exports,Ft=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v("Каталог")])],1),t._m(0)]),r("h1",{staticClass:"content__title"},[t._v(" Корзина ")]),r("span",{staticClass:"content__info"},[t._v(t._s(t.totalAmount+" "+t.amountDeclension))])]),t.isCartLoading?r("BasePreloader"):t.hasErrorCartLoading?r("BaseErrorLoading",{attrs:{descr:"Не удалось загрузить товары из корзины"},on:{"load-again":t.loadCart}}):r("section",{staticClass:"cart"},[r("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"cart__field"},[r("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return r("CartItem",{key:t.id,attrs:{item:t}})})),1)]),r("div",{staticClass:"cart__block"},[r("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),r("p",{staticClass:"cart__price"},[t._v("Итого: "),r("span",[t._v(t._s(t._f("formatNumber")(t.totalPrice))+" ₽")])]),r("button",{staticClass:"cart__button button button--primary",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])])])])],1)},Nt=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("li",{staticClass:"breadcrumbs__item"},[r("span",{staticClass:"breadcrumbs__link"},[t._v("Корзина")])])}],Zt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("li",{staticClass:"cart__item product"},[r("div",{staticClass:"product__pic"},[r("img",{attrs:{alt:t.item.product.title,src:t.item.product.image,height:"120",width:"120"}})]),r("h3",{staticClass:"product__title"},[t._v(t._s(t.item.product.title))]),r("span",{staticClass:"product__code"},[t._v("Артикул: "+t._s(t.item.product.id))]),r("BaseCounter",{staticClass:"product__counter",attrs:{amount:t.amount},on:{"update:amount":function(a){t.amount=a}}}),r("b",{staticClass:"product__price"},[t._v(t._s(t._f("formatNumber")(t.item.product.price*t.item.amount))+" ₽")]),r("button",{staticClass:"product__del button-del",attrs:{"aria-label":"Удалить товар из корзины",type:"button"},on:{click:function(a){return t.deleteProduct(t.item.productId)}}},[t.isProductDeleting?r("BasePreloader",{staticClass:"button-del__loader"}):r("svg",{attrs:{fill:"currentColor",height:"20",width:"20"}},[r("use",{attrs:{"xlink:href":"#icon-close"}})])],1)],1)},Kt=[],St={components:{BasePreloader:v,BaseCounter:kt},props:["item"],filters:{formatNumber:K},data(){return{isProductDeleting:!1}},computed:{amount:{get(){return this.item.amount},set(t){this.updateCartProductAmount({productId:this.item.productId,amount:t})}}},methods:{...(0,m.nv)(["updateCartProductAmount","deleteCartProduct"]),deleteProduct(t){this.isProductDeleting=!0,this.deleteCartProduct(t).then((()=>{this.isProductDeleting=!1}))}}},Ot=St,Vt=(0,u.Z)(Ot,Zt,Kt,!1,null,"6086ab42",null),Ut=Vt.exports;const qt=(t,a)=>{const r=[2,0,1,1,1,2];return a[t%100>4&&t%100<20?2:r[t%10<5?t%10:5]]};var Mt={components:{BaseErrorLoading:ut,BasePreloader:v,CartItem:Ut},filters:{formatNumber:K},computed:{...(0,m.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice",totalAmount:"cartTotalAmount"}),isCartLoading(){return this.$store.state.isCartLoading},hasErrorCartLoading(){return this.$store.state.hasErrorCartLoading},amountDeclension(){return qt(this.totalAmount,["товар","товара","товаров"])}},methods:{...(0,m.nv)(["loadCart"])}},jt=Mt,Gt=(0,u.Z)(jt,Ft,Nt,!1,null,"1ff12f28",null),Wt=Gt.exports;e.Z.use(w.Z);const Ht=[{name:"main",component:pt,path:"/"},{name:"cart",component:Wt,path:"/cart"},{name:"product",component:Tt,path:"/product/:id"},{name:"notFound",component:Bt,path:"*"}];var zt=new w.Z({routes:Ht});const Rt=t=>R().get(`${Q}/baskets`,{params:t}),Qt=(t,a)=>R().post(`${Q}/baskets/products`,t,{params:a}),Xt=(t,a)=>R().post(`${Q}/baskets/products`,t,{params:a}),Yt=(t,a)=>R()["delete"](`${Q}/baskets/products`,{data:t,params:a});e.Z.use(m.ZP);var Jt=new m.ZP.Store({state:{cartProducts:[],userAccessKey:null,cartProductsData:[],isCartLoading:!1,hasErrorCartLoading:!1},mutations:{updateCartProductAmount(t,{productId:a,amount:r}){const e=t.cartProducts.find((t=>t.productId===a));e&&(e.amount=r)},updateUserAccessKey(t,a){t.userAccessKey=a},updateCartProductsData(t,a){t.cartProductsData=a},syncCartProducts(t){t.cartProducts=t.cartProductsData.map((({product:t,quantity:a})=>({productId:t.id,amount:a})))},updateIsCartLoading(t,a){t.isCartLoading=a},updateHasErrorCartLoading(t,a){t.hasErrorCartLoading=a}},getters:{cartDetailProducts(t){return t.cartProducts.map((a=>{const{product:r}=t.cartProductsData.find((t=>t.product.id===a.productId));return{...a,product:{...r,image:r.image.file.url}}}))},cartTotalPrice(t,{cartDetailProducts:a}){return a.reduce(((t,a)=>t+a.product.price*a.amount),0)},cartTotalAmount({cartProducts:t}){return t.reduce(((t,a)=>t+a.amount),0)}},actions:{async loadCart(t){t.commit("updateIsCartLoading",!0),t.commit("updateHasErrorCartLoading",!1),await Ct(2e3);try{const{data:{user:a,items:r}}=await Rt({userAccessKey:t.state.userAccessKey});t.state.userAccessKey||(localStorage.setItem("userAccessKey",a.accessKey),t.commit("updateUserAccessKey",a.accessKey)),t.commit("updateCartProductsData",r),t.commit("syncCartProducts")}catch(a){t.commit("updateHasErrorCartLoading",!0)}finally{t.commit("updateIsCartLoading",!1)}},async addProductToCart(t,{productId:a,amount:r}){await Ct(2e3);const{data:{items:e}}=await Qt({productId:a,quantity:r},{userAccessKey:t.state.userAccessKey});t.commit("updateCartProductsData",e),t.commit("syncCartProducts")},async updateCartProductAmount(t,{productId:a,amount:r}){if(t.commit("updateCartProductAmount",{productId:a,amount:r}),r){await Ct(300);try{const{data:{items:e}}=await Xt({productId:a,quantity:r},{userAccessKey:t.state.userAccessKey});t.commit("updateCartProductsData",e)}catch(e){t.commit("syncCartProducts")}}},async deleteCartProduct(t,a){await Ct(1e3);const{data:{items:r}}=await Yt({productId:a},{userAccessKey:t.state.userAccessKey});t.commit("updateCartProductsData",r),t.commit("syncCartProducts")}}});e.Z.config.productionTip=!1,new e.Z({router:zt,store:Jt,render:t=>t(k)}).$mount("#app")}},a={};function r(e){var s=a[e];if(void 0!==s)return s.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(a,e,s,o){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],s=t[u][1],o=t[u][2];for(var c=!0,n=0;n<e.length;n++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[n])}))?e.splice(n--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var l=s();void 0!==l&&(a=l)}}return a}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[e,s,o]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var e in a)r.o(a,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,e){var s,o,i=e[0],c=e[1],n=e[2],l=0;if(i.some((function(a){return 0!==t[a]}))){for(s in c)r.o(c,s)&&(r.m[s]=c[s]);if(n)var u=n(r)}for(a&&a(e);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},e=self["webpackChunktechnosaurrrus"]=self["webpackChunktechnosaurrrus"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(7074)}));e=r.O(e)})();
//# sourceMappingURL=app.8e4c7c7c.js.map