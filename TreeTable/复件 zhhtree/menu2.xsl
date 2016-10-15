<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet [
	<!ENTITY nbsp "&#160;">
	<!ENTITY copy "&#169;">
	<!ENTITY reg "&#174;">
	<!ENTITY trade "&#8482;">
	<!ENTITY mdash "&#8212;">
	<!ENTITY ldquo "&#8220;">
	<!ENTITY rdquo "&#8221;">
	<!ENTITY pound "&#163;">
	<!ENTITY yen "&#165;">
	<!ENTITY euro "&#8364;">
]>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" indent="yes"/>
	<xsl:template match="/">

		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>无标题文档</title>
				<link href="include/css.css" rel="stylesheet" type="text/css" />
				<style>
					.maincontect td
					{
					height:18px;
					line-height:18px;
					}
					.maincontect img{
					vertical-align:bottom;
					}
					.maincontect span.treename{
					vertical-align:bottom;
					}
					.maincontect span.do,span.do a{
					color:#999
					}
					.maincontect span.do a{
					vertical-align: bottom;
					color:#999
					}
				</style>
			</head>
			<body>
				<div id="main">
					<div class="maintitle">
						&nbsp;·产品类别
					</div>
					<div class="maincontect">
						<table id="tableTree" frame="void" border="1" bordercolor="#b1c6db" cellpadding="0" cellspacing="0"
							style="width: 100%; border-collapse: collapse; background-color: #f2f3f5;">
							<thead align="center" style="background-color: #d6dff7">
								<tr id="treenode_0_0_0">
									<td align="left">
										&nbsp;<img id="treehomeimg" src="include/tree_root.gif" />
										<span style="vertical-align: bottom">栏目树</span>
										<span class="do">
											[<a onclick="addChild()" href="#">添加子栏目</a>]
										</span>
									</td>
								</tr>
							</thead>
							<tbody>
								<xsl:apply-templates select="//menu/menuItem">
									<xsl:with-param name="level" select="'1'"/>
								</xsl:apply-templates>

								<!--<tr id="treenode_1_1_2">
                  <td align="left">
                    &nbsp;<img onclick="tick()" src="include/tree_minusmiddle.gif" /><img src="include/tree_folder.gif" />
                    <span class="treename">药品</span> <span class="do">
                      [<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                    </span>
                  </td>
                </tr>
                <tr id="treenode_2_2_0">
                  <td align="left">
                    &nbsp;<img src="include/tree_line.gif" /><img src="include/tree_linemiddle.gif" /><img src="include/tree_file.gif" />
                    <span class="treename">解热镇痛类</span> <span class="do">
                      [<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                    </span>
                  </td>
                </tr>
                <tr id="treenode_3_2_0">
                  <td align="left">
                    &nbsp;<img src="include/tree_line.gif" /><img src="include/tree_linebottom.gif" /><img src="include/tree_file.gif" />
                    <span class="treename">其他类</span> <span class="do">
                      [<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                    </span>
                  </td>
                </tr>
                <tr id="treenode_4_1_2">
                  <td align="left">
                    &nbsp;<img  onclick="tick()" src="include/tree_minusbottom.gif" /><img src="include/tree_folder.gif" />
                    <span class="treename">医疗器械</span> <span class="do">
                      [<a href="#" onclick="addChild()">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                    </span>
                  </td>
                </tr>
                <tr id="treenode_5_2_0">
                  <td align="left">
                    &nbsp;<img src="include/tree_none.gif" /><img src="include/tree_linemiddle.gif" /><img src="include/tree_file.gif" />
                  <span class="treename">血糖用类</span> <span class="do">
                    [<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                  </span>
                </td>
              </tr>
              <tr id="treenode_6_2_0">
                <td align="left">
                  &nbsp;<img src="include/tree_none.gif" /><img src="include/tree_linebottom.gif" /><img src="include/tree_file.gif" />
                    <span class="treename">其他类</span> <span class="do">
                      [<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a
                        href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
                    </span>
                  </td>
                </tr>-->
							</tbody>
						</table>
					</div>
				</div>
			</body>
		</html>

		<xsl:call-template name="My_Js"/>
	</xsl:template>



	<xsl:template name="menu" match="menuItem">
			<xsl:variable name="varLv">
				<xsl:number level="multiple"/>
			</xsl:variable>

		<tr id="treenode_1_1_2">
			<td align="left">
				&nbsp;<img onclick="tick()" src="include/tree_minusmiddle.gif" /><img src="include/tree_folder.gif" />
				<span class="treename">
					<xsl:value-of select="string($varLv)"/> --
					<xsl:value-of select="position()"/> --
					<xsl:value-of select="@Name"/>
				</span>
				<span class="do">
					[<a onclick="addChild()" href="#">添加子栏目</a>&nbsp;|&nbsp;<a href="#" onclick="modNode()">修改</a>&nbsp;|&nbsp;<a href="#" onclick="delNode()">删除</a>]
				</span>
			</td>
		</tr>


		<xsl:apply-templates select="menuItem">
			<!--<xsl:with-param name="level" select="concat(string($level),'.',string(position()))"/>-->
		</xsl:apply-templates>

		<!--<xsl:choose>
			<xsl:when test="position() = last()">
				<xsl:apply-templates select="menuItem">
					<xsl:with-param name="level" select="$level - 1"/>
				</xsl:apply-templates>
			</xsl:when>
			<xsl:otherwise>
				<xsl:apply-templates select="menuItem">
					<xsl:with-param name="level" select="$level + 1"/>
				</xsl:apply-templates>
			</xsl:otherwise>
		</xsl:choose>-->

	</xsl:template>

	<xsl:template name="My_Js">
		<script language="javascript">
			<xsl:comment>
				<![CDATA[
//-----------------------------------------------------------------
//常量定义
//-----------------------------------------------------------------
var TREEIMG_HOMEIMGPATH = document.getElementById("treehomeimg").src;
var TREEIMG_PATH = TREEIMG_HOMEIMGPATH.substring(0,TREEIMG_HOMEIMGPATH.lastIndexOf("/")+1);;
var TREEIMG_ROOT = TREEIMG_PATH + "tree_root.gif";
var TREEIMG_NONE = TREEIMG_PATH + "tree_none.gif";
var TREEIMG_LINE = TREEIMG_PATH + "tree_line.gif";
var TREEIMG_LINEMIDDLE = TREEIMG_PATH + "tree_linemiddle.gif";
var TREEIMG_MINUSMIDDLE = TREEIMG_PATH + "tree_minusmiddle.gif";
var TREEIMG_PLUSMIDDLE = TREEIMG_PATH + "tree_plusmiddle.gif";
var TREEIMG_LINEBOTTOM = TREEIMG_PATH + "tree_linebottom.gif";
var TREEIMG_MINUSBOTTOM = TREEIMG_PATH + "tree_minusbottom.gif";
var TREEIMG_PLUSBOTTOM = TREEIMG_PATH + "tree_plusbottom.gif";

//--------------------------------------------------------------------
//公用函数
//--------------------------------------------------------------------
/*得到单前节点*/
function getCurNode(o)
{
    var curNode;
    while(o.parentNode)
    {
        if(o.tagName == "TR"){
            curNode = o;
            break;
        }
        o = o.parentNode;
    }
    return curNode;
}
/*得到父节点*/
function getParentNode(node)
{
    var l,tmpNode;
    l = getNodeLayerNum(node);
    if(l==0 || l==1 || node.previousSibling==null) return null;
    tmpNode = node.previousSibling;
    while(getNodeLayerNum(tmpNode) >l)
    {
        tmpNode = tmpNode.previousSibling;
    }
    return tmpNode;
}
/*是否是父节点的最后一个子节点*/
function isLastChildNode(node)
{
    var l = getNodeLayerNum(node);
    return (node.nextSibling!=null && getNodeLayerNum(node.nextSibling)==l)?false:true;
}
/*得到节点层数*/
function getNodeLayerNum(node)
{
    return parseInt(node.id.split("_")[2],10);
}
/*是否有子节点*/
function hasChildNode(node)
{
    return ((node.nextSibling!=null) && getNodeLayerNum(node)<getNodeLayerNum(node.nextSibling))?true:false;
}
/*得到单前节点的最后一个子节点*/
function getLastChildNode(node)
{
    var l,lastChildNode,nextNode;
    l = getNodeLayerNum(node);
    nextNode = node.nextSibling;
    if(l==0 && document.getElementById("tableTree").tBodies[0].rows.length > 0)
        nextNode = document.getElementById("tableTree").tBodies[0].rows[0];
    while(nextNode){
        if(getNodeLayerNum(nextNode) <= l){
            //lastChildNode = nextNode.previousSibling;
            break;
        }
        if(getNodeLayerNum(nextNode) == (l+1)){
            lastChildNode = nextNode;
        }
        nextNode = nextNode.nextSibling;
    }
    return lastChildNode;
}
/*得到新建节点的插入点*/
function getLastNodePoint(node)
{
    var l,lastNodePoint,nextNode;
    l = getNodeLayerNum(node);
    nextNode = node.nextSibling;
    
    if(node.nextSibling == null && l != 0)
        return node;
    else if(node.nextSibling == null && l == 0){
        var tb = document.getElementById("tableTree");
        var len = tb.tBodies[0].rows.length;
        if(len>0)
            return tb.tBodies[0].rows[len-1];
        else
            return tb.tBodies[0];
    }
    while(nextNode){
        if(getNodeLayerNum(nextNode) <= l){
            lastNodePoint = nextNode.previousSibling;
            break;
        }
        if(getNodeLayerNum(nextNode) > l){
            lastNodePoint = nextNode;
        }
        nextNode = nextNode.nextSibling;
    }
    return lastNodePoint;
}
/*
创建新行
l:父节点的层数
isLastChild:单前节点是否是父节点的最后一个子节点
lastNodePoint:节点的插入位置
newsImgs:节点前面的图片
*/
function createNewNode(l,isLastChild,lastNodePoint,newsImgs,curNode)
{//debugger;
    var oNewTDStr;
    //-----------------------------------------------------
    var oNewTR = document.createElement("TR");
    if(lastNodePoint == document.getElementById("tableTree").tBodies[0])
        document.getElementById("tableTree").tBodies[0].insertAdjacentElement("afterBegin",oNewTR);
    else
        lastNodePoint.insertAdjacentElement("afterEnd",oNewTR);
    oNewTR.id="treenode_n1_"+(l+1)+"_0";
    //------------------------------------------------------
    var oNewTD = document.createElement("TD");
    oNewTR.appendChild(oNewTD);
    
    //------------------------------------------------------
    oNewTDStr = "&nbsp;";
    if(l!=0)
    {
        var tmpImgs = curNode.getElementsByTagName("IMG");
        for(var i=0;i<tmpImgs.length-1;i++)
        {//如果每个节点有图片
            if(i != (tmpImgs.length-2))
                oNewTDStr += "<img src=\""+tmpImgs[i].src+"\" />";
            else{
                if(tmpImgs[i].src==TREEIMG_LINEBOTTOM || tmpImgs[i].src==TREEIMG_MINUSBOTTOM || tmpImgs[i].src==TREEIMG_PLUSBOTTOM)
                    oNewTDStr += "<img src=\""+TREEIMG_NONE+"\" />";
                if(tmpImgs[i].src==TREEIMG_LINEMIDDLE || tmpImgs[i].src==TREEIMG_MINUSMIDDLE || tmpImgs[i].src==TREEIMG_PLUSMIDDLE)
                    oNewTDStr += "<img src=\""+TREEIMG_LINE+"\" />";
            }
        }
    }
    oNewTDStr += "<img src=\""+TREEIMG_LINEBOTTOM+"\" />";
    oNewTDStr += "&nbsp;<input style=\"height:13px\" type=\"text\" />"
        +"<span class=\"do\"><input type=\"button\" onclick=\"saveNewNode()\" value=\"保存\" style=\"font-size:10px;height:18px\" />"
        +"&nbsp;<input type=\"button\" value=\"取消\" onclick=\"delNode()\" style=\"font-size:10px;height:18px\" /></span>";
    
    oNewTD.innerHTML = oNewTDStr;
}


//-----------------------------------------------------------------
//事件
//-----------------------------------------------------------------
/*栏目目录伸张和收缩*/
function tick()
{
    var imgObj,imgSrc,curNode,trNext,l,breakL;
    imgObj = event.srcElement;
    imgSrc = imgObj.src;
    curNode = getCurNode(imgObj);
    l = getNodeLayerNum(curNode);
    trNext = curNode.nextSibling;
    if(trNext==null) return;
    //子节点的显示和隐藏
    while(trNext != null && getNodeLayerNum(trNext) > l)
    {
        if(breakL!=null && getNodeLayerNum(trNext) > breakL){
            trNext = trNext.nextSibling;
            continue;
        }
        var nextImg = trNext.getElementsByTagName("IMG");
        if(nextImg[nextImg.length-1].src==TREEIMG_PLUSMIDDLE || nextImg[nextImg.length-1].src==TREEIMG_PLUSBOTTOM)
            breakL = getNodeLayerNum(trNext);
        trNext.style.display=(imgSrc==TREEIMG_MINUSMIDDLE || imgSrc==TREEIMG_MINUSBOTTOM)?"none":"";
        trNext = trNext.nextSibling;
    }
    //单前节点图片的切换
    switch(imgSrc)
    {
        case TREEIMG_MINUSMIDDLE:
            imgObj.src = TREEIMG_PLUSMIDDLE;break;
        case TREEIMG_PLUSMIDDLE:
            imgObj.src = TREEIMG_MINUSMIDDLE;break;
        case TREEIMG_MINUSBOTTOM:
            imgObj.src = TREEIMG_PLUSBOTTOM;break;
        case TREEIMG_PLUSBOTTOM:
            imgObj.src = TREEIMG_MINUSBOTTOM;break;
    }
}
/*添加子栏目*/
function addChild()
{
    var curNode,lastNodePoint,lastBrotherNode,l,isLastChild;
    curNode = getCurNode(event.srcElement);
    l = getNodeLayerNum(curNode);
    isLastChild = isLastChildNode(curNode);
    lastBrotherNode = getLastChildNode(curNode);
    lastNodePoint = getLastNodePoint(curNode);

    //修改兄弟节点,及其子节点的图片
    if(lastBrotherNode!=null)
    {
        var tmpNode=lastBrotherNode;
        while(tmpNode!=null && getNodeLayerNum(tmpNode) > l)
        {
            var curImgs = tmpNode.getElementsByTagName("IMG");
            imgSrc = curImgs[l].src;
            switch(curImgs[l].src)
            {
                case TREEIMG_MINUSBOTTOM:
                    curImgs[l].src = TREEIMG_MINUSMIDDLE;break;
                case TREEIMG_PLUSBOTTOM:
                    curImgs[l].src = TREEIMG_PLUSMIDDLE;break;
                case TREEIMG_LINEBOTTOM:
                    curImgs[l].src = TREEIMG_LINEMIDDLE;break;
                case TREEIMG_NONE:
                    curImgs[l].src = TREEIMG_LINE;break;
            }
            tmpNode = tmpNode.nextSibling;
        }
    }
    //修改单前节点的图片
    if(l!=0)
    {
        var tmpImgs = curNode.getElementsByTagName("IMG");
        switch(tmpImgs[l-1].src)
        {
            case TREEIMG_LINEBOTTOM:
                tmpImgs[l-1].src = TREEIMG_MINUSBOTTOM;tmpImgs[l-1].attachEvent('onclick', tick);break;
            case TREEIMG_LINEMIDDLE:
                tmpImgs[l-1].src = TREEIMG_MINUSMIDDLE;tmpImgs[l-1].attachEvent('onclick', tick);break;
        }
    }

    //新节点的创建
    var newsImgs = (lastBrotherNode!=null)?lastBrotherNode.getElementsByTagName("IMG"):curNode.getElementsByTagName("IMG");
    createNewNode(l,isLastChild,lastNodePoint,newsImgs,curNode);
}

/*删除,取消新建节点*/
function delNode()
{debugger;
    var l,curNode,prevNode,imgSrc,isLastChild;
    var re = /tree_.*\.gif/gi;
    curNode = getCurNode(event.srcElement);
    
    if(hasChildNode(curNode)){
        alert("先删除子节点！");
        return;
    }
    
    l = getNodeLayerNum(curNode);
    imgSrc = curNode.getElementsByTagName("IMG")[l-1].src;
    prevNode = curNode.previousSibling;
    isLastChild = isLastChildNode(curNode);
    
    //更新兄弟节点及其子节点的图片
    while(prevNode!=null && isLastChild)
    {
        if(getNodeLayerNum(prevNode) == l){
            //兄弟节点
            var prevImg = prevNode.getElementsByTagName("IMG")[l-1];
            switch(prevImg.src)
            {
                case TREEIMG_MINUSMIDDLE:
                    prevImg.src = TREEIMG_MINUSBOTTOM;break;
                case TREEIMG_LINEMIDDLE:
                    prevImg.src = TREEIMG_LINEBOTTOM;break;
                case TREEIMG_PLUSMIDDLE:
                    prevImg.src = TREEIMG_PLUSBOTTOM;break;
            }
            break;
        }else if(getNodeLayerNum(prevNode) > l){
            //兄弟节点的子节点
            prevNode.getElementsByTagName("IMG")[l-1].src = TREEIMG_NONE;
        }else if(getNodeLayerNum(prevNode) < l){
            //父节点,如果该节点是父节点的最后一个子节点，则需要更新父节点的图片
            //第一层节点的父节点为NULL
            var pImg = prevNode.getElementsByTagName("IMG")[l-2];
            switch(pImg.src)
            {
                case TREEIMG_MINUSMIDDLE:
                    pImg.src = TREEIMG_LINEMIDDLE;break;
                case TREEIMG_MINUSBOTTOM:
                    pImg.src = TREEIMG_LINEBOTTOM;break;
            }
            break;
        }
        prevNode = prevNode.previousSibling;
    }
    
    //删除单前节点
    curNode.parentNode.removeChild(curNode);
}

/*
修改节点
将原有文本保存在TR的NodeName属性中
*/
function modNode()
{
    var curNode,spanNodeName,spanDo;
    curNode = getCurNode(event.srcElement);
    spanNodeName = curNode.getElementsByTagName("SPAN")[0];
    spanDo = curNode.getElementsByTagName("SPAN")[1];
    curNode.NodeName = spanNodeName.innerText;
    
    var newTextBoxStr = "<input style=\"height:13px\" type=\"text\" value=\""+spanNodeName.innerText+"\" />";
    var newDoStr = "<span class=\"do\"><input type=\"button\" onclick=\"saveModNode()\" value=\"保存\" style=\"font-size:10px;height:18px\" />"
                +"&nbsp;<input type=\"button\" value=\"取消\" onclick=\"cancelModNode()\" style=\"font-size:10px;height:18px\" /></span>";
    //---------------------------------------------------
    spanNodeName.outerHTML = newTextBoxStr;
    //--------------------------------------------------
    spanDo.outerHTML = newDoStr;
}
/*
保存修改的节点,针对节点的修改
*/
function saveModNode()
{
    //alert("function saveModNode");
    var curNode,curNodeName;
    curNode = getCurNode(event.srcElement);
    curNodeName = curNode.getElementsByTagName("INPUT")[0].value;
    
    //保存到数据库
    
    //----------------------------------------------------------
    //以下语句应写在回调函数中,并修改节点id
    var spanNodeName = "<span class=\"treename\">"+curNodeName+"</span>";
    var spanDoStr = "<span class=\"do\">["
        +"<a onclick=\"addChild()\" href=\"#\">添加子栏目</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"modNode()\">修改</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"delNode()\">删除</a>]</span>";
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("INPUT")[0].outerHTML = spanNodeName;
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("SPAN")[1].outerHTML = spanDoStr;
    curNode.NodeName = null;
}
/*
取消节点的修改
*/
function cancelModNode()
{
    var curNode,curNodeName;
    curNode = getCurNode(event.srcElement);
    curNodeName = curNode.NodeName;
    
    var spanNodeName = "<span class=\"treename\">"+curNodeName+"</span>";
    var spanDoStr = "<span class=\"do\">["
        +"<a onclick=\"addChild()\" href=\"#\">添加子栏目</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"modNode()\">修改</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"delNode()\">删除</a>]</span>";
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("INPUT")[0].outerHTML = spanNodeName;
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("SPAN")[1].outerHTML = spanDoStr;
    curNode.NodeName = null;
}

/*
保存新节点,针对节点的新建
*/
function saveNewNode()
{
    //alert("function saveNewNode");
    var curNode,curNodeName;
    curNode = getCurNode(event.srcElement);
    curNodeName = curNode.getElementsByTagName("INPUT")[0].value;
    
    //保存到数据库
    
    //----------------------------------------------------------
    //以下语句应写在回调函数中,并修改节点id
    var spanNodeName = "<span class=\"treename\">"+curNodeName+"</span>";
    var spanDoStr = "<span class=\"do\">["
        +"<a onclick=\"addChild()\" href=\"#\">添加子栏目</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"modNode()\">修改</a>&nbsp;|&nbsp;"
        +"<a href=\"#\" onclick=\"delNode()\">删除</a>]</span>";
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("INPUT")[0].outerHTML = spanNodeName;
    //-------------------------------------------------------------------
    curNode.getElementsByTagName("SPAN")[1].outerHTML = spanDoStr;
    curNode.NodeName = null;
}
			]]>
			</xsl:comment>
		</script>
	</xsl:template>

</xsl:stylesheet>

