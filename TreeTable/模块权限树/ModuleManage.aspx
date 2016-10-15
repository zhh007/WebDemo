<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ModuleManage.aspx.cs" Inherits="security_ModuleManage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
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
    <form id="form1" runat="server">
        <div id="main">
            <div class="maintitle">
                &nbsp;·产品类别
            </div>
            <div class="maincontect">
                <table id="tableTree" frame="void" border="1" bordercolor="#b1c6db" cellpadding="0"
                    cellspacing="0" style="width: 100%; border-collapse: collapse; background-color: #f2f3f5;">
                    <thead align="center" style="background-color: #d6dff7">
                        <tr id="treenode_0_0_0">
                            <td align="left">
                                &nbsp;<img id="treehomeimg" src="include/tree_root.gif" />
                                <span style="vertical-align: bottom">栏目树</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody id="tbody_tree" runat="server">
                        
                        
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
    </form>
</body>
</html>
