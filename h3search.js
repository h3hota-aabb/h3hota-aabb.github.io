//функция findeindex() работает по принципу перебора ключей ассоциативного массива indexarr

//ассоциативный массив (предметный указатель: ссылка)
var indexarr = {
	"академия мореплавания": "objectsH3hota.html#seaacad",
	"алая башня": "objectsH3hota.html#cons5",
	"алтарь маны": "objectsH3hota.html#manaaltar",
	"анабель": "subpage/anabel.html",
	"андал": "subpage/andal.html",
	"артефакты-реликты": "artefactsH3hota.html#art4",
	"артефакты-сокровища": "artefactsH3hota.html#art2",
	"аспид": "creaturesH3hota.html#c72",
	"ассида": "creaturesH3hota.html#c42",
	"астра": "subpage/astra.html",
	"банки": "objectsH3hota.html#banks",
	"башня из слоновой кости": "objectsH3hota.html#cons2",
	"беатрис": "subpage/beatrix.html",
	"бидли": "subpage/bidley.html",
	"великие артефакты": "artefactsH3hota.html#art3",
	"вертеп": "objectsH3hota.html#banks4",
	"винодельня": "objectsH3hota.html#winery",
	"водопой": "objectsH3hota.html#waterplace",
	"герои (причал)": "heroesH3hota.html#coveheroes",
	"герои (прочие)": "heroesH3hota.html#otherheroes",
	"герои кампании": "heroesH3hota.html#campaignheroes",
	"головорез": "creaturesH3hota.html#c22",
	"городские врата": "objectsH3hota.html#townportal",
	"даргем": "subpage/dargem.html",
	"дерек": "subpage/derek.html",
	"джереми": "subpage/jeremy.html",
	"древняя лампа": "objectsH3hota.html#lamp",
	"дух океана": "creaturesH3hota.html#c41",
	"железный кулак огра": "artefactsH3hota.html#art45",
	"жрица моря": "creaturesH3hota.html#c51",
	"заклинательница": "creaturesH3hota.html#c52",
	"застава налетчиков": "objectsH3hota.html#cons1",
	"зиккурат": "objectsH3hota.html#ziggurat",
	"зилар": "subpage/zylar.html",
	"золотой гусь": "artefactsH3hota.html#art42",
	"иллор": "subpage/illor.html",
	"капитан": "subpage/captain.html",
	"касметра": "subpage/casmetra.html",
	"кассиопея": "subpage/cassiopeia.html",
	"кинкерия": "subpage/kinkery.html",
	"колизей магов": "objectsH3hota.html#magecolo",
	"кольцо забвения": "artefactsH3hota.html#art36",
	"кольцо подавления": "artefactsH3hota.html#art23",
	"консерватории": "objectsH3hota.html#cons",
	"коркес": "subpage/korkes.html",
	"королевские доспехи никсов": "artefactsH3hota.html#art32",
	"корона пяти морей": "artefactsH3hota.html#art34",
	"корсар": "creaturesH3hota.html#c32",
	"кукла шамана": "artefactsH3hota.html#art21",
	"кулон отражения": "artefactsH3hota.html#art44",
	"кулон разорения": "artefactsH3hota.html#art37",
	"лина": "subpage/lina.html",
	"малые артефакты": "artefactsH3hota.html#art1",
	"мантия дипломата": "artefactsH3hota.html#art43",
	"манфред": "subpage/manfred.html",
	"матрос": "creaturesH3hota.html#c21",
	"мириам": "subpage/miriam.html",
	"морской волк": "creaturesH3hota.html#c33",
	"морской змей": "creaturesH3hota.html#c71",
	"навигатор": "subpage/navigator.html",
	"накидка молчания": "artefactsH3hota.html#art35",
	"направленный выстрел (личи)": "subpage/special/lichsability.html",
	"направленный выстрел (магоги)": "subpage/special/magogsability.html",
	"нейтральные существа": "creaturesH3hota.html#neutralcreatures",
	"никс": "creaturesH3hota.html#c61",
	"никс-воин": "creaturesH3hota.html#c62",
	"нимфа": "creaturesH3hota.html#c11",
	"обсерватория": "objectsH3hota.html#observer",
	"обучающие объекты": "objectsH3hota.html#learningobjects",
	"объекты (прочие)": "objectsH3hota.html#otherobjects",
	"океанида": "creaturesH3hota.html#c12",
	"опытный цех": "objectsH3hota.html#cons3",
	"особняк": "objectsH3hota.html#banks2",
	"пират": "creaturesH3hota.html#c31",
	"пиратская пещера": "objectsH3hota.html#cons4",
	"погост": "objectsH3hota.html#banks1",
	"подкова демона": "artefactsH3hota.html#art24",
	"преобразователь скелетов": "objectsH3hota.html#skeltransformer",
	"причал (гильдия магов)": "covemageguild.html",
	"причал (грааль)": "covebuildingsH3hota.html#grail",
	"причал (особые строения)": "covebuildingsH3hota.html#special",
	"причал (строения)": "covebuildingsH3hota.html",
	"путеводная звезда": "covebuildingsH3hota.html#grail",
	"пушечный двор": "objectsH3hota.html#cannonyard",
	"пушка": "creaturesH3hota.html#cannon",
	"ранлу": "subpage/ranlu.html",
	"рог бездны": "artefactsH3hota.html#art41",
	"руны неизбежности": "artefactsH3hota.html#art22",
	"сапоги странника": "artefactsH3hota.html#art38",
	"сатир": "creaturesH3hota.html#nc_satyr",
	"святилище бехолдеров": "objectsH3hota.html#banks5",
	"склады": "objectsH3hota.html#wrhouse",
	"спинт": "subpage/spint.html",
	"существа причала": "creaturesH3hota.html#covecreatures",
	"тарк": "subpage/tark.html",
	"трезубец могущества": "artefactsH3hota.html#art31",
	"устрашающая маска": "artefactsH3hota.html#art11",
	"фабрика военной техники": "objectsH3hota.html#militaryfabric",
	"фангарм": "creaturesH3hota.html#nc_fang",
	"фонтан молодости": "objectsH3hota.html#youthf",
	"форт на холме (новый)": "objectsH3hota.html#hillfort",
	"храм лояльности": "objectsH3hota.html#loyaltytemple",
	"храм моря": "objectsH3hota.html#banks6",
	"черная башня": "objectsH3hota.html#banks3",
	"щит морской славы": "artefactsH3hota.html#art33",
	"элмор": "subpage/elmore.html",
	"эоваций": "subpage/eovacius.html"
}
var flag = 0; //0 - некорректное значение в строке поиска, 1 - корректное
var chosen = -1; //номер выбранного элемента в списке (0 - count, изначально -1)
var count = 0; //кол-во элементов в списке (0 - 6)


//очистить строку поиска
function clearinput()
{
	var searchinput = document.searchform.searchinput;
	if ((flag == 0) && (searchinput.value == "Некорректный ввод")) return;
	searchinput.value = "";
	searchinput.focus();
}


//при фокусе на строке поиска список становится видимым
function visibleList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
}


//при отсутствии фокуса на строке поиска список исчезает
function deleteList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'hidden';
	for (var i = list.children.length-1; i > -1; i--)
	{
		list.removeChild(list.children[i]);
	}	
	chosen = -1;
}


//при нажатии на элемент списка он появляется в строке поиска
function chooseEl()
{	
	var list = document.getElementById('searchlist');

	for (var i = 0; i < 6; i++)
	{
		list.children[i].onmousedown = function()
		{			
			document.searchform.searchinput.value = this.innerHTML;
			deleteList();				
			setTimeout(findindex, 100);
		}
	}	
}


//вызывается при наведении мыши на список
function onmouseoverfunc(e)
{
	var e = e || window.event;
	var target = e.target || e.srcElement;
	var list = document.getElementById('searchlist');
	chosen = -1;
	
	list.onmousemove = function() 
	{
		chosen = -1;
		for (var i = 0; i < count; i++)
		{
			list.children[i].style.backgroundColor =  'rgba(0, 0, 0, 0.0)';
		}		
		for (var i = 0; i < count; i++)
		{
			if (list.children[i] == target) 
			{
				list.children[i].style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
				chosen = i;
			}
		}
	}
	chooseEl();
}


//переход на другую страницу в зависимости от выбора
function findindex()
{	
	var val = window.searchform.searchinput.value.toLowerCase();		
	for (var key in indexarr)
	{
		if (val == key) {document.location.href = indexarr[key]; flag = 1; break;}
	}	
	
	if (flag == 1) searchform.searchinput.value = "";	
	if (flag == 0) {searchform.searchinput.value = "Некорректный ввод"; searchform.searchinput.style.color = "rgba(255, 0, 0, 0.6)";};
}


//при некорректном вводе
function incorrectinput()
{
	searchform.searchinput.style.color = "black";
	if ((flag == 0) && (searchform.searchinput.value == "Некорректный ввод")) searchform.searchinput.value = "";
}


//сравнение введенной строки с ключами ассоциативного массива
function strcmp()
{	
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
	var str = searchform.searchinput.value.toLowerCase(); //строка из поля ввода	
	var index = ""; //строка из ассоциативного массива
	var isequal = 0; //совпадает (1) или не совпадает (0) начало строки из поля ввода с началом строки из ассоциативного массива
	var arr = new Array();
	count = 0;
	for (var key in indexarr)
	{
		isequal = 0;
		index = key;
		for (var k = 0; k < index.length-str.length+1; k++)
		{
			for (var j = 0; j < str.length; j++)
			{
				if (str[j] != index[j+k]) {isequal=0; break;}
				else isequal=1;
			}
			if (isequal == 1) break;
		}		
		if (isequal == 1) 
		{
			arr[count] = index; 
			count++; 	
			if (count == 6) break;
		}	
	}	
	if (count == 0) list.style.visibility  = 'hidden';
	if (str.length == 0) list.style.visibility  = 'hidden';
	
	for (var i = list.children.length-1; i > -1; i--)
	{
		list.removeChild(list.children[i]);
	}
	
	for (var i = 0; i < count; i++)
	{
		var li = document.createElement('li');
		li.innerHTML = arr[i];
		list.appendChild(li);
	}
}


//обработка нажатие клавиш enter, up, down при активном инпуте
function inputevent(e)
{	
	var list = document.getElementById('searchlist');
	
	if (e.which == 13 || e.keyCode == 13) //enter;
	{
		e.preventDefault();
		if (chosen == -1)
		{
			document.searchform.searchinput.blur();
			setTimeout(findindex, 100);
		}
		if ((0 <= chosen) && (chosen <= count-1))
		{
			window.searchform.searchinput.value = list.children[chosen].innerHTML;
			deleteList();
			setTimeout(findindex, 100);
		}
	} 
	
	if (e.which == 40 || e.keyCode == 40) //down
	{
		e.preventDefault();
		if ((-1 <= chosen) && (chosen < count-1))
		{
			++chosen;
			list.children[chosen].style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
			list.children[chosen-1].style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
		}	
	}	
	
	if (e.which == 38 || e.keyCode == 38) //up
	{
		e.preventDefault();
		if ((0 < chosen) && (chosen <= count-1))
		{
			--chosen;
			list.children[chosen].style.backgroundColor = 'rgba(0, 255, 255, 0.4)';
			list.children[chosen+1].style.backgroundColor = 'rgba(0, 0, 0, 0.0)';	
		}
	}
}