var strofindex = '�������� ������������, ���� �����, ������ ����, �������, �����, ���������-�������, ���������-���������, �����, ������, �����, �����, ����� �� �������� �����, �������, �����, ������� ���������, ������, ����������, �������, ����� (������), ����� (������), ����� ��������, ���������, ��������� �����, ������, �����, �������, ������� �����, ��� ������, �������� ����� ����, ����� ����, ���������������, ������� ����������, ��������, �����, ������� ����, �����, �������, ��������, ���������, ��������, ������� �����, ������ ��������, ������ ����������, �������������, ������, ����������� ������� ������, ������ ���� �����, ������, ����� ������, ����� ���������, ����� ���������, ����, ����� ���������, ������ ���������, �������, ������, ������, ������� ����, ������� ����, ���������, ������� ��������, ������������ ������� (����), ������������ ������� (������), ����������� ��������, ����, ����-����, �����, ������������, ��������� �������, ������� (������), ��������, ������� ���, �������, �����, ��������� ������, ������, ������� ������, ��������������� ��������, ������ (������� �����), ������ (������), ������ (������ ��������), ������ (��������), ���������� ������, �������� ����, �����, �����, ��� ������, ���� ������������, ������ ���������, �����, ��������� ����������, ������, �����, �������� �������, ����, �������� ����������, ����������� �����, ������� ������� �������, �������, ������ ���������, ���� �� ����� (�����), ���� ����������, ���� ����, ������ �����, ��� ������� �����, �����, �������, ';
var indexarr = strofindex.split(', ');
var flag = 0;


/*�������� ������ ������*/
function clearinput()
{
	if ((flag == 0) && (searchform.searchinput.value == "������������ ����")) return;
	searchform.searchinput.value = "";
}


/*��� ������ �� ������ ������ ������ ���������� �������*/
function visibleList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
}


/*��� ���������� ������ �� ������ ������ ������ ��������*/
function deleteList()
{
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'hidden';
	for (var i = list.children.length-1; i > -1; i--)
	{
		list.removeChild(list.children[i]);
	}	
}


/*��� ������� �� ������� ������ �� ���������� � ������ ������*/
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


/*������� �� ������ �������� � ����������� �� ������*/
function findindex()
{	
	var val = window.searchform.searchinput.value.toLowerCase();		
	
	if (val == "����") {document.location.href = "subpage/tark.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/bidley.html"; flag = 1;}
	if (val == "������") {document.location.href = "subpage/korkes.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/jeremy.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/illor.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/derek.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/elmore.html"; flag = 1;}
	if (val == "����") {document.location.href = "subpage/lina.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/anabel.html"; flag = 1;}
	if (val == "���������") {document.location.href = "subpage/cassiopeia.html"; flag = 1;}
	if (val == "������") {document.location.href = "subpage/miriam.html"; flag = 1;}
	if (val == "��������") {document.location.href = "subpage/casmetra.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/eovacius.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/spint.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/andal.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/manfred.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/zylar.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/astra.html"; flag = 1;}
	if (val == "������") {document.location.href = "subpage/dargem.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/beatrix.html"; flag = 1;}
	if (val == "��������") {document.location.href = "subpage/kinkery.html"; flag = 1;}
	if (val == "�����") {document.location.href = "subpage/ranlu.html"; flag = 1;}
	if (val == "�������") {document.location.href = "subpage/captain.html"; flag = 1;}
	if (val == "���������") {document.location.href = "subpage/navigator.html"; flag = 1;}
	if (val == "����� ��������") {document.location.href = "heroesH3hota.html#campaignheroes"; flag = 1;}
	if (val == "����� (������)") {document.location.href = "heroesH3hota.html#coveheroes"; flag = 1;}
	if (val == "����� (������)") {document.location.href = "heroesH3hota.html#otherheroes"; flag = 1;}
	
	if (val == "�����") {document.location.href = "creaturesH3hota.html#c11"; flag = 1;}
	if (val == "��������") {document.location.href = "creaturesH3hota.html#c12"; flag = 1;}
	if (val == "������") {document.location.href = "creaturesH3hota.html#c21"; flag = 1;}
	if (val == "���������") {document.location.href = "creaturesH3hota.html#c22"; flag = 1;}
	if (val == "�����") {document.location.href = "creaturesH3hota.html#c31"; flag = 1;}
	if (val == "������") {document.location.href = "creaturesH3hota.html#c32"; flag = 1;}
	if (val == "������� ����") {document.location.href = "creaturesH3hota.html#c33"; flag = 1;}
	if (val == "��� ������") {document.location.href = "creaturesH3hota.html#c41"; flag = 1;}
	if (val == "������") {document.location.href = "creaturesH3hota.html#c42"; flag = 1;}
	if (val == "����� ����") {document.location.href = "creaturesH3hota.html#c51"; flag = 1;}
	if (val == "���������������") {document.location.href = "creaturesH3hota.html#c52"; flag = 1;}
	if (val == "����") {document.location.href = "creaturesH3hota.html#c61"; flag = 1;}
	if (val == "����-����") {document.location.href = "creaturesH3hota.html#c62"; flag = 1;}
	if (val == "������� ����") {document.location.href = "creaturesH3hota.html#c71"; flag = 1;}
	if (val == "�����") {document.location.href = "creaturesH3hota.html#c72"; flag = 1;}
	if (val == "�����") {document.location.href = "creaturesH3hota.html#cannon"; flag = 1;}
	if (val == "�����") {document.location.href = "creaturesH3hota.html#nc_satyr"; flag = 1;}
	if (val == "�������") {document.location.href = "creaturesH3hota.html#nc_fang"; flag = 1;}
	if (val == "����������� ��������") {document.location.href = "creaturesH3hota.html#neutralcreatures"; flag = 1;}
	if (val == "�������� �������") {document.location.href = "creaturesH3hota.html#covecreatures"; flag = 1;}
	
	if (val == "������") {document.location.href = "objectsH3hota.html#wrhouse"; flag = 1;}
	if (val == "��������� �������") {document.location.href = "objectsH3hota.html#learningobjects"; flag = 1;}
	if (val == "�������� ������������") {document.location.href = "objectsH3hota.html#seaacad"; flag = 1;}
	if (val == "������� �����") {document.location.href = "objectsH3hota.html#magecolo"; flag = 1;}
	if (val == "�����") {document.location.href = "objectsH3hota.html#banks"; flag = 1;}
	if (val == "�������������") {document.location.href = "objectsH3hota.html#cons"; flag = 1;}
	if (val == "������") {document.location.href = "objectsH3hota.html#banks1"; flag = 1;}
	if (val == "�������") {document.location.href = "objectsH3hota.html#banks2"; flag = 1;}
	if (val == "������ �����") {document.location.href = "objectsH3hota.html#banks3"; flag = 1;}
	if (val == "������") {document.location.href = "objectsH3hota.html#banks4"; flag = 1;}
	if (val == "��������� ����������") {document.location.href = "objectsH3hota.html#banks5"; flag = 1;}
	if (val == "���� ����") {document.location.href = "objectsH3hota.html#banks6"; flag = 1;}
	if (val == "������� ����������") {document.location.href = "objectsH3hota.html#cons1"; flag = 1;}
	if (val == "����� �� �������� �����") {document.location.href = "objectsH3hota.html#cons2"; flag = 1;}
	if (val == "������� ���") {document.location.href = "objectsH3hota.html#cons3"; flag = 1;}
	if (val == "��������� ������") {document.location.href = "objectsH3hota.html#cons4"; flag = 1;}
	if (val == "���� �����") {document.location.href = "objectsH3hota.html#cons5"; flag = 1;}
	if (val == "������� (������)") {document.location.href = "objectsH3hota.html#otherobjects"; flag = 1;}
	if (val == "���� �� ����� (�����)") {document.location.href = "objectsH3hota.html#hillfort"; flag = 1;}
	if (val == "�������� ����") {document.location.href = "objectsH3hota.html#cannonyard"; flag = 1;}
	if (val == "������� ������� �������") {document.location.href = "objectsH3hota.html#militaryfabric"; flag = 1;}
	if (val == "����������") {document.location.href = "objectsH3hota.html#winery"; flag = 1;}
	if (val == "��������") {document.location.href = "objectsH3hota.html#ziggurat"; flag = 1;}
	if (val == "���� ����������") {document.location.href = "objectsH3hota.html#loyaltytemple"; flag = 1;}
	if (val == "��������� �����") {document.location.href = "objectsH3hota.html#townportal"; flag = 1;}
	if (val == "��������������� ��������") {document.location.href = "objectsH3hota.html#skelTransformer"; flag = 1;}
	if (val == "�������") {document.location.href = "objectsH3hota.html#waterplace"; flag = 1;}
	if (val == "������� �����") {document.location.href = "objectsH3hota.html#lamp"; flag = 1;}
	if (val == "������ ����") {document.location.href = "objectsH3hota.html#manaaltar"; flag = 1;}
	if (val == "������ ���������") {document.location.href = "objectsH3hota.html#youthf"; flag = 1;}
	if (val == "������������") {document.location.href = "objectsH3hota.html#observer"; flag = 1;}
	
	if (val == "����� ���������") {document.location.href = "artefactsH3hota.html#art1"; flag = 1;}
	if (val == "����������� �����") {document.location.href = "artefactsH3hota.html#art11"; flag = 1;}
	if (val == "���������-���������") {document.location.href = "artefactsH3hota.html#art2"; flag = 1;}
	if (val == "����� ������") {document.location.href = "artefactsH3hota.html#art21"; flag = 1;}
	if (val == "���� ������������") {document.location.href = "artefactsH3hota.html#art22"; flag = 1;}
	if (val == "������ ����������") {document.location.href = "artefactsH3hota.html#art23"; flag = 1;}
	if (val == "������� ������") {document.location.href = "artefactsH3hota.html#art24"; flag = 1;}
	if (val == "������� ���������") {document.location.href = "artefactsH3hota.html#art3"; flag = 1;}
	if (val == "�������� ����������") {document.location.href = "artefactsH3hota.html#art31"; flag = 1;}
	if (val == "����������� ������� ������") {document.location.href = "artefactsH3hota.html#art32"; flag = 1;}
	if (val == "��� ������� �����") {document.location.href = "artefactsH3hota.html#art33"; flag = 1;}
	if (val == "������ ���� �����") {document.location.href = "artefactsH3hota.html#art34"; flag = 1;}
	if (val == "������� ��������") {document.location.href = "artefactsH3hota.html#art35"; flag = 1;}
	if (val == "������ ��������") {document.location.href = "artefactsH3hota.html#art36"; flag = 1;}
	if (val == "����� ���������") {document.location.href = "artefactsH3hota.html#art37"; flag = 1;}
	if (val == "������ ���������") {document.location.href = "artefactsH3hota.html#art38"; flag = 1;}
	if (val == "���������-�������") {document.location.href = "artefactsH3hota.html#art4"; flag = 1;}
	if (val == "��� ������") {document.location.href = "artefactsH3hota.html#art41"; flag = 1;}
	if (val == "������� ����") {document.location.href = "artefactsH3hota.html#art42"; flag = 1;}
	if (val == "������ ���������") {document.location.href = "artefactsH3hota.html#art43"; flag = 1;}
	if (val == "����� ���������") {document.location.href = "artefactsH3hota.html#art44"; flag = 1;}
	if (val == "�������� ����� ����") {document.location.href = "artefactsH3hota.html#art45"; flag = 1;}
	
	if (val == "������ (��������)") {document.location.href = "covebuildingsH3hota.html"; flag = 1;}
	if (val == "������ (������� �����)") {document.location.href = "covemageguild.html"; flag = 1;}
	if (val == "������ (������)") {document.location.href = "covebuildingsH3hota.html#grail"; flag = 1;}
	if (val == "������ (������ ��������)") {document.location.href = "covebuildingsH3hota.html#special"; flag = 1;}
	if (val == "���������� ������") {document.location.href = "covebuildingsH3hota.html#grail"; flag = 1;}
	if (val == "������������ ������� (����)") {document.location.href = "subpage/special/lichsability.html"; flag = 1;}
	if (val == "������������ ������� (������)") {document.location.href = "subpage/special/magogsability.html"; flag = 1;}
	
	if (flag == 1) searchform.searchinput.value = "";	
	if (flag == 0) {searchform.searchinput.value = "������������ ����"; searchform.searchinput.style.color = "rgba(255, 0, 0, 0.6)";};
}


/*��� ������������ �����*/
function incorrectinput()
{
	searchform.searchinput.style.color = "black";
	if ((flag == 0) && (searchform.searchinput.value == "������������ ����")) searchform.searchinput.value = "";
}


/*��������� ��������� ������ � �������� ���������� ����������*/
function strcmp()
{	
	var list = document.getElementById('searchlist');
	list.style.visibility  = 'visible';
	var str = searchform.searchinput.value.toLowerCase(); //������ �� ���� �����	
	var index = ""; //������ �� ������� ��������
	var isequal = 0; //��������� ��� �� ��������� ������ ������ �� ���� ����� � ������� ������ �� ������� ��������
	var arr = new Array();
	var count = 0; //���-�� ��������� � ������
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