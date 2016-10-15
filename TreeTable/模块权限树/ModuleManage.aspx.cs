using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Serialization;
using System.IO;
using System.Collections.Generic;

public partial class security_ModuleManage : System.Web.UI.Page
{
    IList<string> keyArray = new List<string>();


    private string TREEIMG_PATH = "";
    private string TREEIMG_HOMEIMGPATH = "";
    private string TREEIMG_ROOT = "";
    private string TREEIMG_NONE = "";
    private string TREEIMG_LINE = "";
    private string TREEIMG_LINEMIDDLE = "";
    private string TREEIMG_MINUSMIDDLE = "";
    private string TREEIMG_PLUSMIDDLE = "";
    private string TREEIMG_LINEBOTTOM = "";
    private string TREEIMG_MINUSBOTTOM = "";
    private string TREEIMG_PLUSBOTTOM = "";
    private string TREEIMG_MODULE = "";//模块
    private string TREEIMG_ACTION = "";//操作

    protected void Page_Load(object sender, EventArgs e)
    {
        tbody_tree.InnerHtml = "";

        //初始化图片路径
        InitImagePath();

        SecurityAccess sAccess;
        XmlSerializer mySerializer = new XmlSerializer(typeof(SecurityAccess));
        using (FileStream myFileStream = new FileStream(Server.MapPath("Security.xml"), FileMode.Open))
        {
            sAccess = (SecurityAccess)mySerializer.Deserialize(myFileStream);
        }

        //构建树形结构
        IList<string> parentImgs = new List<string>();
        BuildTree(sAccess.Modules, 1, false,false, parentImgs);
    }

    /// <summary>
    /// 初始化图片路径
    /// </summary>
    private void InitImagePath()
    {
        TREEIMG_PATH = Request.Url.AbsolutePath.Remove(Request.Url.AbsolutePath.LastIndexOf("/")) + "/include/";
        TREEIMG_HOMEIMGPATH = TREEIMG_PATH + "tree_root.gif";
        TREEIMG_ROOT = TREEIMG_PATH + "tree_root.gif";
        TREEIMG_NONE = TREEIMG_PATH + "tree_none.gif";
        TREEIMG_LINE = TREEIMG_PATH + "tree_line.gif";
        TREEIMG_LINEMIDDLE = TREEIMG_PATH + "tree_linemiddle.gif";
        TREEIMG_MINUSMIDDLE = TREEIMG_PATH + "tree_minusmiddle.gif";
        TREEIMG_PLUSMIDDLE = TREEIMG_PATH + "tree_plusmiddle.gif";
        TREEIMG_LINEBOTTOM = TREEIMG_PATH + "tree_linebottom.gif";
        TREEIMG_MINUSBOTTOM = TREEIMG_PATH + "tree_minusbottom.gif";
        TREEIMG_PLUSBOTTOM = TREEIMG_PATH + "tree_plusbottom.gif";
        TREEIMG_MODULE = TREEIMG_PATH + "tree_folder.gif";//模块
        TREEIMG_ACTION = TREEIMG_PATH + "tree_file.gif";//操作
    }

    /// <summary>
    /// 构建树形结构
    /// </summary>
    /// <param name="module">模块数组</param>
    /// <param name="level">层次</param>
    /// <param name="parentHasBother">父模块是否有兄弟模块</param>
    /// <param name="parentImgs">父模块图片数组</param>
    private void BuildTree(SysModuleEntity[] module, int level, bool parentHasBother,bool parentHasAction, IList<string> parentImgs)
    {
        for (int i = 0; i < module.Length; i++)
        {
            bool curHasBother = false;
            bool curHasAction = false;
            if (i != module.Length - 1)
            {
                curHasBother = true;
            }
            if (module[i].Actions != null)
            {
                curHasAction = true;
            }

            bool isEndNode = false;
            if (!curHasBother && !parentHasAction)
            {
                isEndNode = true;
            }

            #region key
            //string tmpkey = "";
            //if (key == "")
            //{
            //    tmpkey = (i + 1).ToString();
            //}
            //else
            //{
            //    tmpkey = key + "." + (i + 1).ToString();
            //}

            //keyArray.Add(tmpkey); 
            #endregion

            IList<string> curImgs = null;

            //if (i == module.Length - 1)
            //{
            //    curImgs = BuildTreeNodeImageArray(true, parentHasBother, parentHasAction, parentImgs);
            //}
            //else
            //{
            curImgs = BuildTreeNodeImageArray(isEndNode, parentHasBother, parentHasAction, parentImgs);
            //}

            tbody_tree.InnerHtml += "<tr id=\"" + module[i].ModuleId.ToString() + "\"><td align=\"left\">&nbsp;"
                + BuildTreeNodeImageString(curImgs)
                + "<span class=\"treename\">" + module[i].Remark + "</span>"
                + "</td></tr>";

            

            //构建【子模块】
            if (module[i].Modules != null)
            {
                BuildTree(module[i].Modules, level + 1, curHasBother, curHasAction, curImgs);
            }

            //actions
            if (module[i].Actions != null)
            {
                for (int j = 0; j < module[i].Actions.Length; j++)
                {
                    IList<string> curActionImgs = null;

                    if (j == module[i].Actions.Length - 1)
                    {
                        curActionImgs = BuildActionImageArray(true, curHasBother || parentHasAction, curImgs);
                    }
                    else
                    {
                        curActionImgs = BuildActionImageArray(false, curHasBother || parentHasAction, curImgs);
                    }

                    tbody_tree.InnerHtml += "<tr id=\"" + module[i].Actions[j].ActionId.ToString() + "\"><td align=\"left\">&nbsp;"
                        + BuildTreeNodeImageString(curActionImgs)
                        + "<span class=\"treename\">" + module[i].Actions[j].Remark + "</span>"
                        + "</td></tr>";
                }
            }
        }
    }

    private IList<string> BuildActionImageArray(bool isEndNode,bool parentHasBother, IList<string> parentImgs)
    {
        //把父节点的图片换掉，并追加上自己的图片
        IList<string> tmpImgs = new List<string>();

        for (int i = 0; i < parentImgs.Count - 1; i++)
        {
            if (i == parentImgs.Count - 2)
            {//父节点图片
                if (parentHasBother)
                {
                    tmpImgs.Add(TREEIMG_LINE);
                }
                else
                {
                    tmpImgs.Add(TREEIMG_NONE);
                }
            }
            else
            {
                tmpImgs.Add(parentImgs[i]);
            }
        }

        //自身图片
        if (isEndNode)
        {
            tmpImgs.Add(TREEIMG_LINEBOTTOM);
        }
        else
        {
            tmpImgs.Add(TREEIMG_LINEMIDDLE);
        }
        //显示图片
        tmpImgs.Add(TREEIMG_ACTION);

        return tmpImgs;
    }

    /// <summary>
    /// 构建节点图片，返回图片数组
    /// </summary>
    /// <param name="isEndNode">是否其父节点的最后一个子节点</param>
    /// <param name="parentHasBother">父节点是否有兄弟节点</param>
    /// <param name="parentImgs">父节点图片数组</param>
    /// <returns></returns>
    private IList<string> BuildTreeNodeImageArray(bool isEndNode, bool parentHasBother, bool parentHasAction, IList<string> parentImgs)
    {
        //把父节点的图片换掉，并追加上自己的图片
        IList<string> tmpImgs = new List<string>();

        for (int i = 0; i < parentImgs.Count - 1; i++)
        {
            if (i == parentImgs.Count - 2)
            {//父节点图片
                if (isEndNode)
                {
                    tmpImgs.Add(TREEIMG_NONE);
                }
                else if (!parentHasBother)
                {
                    tmpImgs.Add(TREEIMG_NONE);
                }
                else
                {
                    tmpImgs.Add(TREEIMG_LINE);
                }
            }
            else
            {
                tmpImgs.Add(parentImgs[i]);
            }
        }
        //自身图片
        if (isEndNode && !parentHasAction)
        {
            tmpImgs.Add(TREEIMG_LINEBOTTOM);
        }
        else
        {
            tmpImgs.Add(TREEIMG_LINEMIDDLE);
        }
        //显示图片
        tmpImgs.Add(TREEIMG_MODULE);

        return tmpImgs;
    }

    /// <summary>
    /// 构建阶段图片，返回HTML字符串
    /// </summary>
    /// <param name="imgs">单前节点的图片数组</param>
    /// <returns></returns>
    private string BuildTreeNodeImageString(IList<string> imgs)
    {
        string tmpStr = "";
        foreach (string var in imgs)
        {
            //if (var == TREEIMG_MINUSMIDDLE || var == TREEIMG_PLUSMIDDLE || var == TREEIMG_MINUSBOTTOM || var == TREEIMG_PLUSBOTTOM)
            //{
            //    tmpStr += "<img onclick=\"tick()\" src=\"" + var + "\" />";
            //}
            //else
            //{
            tmpStr += "<img src=\"" + var + "\" />";
            //}
        }
        return tmpStr;
    }
}
