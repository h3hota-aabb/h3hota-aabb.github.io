var strofindex = 'академия мореплавания, алая башня, алтарь маны, анабель, андал, артефакты-реликты, артефакты-сокровища, аспид, ассида, астра, банки, башня из слоновой кости, беатрис, бидли, великие артефакты, вертеп, винодельня, водопой, герои (причал), герои (прочие), герои кампании, головорез, городские врата, даргем, дерек, джереми, древняя лампа, дух океана, железный кулак огра, жрица моря, заклинательница, застава налетчиков, зиккурат, зилар, золотой гусь, иллор, капитан, касметра, кассиопея, кинкерия, колизей магов, кольцо забвения, кольцо подавления, консерватории, коркес, королевские доспехи никсов, корона пяти морей, корсар, кукла шамана, кулон отражения, кулон разорения, лина, малые артефакты, мантия дипломата, манфред, матрос, мириам, морской волк, морской змей, навигатор, накидка молчания, направленный выстрел (личи), направленный выстрел (магоги), нейтральные существа, никс, никс-воин, нимфа, обсерватория, обучающие объекты, объекты (прочие), океанида, опытный цех, особняк, пират, пиратская пещера, погост, подкова демона, преобразователь скелетов, причал (гильдия магов), причал (грааль), причал (особые строения), причал (строения), путеводная звезда, пушечный двор, пушка, ранлу, рог бездны, руны неизбежности, сапоги странника, сатир, святилище бехолдеров, склады, спинт, существа причала, тарк, трезубец могущества, устрашающая маска, фабрика военной техники, фангарм, фонтан молодости, форт на холме (новый), храм лояльности, храм моря, черная башня, щит морской славы, элмор, эоваций, ';
var indexarr = strofindex.split(', ');
var flag = 0;


/*очистить строку поиска*/
function clearinput()
{
	if ((flag == 0) && (searchform.searchinput.value == "Некорректный ввод")) return;
	searchform.searchinput.value = "";
}


/*при фокусе на строке поиска список становится видимым*/
function visibleList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
}


/*при отсутствии фокуса на строке поиска список исчезает*/
function deleteList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'hidden';
	for (var i = list.children.length-1; i > -1; i--)
	{
		list.removeChild(list.children[i]);
	}	
}


/*при нажатии на элемент списка он появляется в строке поиска*/
function chooseEl()
{	
	var list = document.getElementById('searchlist');
	
	for (var i = 0; i < (indexarr.length-1); i++)
	{
		list.children[i].onmousedown = function()
		{
			document.searchform.searchinput.value = this.innerHTML;
			for (var i = list.children.length-1; i > -1; i--)
			{
				list.removeChild(list.children[i]);
			}
			list.style.visibility  = 'hidden';
		}
	}
}


/*переход на другую страницу в зависимости от выбора*/
function findindex()
{	
	var val = window.searchform.searchinput.value.toLowerCase();		
	
	if (val == "тарк") {document.location.href = "subpage/tark.html"; flag = 1;}
	if (val == "бидли") {document.location.href = "subpage/bidley.html"; flag = 1;}
	if (val == "коркес") {document.location.href = "subpage/korkes.html"; flag = 1;}
	if (val == "джереми") {document.location.href = "subpage/jeremy.html"; flag = 1;}
	if (val == "иллор") {document.location.href = "subpage/illor.html"; flag = 1;}
	if (val == "дерек") {document.location.href = "subpage/derek.html"; flag = 1;}
	if (val == "элмор") {document.location.href = "subpage/elmore.html"; flag = 1;}
	if (val == "лина") {document.location.href = "subpage/lina.html"; flag = 1;}
	if (val == "анабель") {document.location.href = "subpage/anabel.html"; flag = 1;}
	if (val == "кассиопея") {document.location.href = "subpage/cassiopeia.html"; flag = 1;}
	if (val == "мириам") {document.location.href = "subpage/miriam.html"; flag = 1;}
	if (val == "касметра") {document.location.href = "subpage/casmetra.html"; flag = 1;}
	if (val == "эоваций") {document.location.href = "subpage/eovacius.html"; flag = 1;}
	if (val == "спинт") {document.location.href = "subpage/spint.html"; flag = 1;}
	if (val == "андал") {document.location.href = "subpage/andal.html"; flag = 1;}
	if (val == "манфред") {document.location.href = "subpage/manfred.html"; flag = 1;}
	if (val == "зилар") {document.location.href = "subpage/zylar.html"; flag = 1;}
	if (val == "астра") {document.location.href = "subpage/astra.html"; flag = 1;}
	if (val == "даргем") {document.location.href = "subpage/dargem.html"; flag = 1;}
	if (val == "беатрис") {document.location.href = "subpage/beatrix.html"; flag = 1;}
	if (val == "кинкерия") {document.location.href = "subpage/kinkery.html"; flag = 1;}
	if (val == "ранлу") {document.location.href = "subpage/ranlu.html"; flag = 1;}
	if (val == "капитан") {document.location.href = "subpage/captain.html"; flag = 1;}
	if (val == "навигатор") {document.location.href = "subpage/navigator.html"; flag = 1;}
	if (val == "герои кампании") {document.location.href = "heroesH3hota.html#campaignheroes"; flag = 1;}
	if (val == "герои (причал)") {document.location.href = "heroesH3hota.html#coveheroes"; flag = 1;}
	if (val == "герои (прочие)") {document.location.href = "heroesH3hota.html#otherheroes"; flag = 1;}
	
	if (val == "нимфа") {document.location.href = "creaturesH3hota.html#c11"; flag = 1;}
	if (val == "океанида") {document.location.href = "creaturesH3hota.html#c12"; flag = 1;}
	if (val == "матрос") {document.location.href = "creaturesH3hota.html#c21"; flag = 1;}
	if (val == "головорез") {document.location.href = "creaturesH3hota.html#c22"; flag = 1;}
	if (val == "пират") {document.location.href = "creaturesH3hota.html#c31"; flag = 1;}
	if (val == "корсар") {document.location.href = "creaturesH3hota.html#c32"; flag = 1;}
	if (val == "морской волк") {document.location.href = "creaturesH3hota.html#c33"; flag = 1;}
	if (val == "дух океана") {document.location.href = "creaturesH3hota.html#c41"; flag = 1;}
	if (val == "ассида") {document.location.href = "creaturesH3hota.html#c42"; flag = 1;}
	if (val == "жрица моря") {document.location.href = "creaturesH3hota.html#c51"; flag = 1;}
	if (val == "заклинательница") {document.location.href = "creaturesH3hota.html#c52"; flag = 1;}
	if (val == "никс") {document.location.href = "creaturesH3hota.html#c61"; flag = 1;}
	if (val == "никс-воин") {document.location.href = "creaturesH3hota.html#c62"; flag = 1;}
	if (val == "морской змей") {document.location.href = "creaturesH3hota.html#c71"; flag = 1;}
	if (val == "аспид") {document.location.href = "creaturesH3hota.html#c72"; flag = 1;}
	if (val == "пушка") {document.location.href = "creaturesH3hota.html#cannon"; flag = 1;}
	if (val == "сатир") {document.location.href = "creaturesH3hota.html#nc_satyr"; flag = 1;}
	if (val == "фангарм") {document.location.href = "creaturesH3hota.html#nc_fang"; flag = 1;}
	if (val == "нейтральные существа") {document.location.href = "creaturesH3hota.html#neutralcreatures"; flag = 1;}
	if (val == "существа причала") {document.location.href = "creaturesH3hota.html#covecreatures"; flag = 1;}
	
	if (val == "склады") {document.location.href = "objectsH3hota.html#wrhouse"; flag = 1;}
	if (val == "обучающие объекты") {document.location.href = "objectsH3hota.html#learningobjects"; flag = 1;}
	if (val == "академия мореплавания") {document.location.href = "objectsH3hota.html#seaacad"; flag = 1;}
	if (val == "колизей магов") {document.location.href = "objectsH3hota.html#magecolo"; flag = 1;}
	if (val == "банки") {document.location.href = "objectsH3hota.html#banks"; flag = 1;}
	if (val == "консерватории") {document.location.href = "objectsH3hota.html#cons"; flag = 1;}
	if (val == "погост") {document.location.href = "objectsH3hota.html#banks1"; flag = 1;}
	if (val == "особняк") {document.location.href = "objectsH3hota.html#banks2"; flag = 1;}
	if (val == "черная башня") {document.location.href = "objectsH3hota.html#banks3"; flag = 1;}
	if (val == "вертеп") {document.location.href = "objectsH3hota.html#banks4"; flag = 1;}
	if (val == "святилище бехолдеров") {document.location.href = "objectsH3hota.html#banks5"; flag = 1;}
	if (val == "храм моря") {document.location.href = "objectsH3hota.html#banks6"; flag = 1;}
	if (val == "застава налетчиков") {document.location.href = "objectsH3hota.html#cons1"; flag = 1;}
	if (val == "башня из слоновой кости") {document.location.href = "objectsH3hota.html#cons2"; flag = 1;}
	if (val == "опытный цех") {document.location.href = "objectsH3hota.html#cons3"; flag = 1;}
	if (val == "пиратская пещера") {document.location.href = "objectsH3hota.html#cons4"; flag = 1;}
	if (val == "алая башня") {document.location.href = "objectsH3hota.html#cons5"; flag = 1;}
	if (val == "объекты (прочие)") {document.location.href = "objectsH3hota.html#otherobjects"; flag = 1;}
	if (val == "форт на холме (новый)") {document.location.href = "objectsH3hota.html#hillfort"; flag = 1;}
	if (val == "пушечный двор") {document.location.href = "objectsH3hota.html#cannonyard"; flag = 1;}
	if (val == "фабрика военной техники") {document.location.href = "objectsH3hota.html#militaryfabric"; flag = 1;}
	if (val == "винодельня") {document.location.href = "objectsH3hota.html#winery"; flag = 1;}
	if (val == "зиккурат") {document.location.href = "objectsH3hota.html#ziggurat"; flag = 1;}
	if (val == "храм лояльности") {document.location.href = "objectsH3hota.html#loyaltytemple"; flag = 1;}
	if (val == "городские врата") {document.location.href = "objectsH3hota.html#townportal"; flag = 1;}
	if (val == "преобразователь скелетов") {document.location.href = "objectsH3hota.html#skelTransformer"; flag = 1;}
	if (val == "водопой") {document.location.href = "objectsH3hota.html#waterplace"; flag = 1;}
	if (val == "древняя лампа") {document.location.href = "objectsH3hota.html#lamp"; flag = 1;}
	if (val == "алтарь маны") {document.location.href = "objectsH3hota.html#manaaltar"; flag = 1;}
	if (val == "фонтан молодости") {document.location.href = "objectsH3hota.html#youthf"; flag = 1;}
	if (val == "обсерватория") {document.location.href = "objectsH3hota.html#observer"; flag = 1;}
	
	if (val == "малые артефакты") {document.location.href = "artefactsH3hota.html#art1"; flag = 1;}
	if (val == "устрашающая маска") {document.location.href = "artefactsH3hota.html#art11"; flag = 1;}
	if (val == "артефакты-сокровища") {document.location.href = "artefactsH3hota.html#art2"; flag = 1;}
	if (val == "кукла шамана") {document.location.href = "artefactsH3hota.html#art21"; flag = 1;}
	if (val == "руны неизбежности") {document.location.href = "artefactsH3hota.html#art22"; flag = 1;}
	if (val == "кольцо подавления") {document.location.href = "artefactsH3hota.html#art23"; flag = 1;}
	if (val == "подкова демона") {document.location.href = "artefactsH3hota.html#art24"; flag = 1;}
	if (val == "великие артефакты") {document.location.href = "artefactsH3hota.html#art3"; flag = 1;}
	if (val == "трезубец могущества") {document.location.href = "artefactsH3hota.html#art31"; flag = 1;}
	if (val == "королевские доспехи никсов") {document.location.href = "artefactsH3hota.html#art32"; flag = 1;}
	if (val == "щит морской славы") {document.location.href = "artefactsH3hota.html#art33"; flag = 1;}
	if (val == "корона пяти морей") {document.location.href = "artefactsH3hota.html#art34"; flag = 1;}
	if (val == "накидка молчания") {document.location.href = "artefactsH3hota.html#art35"; flag = 1;}
	if (val == "кольцо забвения") {document.location.href = "artefactsH3hota.html#art36"; flag = 1;}
	if (val == "кулон разорения") {document.location.href = "artefactsH3hota.html#art37"; flag = 1;}
	if (val == "сапоги странника") {document.location.href = "artefactsH3hota.html#art38"; flag = 1;}
	if (val == "артефакты-реликты") {document.location.href = "artefactsH3hota.html#art4"; flag = 1;}
	if (val == "рог бездны") {document.location.href = "artefactsH3hota.html#art41"; flag = 1;}
	if (val == "золотой гусь") {document.location.href = "artefactsH3hota.html#art42"; flag = 1;}
	if (val == "мантия дипломата") {document.location.href = "artefactsH3hota.html#art43"; flag = 1;}
	if (val == "кулон отражения") {document.location.href = "artefactsH3hota.html#art44"; flag = 1;}
	if (val == "железный кулак огра") {document.location.href = "artefactsH3hota.html#art45"; flag = 1;}
	
	if (val == "причал (строения)") {document.location.href = "covebuildingsH3hota.html"; flag = 1;}
	if (val == "причал (гильдия магов)") {document.location.href = "covemageguild.html"; flag = 1;}
	if (val == "причал (грааль)") {document.location.href = "covebuildingsH3hota.html#grail"; flag = 1;}
	if (val == "причал (особые строения)") {document.location.href = "covebuildingsH3hota.html#special"; flag = 1;}
	if (val == "путеводная звезда") {document.location.href = "covebuildingsH3hota.html#grail"; flag = 1;}
	if (val == "направленный выстрел (личи)") {document.location.href = "subpage/special/lichsability.html"; flag = 1;}
	if (val == "направленный выстрел (магоги)") {document.location.href = "subpage/special/magogsability.html"; flag = 1;}
	
	if (flag == 1) searchform.searchinput.value = "";	
	if (flag == 0) {searchform.searchinput.value = "Некорректный ввод"; searchform.searchinput.style.color = "rgba(255, 0, 0, 0.6)";};
}


/*при некорректном вводе*/
function incorrectinput()
{
	searchform.searchinput.style.color = "black";
	if ((flag == 0) && (searchform.searchinput.value == "Некорректный ввод")) searchform.searchinput.value = "";
}


/*сравнение введенной строки с массивом предметных указателей*/
function strcmp()
{	
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
	var str = searchform.searchinput.value.toLowerCase(); //строка из поля ввода	
	var index = ""; //строка из массива названий
	var isequal = 0; //совпадает или не совпадает начало строки из поля ввода с началом строки из массива названий
	var arr = new Array();
	var count = 0; //кол-во элементов в списке
	for (var i = 0; i < indexarr.length-1; i++)
	{
		isequal = 0;
		index = indexarr[i];
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
	
	chooseEl();	
}