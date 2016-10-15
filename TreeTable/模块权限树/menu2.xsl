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
								<xsl:apply-templates select="//SecurityAccess/Modules/Module">
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



	<xsl:template name="menu" match="Module">
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
			</td>
		</tr>


		<xsl:apply-templates select="Module">
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
			]]>
			</xsl:comment>
		</script>
	</xsl:template>

</xsl:stylesheet>

