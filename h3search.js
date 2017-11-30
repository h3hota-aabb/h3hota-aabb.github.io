//функция findeindex() работает по принципу перебора ключей ассоциативного массива indexarr

//ассоциативный массив (предметный указатель: ссылка)
var indexarr = {
	"академия мореплавания": "objectsh3hota.html#seaacad",
	"алая башня": "objectsh3hota.html#cons5",
	"алтарь маны": "objectsh3hota.html#manaaltar",
	"анабель": "subpage/anabel.html",
	"андал": "subpage/andal.html",
	"артефакты-реликты": "artefactsh3hota.html#art4",
	"артефакты-сокровища": "artefactsh3hota.html#art2",
	"аспид": "creaturesh3hota.html#c72",
	"ассида": "creaturesh3hota.html#c42",
	"астра": "subpage/astra.html",
	"банки": "objectsh3hota.html#banks",
	"башня из слоновой кости": "objectsh3hota.html#cons2",
	"беатрис": "subpage/beatrix.html",
	"бидли": "subpage/bidley.html",
	"великие артефакты": "artefactsh3hota.html#art3",
	"вертеп": "objectsh3hota.html#banks4",
	"винодельня": "objectsh3hota.html#winery",
	"водопой": "objectsh3hota.html#waterplace",
	"герои (причал)": "heroesh3hota.html#coveheroes",
	"герои (прочие)": "heroesh3hota.html#otherheroes",
	"герои кампании": "heroesh3hota.html#campaignheroes",
	"головорез": "creaturesh3hota.html#c22",
	"городские врата": "objectsh3hota.html#townportal",
	"даргем": "subpage/dargem.html",
	"дерек": "subpage/derek.html",
	"джереми": "subpage/jeremy.html",
	"древняя лампа": "objectsh3hota.html#lamp",
	"дух океана": "creaturesh3hota.html#c41",
	"железный кулак огра": "artefactsh3hota.html#art45",
	"жрица моря": "creaturesh3hota.html#c51",
	"заклинательница": "creaturesh3hota.html#c52",
	"застава налетчиков": "objectsh3hota.html#cons1",
	"зиккурат": "objectsh3hota.html#ziggurat",
	"зилар": "subpage/zylar.html",
	"золотой гусь": "artefactsh3hota.html#art42",
	"иллор": "subpage/illor.html",
	"капитан": "subpage/captain.html",
	"касметра": "subpage/casmetra.html",
	"кассиопея": "subpage/cassiopeia.html",
	"кинкерия": "subpage/kinkery.html",
	"колизей магов": "objectsh3hota.html#magecolo",
	"кольцо забвения": "artefactsh3hota.html#art36",
	"кольцо подавления": "artefactsh3hota.html#art23",
	"консерватории": "objectsh3hota.html#cons",
	"коркес": "subpage/korkes.html",
	"королевские доспехи никсов": "artefactsh3hota.html#art32",
	"корона пяти морей": "artefactsh3hota.html#art34",
	"корсар": "creaturesh3hota.html#c32",
	"кукла шамана": "artefactsh3hota.html#art21",
	"кулон отражения": "artefactsh3hota.html#art44",
	"кулон разорения": "artefactsh3hota.html#art37",
	"лина": "subpage/lina.html",
	"малые артефакты": "artefactsh3hota.html#art1",
	"мантия дипломата": "artefactsh3hota.html#art43",
	"манфред": "subpage/manfred.html",
	"матрос": "creaturesh3hota.html#c21",
	"мириам": "subpage/miriam.html",
	"морской волк": "creaturesh3hota.html#c33",
	"морской змей": "creaturesh3hota.html#c71",
	"навигатор": "subpage/navigator.html",
	"накидка молчания": "artefactsh3hota.html#art35",
	"направленный выстрел (личи)": "subpage/special/lichsability.html",
	"направленный выстрел (магоги)": "subpage/special/magogsability.html",
	"нейтральные существа": "creaturesh3hota.html#neutralcreatures",
	"никс": "creaturesh3hota.html#c61",
	"никс-воин": "creaturesh3hota.html#c62",
	"нимфа": "creaturesh3hota.html#c11",
	"обсерватория": "objectsh3hota.html#observer",
	"обучающие объекты": "objectsh3hota.html#learningobjects",
	"объекты (прочие)": "objectsh3hota.html#otherobjects",
	"океанида": "creaturesh3hota.html#c12",
	"опытный цех": "objectsh3hota.html#cons3",
	"особняк": "objectsh3hota.html#banks2",
	"пират": "creaturesh3hota.html#c31",
	"пиратская пещера": "objectsh3hota.html#cons4",
	"погост": "objectsh3hota.html#banks1",
	"подкова демона": "artefactsh3hota.html#art24",
	"преобразователь скелетов": "objectsh3hota.html#skeltransformer",
	"причал (гильдия магов)": "covemageguild.html",
	"причал (грааль)": "covebuildingsh3hota.html#grail",
	"причал (особые строения)": "covebuildingsh3hota.html#special",
	"причал (строения)": "covebuildingsh3hota.html",
	"путеводная звезда": "covebuildingsh3hota.html#grail",
	"пушечный двор": "objectsh3hota.html#cannonyard",
	"пушка": "creaturesh3hota.html#cannon",
	"ранлу": "subpage/ranlu.html",
	"рог бездны": "artefactsh3hota.html#art41",
	"руны неизбежности": "artefactsh3hota.html#art22",
	"сапоги странника": "artefactsh3hota.html#art38",
	"сатир": "creaturesh3hota.html#nc_satyr",
	"святилище бехолдеров": "objectsh3hota.html#banks5",
	"склады": "objectsh3hota.html#wrhouse",
	"спинт": "subpage/spint.html",
	"существа причала": "creaturesh3hota.html#covecreatures",
	"тарк": "subpage/tark.html",
	"трезубец могущества": "artefactsh3hota.html#art31",
	"устрашающая маска": "artefactsh3hota.html#art11",
	"фабрика военной техники": "objectsh3hota.html#militaryfabric",
	"фангарм": "creaturesh3hota.html#nc_fang",
	"фонтан молодости": "objectsh3hota.html#youthf",
	"форт на холме (новый)": "objectsh3hota.html#hillfort",
	"храм лояльности": "objectsh3hota.html#loyaltytemple",
	"храм моря": "objectsh3hota.html#banks6",
	"черная башня": "objectsh3hota.html#banks3",
	"щит морской славы": "artefactsh3hota.html#art33",
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